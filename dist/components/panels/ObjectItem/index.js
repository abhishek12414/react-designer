"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _PropertyGroup = _interopRequireDefault(require("../PropertyGroup"));

var _Columns = _interopRequireDefault(require("../Columns"));

var _Column = _interopRequireDefault(require("../Column"));

var _Button = _interopRequireDefault(require("../../widgets/Button"));

var _Icon = _interopRequireDefault(require("../../shared/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ObjectItem = function ObjectItem(_ref) {
  var name = _ref.name,
      elementType = _ref.elementType,
      type = _ref.type,
      clusterList = _ref.clusterList,
      clusterId = _ref.clusterId,
      onClick = _ref.onClick,
      _onChange = _ref.onChange,
      onAddClusterClick = _ref.onAddClusterClick;

  // const { name, elementType, type, clusterList, clusterId } = props;
  var clusterOptions = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Select Cluster"), ",", clusterList.map(function (i) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: i.value,
      value: i.value
    }, i.label);
  }), ",");

  return /*#__PURE__*/_react["default"].createElement(_PropertyGroup["default"], {
    className: "propertyGroup"
  }, /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Label",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    name: true
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: 0,
      textTransform: 'capitalize'
    }
  }, name || elementType))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Type",
    rowInline: true
  }, type ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, type), /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: type,
    size: 24
  }))) : null), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Shape",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], {
    name: true
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      margin: 0,
      textTransform: 'capitalize'
    }
  }, elementType))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Cluster",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    style: 'fabButton',
    onClick: onAddClusterClick
  }, "+"), /*#__PURE__*/_react["default"].createElement("select", {
    value: clusterId,
    onChange: function onChange(e) {
      return _onChange({
        clusterId: e.target.value
      });
    }
  }, clusterOptions)))), /*#__PURE__*/_react["default"].createElement(_Columns["default"], {
    label: "Edit",
    rowInline: true
  }, /*#__PURE__*/_react["default"].createElement(_Column["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: onClick
  }, "Edit"))));
};

ObjectItem.propTypes = {
  name: _propTypes["default"].string,
  elementType: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  clusterList: _propTypes["default"].array.isRequired,
  clusterId: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onAddClusterClick: _propTypes["default"].func.isRequired
};
var _default = ObjectItem;
exports["default"] = _default;