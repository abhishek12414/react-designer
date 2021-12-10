"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _Column = _interopRequireDefault(require("../Column"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _Icon = _interopRequireDefault(require("../../shared/Icon"));

var _Select = _interopRequireDefault(require("../../widgets/Select"));

var _Button = _interopRequireDefault(require("../../widgets/Button"));

var _Checkbox = _interopRequireDefault(require("../../widgets/Checkbox"));

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var ObjectItem = function ObjectItem(_ref) {
  var name = _ref.name,
      elementType = _ref.elementType,
      type = _ref.type,
      clusterList = _ref.clusterList,
      clusterId = _ref.clusterId,
      onEditObject = _ref.onEditObject,
      _onChange = _ref.onChange,
      onAddClusterClick = _ref.onAddClusterClick,
      isHidden = _ref.isHidden;
  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
    className: "propertyGroup"
  }, elementType !== 'image' && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Label",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    name: true
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: 0
    }
  }, name !== null && name !== void 0 ? name : ''))), type ? /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Type",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      textTransform: 'capitalize'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, type), /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: type,
    size: 24,
    style: {
      width: 18,
      height: 18
    }
  })))) : null, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Shape",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    name: true
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: 0,
      textTransform: 'capitalize'
    }
  }, elementType))), elementType !== 'image' && /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Cluster",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: onAddClusterClick
  }, "+"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    name: "clusterId",
    value: clusterId,
    options: clusterList,
    onChange: function onChange(e) {
      return _onChange({
        clusterId: e.target.value
      });
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Hide in map",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    hasIconSwitch: true,
    name: "isHidden",
    value: isHidden,
    onChange: _onChange
  })), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Edit",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    title: "Edit",
    onClick: onEditObject
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "pencil",
    size: 24,
    style: {
      width: 16,
      height: 16,
      fill: 'black'
    }
  })))));
};

ObjectItem.propTypes = {
  name: _propTypes["default"].string,
  elementType: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  clusterList: _propTypes["default"].array.isRequired,
  clusterId: _propTypes["default"].string,
  isHidden: _propTypes["default"].bool,
  onEditObject: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onAddClusterClick: _propTypes["default"].func.isRequired
};
var _default = ObjectItem;
exports["default"] = _default;