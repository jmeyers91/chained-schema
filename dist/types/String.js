"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Base = _interopRequireDefault(require("./Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StringType extends _Base.default {
  minLength(minLength) {
    return this.extend({
      minLength
    });
  }

  maxLength(maxLength) {
    return this.extend({
      maxLength
    });
  }

  format(format) {
    return this.extend({
      format
    });
  }

  pattern(regex) {
    return this.extend({
      pattern: regex
    });
  }

}

exports.default = StringType;