"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SVGRenderer = function SVGRenderer(_ref) {
  var canvas = _ref.canvas,
      objects = _ref.objects,
      objectRefs = _ref.objectRefs,
      objectTypes = _ref.objectTypes,
      selectedObjectIndex = _ref.selectedObjectIndex,
      svgStyle = _ref.svgStyle,
      background = _ref.background,
      backgroundImage = _ref.backgroundImage,
      onRender = _ref.onRender,
      _onMouseOver = _ref.onMouseOver,
      onMouseDown = _ref.onMouseDown;
  var width = canvas.width,
      height = canvas.height,
      canvasOffsetX = canvas.canvasOffsetX,
      canvasOffsetY = canvas.canvasOffsetY;

  var renderObject = function renderObject(object, index) {
    var Renderer = objectTypes[object.elementType];
    return /*#__PURE__*/_react["default"].createElement(Renderer, {
      key: index,
      index: index,
      object: object,
      isSelected: index === selectedObjectIndex,
      onRender: function onRender(ref) {
        return objectRefs[index] = ref;
      },
      onMouseOver: function onMouseOver() {
        return _onMouseOver(index);
      }
    });
  };

  var style = _objectSpread(_objectSpread({}, background ? {
    backgroundColor: background
  } : getBackgroundImage(backgroundImage)), _objectSpread(_objectSpread({}, svgStyle), {}, {
    marginTop: canvasOffsetY,
    marginLeft: canvasOffsetX
  }));

  return /*#__PURE__*/_react["default"].createElement("svg", {
    ref: onRender,
    style: style,
    width: width,
    height: height,
    onMouseDown: onMouseDown
  }, objects.map(renderObject));
};

var getBackgroundImage = function getBackgroundImage() {
  var backgroundImage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    backgroundImage: backgroundImage ? "url(".concat(backgroundImage, ")") : 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  };
};

SVGRenderer.propTypes = {
  canvas: _propTypes["default"].object,
  objects: _propTypes["default"].array,
  svgStyle: _propTypes["default"].object,
  background: _propTypes["default"].string,
  objectRefs: _propTypes["default"].object,
  objectTypes: _propTypes["default"].object,
  backgroundImage: _propTypes["default"].string,
  selectedObjectIndex: _propTypes["default"].number,
  onMouseOver: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onRender: _propTypes["default"].func
};
SVGRenderer.defaultProps = {
  onMouseOver: function onMouseOver() {}
};
var _default = SVGRenderer;
exports["default"] = _default;