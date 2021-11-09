"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var _excluded = ["className", "showIf"];

var PropertyGroup = function PropertyGroup(_ref) {
  var className = _ref.className,
      showIf = _ref.showIf,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  if (!showIf) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('propertyGroup', className)
  }, props.children);
};

PropertyGroup.propTypes = {
  showIf: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
PropertyGroup.defaultProps = {
  showIf: true
};
var _default = PropertyGroup;
exports["default"] = _default;