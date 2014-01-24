A [Stylus](http://learnboost.github.io/stylus/) operation for the [Fez](http://fez.github.io/) build system.

Includes [Nib](http://visionmedia.github.io/nib/).

Install:

```
npm install fez-stylus
```

Example:

```
stylus = require 'fez-stylus'

build = (stage) ->
  stage (rule) ->
    rule 'source/*.styl', 'target/index.css', stylus()
```
