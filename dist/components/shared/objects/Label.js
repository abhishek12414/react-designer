"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = function Label(_ref) {
  var x = _ref.x,
      y = _ref.y,
      label = _ref.label;

  if (!label) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("text", {
    x: x,
    y: y,
    style: {
      fontSize: 12
    }
  }, label);
};

Label.propTypes = {
  x: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  y: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  label: _propTypes["default"].string
};
var _default = Label;
exports["default"] = _default;