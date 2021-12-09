"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _has = _interopRequireDefault(require("lodash/has"));

var _includes = _interopRequireDefault(require("lodash/includes"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _reactHotkeys = require("react-hotkeys");

var _reactContainerDimensions = _interopRequireDefault(require("react-container-dimensions"));

require("./index.css");

var _constants = require("../../constants");

var actions = _interopRequireWildcard(require("../../actions"));

var _objects = require("../shared/objects");

var _PanelList = _interopRequireDefault(require("../panels/PanelList"));

var _Handler = _interopRequireDefault(require("../Handler"));

var _SVGRenderer = _interopRequireDefault(require("../SVGRenderer"));

var _InsertMenu = _interopRequireDefault(require("../panels/InsertMenu"));

var _ObjectList = _interopRequireDefault(require("../panels/ObjectList"));

var _layoutTransformation = require("../../utils/layoutTransformation");

var _deepClone = _interopRequireDefault(require("../../utils/deepClone"));

var _dragTransformCoords = _interopRequireDefault(require("../../utils/dragTransformCoords"));

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
      type: 'map',
      objectFilter: 'all',
      hasTransformed: false
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
        _x: mouse.x,
        _y: mouse.y,
        type: type,
        idx: new Date().getTime()
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
          y: diffY + y // x1: diffX + x,
          // y1: diffY + y,
          // x2: diffX + x,
          // y2: diffY + y,
          // x: diffX + x,
          // y: diffY + y,

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
        newObject = (0, _dragTransformCoords["default"])(newObject, this.getLayoutProperties());
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
        var offset = this.getOffset(); // if (object.x < 0) {
        // 	object.x = 0;
        // }
        // if (object.y < 0) {
        // 	object.y = 0;
        // }
        // if (object.x + object.width > offset.width) {
        // 	object.x = offset.width - object.width;
        // }
        // if (object.y + object.height > offset.height) {
        // 	object.y = offset.height - object.height;
        // }

        this.updateObject(currentObjectIndex, object);
        this.updateHandler(currentObjectIndex, object);
      }

      if ((0, _includes["default"])([_constants.modes.DRAG, _constants.modes.ROTATE, _constants.modes.SCALE], mode)) {
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
    value: function handleObjectChange(updatedObj) {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      this.updateObject(selectedObjectIndex, updatedObj);
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
    key: "getLayoutProperties",
    value: function getLayoutProperties() {
      var transformedDimension = {
        zoneWidth: this.props.width,
        zoneHeight: this.props.height,
        layoutWidth: this.state.transformedLayout.layoutWidth,
        layoutHeight: this.state.transformedLayout.layoutHeight,
        transformWidth: this.state.transformedLayout.layoutWidth / this.props.width,
        transformHeight: this.state.transformedLayout.layoutHeight / this.props.height
      };
      return transformedDimension;
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

      var changes = _objectSpread(_objectSpread({}, object), {}, (0, _defineProperty2["default"])({}, attr, +(isNaN(object === null || object === void 0 ? void 0 : object[attr]) ? 0 : object === null || object === void 0 ? void 0 : object[attr]) + points));

      changes = (0, _dragTransformCoords["default"])(changes, this.getLayoutProperties());
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
      return (0, _mapValues["default"])(handlers, function (handler) {
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
    value: function renderSVG(transformedLayout, transformedObjects) {
      var _this7 = this;

      // let canvas = this.getCanvas();
      var canvas = {
        width: transformedLayout.layoutWidth,
        height: transformedLayout.layoutHeight,
        canvasOffsetX: 0,
        canvasOffsetY: 0
      };
      var _this$props5 = this.props,
          background = _this$props5.background,
          svgStyle = _this$props5.svgStyle,
          objects = _this$props5.objects,
          objectTypes = _this$props5.objectTypes,
          backgroundImage = _this$props5.backgroundImage;

      if (!this.state.hasTransformed) {
        var _this$props6, _this$props7, _this$props7$onTransf;

        transformedObjects = (0, _layoutTransformation.getTransformedObjects)(this.props.height, this.props.width, objects, transformedLayout.layoutWidth, transformedLayout.layoutHeight);
        this.setState({
          hasTransformed: true,
          transformedLayout: transformedLayout
        });
        (_this$props6 = this.props) === null || _this$props6 === void 0 ? void 0 : _this$props6.onUpdate(transformedObjects);
        (_this$props7 = this.props) === null || _this$props7 === void 0 ? void 0 : (_this$props7$onTransf = _this$props7.onTransformLayoutChange) === null || _this$props7$onTransf === void 0 ? void 0 : _this$props7$onTransf.call(_this$props7, transformedLayout);
      }

      return /*#__PURE__*/_react["default"].createElement(_SVGRenderer["default"], {
        canvas: canvas,
        objects: transformedObjects,
        objectRefs: this.objectRefs,
        objectTypes: objectTypes,
        selectedObjectIndex: this.state.selectedObjectIndex,
        svgStyle: svgStyle,
        background: background,
        backgroundImage: backgroundImage,
        onRender: function onRender(ref) {
          return _this7.svgElement = ref;
        },
        onMouseOver: this.showHandler.bind(this),
        onMouseDown: this.newObject.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _objects$filter,
          _this8 = this;

      var _this$state4 = this.state,
          showHandler = _this$state4.showHandler,
          handler = _this$state4.handler,
          mode = _this$state4.mode,
          selectedObjectIndex = _this$state4.selectedObjectIndex,
          selectedTool = _this$state4.selectedTool,
          type = _this$state4.type,
          objectFilter = _this$state4.objectFilter;
      var _this$props8 = this.props,
          objects = _this$props8.objects,
          objectTypes = _this$props8.objectTypes,
          InsertMenuComponent = _this$props8.insertMenu;
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

      var hasImage = !!(objects !== null && objects !== void 0 && (_objects$filter = objects.filter(function (_ref4) {
        var elementType = _ref4.elementType;
        return elementType === _constants.SHAPES.image;
      })) !== null && _objects$filter !== void 0 && _objects$filter[0]);
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
        hasImage: hasImage,
        currentTool: selectedTool,
        onSelect: this.selectTool.bind(this),
        onTypeChange: function onTypeChange(value) {
          return _this8.onTypeChange(value);
        },
        onAddImageClick: this.props.onAddImageClick
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "drawingContainer"
      }, /*#__PURE__*/_react["default"].createElement(_reactContainerDimensions["default"], {
        id: "containerD"
      }, function (_ref5) {
        var width = _ref5.width,
            height = _ref5.height;
        var transformedLayout = (0, _layoutTransformation.getTransformedLayout)(width, height, _this8.props.width, _this8.props.height);
        var transformedObjects = (0, _deepClone["default"])(objects);
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: 'canvasContainer',
          style: {
            width: transformedLayout.layoutWidth,
            height: transformedLayout.layoutHeight
          }
        }, isEditMode && ObjectEditor && /*#__PURE__*/_react["default"].createElement(ObjectEditor, {
          object: currentObject,
          offset: _this8.getOffset(),
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
          canResize: (0, _has["default"])(currentObject, 'width') || (0, _has["default"])(currentObject, 'height') // canRotate={has(currentObject, 'rotate')}
          ,
          onMouseLeave: _this8.hideHandler.bind(_this8),
          onDoubleClick: _this8.showEditor.bind(_this8),
          onDrag: _this8.startDrag.bind(_this8, _constants.modes.DRAG),
          onResize: _this8.startDrag.bind(_this8, _constants.modes.SCALE) // onRotate={this.startDrag.bind(this, modes.ROTATE)}

        }), _this8.renderSVG(transformedLayout, transformedObjects));
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "propertiesPanelContainer"
      }, showPropertyPanel ? /*#__PURE__*/_react["default"].createElement(_PanelList["default"], {
        layoutDimension: {
          width: this.props.width,
          height: this.props.height
        },
        transformedLayout: this.state.transformedLayout,
        offset: this.getOffset(),
        object: objectWithInitial,
        objects: this.props.objects,
        clusterList: this.props.clusterList,
        onArrange: this.handleArrange.bind(this),
        onChange: this.handleObjectChange.bind(this),
        onDelete: this.removeCurrent.bind(this),
        objectComponent: objectComponent,
        onObjectSelect: this.updateSelectedObjectIndex.bind(this),
        resetCurrentSelection: this.resetCurrentSelection.bind(this),
        onAddClusterClick: this.props.onAddClusterClick,
        onImageEditClick: this.props.onImageEditClick
      }) : /*#__PURE__*/_react["default"].createElement(_ObjectList["default"], {
        objectFilter: objectFilter,
        onObjectFilterChange: function onObjectFilterChange(objectFilter) {
          return _this8.setState({
            objectFilter: objectFilter
          });
        },
        objects: this.props.objects,
        clusterList: this.props.clusterList,
        onChange: this.updateObject.bind(this),
        onAddClusterClick: this.props.onAddClusterClick,
        onObjectSelect: this.updateSelectedObjectIndex.bind(this)
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
    gateway: _objects.Gateway,
    circle: _objects.Circle
  },
  snapToGrid: 1,
  svgStyle: {},
  insertMenu: _InsertMenu["default"]
});
var _default = Designer;
exports["default"] = _default;