"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Base = _interopRequireDefault(require("./Base"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ArrayType extends _Base.default {
  get uniqueItems() {
    return this.extend({
      uniqueItems: true
    });
  }

  additionalItems(additionalItems) {
    if (Array.isArray(additionalItems)) {
      additionalItems = additionalItems.map(_utils.toJsonSchema);
    } else if (additionalItems instanceof _Base.default) {
      additionalItems = additionalItems.schema;
    }

    return this.extend({
      additionalItems
    });
  }

  items(items) {
    if (Array.isArray(items)) {
      items = items.map(_utils.toJsonSchema);
    } else {
      items = (0, _utils.toJsonSchema)(items);
    }

    return this.extend({
      items
    });
  }

}

exports.default = ArrayType;