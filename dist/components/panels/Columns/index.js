"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var Columns = function Columns(_ref) {
  var rowInline = _ref.rowInline,
      inline = _ref.inline,
      showIf = _ref.showIf,
      label = _ref.label,
      children = _ref.children,
      spaceBetween = _ref.spaceBetween;

  if (!showIf) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: 'empty'
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rdColumns', rowInline && 'rdColumns__inline', spaceBetween && 'rdColumns__spaceBetween')
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "rdColumns__title"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(inline ? 'inline' : 'block')
  }, children));
};

Columns.propTypes = {
  label: _propTypes["default"].string,
  showIf: _propTypes["default"].bool,
  inline: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  rowInline: _propTypes["default"].bool,
  spaceBetween: _propTypes["default"].bool
};
Columns.defaultProps = {
  showIf: true,
  inline: false,
  spaceBetween: false
};
var _default = Columns;
exports["default"] = _default;