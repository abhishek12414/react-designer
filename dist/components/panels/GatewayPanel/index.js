"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _constants = require("../../../constants");

var _Column = _interopRequireDefault(require("../Column"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var _Select = _interopRequireDefault(require("../../widgets/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GatewayPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(GatewayPanel, _React$Component);

  var _super = _createSuper(GatewayPanel);

  function GatewayPanel() {
    _classCallCheck(this, GatewayPanel);

    return _super.apply(this, arguments);
  }

  _createClass(GatewayPanel, [{
    key: "onPlotValueChange",
    value: function onPlotValueChange(key, value) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          object = _this$props.object;
      onChange('plot', _objectSpread(_objectSpread({}, object.plot), {}, _defineProperty({}, key, value)));
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
        onChange: function onChange(e) {
          return _this.props.onChange('macId', e.target.value);
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
        label: "Cluster",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, (0, _has["default"])(object, 'clusterId') && /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        name: "clusterId",
        options: this.getMapCluster(),
        value: object.clusterId,
        onChange: function onChange(e) {
          return _this.props.onChange('clusterId', e.target.value);
        }
      }))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Physical Coords",
        inline: true
      }, (0, _has["default"])(object, 'x') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
        label: "x",
        type: "number",
        value: object.x,
        onChange: function onChange(value) {
          return _this.props.onChange('x', value);
        }
      }), (0, _has["default"])(object, 'y') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
        label: "y",
        type: "number",
        value: object.y,
        onChange: function onChange(value) {
          return _this.props.onChange('y', value);
        }
      }), (0, _has["default"])(object, 'z') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
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