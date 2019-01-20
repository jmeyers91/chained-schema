"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toJsonSchema = toJsonSchema;
exports.toJsonSchemaProperties = toJsonSchemaProperties;
exports.flatten = flatten;

var _Base = _interopRequireDefault(require("./types/Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toJsonSchema(type) {
  if (type instanceof _Base.default) return type.schema;
  return type;
}

function toJsonSchemaProperties(properties) {
  if (typeof properties === 'object') {
    const result = {};

    for (let [key, value] of Object.entries(properties)) {
      result[key] = toJsonSchema(value);
    }

    return result;
  }

  return properties;
}

function flatten(array) {
  let result = [];

  for (let value of array) {
    if (Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }

  return result;
}