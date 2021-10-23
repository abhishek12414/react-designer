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

var _Button = _interopRequireDefault(require("../widgets/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SizePanel = /*#__PURE__*/function (_Component) {
  _inherits(SizePanel, _Component);

  var _super = _createSuper(SizePanel);

  function SizePanel() {
    _classCallCheck(this, SizePanel);

    return _super.apply(this, arguments);
  }

  _createClass(SizePanel, [{
    key: "onLabelPosChange",
    value: function onLabelPosChange(key, value) {
      this.props.onChange('labelCoordinates', _objectSpread(_objectSpread({}, this.props.object.labelCoordinates), {}, _defineProperty({}, key, value)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          object = _this$props.object,
          onChange = _this$props.onChange;
      return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
        object: object
      }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Label Property"
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "Name",
        value: object.name || '',
        inputStyle: {
          width: '130px'
        },
        onChange: onChange.bind(this, 'name')
      }), (0, _has["default"])(object.labelCoordinates, 'x', 'y') && /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "X",
        type: "number",
        showIf: (0, _has["default"])(object.labelCoordinates, 'x'),
        value: object.labelCoordinates.x,
        onChange: function onChange(value) {
          return _this.onLabelPosChange('x', value);
        }
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "Y",
        type: "number",
        showIf: (0, _has["default"])(object.labelCoordinates, 'y'),
        value: object.labelCoordinates.y,
        onChange: function onChange(value) {
          return _this.onLabelPosChange('y', value);
        }
      }))), (0, _has["default"])(object, 'width', 'height') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Size",
        inline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
        label: "W",
        type: "number",
        showIf: (0, _has["default"])(object, 'width'),
        value: object.width,
        onChange: onChange.bind(this, 'width')
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
        label: "H",
        type: "number",
        showIf: (0, _has["default"])(object, 'height'),
        value: object.height,
        onChange: onChange.bind(this, 'height')
      })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Position",
        inline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
        label: "X",
        type: "number",
        showIf: (0, _has["default"])(object, 'x'),
        value: object.x,
        readOnly: true,
        onChange: onChange.bind(this, 'x')
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        disabled: true,
        label: "Y",
        type: "number",
        showIf: (0, _has["default"])(object, 'y'),
        value: object.y,
        readOnly: true,
        onChange: onChange.bind(this, 'y')
      })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Shape",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          margin: 0,
          textTransform: 'capitalize'
        }
      }, object.elementType)), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Type",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement("p", {
        style: {
          margin: 0,
          textTransform: 'capitalize'
        }
      }, object.type)), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Delete",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.props.onDelete
      }, "Delete Shape")));
    }
  }]);

  return SizePanel;
}(_react.Component);

SizePanel.propTypes = {
  object: _propTypes["default"].object,
  onDelete: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired
};
var _default = SizePanel;
exports["default"] = _default;