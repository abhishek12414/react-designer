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

var _constants = require("../../../constants");

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

var InsertMenu = /*#__PURE__*/function (_Component) {
  _inherits(InsertMenu, _Component);

  var _super = _createSuper(InsertMenu);

  function InsertMenu() {
    _classCallCheck(this, InsertMenu);

    return _super.apply(this, arguments);
  }

  _createClass(InsertMenu, [{
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