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
      return buffers.map(function(b) {
        var output = null;
        Stylus(b.toString()).use(nib()).import("nib").render(function(e, o) {
          output = o;
        });
        return output;
      }).join(options.separator);
    });
  };
};
