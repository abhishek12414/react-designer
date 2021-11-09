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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _SVGRenderer = _interopRequireDefault(require("./components/SVGRenderer"));

var _objects = require("./components/shared/objects");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Preview = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Preview, _Component);

  var _super = _createSuper(Preview);

  function Preview() {
    (0, _classCallCheck2["default"])(this, Preview);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Preview, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.objectRefs = {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          objects = _this$props.objects,
          objectTypes = _this$props.objectTypes,
          _this$props$responsiv = _this$props.responsive,
          responsive = _this$props$responsiv === void 0 ? false : _this$props$responsiv;

      var style = _objectSpread(_objectSpread(_objectSpread({}, styles.container), this.props.style), {}, {
        width: responsive ? '100%' : width,
        height: responsive ? '100%' : height,
        padding: 0
      });

      var canvas = {
        width: responsive ? '100%' : width,
        height: responsive ? '100%' : height,
        canvasWidth: responsive ? '100%' : width,
        canvasHeight: responsive ? '100%' : height
      };

      if (responsive) {
        objects = objects.map(function (object) {
          return _objectSpread(_objectSpread({}, object), {}, {
            width: object.width / width * 100 + '%',
            height: object.height / height * 100 + '%',
            x: object.x / width * 100 + '%',
            y: object.y / height * 100 + '%'
          });
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'container',
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_SVGRenderer["default"], {
        width: width,
        height: height,
        objects: objects,
        objectRefs: this.objectRefs,
        objectTypes: objectTypes,
        onRender: function onRender(ref) {
          return _this.svgElement = ref;
        },
        canvas: canvas
      }));
    }
  }]);
  return Preview;
}(_react.Component);

(0, _defineProperty2["default"])(Preview, "defaultProps", {
  objectTypes: {
    text: _objects.Text,
    rect: _objects.Rect,
    ellipse: _objects.Ellipse,
    polygon: _objects.Path,
    image: _objects.Image
  }
});
var styles = {
  container: {
    position: 'relative'
  }
};
var _default = Preview;
exports["default"] = _default;