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

var RangePicker = function RangePicker(_ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      label = _ref.label,
      labelClass = _ref.labelClass,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange;

  var onInputChange = function onInputChange(e) {
    !disabled && onChange(e);
  };

  return /*#__PURE__*/_react["default"].createElement("label", {
    className: "inputContainer"
  }, label && /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('icon', labelClass)
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    name: name,
    value: value,
    className: (0, _classnames["default"])('input', disabled && 'disabled', className),
    onChange: onInputChange
  }));
};

RangePicker.propTypes = {
  min: _propTypes["default"].number.isRequired,
  max: _propTypes["default"].number.isRequired,
  step: _propTypes["default"].number.isRequired,
  name: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  labelClass: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
RangePicker.defaultProps = {
  name: '',
  disabled: false,
  min: 0,
  max: 100,
  step: 10
};
var _default = RangePicker;
exports["default"] = _default;