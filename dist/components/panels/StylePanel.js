"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _Column = _interopRequireDefault(require("./Column"));

var _Select = _interopRequireDefault(require("../widgets/Select"));

var _constants = require("../../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StylePanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StylePanel, _Component);

  var _super = _createSuper(StylePanel);

  function StylePanel() {
    (0, _classCallCheck2["default"])(this, StylePanel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StylePanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          object = _this$props.object,
          onChange = _this$props.onChange;

      if (object.elementType === _constants.TYPES.GATEWAY) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], null, (0, _has["default"])(object, 'fill') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Fill",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        type: "color",
        value: object.fill,
        onChange: onChange.bind(this, 'fill')
      })), (0, _has["default"])(object, 'fillOpacity') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Opacity",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        type: "number",
        value: object.fillOpacity,
        style: {
          width: 30
        },
        onChange: onChange.bind(this, 'fillOpacity')
      })), (0, _has["default"])(object, 'stroke', 'width') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Stroke",
        inline: true
      }, (0, _has["default"])(object, 'stroke') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        type: "color",
        value: object.stroke,
        onChange: onChange.bind(this, 'stroke')
      }), (0, _has["default"])(object, 'strokeWidth') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "width",
        type: "number",
        value: object.strokeWidth,
        style: {
          width: 30
        },
        onChange: onChange.bind(this, 'strokeWidth')
      }), (0, _has["default"])(object, 'radius') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        showIf: (0, _has["default"])(object, 'radius'),
        label: "radius",
        type: "number",
        value: object.radius,
        onChange: onChange.bind(this, 'radius')
      })));
    }
  }]);
  return StylePanel;
}(_react.Component);

StylePanel.propTypes = {
  object: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired
};
var _default = StylePanel;
exports["default"] = _default;