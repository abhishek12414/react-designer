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

var Tab = function Tab(_ref) {
  var options = _ref.options,
      activeValue = _ref.activeValue,
      onSelect = _ref.onSelect;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rdTab"
  }, options.map(function (key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      className: (0, _classnames["default"])('tabBar', activeValue === key && 'activeTab'),
      onClick: function onClick() {
        return onSelect(key);
      }
    }, key);
  }));
};

Tab.propTypes = {
  options: _propTypes["default"].array.isRequired,
  activeValue: _propTypes["default"].string.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};
var _default = Tab;
exports["default"] = _default;