"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _excluded = ["id", "objectComponent"];

var PanelList = function PanelList(_ref) {
  var _objectComponent$pane;

  var id = _ref.id,
      objectComponent = _ref.objectComponent,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "panelList"
  }, objectComponent === null || objectComponent === void 0 ? void 0 : (_objectComponent$pane = objectComponent.panels) === null || _objectComponent$pane === void 0 ? void 0 : _objectComponent$pane.map(function (Panel, i) {
    return /*#__PURE__*/_react["default"].createElement(Panel, (0, _extends2["default"])({
      key: i,
      id: id
    }, rest));
  }));
};

PanelList.propTypes = {
  id: _propTypes["default"].string,
  objectComponent: _propTypes["default"].func
};
var _default = PanelList;
exports["default"] = _default;