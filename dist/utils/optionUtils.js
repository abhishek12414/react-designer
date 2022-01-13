"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _constants = require("../constants");

var getClusterList = function getClusterList(value, customList, mainList) {
  if (!value) return customList;
  var findObj = mainList.find(function (o) {
    return o.value === value;
  });
  return findObj ? [].concat((0, _toConsumableArray2["default"])(customList), [findObj]) : customList;
};

var getOptions = function getOptions(type, clusterId, clusterListTrack, clusterList) {
  return type !== _constants.TYPES.TRACK ? clusterList : getClusterList(clusterId, clusterListTrack, clusterList);
};

exports.getOptions = getOptions;