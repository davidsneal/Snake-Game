/*
 * Tk / X11 colour names, generated from the standard X11 rgb.txt.
 *
 * snake.py was written against Python's `turtle`, which is a Tk wrapper, so it
 * uses Tk colour names such as "green4", "honeydew2" and "DodgerBlue4". Those
 * are not CSS colours -- assigning one to a canvas fillStyle is silently
 * ignored and the shape keeps whatever colour was set before. This table lets
 * the turtle shim resolve them to the exact values Tk would have used.
 *
 * Keys are lower-cased with spaces stripped. Greyscale names (gray0-gray100)
 * are computed instead of listed; see resolveColor() in turtle-compat.js.
 */
window.TK_COLORS = JSON.parse(
  "{\"aliceblue\":\"#f0f8ff\",\"antiquewhite\":\"#faebd7\",\"antiquewhite1\":\"#ffefdb\",\"antiquewhite2\":\"#eedf" +
  "cc\",\"antiquewhite3\":\"#cdc0b0\",\"antiquewhite4\":\"#8b8378\",\"aquamarine\":\"#7fffd4\",\"aquamarine1\":\"#7" +
  "fffd4\",\"aquamarine2\":\"#76eec6\",\"aquamarine3\":\"#66cdaa\",\"aquamarine4\":\"#458b74\",\"azure\":\"#f0ffff\"" +
  ",\"azure1\":\"#f0ffff\",\"azure2\":\"#e0eeee\",\"azure3\":\"#c1cdcd\",\"azure4\":\"#838b8b\",\"beige\":\"#f5f5dc\",\"" +
  "bisque\":\"#ffe4c4\",\"bisque1\":\"#ffe4c4\",\"bisque2\":\"#eed5b7\",\"bisque3\":\"#cdb79e\",\"bisque4\":\"#8b7d6b" +
  "\",\"black\":\"#000000\",\"blanchedalmond\":\"#ffebcd\",\"blue\":\"#0000ff\",\"blue1\":\"#0000ff\",\"blue2\":\"#0000" +
  "ee\",\"blue3\":\"#0000cd\",\"blue4\":\"#00008b\",\"blueviolet\":\"#8a2be2\",\"brown\":\"#a52a2a\",\"brown1\":\"#ff40" +
  "40\",\"brown2\":\"#ee3b3b\",\"brown3\":\"#cd3333\",\"brown4\":\"#8b2323\",\"burlywood\":\"#deb887\",\"burlywood1\":" +
  "\"#ffd39b\",\"burlywood2\":\"#eec591\",\"burlywood3\":\"#cdaa7d\",\"burlywood4\":\"#8b7355\",\"cadetblue\":\"#5f9" +
  "ea0\",\"cadetblue1\":\"#98f5ff\",\"cadetblue2\":\"#8ee5ee\",\"cadetblue3\":\"#7ac5cd\",\"cadetblue4\":\"#53868b\"" +
  ",\"chartreuse\":\"#7fff00\",\"chartreuse1\":\"#7fff00\",\"chartreuse2\":\"#76ee00\",\"chartreuse3\":\"#66cd00\"," +
  "\"chartreuse4\":\"#458b00\",\"chocolate\":\"#d2691e\",\"chocolate1\":\"#ff7f24\",\"chocolate2\":\"#ee7621\",\"cho" +
  "colate3\":\"#cd661d\",\"chocolate4\":\"#8b4513\",\"coral\":\"#ff7f50\",\"coral1\":\"#ff7256\",\"coral2\":\"#ee6a50" +
  "\",\"coral3\":\"#cd5b45\",\"coral4\":\"#8b3e2f\",\"cornflowerblue\":\"#6495ed\",\"cornsilk\":\"#fff8dc\",\"cornsil" +
  "k1\":\"#fff8dc\",\"cornsilk2\":\"#eee8cd\",\"cornsilk3\":\"#cdc8b1\",\"cornsilk4\":\"#8b8878\",\"cyan\":\"#00ffff\"" +
  ",\"cyan1\":\"#00ffff\",\"cyan2\":\"#00eeee\",\"cyan3\":\"#00cdcd\",\"cyan4\":\"#008b8b\",\"darkblue\":\"#00008b\",\"d" +
  "arkcyan\":\"#008b8b\",\"darkgoldenrod\":\"#b8860b\",\"darkgoldenrod1\":\"#ffb90f\",\"darkgoldenrod2\":\"#eead0" +
  "e\",\"darkgoldenrod3\":\"#cd950c\",\"darkgoldenrod4\":\"#8b6508\",\"darkgray\":\"#a9a9a9\",\"darkgreen\":\"#0064" +
  "00\",\"darkgrey\":\"#a9a9a9\",\"darkkhaki\":\"#bdb76b\",\"darkmagenta\":\"#8b008b\",\"darkolivegreen\":\"#556b2f" +
  "\",\"darkolivegreen1\":\"#caff70\",\"darkolivegreen2\":\"#bcee68\",\"darkolivegreen3\":\"#a2cd5a\",\"darkolive" +
  "green4\":\"#6e8b3d\",\"darkorange\":\"#ff8c00\",\"darkorange1\":\"#ff7f00\",\"darkorange2\":\"#ee7600\",\"darkor" +
  "ange3\":\"#cd6600\",\"darkorange4\":\"#8b4500\",\"darkorchid\":\"#9932cc\",\"darkorchid1\":\"#bf3eff\",\"darkorc" +
  "hid2\":\"#b23aee\",\"darkorchid3\":\"#9a32cd\",\"darkorchid4\":\"#68228b\",\"darkred\":\"#8b0000\",\"darksalmon\"" +
  ":\"#e9967a\",\"darkseagreen\":\"#8fbc8f\",\"darkseagreen1\":\"#c1ffc1\",\"darkseagreen2\":\"#b4eeb4\",\"darksea" +
  "green3\":\"#9bcd9b\",\"darkseagreen4\":\"#698b69\",\"darkslateblue\":\"#483d8b\",\"darkslategray\":\"#2f4f4f\"," +
  "\"darkslategray1\":\"#97ffff\",\"darkslategray2\":\"#8deeee\",\"darkslategray3\":\"#79cdcd\",\"darkslategray4" +
  "\":\"#528b8b\",\"darkslategrey\":\"#2f4f4f\",\"darkturquoise\":\"#00ced1\",\"darkviolet\":\"#9400d3\",\"debianre" +
  "d\":\"#d70751\",\"deeppink\":\"#ff1493\",\"deeppink1\":\"#ff1493\",\"deeppink2\":\"#ee1289\",\"deeppink3\":\"#cd10" +
  "76\",\"deeppink4\":\"#8b0a50\",\"deepskyblue\":\"#00bfff\",\"deepskyblue1\":\"#00bfff\",\"deepskyblue2\":\"#00b2" +
  "ee\",\"deepskyblue3\":\"#009acd\",\"deepskyblue4\":\"#00688b\",\"dimgray\":\"#696969\",\"dimgrey\":\"#696969\",\"d" +
  "odgerblue\":\"#1e90ff\",\"dodgerblue1\":\"#1e90ff\",\"dodgerblue2\":\"#1c86ee\",\"dodgerblue3\":\"#1874cd\",\"do" +
  "dgerblue4\":\"#104e8b\",\"firebrick\":\"#b22222\",\"firebrick1\":\"#ff3030\",\"firebrick2\":\"#ee2c2c\",\"firebr" +
  "ick3\":\"#cd2626\",\"firebrick4\":\"#8b1a1a\",\"floralwhite\":\"#fffaf0\",\"forestgreen\":\"#228b22\",\"gainsbor" +
  "o\":\"#dcdcdc\",\"ghostwhite\":\"#f8f8ff\",\"gold\":\"#ffd700\",\"gold1\":\"#ffd700\",\"gold2\":\"#eec900\",\"gold3\"" +
  ":\"#cdad00\",\"gold4\":\"#8b7500\",\"goldenrod\":\"#daa520\",\"goldenrod1\":\"#ffc125\",\"goldenrod2\":\"#eeb422\"" +
  ",\"goldenrod3\":\"#cd9b1d\",\"goldenrod4\":\"#8b6914\",\"gray\":\"#bebebe\",\"green\":\"#00ff00\",\"green1\":\"#00f" +
  "f00\",\"green2\":\"#00ee00\",\"green3\":\"#00cd00\",\"green4\":\"#008b00\",\"greenyellow\":\"#adff2f\",\"grey\":\"#b" +
  "ebebe\",\"honeydew\":\"#f0fff0\",\"honeydew1\":\"#f0fff0\",\"honeydew2\":\"#e0eee0\",\"honeydew3\":\"#c1cdc1\",\"h" +
  "oneydew4\":\"#838b83\",\"hotpink\":\"#ff69b4\",\"hotpink1\":\"#ff6eb4\",\"hotpink2\":\"#ee6aa7\",\"hotpink3\":\"#c" +
  "d6090\",\"hotpink4\":\"#8b3a62\",\"indianred\":\"#cd5c5c\",\"indianred1\":\"#ff6a6a\",\"indianred2\":\"#ee6363\"," +
  "\"indianred3\":\"#cd5555\",\"indianred4\":\"#8b3a3a\",\"ivory\":\"#fffff0\",\"ivory1\":\"#fffff0\",\"ivory2\":\"#ee" +
  "eee0\",\"ivory3\":\"#cdcdc1\",\"ivory4\":\"#8b8b83\",\"khaki\":\"#f0e68c\",\"khaki1\":\"#fff68f\",\"khaki2\":\"#eee6" +
  "85\",\"khaki3\":\"#cdc673\",\"khaki4\":\"#8b864e\",\"lavender\":\"#e6e6fa\",\"lavenderblush\":\"#fff0f5\",\"lavend" +
  "erblush1\":\"#fff0f5\",\"lavenderblush2\":\"#eee0e5\",\"lavenderblush3\":\"#cdc1c5\",\"lavenderblush4\":\"#8b8" +
  "386\",\"lawngreen\":\"#7cfc00\",\"lemonchiffon\":\"#fffacd\",\"lemonchiffon1\":\"#fffacd\",\"lemonchiffon2\":\"#" +
  "eee9bf\",\"lemonchiffon3\":\"#cdc9a5\",\"lemonchiffon4\":\"#8b8970\",\"lightblue\":\"#add8e6\",\"lightblue1\":\"" +
  "#bfefff\",\"lightblue2\":\"#b2dfee\",\"lightblue3\":\"#9ac0cd\",\"lightblue4\":\"#68838b\",\"lightcoral\":\"#f08" +
  "080\",\"lightcyan\":\"#e0ffff\",\"lightcyan1\":\"#e0ffff\",\"lightcyan2\":\"#d1eeee\",\"lightcyan3\":\"#b4cdcd\"," +
  "\"lightcyan4\":\"#7a8b8b\",\"lightgoldenrod\":\"#eedd82\",\"lightgoldenrod1\":\"#ffec8b\",\"lightgoldenrod2\":" +
  "\"#eedc82\",\"lightgoldenrod3\":\"#cdbe70\",\"lightgoldenrod4\":\"#8b814c\",\"lightgoldenrodyellow\":\"#fafad" +
  "2\",\"lightgray\":\"#d3d3d3\",\"lightgreen\":\"#90ee90\",\"lightgrey\":\"#d3d3d3\",\"lightpink\":\"#ffb6c1\",\"lig" +
  "htpink1\":\"#ffaeb9\",\"lightpink2\":\"#eea2ad\",\"lightpink3\":\"#cd8c95\",\"lightpink4\":\"#8b5f65\",\"lightsa" +
  "lmon\":\"#ffa07a\",\"lightsalmon1\":\"#ffa07a\",\"lightsalmon2\":\"#ee9572\",\"lightsalmon3\":\"#cd8162\",\"ligh" +
  "tsalmon4\":\"#8b5742\",\"lightseagreen\":\"#20b2aa\",\"lightskyblue\":\"#87cefa\",\"lightskyblue1\":\"#b0e2ff\"" +
  ",\"lightskyblue2\":\"#a4d3ee\",\"lightskyblue3\":\"#8db6cd\",\"lightskyblue4\":\"#607b8b\",\"lightslateblue\":" +
  "\"#8470ff\",\"lightslategray\":\"#778899\",\"lightslategrey\":\"#778899\",\"lightsteelblue\":\"#b0c4de\",\"ligh" +
  "tsteelblue1\":\"#cae1ff\",\"lightsteelblue2\":\"#bcd2ee\",\"lightsteelblue3\":\"#a2b5cd\",\"lightsteelblue4\"" +
  ":\"#6e7b8b\",\"lightyellow\":\"#ffffe0\",\"lightyellow1\":\"#ffffe0\",\"lightyellow2\":\"#eeeed1\",\"lightyello" +
  "w3\":\"#cdcdb4\",\"lightyellow4\":\"#8b8b7a\",\"limegreen\":\"#32cd32\",\"linen\":\"#faf0e6\",\"magenta\":\"#ff00f" +
  "f\",\"magenta1\":\"#ff00ff\",\"magenta2\":\"#ee00ee\",\"magenta3\":\"#cd00cd\",\"magenta4\":\"#8b008b\",\"maroon\":" +
  "\"#b03060\",\"maroon1\":\"#ff34b3\",\"maroon2\":\"#ee30a7\",\"maroon3\":\"#cd2990\",\"maroon4\":\"#8b1c62\",\"mediu" +
  "maquamarine\":\"#66cdaa\",\"mediumblue\":\"#0000cd\",\"mediumorchid\":\"#ba55d3\",\"mediumorchid1\":\"#e066ff\"" +
  ",\"mediumorchid2\":\"#d15fee\",\"mediumorchid3\":\"#b452cd\",\"mediumorchid4\":\"#7a378b\",\"mediumpurple\":\"#" +
  "9370db\",\"mediumpurple1\":\"#ab82ff\",\"mediumpurple2\":\"#9f79ee\",\"mediumpurple3\":\"#8968cd\",\"mediumpur" +
  "ple4\":\"#5d478b\",\"mediumseagreen\":\"#3cb371\",\"mediumslateblue\":\"#7b68ee\",\"mediumspringgreen\":\"#00f" +
  "a9a\",\"mediumturquoise\":\"#48d1cc\",\"mediumvioletred\":\"#c71585\",\"midnightblue\":\"#191970\",\"mintcream" +
  "\":\"#f5fffa\",\"mistyrose\":\"#ffe4e1\",\"mistyrose1\":\"#ffe4e1\",\"mistyrose2\":\"#eed5d2\",\"mistyrose3\":\"#c" +
  "db7b5\",\"mistyrose4\":\"#8b7d7b\",\"moccasin\":\"#ffe4b5\",\"navajowhite\":\"#ffdead\",\"navajowhite1\":\"#ffde" +
  "ad\",\"navajowhite2\":\"#eecfa1\",\"navajowhite3\":\"#cdb38b\",\"navajowhite4\":\"#8b795e\",\"navy\":\"#000080\"," +
  "\"navyblue\":\"#000080\",\"oldlace\":\"#fdf5e6\",\"olivedrab\":\"#6b8e23\",\"olivedrab1\":\"#c0ff3e\",\"olivedrab" +
  "2\":\"#b3ee3a\",\"olivedrab3\":\"#9acd32\",\"olivedrab4\":\"#698b22\",\"orange\":\"#ffa500\",\"orange1\":\"#ffa500" +
  "\",\"orange2\":\"#ee9a00\",\"orange3\":\"#cd8500\",\"orange4\":\"#8b5a00\",\"orangered\":\"#ff4500\",\"orangered1\"" +
  ":\"#ff4500\",\"orangered2\":\"#ee4000\",\"orangered3\":\"#cd3700\",\"orangered4\":\"#8b2500\",\"orchid\":\"#da70d" +
  "6\",\"orchid1\":\"#ff83fa\",\"orchid2\":\"#ee7ae9\",\"orchid3\":\"#cd69c9\",\"orchid4\":\"#8b4789\",\"palegoldenro" +
  "d\":\"#eee8aa\",\"palegreen\":\"#98fb98\",\"palegreen1\":\"#9aff9a\",\"palegreen2\":\"#90ee90\",\"palegreen3\":\"#" +
  "7ccd7c\",\"palegreen4\":\"#548b54\",\"paleturquoise\":\"#afeeee\",\"paleturquoise1\":\"#bbffff\",\"paleturquoi" +
  "se2\":\"#aeeeee\",\"paleturquoise3\":\"#96cdcd\",\"paleturquoise4\":\"#668b8b\",\"palevioletred\":\"#db7093\",\"" +
  "palevioletred1\":\"#ff82ab\",\"palevioletred2\":\"#ee799f\",\"palevioletred3\":\"#cd6889\",\"palevioletred4\"" +
  ":\"#8b475d\",\"papayawhip\":\"#ffefd5\",\"peachpuff\":\"#ffdab9\",\"peachpuff1\":\"#ffdab9\",\"peachpuff2\":\"#ee" +
  "cbad\",\"peachpuff3\":\"#cdaf95\",\"peachpuff4\":\"#8b7765\",\"peru\":\"#cd853f\",\"pink\":\"#ffc0cb\",\"pink1\":\"#" +
  "ffb5c5\",\"pink2\":\"#eea9b8\",\"pink3\":\"#cd919e\",\"pink4\":\"#8b636c\",\"plum\":\"#dda0dd\",\"plum1\":\"#ffbbff\"" +
  ",\"plum2\":\"#eeaeee\",\"plum3\":\"#cd96cd\",\"plum4\":\"#8b668b\",\"powderblue\":\"#b0e0e6\",\"purple\":\"#a020f0\"" +
  ",\"purple1\":\"#9b30ff\",\"purple2\":\"#912cee\",\"purple3\":\"#7d26cd\",\"purple4\":\"#551a8b\",\"red\":\"#ff0000\"" +
  ",\"red1\":\"#ff0000\",\"red2\":\"#ee0000\",\"red3\":\"#cd0000\",\"red4\":\"#8b0000\",\"rosybrown\":\"#bc8f8f\",\"rosy" +
  "brown1\":\"#ffc1c1\",\"rosybrown2\":\"#eeb4b4\",\"rosybrown3\":\"#cd9b9b\",\"rosybrown4\":\"#8b6969\",\"royalblu" +
  "e\":\"#4169e1\",\"royalblue1\":\"#4876ff\",\"royalblue2\":\"#436eee\",\"royalblue3\":\"#3a5fcd\",\"royalblue4\":\"" +
  "#27408b\",\"saddlebrown\":\"#8b4513\",\"salmon\":\"#fa8072\",\"salmon1\":\"#ff8c69\",\"salmon2\":\"#ee8262\",\"sal" +
  "mon3\":\"#cd7054\",\"salmon4\":\"#8b4c39\",\"sandybrown\":\"#f4a460\",\"seagreen\":\"#2e8b57\",\"seagreen1\":\"#54" +
  "ff9f\",\"seagreen2\":\"#4eee94\",\"seagreen3\":\"#43cd80\",\"seagreen4\":\"#2e8b57\",\"seashell\":\"#fff5ee\",\"se" +
  "ashell1\":\"#fff5ee\",\"seashell2\":\"#eee5de\",\"seashell3\":\"#cdc5bf\",\"seashell4\":\"#8b8682\",\"sienna\":\"#" +
  "a0522d\",\"sienna1\":\"#ff8247\",\"sienna2\":\"#ee7942\",\"sienna3\":\"#cd6839\",\"sienna4\":\"#8b4726\",\"skyblue" +
  "\":\"#87ceeb\",\"skyblue1\":\"#87ceff\",\"skyblue2\":\"#7ec0ee\",\"skyblue3\":\"#6ca6cd\",\"skyblue4\":\"#4a708b\"," +
  "\"slateblue\":\"#6a5acd\",\"slateblue1\":\"#836fff\",\"slateblue2\":\"#7a67ee\",\"slateblue3\":\"#6959cd\",\"slat" +
  "eblue4\":\"#473c8b\",\"slategray\":\"#708090\",\"slategray1\":\"#c6e2ff\",\"slategray2\":\"#b9d3ee\",\"slategray" +
  "3\":\"#9fb6cd\",\"slategray4\":\"#6c7b8b\",\"slategrey\":\"#708090\",\"snow\":\"#fffafa\",\"snow1\":\"#fffafa\",\"sn" +
  "ow2\":\"#eee9e9\",\"snow3\":\"#cdc9c9\",\"snow4\":\"#8b8989\",\"springgreen\":\"#00ff7f\",\"springgreen1\":\"#00ff" +
  "7f\",\"springgreen2\":\"#00ee76\",\"springgreen3\":\"#00cd66\",\"springgreen4\":\"#008b45\",\"steelblue\":\"#468" +
  "2b4\",\"steelblue1\":\"#63b8ff\",\"steelblue2\":\"#5cacee\",\"steelblue3\":\"#4f94cd\",\"steelblue4\":\"#36648b\"" +
  ",\"tan\":\"#d2b48c\",\"tan1\":\"#ffa54f\",\"tan2\":\"#ee9a49\",\"tan3\":\"#cd853f\",\"tan4\":\"#8b5a2b\",\"thistle\":\"" +
  "#d8bfd8\",\"thistle1\":\"#ffe1ff\",\"thistle2\":\"#eed2ee\",\"thistle3\":\"#cdb5cd\",\"thistle4\":\"#8b7b8b\",\"to" +
  "mato\":\"#ff6347\",\"tomato1\":\"#ff6347\",\"tomato2\":\"#ee5c42\",\"tomato3\":\"#cd4f39\",\"tomato4\":\"#8b3626\"," +
  "\"turquoise\":\"#40e0d0\",\"turquoise1\":\"#00f5ff\",\"turquoise2\":\"#00e5ee\",\"turquoise3\":\"#00c5cd\",\"turq" +
  "uoise4\":\"#00868b\",\"violet\":\"#ee82ee\",\"violetred\":\"#d02090\",\"violetred1\":\"#ff3e96\",\"violetred2\":\"" +
  "#ee3a8c\",\"violetred3\":\"#cd3278\",\"violetred4\":\"#8b2252\",\"wheat\":\"#f5deb3\",\"wheat1\":\"#ffe7ba\",\"whe" +
  "at2\":\"#eed8ae\",\"wheat3\":\"#cdba96\",\"wheat4\":\"#8b7e66\",\"white\":\"#ffffff\",\"whitesmoke\":\"#f5f5f5\",\"y" +
  "ellow\":\"#ffff00\",\"yellow1\":\"#ffff00\",\"yellow2\":\"#eeee00\",\"yellow3\":\"#cdcd00\",\"yellow4\":\"#8b8b00\"" +
  ",\"yellowgreen\":\"#9acd32\"}"
);
