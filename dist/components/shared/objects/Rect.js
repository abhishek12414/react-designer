"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("./Label"));

var _Vector2 = _interopRequireDefault(require("./Vector"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Rect = /*#__PURE__*/function (_Vector) {
  (0, _inherits2["default"])(Rect, _Vector);

  var _super = _createSuper(Rect);

  function Rect() {
    (0, _classCallCheck2["default"])(this, Rect);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Rect, [{
    key: "render",
    value: function render() {
      var isSelected = this.props.isSelected;

      var _this$getObjectAttrib = this.getObjectAttributes(),
          width = _this$getObjectAttrib.width,
          height = _this$getObjectAttrib.height,
          fill = _this$getObjectAttrib.fill,
          fillOpacity = _this$getObjectAttrib.fillOpacity,
          strokeWidth = _this$getObjectAttrib.strokeWidth,
          stroke = _this$getObjectAttrib.stroke,
          radius = _this$getObjectAttrib.radius,
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
          index = _this$getObjectAttrib.index,
          isHidden = _this$getObjectAttrib.isHidden;

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isSelected && /*#__PURE__*/_react["default"].createElement("rect", {
        className: isHidden ? 'hidden' : '',
        x: x,
        y: y,
        width: width,
        height: height // common props
        ,
        transform: transform,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: 'rgb(138, 180, 248)',
        strokeWidth: +strokeWidth + 2,
        strokeOpacity: 0.6,
        strokeLinecap: "square",
        strokeMiterlimit: 8
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        className: isHidden ? 'hidden' : '',
        x: x,
        y: y,
        width: width,
        height: height // common props
        ,
        ref: ref,
        index: index,
        transform: transform,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: type == 'map' ? 0 : 4,
        onMouseOver: onMouseOver
      }), /*#__PURE__*/_react["default"].createElement(_Label["default"], {
        className: isHidden ? 'hidden' : '',
        x: labelCoordinates.x,
        y: labelCoordinates.y,
        label: name || ''
      }));
    }
  }]);
  return Rect;
}(_Vector2["default"]);

exports["default"] = Rect;
(0, _defineProperty2["default"])(Rect, "meta", {
  icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: 'rect',
    size: 24
  }),
  initial: {
    fill: '#ffffff',
    fillOpacity: 0,
    strokeWidth: 2,
    stroke: '#000000',
    isHidden: false,
    // radius: 0,
    width: 5,
    height: 5,
    x: 0,
    y: 0,
    rotate: 0,
    labelCoordinates: {
      x: 0,
      y: 0
    },
    // userCoords
    _width: 0,
    _height: 0,
    _x: 0,
    _y: 0,
    _labelCoordinates: {
      x: 30,
      y: 30
    }
  }
});