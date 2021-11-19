"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ScaleAnchor = _interopRequireDefault(require("./ScaleAnchor"));

var _RotateAnchor = _interopRequireDefault(require("./RotateAnchor"));

require("./index.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Handler = function Handler(_ref) {
  var boundingBox = _ref.boundingBox,
      canRotate = _ref.canRotate,
      canResize = _ref.canResize,
      onMouseLeave = _ref.onMouseLeave,
      onDoubleClick = _ref.onDoubleClick,
      onResize = _ref.onResize,
      onRotate = _ref.onRotate,
      onDrag = _ref.onDrag;

  var onMouseDown = function onMouseDown(event) {
    // event.preventDefault();
    if (event.target.classList.contains('handler')) {
      onDrag(event);
    }
  };

  var handlerStyle = _objectSpread(_objectSpread({}, boundingBox), {}, {
    top: boundingBox.top - 5,
    left: boundingBox.left - 5,
    width: boundingBox.width + 10,
    height: boundingBox.height + 10,
    transform: "rotate(".concat(boundingBox.rotate, "deg)")
  });

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "handler",
    style: handlerStyle,
    onMouseDown: onMouseDown,
    onMouseLeave: onMouseLeave,
    onDoubleClick: onDoubleClick
  }, canRotate && /*#__PURE__*/_react["default"].createElement(_RotateAnchor["default"], {
    boundingBox: boundingBox,
    onMouseDown: onRotate
  }), canResize && /*#__PURE__*/_react["default"].createElement(_ScaleAnchor["default"], {
    boundingBox: boundingBox,
    onMouseDown: onResize
  }));
};

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