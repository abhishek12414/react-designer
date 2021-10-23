"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _Column = _interopRequireDefault(require("./Column"));

var _Select = _interopRequireDefault(require("../widgets/Select"));

var _constants = require("../../constants");

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

var StylePanel = /*#__PURE__*/function (_Component) {
  _inherits(StylePanel, _Component);

  var _super = _createSuper(StylePanel);

  function StylePanel() {
    _classCallCheck(this, StylePanel);

    return _super.apply(this, arguments);
  }

  _createClass(StylePanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          object = _this$props.object,
          _onChange = _this$props.onChange;

      if (object.elementType === _constants.TYPES.GATEWAY) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Fill",
        inline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        type: "color",
        value: object.fill,
        onChange: _onChange.bind(this, 'fill')
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        type: "number",
        label: "Opacity",
        value: object.fillOpacity,
        style: {
          width: 30
        },
        onChange: _onChange.bind(this, 'fillOpacity')
      })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Stroke",
        inline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        type: "color",
        value: object.stroke,
        onChange: _onChange.bind(this, 'stroke')
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "width",
        type: "number",
        value: object.strokeWidth,
        style: {
          width: 30
        },
        onChange: _onChange.bind(this, 'strokeWidth')
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        showIf: (0, _has["default"])(object, 'radius'),
        label: "radius",
        type: "number",
        value: object.radius,
        onChange: _onChange.bind(this, 'radius')
      })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Blending",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        name: "Blending",
        value: object.blendMode,
        options: _constants.blendModes,
        onChange: function onChange(e) {
          return _onChange('blendMode', e.target.value);
        }
      })));
    }
  }]);

  return StylePanel;
}(_react.Component);

StylePanel.propTypes = {
  object: _propTypes["default"].object,
  onChange: _propTypes["default"].func.isRequired
};
var _default = StylePanel;
exports["default"] = _default;