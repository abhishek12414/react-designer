"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _excluded = ["className", "name", "onClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var className = _ref.className,
      name = _ref.name,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var _onClick = function _onClick(e) {
    e.preventDefault();

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    onClick.apply(void 0, args);
  };

  return /*#__PURE__*/_react["default"].createElement("button", {
    name: name,
    className: (0, _classnames["default"])('button', className),
    onClick: _onClick
  }, props.children);
};

Button.propTypes = {
  name: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  onClick: _propTypes["default"].func
};
var _default = Button;
exports["default"] = _default;