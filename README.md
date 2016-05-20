# html-to-plastiq
Converts an html string to a [plastiq](https://github.com/featurist/plastiq) render function

## Example
### Input
#### html

```Html
<html>
  <head>
    <meta charset="utf-8">
    <title>My App</title>
  </head>
  <body>
    <h1>Home</h1>
    <div class="container">
      <h2>Lorem ipsum dolor sit amet</h2>
      <ul class="generic-list">
        <li class="item">Lorem ipsum dolor sit amet.</li>
        <li class="item">Laboriosam quaerat sapiente minima nam!</li>
        <li class="item">Incidunt vitae quae facere !</li>
        <li class="item">Tenetur laborum quod cum !</li>
      </ul>
    </div>
  </body>
</html>
```
```JavaScript
var convertToPlastiq = require('html-to-plastiq');
convertToPlastiq(html);
```
### Output
```JavaScript
function render() {
  return h("html",
    h("head",
      h("meta", {"attributes":{"charset":"utf-8"}}),
      h("title", "My App")),
    h("body",
      h("h1", "Home"),
      h("div.container",
        h("h2", "Lorem ipsum dolor sit amet"),
        h("ul.generic-list",
          h("li.item", "Lorem ipsum dolor sit amet."),
          h("li.item", "Laboriosam quaerat sapiente minima nam!"),
          h("li.item", "Incidunt vitae quae facere !"),
          h("li.item", "Tenetur laborum quod cum !")))))
};
```


# install

## npm

    npm install html-to-plastiq
