"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../shared/Icon"));

require("./index.css");

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      _onChange2 = _ref.onChange,
      hasIconSwitch = _ref.hasIconSwitch;
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('rdSwitch', hasIconSwitch ? 'iconSwitch' : '')
  }, /*#__PURE__*/_react["default"].createElement("input", {
    name: name,
    type: "checkbox",
    className: "hidden",
    checked: value !== null && value !== void 0 ? value : false,
    onChange: function onChange(_ref2) {
      var _ref2$target = _ref2.target,
          name = _ref2$target.name,
          checked = _ref2$target.checked;
      return _onChange2((0, _defineProperty2["default"])({}, name, checked));
    }
  }), !hasIconSwitch ? /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('rdSlider round')
  }) : value ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "eye-off",
    size: 16,
    style: {
      marginTop: 2
    }
  }) : /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "eye-on",
    size: 16,
    style: {
      marginTop: 2
    }
  }));
};

Checkbox.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  hasIconSwitch: _propTypes["default"].bool
};
var _default = Checkbox;
exports["default"] = _default;