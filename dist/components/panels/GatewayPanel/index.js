"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _constants = require("../../../constants");

var _Column = _interopRequireDefault(require("../Column"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var _Select = _interopRequireDefault(require("../../widgets/Select"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GatewayPanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(GatewayPanel, _React$Component);

  var _super = _createSuper(GatewayPanel);

  function GatewayPanel() {
    (0, _classCallCheck2["default"])(this, GatewayPanel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GatewayPanel, [{
    key: "onPlotValueChange",
    value: function onPlotValueChange(key, value) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          object = _this$props.object;
      onChange('plot', _objectSpread(_objectSpread({}, object.plot), {}, (0, _defineProperty2["default"])({}, key, value)));
    }
  }, {
    key: "getMapCluster",
    value: function getMapCluster() {
      var options = this.props.objects.filter(function (_ref) {
        var type = _ref.type,
            name = _ref.name;
        return type == 'map' && name !== '';
      }).map(function (_ref2) {
        var name = _ref2.name,
            _id = _ref2._id;
        return {
          label: name,
          value: _id || name
        };
      });
      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var object = this.props.object;

      if (object.elementType !== _constants.TYPES.GATEWAY) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Mac ID"
      }, (0, _has["default"])(object, 'macId') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "Mac ID",
        value: object.macId,
        onChange: function onChange(value) {
          return _this.props.onChange('macId', value);
        }
      })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Cluster Type",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, (0, _has["default"])(object, 'gatewayClusterType') && /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        name: "gatewayClusterType",
        value: object.gatewayClusterType,
        options: _constants.clusterOptions,
        onChange: function onChange(e) {
          return _this.props.onChange('gatewayClusterType', e.target.value);
        }
      }))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Physical Coords",
        inline: true
      }, (0, _has["default"])(object, 'x') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "x",
        type: "number",
        value: object.x,
        onChange: function onChange(value) {
          return _this.props.onChange('x', value);
        }
      }), (0, _has["default"])(object, 'y') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "y",
        type: "number",
        value: object.y,
        onChange: function onChange(value) {
          return _this.props.onChange('y', value);
        }
      }), (0, _has["default"])(object, 'z') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "z",
        type: "number",
        value: object.z,
        onChange: function onChange(value) {
          return _this.props.onChange('z', value);
        }
      })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Plot Coords",
        inline: true
      }, (0, _has["default"])(object.plot, 'x') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "x",
        type: "number",
        value: object.plot.x,
        onChange: function onChange(value) {
          return _this.onPlotValueChange('x', value);
        }
      }), (0, _has["default"])(object.plot, 'y') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "y",
        type: "number",
        value: object.plot.y,
        onChange: function onChange(value) {
          return _this.onPlotValueChange('y', value);
        }
      }), (0, _has["default"])(object.plot, 'z') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "z",
        type: "number",
        value: object.plot.z,
        onChange: function onChange(value) {
          return _this.onPlotValueChange('z', value);
        }
      })));
    }
  }]);
  return GatewayPanel;
}(_react["default"].Component);

GatewayPanel.propTypes = {
  object: _propTypes["default"].object,
  objects: _propTypes["default"].array,
  onChange: _propTypes["default"].func.isRequired
};
var _default = GatewayPanel;
exports["default"] = _default;