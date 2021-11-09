"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _excluded = ["className", "name", "onClick"];

var Button = function Button(_ref) {
  var className = _ref.className,
      name = _ref.name,
      onClick = _ref.onClick,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _onClick = function _onClick(e) {
    e.preventDefault();

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    onClick.apply(void 0, args);
  };

  return /*#__PURE__*/_react["default"].createElement("button", {
    name: name,
    className: (0, _classnames["default"])('button', className),
    onClick: _onClick
  }, props.children);
};

Button.propTypes = {
  name: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  onClick: _propTypes["default"].func
};
var _default = Button;
exports["default"] = _default;