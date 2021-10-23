"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../shared/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwitchState = function SwitchState(props) {
  var selected = props.value !== props.defaultValue;
  var newValue = selected ? props.defaultValue : props.nextState;
  return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: props.icon,
    active: selected,
    onClick: function onClick() {
      return props.onChange(newValue);
    }
  });
};

SwitchState.propTypes = {
  icon: _propTypes["default"].string,
  value: _propTypes["default"].string,
  nextState: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
var _default = SwitchState;
exports["default"] = _default;