"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(_ref) {
  var object = _ref.object,
      startPoint = _ref.startPoint,
      mouse = _ref.mouse;
  var objectX = startPoint.objectX,
      objectY = startPoint.objectY,
      clientX = startPoint.clientX,
      clientY = startPoint.clientY;
  var width = startPoint.width + mouse.x - clientX;
  var height = startPoint.height + mouse.y - clientY;
  return _objectSpread(_objectSpread({}, object), {}, {
    x: width > 0 ? objectX : objectX + width,
    y: height > 0 ? objectY : objectY + height,
    width: Math.abs(width),
    height: Math.abs(height)
  });
};

exports["default"] = _default;