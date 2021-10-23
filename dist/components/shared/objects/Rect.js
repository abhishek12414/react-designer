"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("./Label"));

var _Vector2 = _interopRequireDefault(require("./Vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rect = /*#__PURE__*/function (_Vector) {
  _inherits(Rect, _Vector);

  var _super = _createSuper(Rect);

  function Rect() {
    _classCallCheck(this, Rect);

    return _super.apply(this, arguments);
  }

  _createClass(Rect, [{
    key: "render",
    value: function render() {
      var _this$getObjectAttrib = this.getObjectAttributes(),
          width = _this$getObjectAttrib.width,
          height = _this$getObjectAttrib.height,
          fill = _this$getObjectAttrib.fill,
          fillOpacity = _this$getObjectAttrib.fillOpacity,
          strokeWidth = _this$getObjectAttrib.strokeWidth,
          stroke = _this$getObjectAttrib.stroke,
          radius = _this$getObjectAttrib.radius,
          blendMode = _this$getObjectAttrib.blendMode,
          rotate = _this$getObjectAttrib.rotate,
          labelCoordinates = _this$getObjectAttrib.labelCoordinates,
          elementType = _this$getObjectAttrib.elementType,
          x = _this$getObjectAttrib.x,
          y = _this$getObjectAttrib.y,
          name = _this$getObjectAttrib.name,
          type = _this$getObjectAttrib.type,
          transform = _this$getObjectAttrib.transform,
          ref = _this$getObjectAttrib.ref,
          onMouseOver = _this$getObjectAttrib.onMouseOver,
          index = _this$getObjectAttrib.index;

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("rect", {
        style: this.getStyle(),
        x: x,
        y: y,
        width: width,
        height: height // common props
        ,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: type == 'map' ? 0 : 4,
        ref: ref,
        onMouseOver: onMouseOver,
        transform: transform,
        index: index
      }), /*#__PURE__*/_react["default"].createElement(_Label["default"], {
        x: labelCoordinates.x,
        y: labelCoordinates.y,
        label: name || ''
      }));
    }
  }]);

  return Rect;
}(_Vector2["default"]);

exports["default"] = Rect;

_defineProperty(Rect, "meta", {
  icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: 'rect',
    size: 30
  }),
  initial: {
    width: 5,
    height: 5,
    fill: '#000',
    fillOpacity: 0.3,
    strokeWidth: 1,
    stroke: 'rgba(0,0,0,1)',
    radius: 0,
    blendMode: 'normal',
    rotate: 0,
    labelCoordinates: {
      x: 30,
      y: 30
    }
  }
});