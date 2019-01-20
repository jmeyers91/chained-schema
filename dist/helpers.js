"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allOf = allOf;
exports.anyOf = anyOf;
exports.oneOf = oneOf;
exports.not = not;

var _utils = require("./utils");

function allOf(...schemas) {
  return {
    allOf: (0, _utils.flatten)(schemas).map(_utils.toJsonSchema)
  };
}

function anyOf(...schemas) {
  return {
    anyOf: (0, _utils.flatten)(schemas).map(_utils.toJsonSchema)
  };
}

function oneOf(schemas) {
  return {
    oneOf: (0, _utils.flatten)(schemas).map(_utils.toJsonSchema)
  };
}

function not(schema) {
  return {
    not: (0, _utils.toJsonSchema)(schema)
  };
}