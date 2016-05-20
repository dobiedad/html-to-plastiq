require('colors')
var jsdiff = require('diff');
var htmlToPlastiq = require('.');

var inputHtml = [
  "<html>",
  "  <body>",
  "    <h1>html-to-plastiq</h1>",
  "    <p id=\"intro\" class=\"super special\">",
  "      Some of <a href=\"us\">us</a> prefer functions",
  "    </p>",
  "  </body>",
  "</html>"
].join("\n");

function render() {
  return h("html", 
    h("body", 
      h("h1", "html-to-plastiq"), 
      h("p#intro.super.special", "\n      Some of ", 
        h("a", {"href":"us"}, "us"), " prefer functions\n    ")))
}

var expected = render.toString();
var actual = htmlToPlastiq(inputHtml);

var diff = jsdiff.diffChars(expected, actual);
var fail = diff.filter(function(p) { return p.added || p.removed; }).length > 0;
if (fail) {
  console.log([
    "==== INPUT ==========================".blue, inputHtml,
    "==== EXPECTED =======================".blue, expected,
    "==== ACTUAL =========================".blue, actual,
    "==== DIFF ===========================".blue
  ].join("\n"));
}

diff.forEach(function(part) {
  var chars = /^\s+$/.test(part.value) ?
      part.value.split('').map(function() { return "█" }).join('')
      : part.value;
  process.stdout.write(chars[
    part.added ? 'green' : part.removed ? 'red' : 'grey'
  ]);
});

console.log("\n" + (fail ? "FAIL" : "OK!"));

process.exit(fail ? 666 : 0);
