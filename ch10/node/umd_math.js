(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD module
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      // Node.js/CommonJS module
      module.exports = factory();
    } else {
      // Global variable (browser)
      root.mathUtils = factory();
    }
  }(typeof self !== 'undefined' ? self : this, function () {
    var mathUtils = {};
  
    mathUtils.add = function (a, b) {
      return a + b;
    };
  
    mathUtils.subtract = function (a, b) {
      return a - b;
    };
  
    return mathUtils;
  }));
  