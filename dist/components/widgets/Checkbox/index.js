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

require("./index.css");

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      _onChange2 = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('rdSwitch')
  }, /*#__PURE__*/_react["default"].createElement("input", {
    name: name,
    type: "checkbox",
    value: value,
    onChange: function onChange(_ref2) {
      var _ref2$target = _ref2.target,
          name = _ref2$target.name,
          checked = _ref2$target.checked;
      return _onChange2((0, _defineProperty2["default"])({}, name, checked));
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('rdSlider round')
  }));
};

Checkbox.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};
var _default = Checkbox;
exports["default"] = _default;