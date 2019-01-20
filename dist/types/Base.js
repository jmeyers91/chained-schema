"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

class BaseType {
  constructor(schema) {
    this.schema = schema;
  }

  extend(schema) {
    const This = this.constructor;
    return new This({ ...this.schema,
      ...schema
    });
  }

  get nullable() {
    return this.extend({
      type: ['null'].concat(this.schema.type)
    });
  }

  title(title) {
    return this.extend({
      title
    });
  }

  description(description) {
    return this.extend({
      description
    });
  }

  examples(...examples) {
    return this.extend({
      examples: (0, _utils.flatten)(examples)
    });
  }

  default(defaultValue) {
    return this.extend({
      default: defaultValue
    });
  }

  constant(constant) {
    return this.extend({
      const: constant
    });
  }

  enum(...enums) {
    return this.extend({
      enum: (0, _utils.flatten)(enums)
    });
  }

}

exports.default = BaseType;