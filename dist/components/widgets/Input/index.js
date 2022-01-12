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

var Input = function Input(_ref) {
  var label = _ref.label,
      labelClass = _ref.labelClass,
      type = _ref.type,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      value = _ref.value,
      error = _ref.error,
      onChange = _ref.onChange;

  var onInputChange = function onInputChange(e) {
    !disabled && onChange(e);
  };

  return /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('inputContainer', error && 'error')
  }, label && /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('icon', labelClass)
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    name: name,
    type: type,
    value: value,
    className: (0, _classnames["default"])('input', disabled && 'disabled', className),
    onChange: onInputChange
  }));
};

Input.defaultProps = {
  type: 'text',
  name: '',
  disabled: false
};
Input.propTypes = {
  name: _propTypes["default"].string,
  type: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  error: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  labelClass: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
var _default = Input;
exports["default"] = _default;