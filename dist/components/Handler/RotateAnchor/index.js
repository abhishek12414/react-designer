"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var RotateAnchor = function RotateAnchor(_ref) {
  var boundingBox = _ref.boundingBox,
      onMouseDown = _ref.onMouseDown;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rotateAnchor",
    style: {
      marginLeft: boundingBox.width + 5
    },
    onMouseDown: onMouseDown
  });
};

RotateAnchor.propTypes = {
  boundingBox: _propTypes["default"].object.isRequired,
  onMouseDown: _propTypes["default"].func.isRequired
};
var _default = RotateAnchor;
exports["default"] = _default;