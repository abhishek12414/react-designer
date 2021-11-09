"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

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

var BezierEditor = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(BezierEditor, _Component);

  var _super = _createSuper(BezierEditor);

  function BezierEditor() {
    var _this;

    (0, _classCallCheck2["default"])(this, BezierEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mode: 'source'
    });
    return _this;
  }

  (0, _createClass2["default"])(BezierEditor, [{
    key: "getMouseCoords",
    value: function getMouseCoords(event) {
      var _this$props = this.props,
          object = _this$props.object,
          offset = _this$props.offset;
      return {
        x: event.clientX - offset.x - (object.x - object.moveX),
        y: event.clientY - offset.y - (object.y - object.moveY)
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount(props) {
      var object = this.props.object;

      if (!object.path.length) {
        this.props.onUpdate({
          path: [{
            x1: object.x,
            y1: object.y
          }],
          moveX: object.x,
          moveY: object.y
        });
      } else {
        this.setState({
          mode: 'edit'
        });
      }
    }
  }, {
    key: "getCurrentPath",
    value: function getCurrentPath() {
      var path = this.props.object.path;
      return path[path.length - 1];
    }
  }, {
    key: "updatePath",
    value: function updatePath(updates, index) {
      var path = this.props.object.path;
      var current = path[index];
      this.props.onUpdate({
        path: [].concat((0, _toConsumableArray2["default"])(path.slice(0, index)), [_objectSpread(_objectSpread({}, current), updates)], (0, _toConsumableArray2["default"])(path.slice(index + 1)))
      });
    }
  }, {
    key: "updateCurrentPath",
    value: function updateCurrentPath(updates) {
      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var path = this.props.object.path;
      var current = this.getCurrentPath();
      this.props.onUpdate({
        closed: close,
        path: [].concat((0, _toConsumableArray2["default"])(path.slice(0, path.length - 1)), [_objectSpread(_objectSpread({}, current), updates)])
      });
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var mode = this.state.mode;
      var currentPath = this.getCurrentPath();
      var mouse = this.getMouseCoords(event);
      var object = this.props.object;
      var moveX = object.moveX,
          moveY = object.moveY;
      var x = mouse.x,
          y = mouse.y;
      var snapToInitialVertex = this.isCollides(moveX, moveY, x, y);

      if (snapToInitialVertex) {
        x = moveX;
        y = moveY;
      }

      if (mode === 'source') {
        this.updateCurrentPath({
          x1: mouse.x,
          y1: mouse.y
        });
      }

      if (mode === 'target') {
        this.updateCurrentPath({
          x2: x,
          y2: y,
          x: x,
          y: y
        });
      }

      if (mode === 'connect') {
        this.updateCurrentPath({
          x: x,
          y: y
        });
      }

      if (mode === 'target' || mode === 'connect') {
        this.setState({
          closePath: snapToInitialVertex
        });
      }

      if (mode === 'move') {
        var _this$updatePath;

        var _this$state = this.state,
            movedPathIndex = _this$state.movedPathIndex,
            movedTargetX = _this$state.movedTargetX,
            movedTargetY = _this$state.movedTargetY;
        this.updatePath((_this$updatePath = {}, (0, _defineProperty2["default"])(_this$updatePath, movedTargetX, x), (0, _defineProperty2["default"])(_this$updatePath, movedTargetY, y), _this$updatePath), movedPathIndex);
      }

      if (mode === 'moveInitial') {
        this.props.onUpdate({
          moveX: x,
          moveY: y
        });
      }
    }
  }, {
    key: "isCollides",
    value: function isCollides(x1, y1, x2, y2) {
      var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
      var xd = x1 - x2;
      var yd = y1 - y2;
      var wt = radius * 2;
      return xd * xd + yd * yd <= wt * wt;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (this.state.closePath) {
        return this.closePath();
      }

      if (event.target.tagName === 'svg') {
        return this.props.onClose();
      }

      var mode = this.state.mode;

      if (mode === 'target') {
        this.setState({
          mode: 'connect'
        });
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      var mode = this.state.mode;
      var path = this.props.object.path;
      var mouse = this.getMouseCoords(event);
      var currentPath = this.getCurrentPath();

      if (this.state.closePath) {
        return this.closePath();
      }

      if (mode === 'source') {
        this.setState({
          mode: 'target'
        });
      }

      if (mode === 'connect') {
        this.setState({
          mode: 'target'
        });
        this.props.onUpdate({
          path: [].concat((0, _toConsumableArray2["default"])(path), [{
            x1: currentPath.x + (currentPath.x - currentPath.x2),
            y1: currentPath.y + (currentPath.y - currentPath.y2),
            x2: mouse.x,
            y2: mouse.y,
            x: mouse.x,
            y: mouse.y
          }])
        });
      }

      if (mode === 'move' || mode === 'moveInitial') {
        this.setState({
          mode: 'edit'
        });
      }
    }
  }, {
    key: "getCurrentPoint",
    value: function getCurrentPoint(pathIndex) {
      var state = this.state;
      var object = this.props.object;

      if (pathIndex === 0) {
        return {
          x: object.moveX,
          y: object.moveY
        };
      } else {
        var path = state.path[pathIndex - 1];
        return {
          x: path.x,
          y: path.y
        };
      }
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this.setState({
        mode: null
      });
      this.props.onClose();
      this.updateCurrentPath({
        x: this.props.object.moveX,
        y: this.props.object.moveY
      }, true);
    }
  }, {
    key: "moveVertex",
    value: function moveVertex(pathIndex, targetX, targetY, event) {
      event.preventDefault();

      if (this.state.mode !== 'edit') {
        return;
      }

      var mouse = this.getMouseCoords(event);
      this.setState({
        mode: 'move',
        movedPathIndex: pathIndex,
        movedTargetX: targetX,
        movedTargetY: targetY
      });
    }
  }, {
    key: "moveInitialVertex",
    value: function moveInitialVertex(event) {
      this.setState({
        mode: 'moveInitial'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          object = _this$props2.object,
          width = _this$props2.width,
          height = _this$props2.height;
      var path = object.path;
      var state = this.state;
      var moveX = object.moveX,
          moveY = object.moveY,
          x = object.x,
          y = object.y;
      var offsetX = x - moveX,
          offsetY = y - moveY;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.canvas,
        onMouseUp: this.onMouseUp.bind(this),
        onMouseMove: this.onMouseMove.bind(this),
        onMouseDown: this.onMouseDown.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        style: {
          width: width,
          height: height
        }
      }, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(".concat(offsetX, " ").concat(offsetY, ")\n                         rotate(").concat(object.rotate, " ").concat(object.x, " ").concat(object.y, ")")
      }, object.path.map(function (_ref, i) {
        var x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            x = _ref.x,
            y = _ref.y;
        return /*#__PURE__*/_react["default"].createElement("g", {
          key: i
        }, x2 && y2 && /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("line", {
          x1: x2,
          y1: y2,
          x2: x,
          y2: y,
          style: styles.edge,
          onMouseDown: _this2.moveVertex.bind(_this2, i, 'x', 'y')
        }), /*#__PURE__*/_react["default"].createElement("circle", {
          r: 4,
          cx: x2,
          cy: y2,
          style: styles.vertex,
          onMouseDown: _this2.moveVertex.bind(_this2, i, 'x2', 'y2')
        }), /*#__PURE__*/_react["default"].createElement("circle", {
          r: 4,
          cx: x,
          cy: y,
          style: styles.vertex,
          onMouseDown: _this2.moveVertex.bind(_this2, i, 'x', 'y')
        })), i === 0 && /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("line", {
          x1: moveX,
          y1: moveY,
          style: styles.edge,
          onMouseDown: _this2.moveVertex.bind(_this2, i, 'x1', 'y1'),
          x2: x1,
          y2: y1,
          stroke: "black"
        }), /*#__PURE__*/_react["default"].createElement("circle", {
          style: styles.vertex,
          r: 4,
          cx: x1,
          cy: y1,
          onMouseDown: _this2.moveVertex.bind(_this2, i, 'x1', 'y1')
        }), /*#__PURE__*/_react["default"].createElement("circle", {
          r: 4,
          cx: moveX,
          cy: moveY,
          style: _objectSpread(_objectSpread({}, styles.vertex), styles.initialVertex)
        })));
      }))));
    }
  }]);
  return BezierEditor;
}(_react.Component);

var styles = {
  vertex: {
    fill: '#3381ff',
    strokeWidth: 0
  },
  initialVertex: {
    fill: '#ffd760'
  },
  edge: {
    stroke: '#b9b9b9'
  },
  canvas: {
    position: 'absolute'
  }
};
var _default = BezierEditor;
exports["default"] = _default;