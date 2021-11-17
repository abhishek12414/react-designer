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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _Column = _interopRequireDefault(require("./Column"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SizePanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SizePanel, _Component);

  var _super = _createSuper(SizePanel);

  function SizePanel() {
    (0, _classCallCheck2["default"])(this, SizePanel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SizePanel, [{
    key: "onLabelPosChange",
    value: function onLabelPosChange(key, value) {
      this.props.onChange('labelCoordinates', _objectSpread(_objectSpread({}, this.props.object.labelCoordinates), {}, (0, _defineProperty2["default"])({}, key, value)));
    }
  }, {
    key: "clusterOptions",
    value: function clusterOptions() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", {
        value: ""
      }, "Select Cluster"), ",", this.props.clusterList.map(function (i) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: i.value,
          value: i.value
        }, i.label);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          object = _this$props.object,
          onChange = _this$props.onChange,
          resetCurrentSelection = _this$props.resetCurrentSelection;
      return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
        object: object
      }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Editor",
        rowInline: true,
        spaceBetween: true
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: function onClick() {
          return resetCurrentSelection();
        }
      }, "Back")), object.elementType === 'image' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _has["default"])(object, 'width', 'height') && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
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
      }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
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
      }, "Delete Shape")), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
        label: "Cluster",
        rowInline: true
      }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        style: 'fabButton',
        onClick: this.props.onAddClusterClick
      }, "+"), /*#__PURE__*/_react["default"].createElement("select", {
        value: (object === null || object === void 0 ? void 0 : object.clusterId) || '',
        onChange: function onChange(e) {
          return _this.props.onChange('clusterId', e.target.value);
        }
      }, this.clusterOptions()))))));
    }
  }]);
  return SizePanel;
}(_react.Component);

SizePanel.propTypes = {
  object: _propTypes["default"].object,
  onDelete: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  clusterList: _propTypes["default"].array,
  onAddClusterClick: _propTypes["default"].func.isRequired,
  resetCurrentSelection: _propTypes["default"].func.isRequired
};
SizePanel.defaultProps = {
  clusterList: []
};
var _default = SizePanel;
exports["default"] = _default;