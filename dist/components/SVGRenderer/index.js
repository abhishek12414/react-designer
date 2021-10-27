"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var SVGRenderer = /*#__PURE__*/function (_Component) {
  _inherits(SVGRenderer, _Component);

  var _super = _createSuper(SVGRenderer);

  function SVGRenderer() {
    _classCallCheck(this, SVGRenderer);

    return _super.apply(this, arguments);
  }

  _createClass(SVGRenderer, [{
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
          onMouseOver = _this$props.onMouseOver;
      var Renderer = this.getObjectComponent(object.elementType);
      return /*#__PURE__*/_react["default"].createElement(Renderer, {
        onRender: function onRender(ref) {
          return objectRefs[index] = ref;
        },
        onMouseOver: onMouseOver.bind(this, index),
        object: object,
        key: index,
        index: index
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

_defineProperty(SVGRenderer, "defaultProps", {
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