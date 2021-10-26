"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _ObjectItem = _interopRequireDefault(require("../ObjectItem"));

var _excluded = ["objects", "onChange", "onObjectSelect"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ObjectList = function ObjectList(_ref) {
  var objects = _ref.objects,
      _onChange = _ref.onChange,
      onObjectSelect = _ref.onObjectSelect,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "objectList"
  }, objects.map(function (obj, index) {
    return /*#__PURE__*/_react["default"].createElement(_ObjectItem["default"], _extends({
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