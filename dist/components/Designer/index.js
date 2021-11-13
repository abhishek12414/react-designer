"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactHotkeys = require("react-hotkeys");

require("./index.css");

var _constants = require("../../constants");

var actions = _interopRequireWildcard(require("../../actions"));

var _objects = require("../shared/objects");

var _PanelList = _interopRequireDefault(require("../panels/PanelList"));

var _Handler = _interopRequireDefault(require("../Handler"));

var _SVGRenderer = _interopRequireDefault(require("../SVGRenderer"));

var _InsertMenu = _interopRequireDefault(require("../panels/InsertMenu"));

var _ObjectList = _interopRequireDefault(require("../panels/ObjectList"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Designer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Designer, _Component);

  var _super = _createSuper(Designer);

  function Designer() {
    var _this;

    (0, _classCallCheck2["default"])(this, Designer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mode: _constants.modes.FREE,
      handler: {
        top: 200,
        left: 200,
        width: 50,
        height: 50,
        rotate: 0
      },
      currentObjectIndex: null,
      selectedObjectIndex: null,
      selectedTool: null,
      type: 'map'
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "keyMap", {
      removeObject: ['del', 'backspace'],
      moveLeft: ['left', 'shift+left'],
      moveRight: ['right', 'shift+right'],
      moveUp: ['up', 'shift+up'],
      moveDown: ['down', 'shift+down'],
      closePath: ['enter']
    });
    return _this;
  }

  (0, _createClass2["default"])(Designer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.objectRefs = {};
    }
  }, {
    key: "showHandler",
    value: function showHandler(index) {
      var mode = this.state.mode;
      var objects = this.props.objects;
      var object = objects[index];

      if (mode !== _constants.modes.FREE || object.elementType === 'image') {
        return;
      }

      this.updateHandler(index, object);
      this.setState({
        currentObjectIndex: index,
        showHandler: true
      });
    }
  }, {
    key: "hideHandler",
    value: function hideHandler() {
      var mode = this.state.mode;

      if (mode === _constants.modes.FREE) {
        this.setState({
          showHandler: false
        });
      }
    }
  }, {
    key: "getStartPointBundle",
    value: function getStartPointBundle(event, object) {
      var currentObjectIndex = this.state.currentObjectIndex;
      var objects = this.props.objects;
      var mouse = this.getMouseCoords(event);
      object = object || objects[currentObjectIndex];
      return {
        clientX: mouse.x,
        clientY: mouse.y,
        objectX: object.x,
        objectY: object.y,
        width: object.width,
        height: object.height,
        rotate: object.rotate
      };
    }
  }, {
    key: "startDrag",
    value: function startDrag(mode, event) {
      var currentObjectIndex = this.state.currentObjectIndex;
      this.setState({
        mode: mode,
        startPoint: this.getStartPointBundle(event),
        selectedObjectIndex: currentObjectIndex
      });
    }
  }, {
    key: "resetSelection",
    value: function resetSelection() {
      this.setState({
        selectedObjectIndex: null
      });
    }
  }, {
    key: "resetCurrentSelection",
    value: function resetCurrentSelection() {
      this.setState({
        selectedObjectIndex: null,
        currentObjectIndex: null,
        showHandler: false
      });
    }
  }, {
    key: "newObject",
    value: function newObject(event) {
      var _this$state = this.state,
          mode = _this$state.mode,
          selectedTool = _this$state.selectedTool,
          type = _this$state.type;
      this.resetSelection(event);

      if (mode !== _constants.modes.DRAW) {
        return;
      }

      var _this$getObjectCompon = this.getObjectComponent(selectedTool),
          meta = _this$getObjectCompon.meta;

      var mouse = this.getMouseCoords(event);
      var _this$props = this.props,
          objects = _this$props.objects,
          onUpdate = _this$props.onUpdate;

      var object = _objectSpread(_objectSpread({}, meta.initial), {}, {
        elementType: selectedTool,
        x: mouse.x,
        y: mouse.y,
        type: type
      });

      onUpdate([].concat((0, _toConsumableArray2["default"])(objects), [object]));
      this.setState({
        currentObjectIndex: objects.length,
        selectedObjectIndex: objects.length,
        startPoint: this.getStartPointBundle(event, object),
        mode: meta.editor ? _constants.modes.EDIT_OBJECT : _constants.modes.SCALE,
        selectedTool: null
      });
    }
  }, {
    key: "updatePath",
    value: function updatePath(object) {
      var path = object.path;
      var diffX = object.x - object.moveX;
      var diffY = object.y - object.moveY;
      var newPath = path.map(function (_ref) {
        var x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            x = _ref.x,
            y = _ref.y;
        return {
          x1: diffX + x1,
          y1: diffY + y1,
          x2: diffX + x2,
          y2: diffY + y2,
          x: diffX + x,
          y: diffY + y
        };
      });
      return _objectSpread(_objectSpread({}, object), {}, {
        path: newPath,
        moveX: object.x,
        moveY: object.y
      });
    }
  }, {
    key: "updateObject",
    value: function updateObject(objectIndex, changes, updatePath) {
      var _this2 = this;

      var _this$props2 = this.props,
          objects = _this$props2.objects,
          onUpdate = _this$props2.onUpdate;
      onUpdate(objects.map(function (object, index) {
        if (index === objectIndex) {
          var newObject = _objectSpread(_objectSpread({}, object), changes);

          return updatePath ? _this2.updatePath(newObject) : newObject;
        } else {
          return object;
        }
      }));
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var parent = this.svgElement.getBoundingClientRect();

      var _this$getCanvas = this.getCanvas(),
          canvasWidth = _this$getCanvas.canvasWidth,
          canvasHeight = _this$getCanvas.canvasHeight;

      return {
        x: parent.left,
        y: parent.top,
        width: canvasWidth,
        height: canvasHeight
      };
    }
  }, {
    key: "applyOffset",
    value: function applyOffset(bundle) {
      var offset = this.getOffset();
      return _objectSpread(_objectSpread({}, bundle), {}, {
        x: bundle.x - offset.x,
        y: bundle.y - offset.y
      });
    }
  }, {
    key: "updateHandler",
    value: function updateHandler(index, object) {
      var target = this.objectRefs[index];
      var bbox = target.getBoundingClientRect();

      var _this$getCanvas2 = this.getCanvas(),
          canvasOffsetX = _this$getCanvas2.canvasOffsetX,
          canvasOffsetY = _this$getCanvas2.canvasOffsetY;

      var handler = _objectSpread(_objectSpread({}, this.state.handler), {}, {
        width: object.width || bbox.width,
        height: object.height || bbox.height,
        top: object.y + canvasOffsetY,
        left: object.x + canvasOffsetX,
        rotate: object.rotate
      });

      if (!object.width) {
        var offset = this.getOffset();
        handler = _objectSpread(_objectSpread({}, handler), {}, {
          left: bbox.left - offset.x,
          top: bbox.top - offset.y
        });
      }

      this.setState({
        handler: handler
      });
    }
  }, {
    key: "snapCoordinates",
    value: function snapCoordinates(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var snapToGrid = this.props.snapToGrid;
      return {
        x: x - x % snapToGrid,
        y: y - y % snapToGrid
      };
    }
  }, {
    key: "getMouseCoords",
    value: function getMouseCoords(_ref3) {
      var clientX = _ref3.clientX,
          clientY = _ref3.clientY;
      var coords = this.applyOffset({
        x: clientX,
        y: clientY
      });
      return this.snapCoordinates(coords);
    }
  }, {
    key: "onDrag",
    value: function onDrag(event) {
      var _map;

      var _this$state2 = this.state,
          currentObjectIndex = _this$state2.currentObjectIndex,
          startPoint = _this$state2.startPoint,
          mode = _this$state2.mode;
      var objects = this.props.objects;
      var object = objects[currentObjectIndex];
      var mouse = this.getMouseCoords(event);
      var scale = actions.scale,
          rotate = actions.rotate,
          drag = actions.drag;
      var map = (_map = {}, (0, _defineProperty2["default"])(_map, _constants.modes.SCALE, scale), (0, _defineProperty2["default"])(_map, _constants.modes.ROTATE, rotate), (0, _defineProperty2["default"])(_map, _constants.modes.DRAG, drag), _map);
      var action = map[mode];

      if (action) {
        var newObject = action({
          object: object,
          startPoint: startPoint,
          mouse: mouse,
          objectIndex: currentObjectIndex,
          objectRefs: this.objectRefs
        });
        this.updateObject(currentObjectIndex, newObject);
        this.updateHandler(currentObjectIndex, newObject);
      }

      if (currentObjectIndex !== null) {
        this.detectOverlappedObjects(event);
      }
    }
  }, {
    key: "detectOverlappedObjects",
    value: function detectOverlappedObjects(event) {
      var _this3 = this;

      var currentObjectIndex = this.state.currentObjectIndex;
      var mouse = this.getMouseCoords(event);
      var refs = this.objectRefs,
          keys = Object.keys(refs),
          offset = this.getOffset();
      var currentRect = refs[currentObjectIndex].getBoundingClientRect();
      keys.filter(function (object, index) {
        return index !== currentObjectIndex;
      }).forEach(function (key) {
        var rect = refs[key].getBoundingClientRect();
        var left = rect.left,
            top = rect.top,
            width = rect.width,
            height = rect.height;
        left -= offset.x;
        top -= offset.y;
        var isOverlapped = mouse.x > left && mouse.x < left + width && mouse.y > top && mouse.y < top + height && currentRect.width > width && currentRect.height > height;

        if (isOverlapped) {
          _this3.showHandler(Number(key));
        }
      });
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      var _this$state3 = this.state,
          mode = _this$state3.mode,
          currentObjectIndex = _this$state3.currentObjectIndex; // Disables shape drag out of bounds

      if (mode === _constants.modes.DRAG) {
        var objects = this.props.objects;
        var object = objects[currentObjectIndex];
        var offset = this.getOffset();

        if (object.x < 0) {
          object.x = 0;
        }

        if (object.y < 0) {
          object.y = 0;
        }

        if (object.x + object.width > offset.width) {
          object.x = offset.width - object.width;
        }

        if (object.y + object.height > offset.height) {
          object.y = offset.height - object.height;
        }

        this.updateObject(currentObjectIndex, object);
        this.updateHandler(currentObjectIndex, object);
      }

      if (_lodash["default"].includes([_constants.modes.DRAG, _constants.modes.ROTATE, _constants.modes.SCALE], mode)) {
        this.setState({
          mode: _constants.modes.FREE
        });
      }
    }
  }, {
    key: "showEditor",
    value: function showEditor() {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects,
          currentObject = objects[selectedObjectIndex],
          objectComponent = this.getObjectComponent(currentObject.elementType);

      if (objectComponent.meta.editor) {
        this.setState({
          mode: _constants.modes.EDIT_OBJECT,
          showHandler: false
        });
      }
    }
  }, {
    key: "getObjectComponent",
    value: function getObjectComponent(elementType) {
      var objectTypes = this.props.objectTypes;
      return objectTypes[elementType];
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var _this$props3 = this.props,
          width = _this$props3.width,
          height = _this$props3.height;
      var _this$props4 = this.props,
          _this$props4$canvasWi = _this$props4.canvasWidth,
          canvasWidth = _this$props4$canvasWi === void 0 ? width : _this$props4$canvasWi,
          _this$props4$canvasHe = _this$props4.canvasHeight,
          canvasHeight = _this$props4$canvasHe === void 0 ? height : _this$props4$canvasHe;
      return {
        width: width,
        height: height,
        canvasWidth: canvasWidth,
        canvasHeight: canvasHeight,
        canvasOffsetX: (canvasWidth - width) / 2,
        canvasOffsetY: (canvasHeight - height) / 2
      };
    }
  }, {
    key: "selectTool",
    value: function selectTool(tool) {
      this.setState({
        selectedTool: tool,
        mode: _constants.modes.DRAW,
        currentObjectIndex: null,
        showHandler: false,
        handler: null
      });
    }
  }, {
    key: "handleObjectChange",
    value: function handleObjectChange(key, value) {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      this.updateObject(selectedObjectIndex, (0, _defineProperty2["default"])({}, key, value));
    }
  }, {
    key: "handleArrange",
    value: function handleArrange(arrange) {
      var _this4 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;
      var object = objects[selectedObjectIndex];
      var arrangers = {
        front: function front(rest, object) {
          return [[].concat((0, _toConsumableArray2["default"])(rest), [object]), rest.length];
        },
        back: function back(rest, object) {
          return [[object].concat((0, _toConsumableArray2["default"])(rest)), 0];
        }
      };
      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });
      this.setState({
        selectedObjectIndex: null
      }, function () {
        var arranger = arrangers[arrange];

        var _arranger = arranger(rest, object),
            _arranger2 = (0, _slicedToArray2["default"])(_arranger, 2),
            arranged = _arranger2[0],
            newIndex = _arranger2[1];

        _this4.props.onUpdate(arranged);

        _this4.setState({
          selectedObjectIndex: newIndex
        });
      });
    }
  }, {
    key: "removeCurrent",
    value: function removeCurrent() {
      var _this5 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;
      var deleteObj = objects[selectedObjectIndex];
      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });
      this.setState({
        currentObjectIndex: null,
        selectedObjectIndex: null,
        showHandler: false,
        handler: null
      }, function () {
        _this5.objectRefs = {};

        _this5.props.onUpdate(rest);

        _this5.props.onDelete(deleteObj);
      });
    }
  }, {
    key: "moveSelectedObject",
    value: function moveSelectedObject(attr, points, event, key) {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;
      var object = objects[selectedObjectIndex];

      if (key.startsWith('shift')) {
        points *= 10;
      }

      var changes = _objectSpread(_objectSpread({}, object), {}, (0, _defineProperty2["default"])({}, attr, object[attr] + points));

      this.updateObject(selectedObjectIndex, changes);
      this.updateHandler(selectedObjectIndex, changes);
    }
  }, {
    key: "getKeymapHandlers",
    value: function getKeymapHandlers() {
      var _this6 = this;

      var handlers = {
        removeObject: this.removeCurrent.bind(this),
        moveLeft: this.moveSelectedObject.bind(this, 'x', -1),
        moveRight: this.moveSelectedObject.bind(this, 'x', 1),
        moveUp: this.moveSelectedObject.bind(this, 'y', -1),
        moveDown: this.moveSelectedObject.bind(this, 'y', 1),
        closePath: function closePath() {
          return _this6.setState({
            mode: _constants.modes.FREE
          });
        }
      };
      return _lodash["default"].mapValues(handlers, function (handler) {
        return function (event, key) {
          if (event.target.tagName !== 'INPUT') {
            event.preventDefault();
            handler(event, key);
          }
        };
      });
    }
  }, {
    key: "updateSelectedObjectIndex",
    value: function updateSelectedObjectIndex(selectedObjectIndex) {
      this.setState({
        selectedObjectIndex: selectedObjectIndex
      });
    }
  }, {
    key: "onTypeChange",
    value: function onTypeChange(type) {
      this.setState({
        type: type
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      var _this7 = this;

      var canvas = this.getCanvas();
      var _this$props5 = this.props,
          background = _this$props5.background,
          objects = _this$props5.objects,
          objectTypes = _this$props5.objectTypes,
          backgroundImage = _this$props5.backgroundImage,
          backgroundSize = _this$props5.backgroundSize,
          backgroundRepeat = _this$props5.backgroundRepeat;
      return /*#__PURE__*/_react["default"].createElement(_SVGRenderer["default"], {
        background: background,
        backgroundSize: backgroundSize,
        backgroundImage: backgroundImage,
        backgroundRepeat: backgroundRepeat,
        canvas: canvas,
        objects: objects,
        onMouseOver: this.showHandler.bind(this),
        objectTypes: objectTypes,
        objectRefs: this.objectRefs,
        onRender: function onRender(ref) {
          return _this7.svgElement = ref;
        },
        onMouseDown: this.newObject.bind(this),
        selectedObjectIndex: this.state.selectedObjectIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var _this$state4 = this.state,
          showHandler = _this$state4.showHandler,
          handler = _this$state4.handler,
          mode = _this$state4.mode,
          selectedObjectIndex = _this$state4.selectedObjectIndex,
          selectedTool = _this$state4.selectedTool,
          type = _this$state4.type;
      var _this$props6 = this.props,
          objects = _this$props6.objects,
          objectTypes = _this$props6.objectTypes,
          InsertMenuComponent = _this$props6.insertMenu;
      var currentObject = objects === null || objects === void 0 ? void 0 : objects[selectedObjectIndex],
          isEditMode = mode === _constants.modes.EDIT_OBJECT,
          showPropertyPanel = selectedObjectIndex !== null;

      var _this$getCanvas3 = this.getCanvas(),
          width = _this$getCanvas3.width,
          height = _this$getCanvas3.height,
          canvasWidth = _this$getCanvas3.canvasWidth,
          canvasHeight = _this$getCanvas3.canvasHeight;

      var objectComponent, objectWithInitial, ObjectEditor;

      if (currentObject) {
        objectComponent = this.getObjectComponent(currentObject.elementType);
        objectWithInitial = _objectSpread(_objectSpread({}, objectComponent.meta.initial), currentObject);
        ObjectEditor = objectComponent.meta.editor;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "reactDesigner"
      }, /*#__PURE__*/_react["default"].createElement(_reactHotkeys.HotKeys, {
        keyMap: this.keyMap,
        className: "keyboardManager",
        handlers: this.getKeymapHandlers()
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('rdContainer', this.props.className),
        onMouseMove: this.onDrag.bind(this),
        onMouseUp: this.stopDrag.bind(this)
      }, InsertMenuComponent && /*#__PURE__*/_react["default"].createElement(InsertMenuComponent, {
        type: type,
        tools: objectTypes,
        currentTool: selectedTool,
        onSelect: this.selectTool.bind(this),
        onTypeChange: function onTypeChange(value) {
          return _this8.onTypeChange(value);
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "drawingContainer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'canvasContainer',
        style: {
          width: canvasWidth,
          height: canvasHeight
        }
      }, isEditMode && ObjectEditor && /*#__PURE__*/_react["default"].createElement(ObjectEditor, {
        object: currentObject,
        offset: this.getOffset(),
        onUpdate: function onUpdate(object) {
          return _this8.updateObject(selectedObjectIndex, object);
        },
        onClose: function onClose() {
          return _this8.setState({
            mode: _constants.modes.FREE
          });
        },
        width: width,
        height: height
      }), showHandler && /*#__PURE__*/_react["default"].createElement(_Handler["default"], {
        boundingBox: handler,
        canResize: (0, _lodash["default"])(currentObject).has('width') || (0, _lodash["default"])(currentObject).has('height') // canRotate={_(currentObject).has('rotate')}
        ,
        onMouseLeave: this.hideHandler.bind(this),
        onDoubleClick: this.showEditor.bind(this),
        onDrag: this.startDrag.bind(this, _constants.modes.DRAG),
        onResize: this.startDrag.bind(this, _constants.modes.SCALE) // onRotate={this.startDrag.bind(this, modes.ROTATE)}

      }), this.renderSVG())), /*#__PURE__*/_react["default"].createElement("div", {
        className: "propertiesPanelContainer"
      }, showPropertyPanel ? /*#__PURE__*/_react["default"].createElement(_PanelList["default"], {
        offset: this.getOffset(),
        object: objectWithInitial,
        onArrange: this.handleArrange.bind(this),
        onChange: this.handleObjectChange.bind(this),
        onDelete: this.removeCurrent.bind(this),
        objectComponent: objectComponent,
        onObjectSelect: this.updateSelectedObjectIndex.bind(this),
        objects: this.props.objects,
        resetCurrentSelection: this.resetCurrentSelection.bind(this)
      }) : /*#__PURE__*/_react["default"].createElement(_ObjectList["default"], {
        objects: this.props.objects,
        onObjectSelect: this.updateSelectedObjectIndex.bind(this),
        clusterList: this.props.clusterList,
        onChange: this.updateObject.bind(this),
        onAddClusterClick: this.props.onAddClusterClick
      })))));
    }
  }]);
  return Designer;
}(_react.Component);

(0, _defineProperty2["default"])(Designer, "defaultProps", {
  objectTypes: {
    // text: Text,
    rect: _objects.Rect,
    ellipse: _objects.Ellipse,
    polygon: _objects.Path,
    image: _objects.Image,
    gateway: _objects.Gateway
  },
  snapToGrid: 1,
  svgStyle: {},
  insertMenu: _InsertMenu["default"]
});
var styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
  },
  canvasContainer: {
    position: 'relative'
  },
  keyboardManager: {
    outline: 'none'
  }
};
exports.styles = styles;
var _default = Designer;
exports["default"] = _default;