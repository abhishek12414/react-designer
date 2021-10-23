"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _Input = _interopRequireDefault(require("../../widgets/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Column = function Column(_ref) {
  var showIf = _ref.showIf,
      type = _ref.type,
      disabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children,
      value = _ref.value,
      label = _ref.label,
      _onChange = _ref.onChange;

  if (!showIf) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: 'empty'
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('column', className)
  }, children || /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: type,
    label: label,
    value: value,
    disabled: disabled,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }));
};

Column.propTypes = {
  showIf: _propTypes["default"].bool,
  type: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
Column.defaultProps = {
  showIf: true
};
var _default = Column;
exports["default"] = _default;