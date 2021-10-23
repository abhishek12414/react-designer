"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _excluded = ["className", "options", "name", "value", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var className = _ref.className,
      options = _ref.options,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, _excluded);

  var getOptions = function getOptions() {
    var clusterOptions = [];

    if (typeof options[0] === 'string') {
      clusterOptions = options.map(function (data, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: index,
          value: data
        }, data);
      });
    } else {
      clusterOptions = options.map(function (_ref2, index) {
        var label = _ref2.label,
            value = _ref2.value;
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: index,
          value: value
        }, label);
      });
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", {
      value: ""
    }, "Select Option"), clusterOptions);
  };

  return /*#__PURE__*/_react["default"].createElement("select", _extends({
    name: name,
    className: (0, _classnames["default"])('select', className),
    value: value,
    onChange: onChange
  }, rest), getOptions());
};

Select.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  options: _propTypes["default"].array,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
Select.defaultProps = {
  options: [],
  name: ''
};
var _default = Select;
exports["default"] = _default;