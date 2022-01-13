"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _excluded = ["className", "options", "name", "value", "onChange", "error"];

var Select = function Select(_ref) {
  var className = _ref.className,
      options = _ref.options,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      error = _ref.error,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

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

  return /*#__PURE__*/_react["default"].createElement("select", (0, _extends2["default"])({
    name: name,
    className: (0, _classnames["default"])('rdSelect', className, error && 'error'),
    value: value,
    onChange: onChange
  }, rest), getOptions());
};

Select.propTypes = {
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  options: _propTypes["default"].array,
  error: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
Select.defaultProps = {
  options: [],
  name: ''
};
var _default = Select;
exports["default"] = _default;