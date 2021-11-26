"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _Column = _interopRequireDefault(require("./Column"));

var _Select = _interopRequireDefault(require("../widgets/Select"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _constants = require("../../constants");

var _Icon = _interopRequireDefault(require("../shared/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StylePanel = function StylePanel(_ref) {
  var object = _ref.object,
      _onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      onImageEditClick = _ref.onImageEditClick;

  if (object.elementType === _constants.TYPES.GATEWAY) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], null, (0, _has["default"])(object, 'fill') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Fill",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    type: "color",
    value: object.fill,
    onChange: function onChange(value) {
      return _onChange('fill', value);
    }
  })), (0, _has["default"])(object, 'fillOpacity') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Opacity",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    type: "number",
    value: object.fillOpacity,
    style: {
      width: 30
    },
    onChange: function onChange(value) {
      return _onChange('fillOpacity', value);
    }
  })), (0, _has["default"])(object, 'href') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Action",
    rowInline: true,
    inline: true
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
  }))), (0, _has["default"])(object, 'stroke', 'width') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Stroke",
    inline: true
  }, (0, _has["default"])(object, 'stroke') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    type: "color",
    value: object.stroke,
    onChange: function onChange(value) {
      return _onChange('stroke', value);
    }
  }), (0, _has["default"])(object, 'strokeWidth') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "width",
    type: "number",
    value: object.strokeWidth,
    style: {
      width: 30
    },
    onChange: function onChange(value) {
      return _onChange('strokeWidth', value);
    }
  }), (0, _has["default"])(object, 'radius') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object, 'radius'),
    label: "radius",
    type: "number",
    value: object.radius,
    onChange: function onChange(value) {
      return _onChange('radius', value);
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