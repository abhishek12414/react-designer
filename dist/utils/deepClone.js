"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var deepClone = function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
};

var _default = deepClone;
exports["default"] = _default;