"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _excluded = ["className", "children", "name", "onClick", "style"];

var Button = function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      name = _ref.name,
      onClick = _ref.onClick,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _onClick = function _onClick(e) {
    e.preventDefault();

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    onClick.apply(void 0, args);
  };

  return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    name: name,
    className: (0, _classnames["default"])('button', className),
    onClick: _onClick,
    style: style
  }, props), children);
};

Button.propTypes = {
  name: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  onClick: _propTypes["default"].func
};
var _default = Button;
exports["default"] = _default;