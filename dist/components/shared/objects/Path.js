"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../constants");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("./Label"));

var _Vector2 = _interopRequireDefault(require("./Vector"));

var _BezierEditor = _interopRequireDefault(require("../editors/BezierEditor"));

var _initial;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Path = /*#__PURE__*/function (_Vector) {
  _inherits(Path, _Vector);

  var _super = _createSuper(Path);

  function Path() {
    _classCallCheck(this, Path);

    return _super.apply(this, arguments);
  }

  _createClass(Path, [{
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

      var instructions = ["M ".concat(moveX, " ").concat(moveY)].concat(_toConsumableArray(curves));

      if (closed) {
        instructions = [].concat(_toConsumableArray(instructions), ['Z']);
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
      var object = this.props.object;

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

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("path", {
        style: this.getStyle(object),
        d: this.buildPath(object) // common props
        ,
        fill: closed ? fill : 'none',
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
        label: name
      }));
    }
  }]);

  return Path;
}(_Vector2["default"]);

exports["default"] = Path;

_defineProperty(Path, "meta", {
  initial: (_initial = {
    fill: '#ffffff',
    fillOpacity: 0,
    strokeWidth: 1,
    stroke: '#000000',
    closed: false,
    rotate: 0,
    moveX: 0,
    moveY: 0,
    path: []
  }, _defineProperty(_initial, "strokeWidth", 1), _defineProperty(_initial, "labelCoordinates", {
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