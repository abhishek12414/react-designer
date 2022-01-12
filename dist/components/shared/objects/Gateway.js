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

var _ = require(".");

var _track = _interopRequireDefault(require("../../../assets/svg/track.svg"));

var _wifi = _interopRequireDefault(require("../../../assets/svg/wifi.svg"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Gateway = /*#__PURE__*/function (_Vector) {
  (0, _inherits2["default"])(Gateway, _Vector);

  var _super = _createSuper(Gateway);

  function Gateway() {
    (0, _classCallCheck2["default"])(this, Gateway);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Gateway, [{
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
          rotate = _this$getObjectAttrib.rotate,
          x = _this$getObjectAttrib.x,
          y = _this$getObjectAttrib.y,
          plot = _this$getObjectAttrib.plot,
          elementType = _this$getObjectAttrib.elementType,
          type = _this$getObjectAttrib.type,
          transform = _this$getObjectAttrib.transform,
          ref = _this$getObjectAttrib.ref,
          onMouseOver = _this$getObjectAttrib.onMouseOver,
          index = _this$getObjectAttrib.index,
          isHidden = _this$getObjectAttrib.isHidden;

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("image", {
        className: isHidden ? 'hidden' : '',
        width: 18,
        height: 18,
        href: _track["default"],
        x: plot.x,
        y: plot.y
      }), /*#__PURE__*/_react["default"].createElement("image", {
        className: isHidden ? 'hidden' : '',
        width: 18,
        height: 18,
        href: _wifi["default"],
        x: x,
        y: y // common props
        ,
        ref: ref,
        onMouseOver: onMouseOver,
        transform: transform,
        index: index
      }));
    }
  }]);
  return Gateway;
}(_.Vector);

exports["default"] = Gateway;
(0, _defineProperty2["default"])(Gateway, "meta", {
  icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: 'wifi',
    size: 24
  }),
  initial: {
    isHidden: false,
    width: 18,
    height: 18,
    rotate: 0,
    x: 0,
    y: 0,
    z: 0,
    name: '',
    macId: '',
    gatewayClusterType: '',
    clusterId: '',
    plot: {
      x: 0,
      y: 0,
      z: 0
    }
  }
});