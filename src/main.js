var xtend   = require("xtend"),
    Promise = require("bluebird"),
    Stylus  = require("stylus"),
    nib     = require("nib");

module.exports = function(options) {
  options = xtend({
    separator: "\n"
  }, options);

  return function stylus(inputs) {
    return Promise.all(inputs.asBuffers()).then(function(buffers) {
      var output;
      var source = buffers.map(function(buffer) { return buffer.toString() }).join('\n');
      Stylus(source).use(nib()).import("nib").render(function(e, o) {
        output = o;
      });
      return output;
    });
  };
};
