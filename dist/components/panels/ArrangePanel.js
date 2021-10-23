"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../shared/Icon"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _Column = _interopRequireDefault(require("./Column"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ArrangePanel = function ArrangePanel(_ref) {
  var onArrange = _ref.onArrange;
  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Arrange",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick() {
      return onArrange('back');
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "send-to-back"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "send to back"))), /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick() {
      return onArrange('front');
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "bring-to-front"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "bring to front")))));
};

ArrangePanel.propTypes = {
  onArrange: _propTypes["default"].func.isRequired
};
var _default = ArrangePanel;
exports["default"] = _default;