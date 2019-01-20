"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  array: true,
  boolean: true,
  number: true,
  integer: true,
  object: true,
  string: true,
  nill: true,
  types: true,
  dateTime: true,
  email: true,
  hostname: true,
  ipv4: true,
  ipv6: true,
  uri: true,
  uriReference: true,
  jsonPointer: true,
  uriTemplate: true
};
exports.uriTemplate = exports.jsonPointer = exports.uriReference = exports.uri = exports.ipv6 = exports.ipv4 = exports.hostname = exports.email = exports.dateTime = exports.types = exports.nill = exports.string = exports.object = exports.integer = exports.number = exports.boolean = exports.array = void 0;

var _Array = _interopRequireDefault(require("./types/Array"));

var _Boolean = _interopRequireDefault(require("./types/Boolean"));

var _Integer = _interopRequireDefault(require("./types/Integer"));

var _Null = _interopRequireDefault(require("./types/Null"));

var _Number = _interopRequireDefault(require("./types/Number"));

var _Object = _interopRequireDefault(require("./types/Object"));

var _String = _interopRequireDefault(require("./types/String"));

var _helpers = require("./helpers");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _helpers[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const array = new _Array.default({
  type: 'array'
});
exports.array = array;
const boolean = new _Boolean.default({
  type: 'boolean'
});
exports.boolean = boolean;
const number = new _Number.default({
  type: 'number'
});
exports.number = number;
const integer = new _Integer.default({
  type: 'integer'
});
exports.integer = integer;
const object = new _Object.default({
  type: 'object'
});
exports.object = object;
const string = new _String.default({
  type: 'string'
});
exports.string = string;
const nill = new _Null.default({
  type: 'null'
});
exports.nill = nill;
const types = {
  array,
  boolean,
  number,
  integer,
  object,
  string,
  nill
}; // String format types

exports.types = types;
const dateTime = string.format('date-time');
exports.dateTime = dateTime;
const email = string.format('email');
exports.email = email;
const hostname = string.format('hostname');
exports.hostname = hostname;
const ipv4 = string.format('ipv4');
exports.ipv4 = ipv4;
const ipv6 = string.format('ipv6');
exports.ipv6 = ipv6;
const uri = string.format('uri');
exports.uri = uri;
const uriReference = string.format('uri-reference');
exports.uriReference = uriReference;
const jsonPointer = string.format('json-pointer');
exports.jsonPointer = jsonPointer;
const uriTemplate = string.format('uri-template');
exports.uriTemplate = uriTemplate;