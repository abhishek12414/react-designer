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

var _Icon = _interopRequireDefault(require("../shared/Icon"));

var _optionUtils = require("../../utils/optionUtils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BasicPropertyPanel = function BasicPropertyPanel(_ref) {
  var _object$errors, _object$errors2;

  var clusterList = _ref.clusterList,
      clusterListTrack = _ref.clusterListTrack,
      object = _ref.object,
      _onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      onAddClusterClick = _ref.onAddClusterClick,
      layoutDimension = _ref.layoutDimension,
      transformedLayout = _ref.transformedLayout;
  var transformedDimension = {
    transformWidth: transformedLayout.layoutWidth / layoutDimension.width,
    transformHeight: transformedLayout.layoutHeight / layoutDimension.height
  };
  var selectOptions = (0, _optionUtils.getOptions)(object.type, object.clusterId, clusterListTrack, clusterList); // const onLabelPosChange = (key, value) => {
  // 	onChange({
  // 		labelCoordinates: {
  // 			...object.labelCoordinates,
  // 			[key]: value,
  // 		},
  // 	});
  // };

  var onLabelPosChange = function onLabelPosChange(key, value) {
    var _objectSpread2, _objectSpread3;

    var tValue;

    switch (key) {
      case '_x':
        tValue = value * transformedDimension.transformWidth;

        _onChange({
          labelCoordinates: _objectSpread(_objectSpread({}, object.labelCoordinates), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, key, value), (0, _defineProperty2["default"])(_objectSpread2, "x", tValue), _objectSpread2))
        });

        break;

      case '_y':
        tValue = transformedLayout.layoutHeight - value * transformedDimension.transformHeight;

        _onChange({
          labelCoordinates: _objectSpread(_objectSpread({}, object.labelCoordinates), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, value), (0, _defineProperty2["default"])(_objectSpread3, "y", tValue), _objectSpread3))
        });

        break;

      default:
        break;
    }
  };

  if (object.elementType === 'image') {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
    object: object
  }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Label Property"
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "Name",
    value: object.name || '',
    error: object === null || object === void 0 ? void 0 : (_object$errors = object.errors) === null || _object$errors === void 0 ? void 0 : _object$errors.name,
    onChange: function onChange(value) {
      return _onChange({
        name: value
      });
    }
  }), (0, _has["default"])(object.labelCoordinates, 'x', 'y') && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "X",
    type: "number",
    showIf: (0, _has["default"])(object.labelCoordinates, 'x'),
    value: object.labelCoordinates._x || '',
    onChange: function onChange(value) {
      return onLabelPosChange('_x', value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    label: "Y",
    type: "number",
    showIf: (0, _has["default"])(object.labelCoordinates, 'y'),
    value: object.labelCoordinates._y || '',
    onChange: function onChange(value) {
      return onLabelPosChange('_y', value);
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
    label: "Action",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    title: "Delete",
    onClick: onDelete
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "delete",
    size: 24,
    style: {
      width: 16,
      height: 16,
      fill: 'black'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Cluster",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: onAddClusterClick
  }, "+"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: selectOptions,
    value: (object === null || object === void 0 ? void 0 : object.clusterId) || '',
    error: object === null || object === void 0 ? void 0 : (_object$errors2 = object.errors) === null || _object$errors2 === void 0 ? void 0 : _object$errors2.clusterId,
    onChange: function onChange(e) {
      return _onChange({
        clusterId: e.target.value
      });
    }
  })))));
};

BasicPropertyPanel.propTypes = {
  object: _propTypes["default"].object,
  onDelete: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  clusterList: _propTypes["default"].array,
  clusterListTrack: _propTypes["default"].array,
  layoutDimension: _propTypes["default"].object,
  transformedLayout: _propTypes["default"].object,
  onAddClusterClick: _propTypes["default"].func.isRequired
};
BasicPropertyPanel.defaultProps = {
  clusterList: [],
  clusterListTrack: []
};
var _default = BasicPropertyPanel;
exports["default"] = _default;