"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Base = _interopRequireDefault(require("./Base"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ObjectType extends _Base.default {
  required(...required) {
    return this.extend({
      required
    });
  }

  props(p) {
    return this.properties(p);
  }

  properties(properties) {
    return this.extend({
      properties: (0, _utils.toJsonSchemaProperties)(properties)
    });
  }

  dependencies(dependencies) {
    return this.extend({
      dependencies: (0, _utils.toJsonSchemaProperties)(dependencies)
    });
  }

  patternProperties(patternProperties) {
    return this.extend({
      patternProperties: (0, _utils.toJsonSchemaProperties)(patternProperties)
    });
  }

  additionalProperties(additionalProperties) {
    return this.extend({
      additionalProperties: (0, _utils.toJsonSchema)(additionalProperties)
    });
  }

  propertyNames(propertyNames) {
    return this.extend({
      propertyNames: (0, _utils.toJsonSchema)(propertyNames)
    });
  }

  minProperties(minProperties) {
    return this.extend({
      minProperties
    });
  }

  maxProperties(maxProperties) {
    return this.extend({
      maxProperties
    });
  }

}

exports.default = ObjectType;