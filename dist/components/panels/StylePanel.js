"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _Column = _interopRequireDefault(require("./Column"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _constants = require("../../constants");

var _Icon = _interopRequireDefault(require("../shared/Icon"));

var _Input = _interopRequireDefault(require("../widgets/Input"));

var StylePanel = function StylePanel(_ref) {
  var _object$errors;

  var object = _ref.object,
      _onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      onImageEditClick = _ref.onImageEditClick;

  if (object.elementType === _constants.TYPES.GATEWAY) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Fill",
    rowInline: true,
    showIf: (0, _has["default"])(object, 'fill')
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    type: "color",
    value: object.fill,
    onChange: function onChange(value) {
      return _onChange({
        fill: value
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Opacity",
    rowInline: true,
    showIf: (0, _has["default"])(object, 'fillOpacity')
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "number",
    value: object.fillOpacity,
    style: {
      width: 30
    },
    min: 0,
    max: 1,
    step: .1,
    error: object === null || object === void 0 ? void 0 : (_object$errors = object.errors) === null || _object$errors === void 0 ? void 0 : _object$errors.fillOpacity,
    onChange: function onChange(e) {
      return _onChange({
        fillOpacity: +e.target.value
      });
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Action",
    rowInline: true,
    inline: true,
    showIf: (0, _has["default"])(object, 'href')
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    title: "Edit",
    onClick: function onClick() {
      return onImageEditClick();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "pencil",
    size: 24,
    style: {
      width: 16,
      height: 16,
      fill: 'black'
    }
  })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    title: "Delete",
    style: {
      marginLeft: 8
    },
    onClick: function onClick() {
      return onDelete();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "delete",
    size: 24,
    style: {
      width: 16,
      height: 16,
      fill: 'black'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Stroke",
    inline: true,
    showIf: (0, _has["default"])(object, 'stroke', 'width')
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object, 'stroke'),
    type: "color",
    value: object.stroke,
    onChange: function onChange(value) {
      return _onChange({
        stroke: value
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object, 'strokeWidth'),
    label: "width",
    type: "number",
    value: object.strokeWidth,
    style: {
      width: 30
    },
    onChange: function onChange(value) {
      return _onChange({
        strokeWidth: value
      });
    }
  })));
};

StylePanel.propTypes = {
  object: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired,
  onDelete: _propTypes["default"].func.isRequired,
  onImageEditClick: _propTypes["default"].func
};
var _default = StylePanel;
exports["default"] = _default;