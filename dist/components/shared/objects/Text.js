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

var _Vector2 = _interopRequireDefault(require("./Vector"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Text = /*#__PURE__*/function (_Vector) {
  (0, _inherits2["default"])(Text, _Vector);

  var _super = _createSuper(Text);

  function Text() {
    (0, _classCallCheck2["default"])(this, Text);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Text, [{
    key: "getStyle",
    value: function getStyle() {
      var object = this.props.object;
      return {
        dominantBaseline: 'central',
        fontWeight: object.fontWeight,
        fontStyle: object.fontStyle,
        textDecoration: object.textDecoration,
        WebkitUserSelect: 'none'
      };
    }
  }, {
    key: "getTransformMatrix",
    value: function getTransformMatrix(_ref) {
      var rotate = _ref.rotate,
          x = _ref.x,
          y = _ref.y;
      return "rotate(".concat(rotate, " ").concat(x, " ").concat(y, ")");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getObjectAttrib = this.getObjectAttributes(),
          text = _this$getObjectAttrib.text,
          rotate = _this$getObjectAttrib.rotate,
          fontWeight = _this$getObjectAttrib.fontWeight,
          fontStyle = _this$getObjectAttrib.fontStyle,
          textDecoration = _this$getObjectAttrib.textDecoration,
          fill = _this$getObjectAttrib.fill,
          fillOpacity = _this$getObjectAttrib.fillOpacity,
          fontSize = _this$getObjectAttrib.fontSize,
          fontFamily = _this$getObjectAttrib.fontFamily,
          elementType = _this$getObjectAttrib.elementType,
          x = _this$getObjectAttrib.x,
          y = _this$getObjectAttrib.y,
          type = _this$getObjectAttrib.type,
          transform = _this$getObjectAttrib.transform,
          ref = _this$getObjectAttrib.ref,
          onMouseOver = _this$getObjectAttrib.onMouseOver,
          index = _this$getObjectAttrib.index,
          isHidden = _this$getObjectAttrib.isHidden;

      return /*#__PURE__*/_react["default"].createElement("text", {
        style: this.getStyle(),
        className: isHidden ? 'hidden' : '',
        textAnchor: "middle",
        fontSize: fontSize,
        fontFamily: fontFamily,
        x: x,
        y: y // common props
        ,
        rotate: rotate,
        fill: fill,
        fillOpacity: fillOpacity,
        ref: ref,
        onMouseOver: onMouseOver,
        transform: transform,
        index: index
      }, text);
    }
  }]);
  return Text;
}(_Vector2["default"]);

exports["default"] = Text;
(0, _defineProperty2["default"])(Text, "meta", {
  icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: 'text',
    size: 24
  }),
  initial: {
    text: 'Hello',
    rotate: 0,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    fill: 'black',
    fillOpacity: 1,
    fontSize: 50,
    fontFamily: 'Helvetica',
    isHidden: false
  }
});