A [Stylus](http://learnboost.github.io/stylus/) operation for the [Fez](http://fez.github.io/) build system.

Includes [Nib](http://visionmedia.github.io/nib/).

Install:

```
npm install fez-stylus
```

Example:

```
var stylus = require('fez-stylus');

var build = function(stage) {
  return stage(function(rule) {
    return rule('source/*.styl', 'target/index.css', stylus());
  });
};
```
