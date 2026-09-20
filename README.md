# Snake

A snake game that i coded on python — now also playable in a browser.

`snake.py` is the original Python [`turtle`](https://docs.python.org/3/library/turtle.html)
program. It still runs locally with `python3 snake.py`, and it is **not modified
in any way** to run on the web: the page fetches it at runtime and executes it
with [Skulpt](https://skulpt.org), a Python interpreter written in JavaScript.

## Deploying to Vercel

The site is plain static files, so there is nothing to build.

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Leave every setting alone — Framework Preset **Other**, no build command,
   no output directory. Vercel serves the repository root.
3. Deploy.

Or from the command line:

```sh
npx vercel        # preview deployment
npx vercel --prod # production
```

`vercel.json` only sets a couple of response headers; it adds no build step.

## Running it locally

Any static file server works — the page uses `fetch()`, so opening
`index.html` straight off the filesystem will not work.

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it works

| Path | What it is |
| --- | --- |
| `snake.py` | The game. Untouched. |
| `index.html`, `web/app.css` | The page around the board. |
| `web/app.js` | Loads Skulpt, installs the turtle shim, runs `snake.py`. |
| `web/tk-colors.js` | Tk/X11 colour names, generated from X11's `rgb.txt`. |
| `vendor/skulpt/` | Skulpt 1.2.0 (MIT), plus a patched `turtle.js`. |

Skulpt ships a `turtle` module, but several things about it stop this game
working, so `vendor/skulpt/turtle.js` is a copy of Skulpt's own
`src/lib/turtle.js` with five clearly-marked changes (each one carries a
`snake-game patch` comment explaining itself):

- **`shapesize()` is missing.** The game builds its whole board out of scaled
  squares — the 630px playing field, the border, the snake's segments, the
  eyes — so without it everything draws at the default 20×20.
- **`onkeypress()` is missing.** Skulpt's `onkey()` is already bound to
  key-down with auto-repeat, which is exactly what `onkeypress` means, so the
  two now share an implementation.
- **Tk colour names do not resolve.** `turtle` is a Tk wrapper, so the game
  uses Tk names such as `green4`, `honeydew2` and `DodgerBlue4`. Those are not
  CSS colours, and a canvas silently ignores a colour it cannot parse, leaving
  the previous one in place. They are now looked up in `web/tk-colors.js`.
- Key events bind to the document rather than the turtle container, so the
  arrow keys work without having to click the board first.
- The live `Screen` object is exposed, so the on-screen D-pad can call the same
  handlers the arrow keys do.

To rebuild against a newer Skulpt, re-apply those five hunks to that release's
`src/lib/turtle.js`.

### Things the page does that the game does not

The game is left exactly as written, so the page handles two of its quirks from
the outside rather than by editing it:

- `snake.py` never leaves its main loop. After you crash it keeps looping,
  spawning a fresh turtle and redrawing "YOU LOSE" forever. The page watches
  the game's `over` flag, lets the losing frame draw, then stops the
  interpreter and offers a restart.
- That "YOU LOSE" is drawn before `lose.color("red")` runs, so it comes out
  black on the black background — invisible, exactly as it is when you run the
  game locally. The page's own game-over panel stands in for it.

The board is 1220×760 turtle pixels. It only needs to be 630×630 for the
playing field, but the game writes its score at y=320 and its splash screen at
80pt (~1180px wide), so the canvas is sized to fit those rather than crop them.
It is then scaled down to whatever room the page has.

## Controls

<kbd>Space</kbd> to start, arrow keys to steer. On a touch device an on-screen
D-pad appears instead.
