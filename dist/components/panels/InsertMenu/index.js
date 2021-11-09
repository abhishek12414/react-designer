"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _constants = require("../../../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InsertMenu = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(InsertMenu, _Component);

  var _super = _createSuper(InsertMenu);

  function InsertMenu() {
    (0, _classCallCheck2["default"])(this, InsertMenu);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(InsertMenu, [{
    key: "getKeys",
    value: function getKeys(type, tools) {
      switch (type) {
        case _constants.TYPES.MAP:
          return Object.keys(tools).filter(function (i) {
            return i !== _constants.SHAPES.gateway;
          });

        case _constants.TYPES.TRACK:
          return Object.keys(tools).filter(function (i) {
            return i === _constants.SHAPES.polygon;
          });

        case _constants.TYPES.GATEWAY:
          return Object.keys(tools).filter(function (i) {
            return i === _constants.SHAPES.gateway;
          });

        default:
          return [];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          currentTool = _this$props.currentTool,
          tools = _this$props.tools,
          onSelect = _this$props.onSelect,
          type = _this$props.type,
          onTypeChange = _this$props.onTypeChange;
      tools = Object.keys(tools).reduce(function (acc, key) {
        if (key === _constants.SHAPES.image) {
          return acc;
        } else {
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, tools[key]));
        }
      }, {}); // delete tools.image;

      console.log('>>> ', type, tools);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "insertMenu"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "tabWrapper"
      }, Object.values(_constants.TYPES).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: key,
          className: (0, _classnames["default"])('tabBar', type === key && 'activeTab'),
          onClick: function onClick() {
            return onTypeChange(key);
          }
        }, key);
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "toolBox"
      }, this.getKeys(type, tools).map(function (elementType, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: (0, _classnames["default"])('toolBoxItem', currentTool === elementType && 'insertmenuactive'),
          onMouseDown: onSelect.bind(_this, elementType),
          key: i
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "mainIcon"
        }, tools[elementType].meta.icon), elementType);
      })));
    }
  }]);
  return InsertMenu;
}(_react.Component);

InsertMenu.propTypes = {
  type: _propTypes["default"].string,
  tools: _propTypes["default"].object,
  currentTool: _propTypes["default"].string,
  onTypeChange: _propTypes["default"].func,
  onSelect: _propTypes["default"].func.isRequired
};
var _default = InsertMenu;
exports["default"] = _default;