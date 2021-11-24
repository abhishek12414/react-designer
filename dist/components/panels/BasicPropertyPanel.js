"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _has = _interopRequireDefault(require("lodash/has"));

var _Column = _interopRequireDefault(require("./Column"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _Select = _interopRequireDefault(require("../widgets/Select"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BasicPropertyPanel = function BasicPropertyPanel(_ref) {
  var clusterList = _ref.clusterList,
      object = _ref.object,
      resetCurrentSelection = _ref.resetCurrentSelection,
      _onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      onAddClusterClick = _ref.onAddClusterClick;

  var onLabelPosChange = function onLabelPosChange(key, value) {
    _onChange('labelCoordinates', _objectSpread(_objectSpread({}, object.labelCoordinates), {}, (0, _defineProperty2["default"])({}, key, value)));
  };

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
  }, "Back")), object.elementType === 'image' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Label Property"
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "Name",
    value: object.name || '',
    onChange: function onChange(value) {
      return _onChange('name', value);
    }
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
      return onLabelPosChange('x', value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "Y",
    type: "number",
    showIf: (0, _has["default"])(object.labelCoordinates, 'y'),
    value: object.labelCoordinates.y,
    onChange: function onChange(value) {
      return onLabelPosChange('y', value);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
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
    onClick: onDelete
  }, "Delete Shape")), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Cluster",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    style: 'fabButton',
    onClick: onAddClusterClick
  }, "+"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: clusterList,
    value: (object === null || object === void 0 ? void 0 : object.clusterId) || '',
    onChange: function onChange(e) {
      return _onChange('clusterId', e.target.value);
    }
  }))))));
};

BasicPropertyPanel.propTypes = {
  object: _propTypes["default"].object,
  onDelete: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  clusterList: _propTypes["default"].array,
  onAddClusterClick: _propTypes["default"].func.isRequired,
  resetCurrentSelection: _propTypes["default"].func.isRequired
};
BasicPropertyPanel.defaultProps = {
  clusterList: []
};
var _default = BasicPropertyPanel;
exports["default"] = _default;