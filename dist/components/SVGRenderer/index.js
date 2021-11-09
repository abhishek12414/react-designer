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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SVGRenderer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SVGRenderer, _Component);

  var _super = _createSuper(SVGRenderer);

  function SVGRenderer() {
    (0, _classCallCheck2["default"])(this, SVGRenderer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SVGRenderer, [{
    key: "getObjectComponent",
    value: function getObjectComponent(elementType) {
      var objectTypes = this.props.objectTypes;
      return objectTypes[elementType];
    }
  }, {
    key: "renderObject",
    value: function renderObject(object, index) {
      var _this$props = this.props,
          objectRefs = _this$props.objectRefs,
          onMouseOver = _this$props.onMouseOver,
          selectedObjectIndex = _this$props.selectedObjectIndex;
      var Renderer = this.getObjectComponent(object.elementType);
      return /*#__PURE__*/_react["default"].createElement(Renderer, {
        key: index,
        index: index,
        object: object,
        isSelected: index === selectedObjectIndex,
        onRender: function onRender(ref) {
          return objectRefs[index] = ref;
        },
        onMouseOver: onMouseOver.bind(this, index)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          background = _this$props2.background,
          backgroundImage = _this$props2.backgroundImage,
          backgroundSize = _this$props2.backgroundSize,
          backgroundRepeat = _this$props2.backgroundRepeat,
          objects = _this$props2.objects,
          svgStyle = _this$props2.svgStyle,
          canvas = _this$props2.canvas,
          onMouseDown = _this$props2.onMouseDown,
          onRender = _this$props2.onRender;
      var width = canvas.width,
          height = canvas.height,
          canvasOffsetX = canvas.canvasOffsetX,
          canvasOffsetY = canvas.canvasOffsetY;

      var style = _objectSpread(_objectSpread({}, background ? {
        backgroundColor: background
      } : getBackgroundImage(backgroundImage, backgroundSize, backgroundRepeat)), _objectSpread(_objectSpread({}, svgStyle), {}, {
        marginTop: canvasOffsetY,
        marginLeft: canvasOffsetX
      }));

      return /*#__PURE__*/_react["default"].createElement("svg", {
        onMouseDown: onMouseDown,
        ref: onRender,
        width: width,
        height: height,
        style: style // isroot={true}

      }, objects.map(this.renderObject.bind(this)));
    }
  }]);
  return SVGRenderer;
}(_react.Component);

(0, _defineProperty2["default"])(SVGRenderer, "defaultProps", {
  onMouseOver: function onMouseOver() {}
});

var getBackgroundImage = function getBackgroundImage() {
  var backgroundImage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var backgroundSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  var backgroundRepeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'repeat';
  return {
    backgroundImage: backgroundImage ? "url(".concat(backgroundImage, ")") : 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5' + 'vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0' + 'PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9I' + 'iNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIG' + 'ZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
    backgroundSize: backgroundSize,
    backgroundRepeat: backgroundRepeat
  };
};

var _default = SVGRenderer;
exports["default"] = _default;