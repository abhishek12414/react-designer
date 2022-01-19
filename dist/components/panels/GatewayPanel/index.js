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

require("./index.css");

var _constants = require("../../../constants");

var _Column = _interopRequireDefault(require("../Column"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var _Select = _interopRequireDefault(require("../../widgets/Select"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var GatewayPanel = function GatewayPanel(_ref) {
  var _object$errors, _object$errors2, _object$errors3, _object$plot$_x, _object$plot$_y, _object$plot$_z;

  var object = _ref.object,
      _onChange4 = _ref.onChange,
      layoutDimension = _ref.layoutDimension,
      transformedLayout = _ref.transformedLayout;
  var transformedDimension = {
    transformWidth: transformedLayout.layoutWidth / layoutDimension.width,
    transformHeight: transformedLayout.layoutHeight / layoutDimension.height
  };

  if (object.elementType !== _constants.TYPES.GATEWAY) {
    return null;
  }

  var onValueChange = function onValueChange(key, value) {
    var _onChange, _object$height, _onChange2;

    var tValue;

    switch (key) {
      case '_x':
        tValue = +(value * transformedDimension.transformWidth).toFixed(2);

        _onChange4((_onChange = {}, (0, _defineProperty2["default"])(_onChange, key, value), (0, _defineProperty2["default"])(_onChange, "x", tValue), _onChange));

        break;

      case '_y':
        tValue = +(transformedLayout.layoutHeight - value * transformedDimension.transformHeight - ((_object$height = object === null || object === void 0 ? void 0 : object.height) !== null && _object$height !== void 0 ? _object$height : 0)).toFixed(2);

        _onChange4((_onChange2 = {}, (0, _defineProperty2["default"])(_onChange2, key, value), (0, _defineProperty2["default"])(_onChange2, "y", tValue), _onChange2));

        break;

      default:
        _onChange4((0, _defineProperty2["default"])({}, key, value));

        break;
    }
  };

  var onPlotValueChange = function onPlotValueChange(key, value) {
    var _objectSpread2, _object$height2, _objectSpread3;

    var tValue;

    switch (key) {
      case '_x':
        tValue = +(value * transformedDimension.transformWidth).toFixed(2);

        _onChange4({
          plot: _objectSpread(_objectSpread({}, object.plot), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, key, value), (0, _defineProperty2["default"])(_objectSpread2, "x", tValue), _objectSpread2))
        });

        break;

      case '_y':
        tValue = +(transformedLayout.layoutHeight - value * transformedDimension.transformHeight - ((_object$height2 = object === null || object === void 0 ? void 0 : object.height) !== null && _object$height2 !== void 0 ? _object$height2 : 0)).toFixed(2);

        _onChange4({
          plot: _objectSpread(_objectSpread({}, object.plot), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, value), (0, _defineProperty2["default"])(_objectSpread3, "y", tValue), _objectSpread3))
        });

        break;

      default:
        _onChange4({
          plot: _objectSpread(_objectSpread({}, object.plot), {}, (0, _defineProperty2["default"])({}, key, value))
        });

        break;
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
    className: "gatewayPanel"
  }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Hardware Type",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: 0
    }
  }, object.hardwareType)), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Cluster Type*",
    rowInline: true,
    showIf: (0, _has["default"])(object, 'gatewayClusterType')
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    name: "gatewayClusterType",
    value: object.gatewayClusterType,
    options: _constants.clusterOptions,
    error: object === null || object === void 0 ? void 0 : (_object$errors = object.errors) === null || _object$errors === void 0 ? void 0 : _object$errors.gatewayClusterType,
    onChange: function onChange(e) {
      return _onChange4({
        gatewayClusterType: e.target.value
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Identifier Key*",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    name: "identifierKey",
    value: object.identifierKey,
    options: _constants.identifierKeys,
    error: object === null || object === void 0 ? void 0 : (_object$errors2 = object.errors) === null || _object$errors2 === void 0 ? void 0 : _object$errors2.identifierKey,
    onChange: function onChange(e) {
      return _onChange4({
        identifierKey: e.target.value
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Identifier Value*",
    showIf: (0, _has["default"])(object, 'identifierValue')
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "",
    value: object.identifierValue,
    onChange: function onChange(value) {
      return _onChange4({
        identifierValue: value
      });
    },
    error: object === null || object === void 0 ? void 0 : (_object$errors3 = object.errors) === null || _object$errors3 === void 0 ? void 0 : _object$errors3.identifierValue
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Physical Coords*",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object, 'x'),
    label: "x",
    type: "number",
    labelClass: "label",
    value: object._x,
    onChange: function onChange(value) {
      return onValueChange('_x', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object, 'y'),
    label: "y",
    type: "number",
    labelClass: "label",
    value: object._y,
    onChange: function onChange(value) {
      return onValueChange('_y', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object, 'z'),
    label: "z",
    type: "number",
    labelClass: "label",
    value: object._z,
    onChange: function onChange(value) {
      return onValueChange('_z', +value);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Plot Coords*",
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object.plot, 'x'),
    label: "x",
    type: "number",
    labelClass: "label",
    value: (_object$plot$_x = object.plot._x) !== null && _object$plot$_x !== void 0 ? _object$plot$_x : '',
    onChange: function onChange(value) {
      return onPlotValueChange('_x', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object.plot, 'y'),
    label: "y",
    type: "number",
    labelClass: "label",
    value: (_object$plot$_y = object.plot._y) !== null && _object$plot$_y !== void 0 ? _object$plot$_y : '',
    onChange: function onChange(value) {
      return onPlotValueChange('_y', +value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    showIf: (0, _has["default"])(object.plot, 'z'),
    label: "z",
    type: "number",
    labelClass: "label",
    value: (_object$plot$_z = object.plot._z) !== null && _object$plot$_z !== void 0 ? _object$plot$_z : '',
    onChange: function onChange(value) {
      return onPlotValueChange('_z', +value);
    }
  })));
};

GatewayPanel.propTypes = {
  object: _propTypes["default"].object,
  objects: _propTypes["default"].array,
  layoutDimension: _propTypes["default"].object,
  transformedLayout: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired
};
var _default = GatewayPanel;
exports["default"] = _default;