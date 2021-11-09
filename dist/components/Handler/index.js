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

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ScaleAnchor(_ref) {
  var boundingBox = _ref.boundingBox,
      onMouseDown = _ref.onMouseDown;
  var style = {
    marginTop: boundingBox.height + 5,
    marginLeft: boundingBox.width + 5
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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
  (0, _inherits2["default"])(Handler, _Component);

  var _super = _createSuper(Handler);

  function Handler() {
    (0, _classCallCheck2["default"])(this, Handler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Handler, [{
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