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

var Image = /*#__PURE__*/function (_Vector) {
  (0, _inherits2["default"])(Image, _Vector);

  var _super = _createSuper(Image);

  function Image() {
    (0, _classCallCheck2["default"])(this, Image);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Image, [{
    key: "render",
    value: function render() {
      var _this$getObjectAttrib = this.getObjectAttributes(),
          href = _this$getObjectAttrib.href,
          width = _this$getObjectAttrib.width,
          height = _this$getObjectAttrib.height,
          elementType = _this$getObjectAttrib.elementType,
          x = _this$getObjectAttrib.x,
          y = _this$getObjectAttrib.y,
          transform = _this$getObjectAttrib.transform,
          ref = _this$getObjectAttrib.ref,
          onMouseOver = _this$getObjectAttrib.onMouseOver,
          fillOpacity = _this$getObjectAttrib.fillOpacity,
          isHidden = _this$getObjectAttrib.isHidden;

      return /*#__PURE__*/_react["default"].createElement("image", {
        className: isHidden ? 'hidden' : '',
        ref: ref,
        href: href,
        width: width,
        height: height,
        opacity: fillOpacity,
        transform: transform,
        onMouseOver: onMouseOver
      });
    }
  }]);
  return Image;
}(_Vector2["default"]);

exports["default"] = Image;
(0, _defineProperty2["default"])(Image, "meta", {
  icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: 'image',
    size: 24
  }),
  initial: {
    width: 100,
    height: 100,
    fillOpacity: 1,
    isHidden: false,
    // Just a simple base64-encoded outline
    href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhSURBVHgBtYmxDQAADII8lv9faBNH4yoJLAi4ppxgMZoPoxQrXYyeEfoAAAAASUVORK5CYII='
  }
});