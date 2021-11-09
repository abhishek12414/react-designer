"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("lodash/has"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _SwitchState = _interopRequireDefault(require("./SwitchState"));

var _Column = _interopRequireDefault(require("./Column"));

var _webfontloader = _interopRequireDefault(require("webfontloader"));

var _Input = _interopRequireDefault(require("../widgets/Input"));

var _Select = _interopRequireDefault(require("../widgets/Select"));

var _constants = require("../../constants");

var _Columns = _interopRequireDefault(require("./Columns"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TextPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TextPanel, _Component);

  var _super = _createSuper(TextPanel);

  function TextPanel() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFontFamilyChange", function (e) {
      var value = e.target.value;

      _webfontloader["default"].load({
        google: {
          families: [value]
        }
      });

      _this.props.onChange('fontFamily', value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sortFonts", function (f1, f2) {
      return f1.name.toLowerCase() > f2.name.toLowerCase() ? 1 : f1.name.toLowerCase() < f2.name.toLowerCase() ? -1 : 0;
    });
    return _this;
  }

  (0, _createClass2["default"])(TextPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var object = this.props.object;
      return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
        showIf: (0, _has["default"])(object, 'text')
      }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Styles",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, (0, _has["default"])(object, 'fontWeight') && /*#__PURE__*/_react["default"].createElement(_SwitchState["default"], {
        icon: "format-bold",
        defaultValue: 'normal',
        nextState: 'bold',
        value: object.fontWeight,
        onChange: this.props.onChange.bind(this, 'fontWeight')
      }), (0, _has["default"])(object, 'fontStyle') && /*#__PURE__*/_react["default"].createElement(_SwitchState["default"], {
        icon: "format-italic",
        defaultValue: 'normal',
        nextState: 'italic',
        value: object.fontStyle,
        onChange: this.props.onChange.bind(this, 'fontStyle')
      }), (0, _has["default"])(object, 'textDecoration') && /*#__PURE__*/_react["default"].createElement(_SwitchState["default"], {
        icon: "format-underline",
        defaultValue: 'none',
        nextState: 'underline',
        value: object.textDecoration,
        onChange: this.props.onChange.bind(this, 'textDecoration')
      }))), (0, _has["default"])(object, 'fontSize') && /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "Size",
        value: object.fontSize,
        onChange: function onChange(e) {
          return _this2.props.onChange('fontSize', e.target.value);
        }
      }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        label: "Text",
        value: object.text,
        onChange: function onChange(e) {
          return _this2.props.onChange('text', e.target.value);
        }
      }), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Font Family",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        value: object.fontFamily,
        options: _constants.fontFamilies.sort(this.sortFonts).map(function (_ref) {
          var name = _ref.name,
              family = _ref.family;
          return {
            label: name,
            value: family
          };
        }),
        onChange: this.handleFontFamilyChange
      })));
    }
  }]);
  return TextPanel;
}(_react.Component);

var _default = TextPanel;
exports["default"] = _default;