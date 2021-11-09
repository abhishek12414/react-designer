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

var _ObjectItem = _interopRequireDefault(require("../ObjectItem"));

var _excluded = ["objects", "onChange", "onObjectSelect"];

var ObjectList = function ObjectList(_ref) {
  var objects = _ref.objects,
      _onChange = _ref.onChange,
      onObjectSelect = _ref.onObjectSelect,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "objectList"
  }, objects.map(function (obj, index) {
    return /*#__PURE__*/_react["default"].createElement(_ObjectItem["default"], (0, _extends2["default"])({
      key: index
    }, obj, rest, {
      onClick: function onClick() {
        return onObjectSelect(index);
      },
      onChange: function onChange(data) {
        return _onChange(index, data);
      }
    }));
  }));
};

ObjectList.propTypes = {
  objects: _propTypes["default"].array.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onObjectSelect: _propTypes["default"].func.isRequired
};
var _default = ObjectList;
exports["default"] = _default;