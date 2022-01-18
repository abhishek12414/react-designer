"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _Column = _interopRequireDefault(require("../Column"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var _deepClone = _interopRequireDefault(require("../../../utils/deepClone"));

require("./index.css");

var _constants = require("../../../constants");

var SizePanel = function SizePanel(_ref) {
  var _object$_x, _object$_y, _object$width, _object$height2;

  var object = _ref.object,
      _onChange5 = _ref.onChange,
      layoutDimension = _ref.layoutDimension,
      transformedLayout = _ref.transformedLayout;
  var transformedDimension = {
    transformWidth: transformedLayout.layoutWidth / layoutDimension.width,
    transformHeight: transformedLayout.layoutHeight / layoutDimension.height
  };

  var onPlotChange = function onPlotChange(key, index, value) {
    var path = (0, _deepClone["default"])(object.path);
    path[index][key] = value;

    _onChange5({
      path: path
    });
  };

  var onValueChange = function onValueChange(key, value) {
    var _onChange, _object$height, _onChange2, _onChange3;

    var tValue;

    switch (key) {
      case '_x':
        tValue = +(value * transformedDimension.transformWidth).toFixed(2);

        _onChange5((_onChange = {}, (0, _defineProperty2["default"])(_onChange, key, value), (0, _defineProperty2["default"])(_onChange, "x", tValue), _onChange));

        break;

      case '_y':
        tValue = +(transformedLayout.layoutHeight - value * transformedDimension.transformHeight - ((_object$height = object === null || object === void 0 ? void 0 : object.height) !== null && _object$height !== void 0 ? _object$height : 0)).toFixed(2);

        _onChange5((_onChange2 = {}, (0, _defineProperty2["default"])(_onChange2, key, value), (0, _defineProperty2["default"])(_onChange2, "y", tValue), _onChange2));

        break;

      case '_radius':
        tValue = +(value * transformedDimension.transformHeight).toFixed(2);

        _onChange5((_onChange3 = {}, (0, _defineProperty2["default"])(_onChange3, key, value), (0, _defineProperty2["default"])(_onChange3, "radius", tValue), _onChange3));

        break;

      default:
        _onChange5((0, _defineProperty2["default"])({}, key, value));

        break;
    }
  };

  if (object.elementType === 'image') {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
    object: object,
    className: "sizePanel"
  }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Position",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "X",
    type: "number",
    showIf: (0, _has["default"])(object, 'x'),
    value: (_object$_x = object._x) !== null && _object$_x !== void 0 ? _object$_x : '',
    readOnly: true,
    onChange: function onChange(value) {
      return onValueChange('_x', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "Y",
    type: "number",
    showIf: (0, _has["default"])(object, 'y'),
    value: (_object$_y = object._y) !== null && _object$_y !== void 0 ? _object$_y : '',
    readOnly: true,
    onChange: function onChange(value) {
      return onValueChange('_y', +value);
    }
  })), (0, _has["default"])(object, 'width', 'height') && object.elementType !== _constants.TYPES.GATEWAY && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Size",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "W",
    type: "number",
    showIf: (0, _has["default"])(object, 'width'),
    value: (_object$width = object.width) !== null && _object$width !== void 0 ? _object$width : '',
    onChange: function onChange(value) {
      return _onChange5({
        width: +value
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "H",
    type: "number",
    showIf: (0, _has["default"])(object, 'height'),
    value: (_object$height2 = object.height) !== null && _object$height2 !== void 0 ? _object$height2 : '',
    onChange: function onChange(value) {
      return _onChange5({
        height: +value
      });
    }
  })), (0, _has["default"])(object, 'radius') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Radius",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    type: "number",
    value: object._radius,
    onChange: function onChange(value) {
      return onValueChange('_radius', +value);
    } // onChange={(value) => onChange({ radius: +value })}

  })));
};

SizePanel.propTypes = {
  object: _propTypes["default"].object,
  layoutDimension: _propTypes["default"].object,
  transformedLayout: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired
};
var _default = SizePanel;
exports["default"] = _default;