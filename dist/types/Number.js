"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Base = _interopRequireDefault(require("./Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NumberType extends _Base.default {
  minimum(minimum) {
    return this.extend({
      minimum
    });
  }

  maximum(maximum) {
    return this.extend({
      maximum
    });
  }

  exclusiveMinimum(exclusiveMinimum) {
    return this.extend({
      exclusiveMinimum
    });
  }

  exclusiveMaximum(exclusiveMaximum) {
    return this.extend({
      exclusiveMaximum
    });
  }

  multipleOf(multipleOf) {
    return this.extend({
      multipleOf
    });
  }

}

exports.default = NumberType;