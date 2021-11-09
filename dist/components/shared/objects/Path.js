"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../constants");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("./Label"));

var _Vector2 = _interopRequireDefault(require("./Vector"));

var _BezierEditor = _interopRequireDefault(require("../editors/BezierEditor"));

var _initial;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Path = /*#__PURE__*/function (_Vector) {
  (0, _inherits2["default"])(Path, _Vector);

  var _super = _createSuper(Path);

  function Path() {
    (0, _classCallCheck2["default"])(this, Path);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Path, [{
    key: "buildPath",
    value: function buildPath(object) {
      var path = object.path,
          moveX = object.moveX,
          moveY = object.moveY,
          closed = object.closed;

      if (!path) {
        return "";
      }

      var curves = path.map(function (_ref, i) {
        var x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            x = _ref.x,
            y = _ref.y;
        x1 = x1 || x;
        x2 = x2 || x;
        y1 = y1 || y;
        y2 = y2 || y;
        return "C ".concat(x1, " ").concat(y1, ", ").concat(x2, " ").concat(y2, ", ").concat(x, " ").concat(y);
      }); // let curves = path.map(
      // 	({ x1, y1, x2, y2, x, y }, i) => `C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`
      // );

      var instructions = ["M ".concat(moveX, " ").concat(moveY)].concat((0, _toConsumableArray2["default"])(curves));

      if (closed) {
        instructions = [].concat((0, _toConsumableArray2["default"])(instructions), ['Z']);
      }

      return instructions.join('\n');
    }
  }, {
    key: "getTransformMatrix",
    value: function getTransformMatrix(_ref2) {
      var rotate = _ref2.rotate,
          x = _ref2.x,
          y = _ref2.y,
          moveX = _ref2.moveX,
          moveY = _ref2.moveY;
      return "\n      translate(".concat(x - moveX, " ").concat(y - moveY, ")\n      rotate(").concat(rotate, " ").concat(x, " ").concat(y, ")\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          object = _this$props.object,
          isSelected = _this$props.isSelected;

      var _this$getObjectAttrib = this.getObjectAttributes(),
          fill = _this$getObjectAttrib.fill,
          fillOpacity = _this$getObjectAttrib.fillOpacity,
          strokeWidth = _this$getObjectAttrib.strokeWidth,
          stroke = _this$getObjectAttrib.stroke,
          closed = _this$getObjectAttrib.closed,
          name = _this$getObjectAttrib.name,
          rotate = _this$getObjectAttrib.rotate,
          moveX = _this$getObjectAttrib.moveX,
          moveY = _this$getObjectAttrib.moveY,
          path = _this$getObjectAttrib.path,
          labelCoordinates = _this$getObjectAttrib.labelCoordinates,
          elementType = _this$getObjectAttrib.elementType,
          x = _this$getObjectAttrib.x,
          y = _this$getObjectAttrib.y,
          type = _this$getObjectAttrib.type,
          transform = _this$getObjectAttrib.transform,
          ref = _this$getObjectAttrib.ref,
          onMouseOver = _this$getObjectAttrib.onMouseOver,
          index = _this$getObjectAttrib.index;

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isSelected && /*#__PURE__*/_react["default"].createElement("path", {
        style: this.getStyle(object),
        d: this.buildPath(object) // common props
        ,
        fill: fill,
        fillOpacity: fillOpacity,
        stroke: 'rgb(138, 180, 248)',
        strokeWidth: +strokeWidth + 2,
        strokeOpacity: 0.6,
        transform: transform,
        strokeLinecap: "square",
        strokeMiterlimit: 8
      }), /*#__PURE__*/_react["default"].createElement("path", {
        style: this.getStyle(object),
        d: this.buildPath(object) // common props
        ,
        ref: ref,
        index: index,
        transform: transform,
        fill: closed ? fill : 'none',
        fillOpacity: fillOpacity,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: type == 'map' ? 0 : 4,
        onMouseOver: onMouseOver
      }), /*#__PURE__*/_react["default"].createElement(_Label["default"], {
        x: labelCoordinates.x,
        y: labelCoordinates.y,
        label: name
      }));
    }
  }]);
  return Path;
}(_Vector2["default"]);

exports["default"] = Path;
(0, _defineProperty2["default"])(Path, "meta", {
  initial: (_initial = {
    fill: '#ffffff',
    fillOpacity: 0,
    strokeWidth: 2,
    stroke: '#000000',
    closed: false,
    rotate: 0,
    moveX: 0,
    moveY: 0,
    path: []
  }, (0, _defineProperty2["default"])(_initial, "strokeWidth", 1), (0, _defineProperty2["default"])(_initial, "labelCoordinates", {
    x: 30,
    y: 30
  }), _initial),
  mode: _constants.modes.DRAW_PATH,
  icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: 'polygon',
    size: 30
  }),
  editor: _BezierEditor["default"]
});