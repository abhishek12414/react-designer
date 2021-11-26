"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _Column = _interopRequireDefault(require("../Column"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var _deepClone = _interopRequireDefault(require("../../../utils/deepClone"));

require("./index.css");

var SizePanel = function SizePanel(_ref) {
  var object = _ref.object,
      _onChange = _ref.onChange;

  if (object.elementType === 'image') {
    return null;
  }

  var onPlotChange = function onPlotChange(key, index, value) {
    var path = (0, _deepClone["default"])(object.path);
    path[index][key] = value;

    _onChange('path', path);
  };

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
    object: object,
    className: "sizePanel"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _has["default"])(object, 'width', 'height') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Size",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "W",
    type: "number",
    showIf: (0, _has["default"])(object, 'width'),
    value: object.width,
    onChange: function onChange(value) {
      return _onChange('width', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "H",
    type: "number",
    showIf: (0, _has["default"])(object, 'height'),
    value: object.height,
    onChange: function onChange(value) {
      return _onChange('height', +value);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Position",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "X",
    type: "number",
    showIf: (0, _has["default"])(object, 'x'),
    value: object.x,
    readOnly: true,
    onChange: function onChange(value) {
      return _onChange('x', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "Y",
    type: "number",
    showIf: (0, _has["default"])(object, 'y'),
    value: object.y,
    readOnly: true,
    onChange: function onChange(value) {
      return _onChange('y', +value);
    }
  })), (0, _has["default"])(object, 'radius') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Radius",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    type: "number",
    value: object.radius,
    onChange: function onChange(value) {
      return _onChange('radius', +value);
    }
  }))));
};

SizePanel.propTypes = {
  object: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired
};
var _default = SizePanel;
exports["default"] = _default;