"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

var _ObjectItem = _interopRequireDefault(require("../ObjectItem"));

var _constants = require("../../../constants");

var _Tab = _interopRequireDefault(require("../../widgets/Tab"));

var _excluded = ["objects", "onChange", "onObjectSelect", "objectFilter", "onObjectFilterChange"];
var OPTIONS = ['all'].concat((0, _toConsumableArray2["default"])(Object.values(_constants.TYPES)));

var ObjectList = function ObjectList(_ref) {
  var _getObjects;

  var objects = _ref.objects,
      _onChange = _ref.onChange,
      onObjectSelect = _ref.onObjectSelect,
      objectFilter = _ref.objectFilter,
      onObjectFilterChange = _ref.onObjectFilterChange,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var getObjects = function getObjects() {
    return objectFilter === 'all' ? objects : objects === null || objects === void 0 ? void 0 : objects.filter(function (obj) {
      var _obj$type;

      return ((_obj$type = obj === null || obj === void 0 ? void 0 : obj.type) !== null && _obj$type !== void 0 ? _obj$type : obj === null || obj === void 0 ? void 0 : obj.elementType) === objectFilter;
    });
  };

  var getObjectIndex = function getObjectIndex(selectedObj, index) {
    var objIndex = index;

    if (selectedObj !== null && selectedObj !== void 0 && selectedObj._id) {
      objIndex = objects === null || objects === void 0 ? void 0 : objects.findIndex(function (obj) {
        return obj._id === selectedObj._id;
      });
    } else if (selectedObj !== null && selectedObj !== void 0 && selectedObj.idx) {
      objIndex = objects.findIndex(function (obj) {
        return obj.idx === selectedObj.idx;
      });
    }

    return objIndex;
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rdObjectListContainer"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    options: OPTIONS,
    activeValue: objectFilter,
    onSelect: onObjectFilterChange
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "objectList"
  }, (_getObjects = getObjects()) === null || _getObjects === void 0 ? void 0 : _getObjects.map(function (obj, index) {
    var _ref2, _obj$_id;

    return /*#__PURE__*/_react["default"].createElement(_ObjectItem["default"], (0, _extends2["default"])({
      key: (_ref2 = (_obj$_id = obj === null || obj === void 0 ? void 0 : obj._id) !== null && _obj$_id !== void 0 ? _obj$_id : obj === null || obj === void 0 ? void 0 : obj.idx) !== null && _ref2 !== void 0 ? _ref2 : index
    }, obj, rest, {
      onEditObject: function onEditObject() {
        return onObjectSelect(getObjectIndex(obj, index));
      },
      onChange: function onChange(data) {
        return _onChange(getObjectIndex(obj, index), data);
      }
    }));
  })));
};

ObjectList.propTypes = {
  objects: _propTypes["default"].array.isRequired,
  objectFilter: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onObjectSelect: _propTypes["default"].func.isRequired,
  onObjectFilterChange: _propTypes["default"].func.isRequired
};
var _default = ObjectList;
exports["default"] = _default;