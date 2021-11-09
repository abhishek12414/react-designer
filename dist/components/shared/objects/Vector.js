"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _panels = require("../../panels");

var _excluded = ["object", "onRender"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Vector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Vector, _Component);

  var _super = _createSuper(Vector);

  function Vector() {
    (0, _classCallCheck2["default"])(this, Vector);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Vector, [{
    key: "getStyle",
    value: function getStyle() {
      var object = this.props.object;
      return {
        mixBlendMode: object.blendMode
      };
    }
  }, {
    key: "getTransformMatrix",
    value: function getTransformMatrix(_ref) {
      var rotate = _ref.rotate,
          x = _ref.x,
          y = _ref.y,
          width = _ref.width,
          height = _ref.height;

      if (rotate) {
        var centerX = width / 2 + x;
        var centerY = height / 2 + y;
        return "rotate(".concat(rotate, " ").concat(centerX, " ").concat(centerY, ")");
      }
    }
  }, {
    key: "getObjectAttributes",
    value: function getObjectAttributes() {
      var _this$props = this.props,
          object = _this$props.object,
          onRender = _this$props.onRender,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return _objectSpread(_objectSpread({}, object), {}, {
        transform: this.getTransformMatrix(object),
        ref: onRender
      }, rest);
    }
  }]);
  return Vector;
}(_react.Component);

exports["default"] = Vector;
(0, _defineProperty2["default"])(Vector, "panels", [_panels.SizePanel, _panels.TextPanel, _panels.StylePanel, _panels.GatewayPanel, _panels.ArrangePanel]);