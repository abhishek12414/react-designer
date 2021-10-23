"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ScaleAnchor(_ref) {
  var boundingBox = _ref.boundingBox,
      onMouseDown = _ref.onMouseDown;
  var style = {
    marginTop: boundingBox.height + 5,
    marginLeft: boundingBox.width + 5
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      anchorHovered = _useState2[0],
      setAnchorHovered = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('anchor', anchorHovered && 'anchorHovered', 'scaleAnchor'),
    style: _objectSpread({}, style),
    onMouseOver: function onMouseOver() {
      return setAnchorHovered(true);
    },
    onMouseOut: function onMouseOut() {
      return setAnchorHovered(false);
    },
    onMouseDown: onMouseDown
  });
}

ScaleAnchor.propTypes = {
  boundingBox: _propTypes["default"].object.isRequired,
  onMouseDown: _propTypes["default"].func.isRequired
};

function RotateAnchor(_ref2) {
  var boundingBox = _ref2.boundingBox,
      onMouseDown = _ref2.onMouseDown;
  var style = {
    marginLeft: boundingBox.width + 5
  };

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorHovered = _useState4[0],
      setAnchorHovered = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('anchor', anchorHovered && 'anchorHovered', 'rotateAnchor'),
    style: _objectSpread({}, style),
    onMouseOver: function onMouseOver() {
      return setAnchorHovered(true);
    },
    onMouseOut: function onMouseOut() {
      return setAnchorHovered(false);
    },
    onMouseDown: onMouseDown
  });
}

RotateAnchor.propTypes = {
  boundingBox: _propTypes["default"].object.isRequired,
  onMouseDown: _propTypes["default"].func.isRequired
};

var Handler = /*#__PURE__*/function (_Component) {
  _inherits(Handler, _Component);

  var _super = _createSuper(Handler);

  function Handler() {
    _classCallCheck(this, Handler);

    return _super.apply(this, arguments);
  }

  _createClass(Handler, [{
    key: "onMouseDown",
    value: function onMouseDown(event) {
      // event.preventDefault();
      if (event.target.classList.contains('handler')) {
        this.props.onDrag(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          boundingBox = _this$props.boundingBox,
          canRotate = _this$props.canRotate,
          canResize = _this$props.canResize,
          onMouseLeave = _this$props.onMouseLeave,
          onDoubleClick = _this$props.onDoubleClick,
          onResize = _this$props.onResize,
          onRotate = _this$props.onRotate;

      var handlerStyle = _objectSpread(_objectSpread({}, boundingBox), {}, {
        width: boundingBox.width + 10,
        height: boundingBox.height + 10,
        left: boundingBox.left - 5,
        top: boundingBox.top - 5,
        transform: "rotate(".concat(boundingBox.rotate, "deg)")
      });

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'handler',
        style: handlerStyle,
        onMouseLeave: onMouseLeave,
        onDoubleClick: onDoubleClick,
        onMouseDown: this.onMouseDown.bind(this)
      }, canRotate && /*#__PURE__*/_react["default"].createElement(RotateAnchor, {
        onMouseDown: onRotate,
        boundingBox: boundingBox
      }), canResize && /*#__PURE__*/_react["default"].createElement(ScaleAnchor, {
        onMouseDown: onResize,
        boundingBox: boundingBox
      }));
    }
  }]);

  return Handler;
}(_react.Component);

Handler.propTypes = {
  canRotate: _propTypes["default"].bool,
  canResize: _propTypes["default"].bool,
  boundingBox: _propTypes["default"].object.isRequired,
  onDrag: _propTypes["default"].func.isRequired,
  onResize: _propTypes["default"].func.isRequired,
  onRotate: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func.isRequired,
  onDoubleClick: _propTypes["default"].func.isRequired
};
var _default = Handler;
exports["default"] = _default;