/*
 * Runs snake.py in the browser.
 *
 * snake.py is the original Python turtle program and is not modified in any
 * way: it is fetched over HTTP and handed to Skulpt, a Python interpreter that
 * runs in JavaScript. Skulpt ships a turtle module, but it is missing two
 * calls this game is built on (shapesize and onkeypress) and it cannot resolve
 * Tk colour names, so vendor/skulpt/turtle.js -- a patched copy, see its
 * header -- is installed over the stock one before the program starts.
 */
(function () {
  "use strict";

  /* Board size in turtle pixels. snake.py plays inside a fixed 630x630 field
     centred on the origin, so the canvas only has to be at least that big --
     but it also writes "score=" at y=320 and an 80pt "PRESS SPACE TO START"
     across the origin, which measures ~1180px. The board is sized to fit both
     rather than crop them, then scaled down to whatever room the page has. */
  var BOARD_W = 1220;
  var BOARD_H = 760;

  var TURTLE_LIB = "vendor/skulpt/turtle.js";
  var PROGRAM = "snake.py";

  var stage = document.getElementById("stage");
  var frame = document.getElementById("stage-frame");
  var veil = document.getElementById("veil");
  var veilTitle = document.getElementById("veil-title");
  var veilText = document.getElementById("veil-text");
  var veilBtn = document.getElementById("veil-btn");
  var pad = document.getElementById("pad");

  var STOPPED = { stopped: true };
  var runToken = 0;      // bumped to abandon the program currently running
  var program = null;    // source of snake.py, fetched once
  var overWatch = null;

  /* ------------------------------------------------------------- overlay */

  function showVeil(title, text, isError, buttonLabel) {
    veilTitle.textContent = title;
    veilText.textContent = text || "";
    veilText.hidden = !text;
    veil.classList.toggle("error", !!isError);
    veilBtn.hidden = !buttonLabel;
    if (buttonLabel) {
      veilBtn.textContent = buttonLabel;
    }
    veil.hidden = false;
  }

  function hideVeil() {
    veil.hidden = true;
  }

  function fail(title, err) {
    // A failed run is a stopped run: bumping the token also keeps the pending
    // "board is ready" callback from uncovering the error we are about to show.
    stop();
    var text = (err && (err.stack || err.message)) || String(err || "");
    // Skulpt errors carry their traceback in .args rather than .message.
    if (err && err.args && typeof err.toString === "function") {
      text = err.toString();
    }
    showVeil(title, text, true, "Try again");
    if (window.console) {
      window.console.error(title, err);
    }
  }

  /* --------------------------------------------------------------- scale */

  /* #stage is always BOARD_W x BOARD_H because that is how Skulpt sized the
     canvases; shrink it to whatever room the page has and give the frame the
     size the scaled board actually occupies. Measure the frame's parent, not
     the frame, since we are about to set the frame's own width. */
  function fit() {
    var host = frame.parentElement;
    var available = (host && host.clientWidth) || BOARD_W;
    var scale = Math.min(1, available / BOARD_W);
    stage.style.transform = "scale(" + scale + ")";
    stage.style.width = BOARD_W + "px";
    stage.style.height = BOARD_H + "px";
    frame.style.width = Math.round(BOARD_W * scale) + "px";
    frame.style.height = Math.round(BOARD_H * scale) + "px";
  }

  /* --------------------------------------------------------------- input */

  /* The D-pad calls the handlers snake.py registered through onkeypress(),
     which the patched turtle module exposes on the live Screen object. */
  function pressKey(name) {
    var screen = window.Sk && Sk.TurtleGraphics && Sk.TurtleGraphics.screenInstance;
    var listeners = screen && screen._keyListeners;
    if (listeners && listeners[name]) {
      listeners[name]();
    }
  }

  function wirePad() {
    if (!window.matchMedia || !window.matchMedia("(hover: none)").matches) {
      return; // a real keyboard is almost certainly present
    }
    pad.hidden = false;
    document.body.classList.add("touch"); // the keyboard hint is moot here
    Array.prototype.forEach.call(pad.querySelectorAll(".key"), function (btn) {
      var name = btn.getAttribute("data-key");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        pressKey(name);
      });
    });
  }

  /* ----------------------------------------------------------- game over */

  /* snake.py never leaves its main loop: once you crash it keeps looping,
     spawning a fresh turtle and redrawing "YOU LOSE" forever. Rather than edit
     the game, watch its `over` flag from out here, let the losing frame paint,
     then stop the interpreter and offer a restart. */
  function watchForGameOver(token) {
    stopWatching();
    overWatch = window.setInterval(function () {
      if (token !== runToken) {
        return stopWatching();
      }
      if (readGlobal("over") !== 1) {
        return;
      }
      stopWatching();
      window.setTimeout(function () {
        if (token !== runToken) {
          return;
        }
        var score = readGlobal("score");
        stop();
        showVeil(
          "Game over",
          typeof score === "number"
            ? "You scored " + score + "."
            : "",
          false,
          "Play again"
        );
      }, 700);
    }, 120);
  }

  function stopWatching() {
    if (overWatch !== null) {
      window.clearInterval(overWatch);
      overWatch = null;
    }
  }

  function readGlobal(name) {
    try {
      var value = Sk.globals && Sk.globals[name];
      return value === undefined ? undefined : Sk.ffi.remapToJs(value);
    } catch (e) {
      return undefined;
    }
  }

  /* ----------------------------------------------------------- the runner */

  function builtinRead(path) {
    if (!Sk.builtinFiles || Sk.builtinFiles.files[path] === undefined) {
      throw new Error("Skulpt has no file '" + path + "'");
    }
    return Sk.builtinFiles.files[path];
  }

  function stop() {
    runToken += 1;
    stopWatching();
  }

  function start() {
    stop();
    var token = runToken;

    hideVeil();
    Sk.TurtleGraphics = { target: stage, width: BOARD_W, height: BOARD_H };
    // Drop cached imports so `import turtle` re-runs, which resets the board.
    Sk.sysmodules = new Sk.builtin.dict([]);

    Sk.configure({
      output: function (text) { if (window.console) { window.console.log(text); } },
      read: builtinRead,
      __future__: Sk.python3,
      execLimit: null,   // the game loop is meant to run forever
      yieldLimit: 20,    // ...so hand the browser a turn every 20ms
      killableWhile: true,
      killableFor: true
    });

    Sk.misceval.asyncToPromise(
      function () {
        return Sk.importMainWithBody("<stdin>", false, program, true);
      },
      {
        "*": function (susp) {
          if (token !== runToken) {
            return Promise.reject(STOPPED);
          }
          if (susp.data.type !== "Sk.yield") {
            return undefined; // let Skulpt handle it (time.sleep, paints, ...)
          }
          // Skulpt's own yield handler wants setImmediate, which browsers do
          // not have. Resume on the next frame instead: it keeps the page
          // responsive and paces snake.py's busy-wait before the first key.
          return new Promise(function (resolve, reject) {
            window.requestAnimationFrame(function () {
              if (token !== runToken) {
                return reject(STOPPED);
              }
              try {
                resolve(susp.resume());
              } catch (e) {
                reject(e);
              }
            });
          });
        }
      }
    ).catch(function (err) {
      if (err === STOPPED || token !== runToken) {
        return; // we asked it to stop
      }
      fail("snake.py stopped", err);
    });

    fit();
    watchForGameOver(token);
    // The program has already run down to its first suspension, so the board
    // is queued; give it a frame to appear before uncovering it.
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        if (token === runToken) {
          hideVeil();
        }
      });
    });
  }

  /* ---------------------------------------------------------------- boot */

  function text(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) {
        throw new Error("GET " + url + " -> " + res.status + " " + res.statusText);
      }
      return res.text();
    });
  }

  function boot() {
    fit();
    showVeil("Loading", "Starting the Python interpreter…", false, null);

    if (!window.Sk || !Sk.builtinFiles) {
      return fail("Could not load Skulpt", new Error(
        "vendor/skulpt/skulpt.min.js and skulpt-stdlib.js did not load."
      ));
    }

    Promise.all([text(TURTLE_LIB), text(PROGRAM)])
      .then(function (sources) {
        Sk.builtinFiles.files["src/lib/turtle.js"] = sources[0];
        program = sources[1];
        wirePad();
        start();
      })
      .catch(function (err) {
        fail("Could not load the game", err);
      });
  }

  document.getElementById("restart").addEventListener("click", start);
  veilBtn.addEventListener("click", start);
  window.addEventListener("resize", fit);

  boot();
})();
