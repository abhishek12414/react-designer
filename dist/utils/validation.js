"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateObject = void 0;

var _constants = require("../constants");

var regExForMacId = /^[a-fA-F0-9]*$/;

var validateObject = function validateObject(object) {
  var errorObj = {};

  if ((object === null || object === void 0 ? void 0 : object.fillOpacity) < 0 || (object === null || object === void 0 ? void 0 : object.fillOpacity) > 1) {
    errorObj.fillOpacity = 'Opacity is invalid';
  }

  if (object.type === _constants.TYPES.TRACK) {
    if (!(object !== null && object !== void 0 && object.clusterId)) {
      errorObj.clusterId = 'ClusterId is required';
    }
  }

  if (object.type === _constants.TYPES.GATEWAY || object.elementType === _constants.TYPES.GATEWAY) {
    var _object$plot;

    if (!(object !== null && object !== void 0 && object.name)) {
      errorObj.name = 'Cluster Name is required';
    }

    if (!(object !== null && object !== void 0 && object.hardwareType)) {
      errorObj.hardwareType = 'HardwareType is required';
    }

    if (!(object !== null && object !== void 0 && object.clusterId)) {
      errorObj.clusterId = 'ClusterId is required';
    }

    if (!(object !== null && object !== void 0 && object.identifierKey)) {
      errorObj.identifierKey = 'Identifier Key is required';
    }

    if (!(object !== null && object !== void 0 && object.identifierValue)) {
      var _object$identifierKey;

      errorObj.identifierValue = "".concat((_object$identifierKey = object.identifierKey) !== null && _object$identifierKey !== void 0 ? _object$identifierKey : 'Identifier Value', " is required");
    } else if ((object === null || object === void 0 ? void 0 : object.identifierKey) === 'macId' && !regExForMacId.test(object.identifierValue)) {
      errorObj.identifierValue = 'MacId is invalid';
    }

    if (!(object !== null && object !== void 0 && object.gatewayClusterType)) {
      errorObj.gatewayClusterType = 'Cluster type is required';
    }

    if ((object === null || object === void 0 ? void 0 : object._x) === '') {
      errorObj._x = 'X is required';
    }

    if ((object === null || object === void 0 ? void 0 : object._y) === '') {
      errorObj._y = 'Y is required';
    }

    if ((object === null || object === void 0 ? void 0 : (_object$plot = object.plot) === null || _object$plot === void 0 ? void 0 : _object$plot._x) === '') {
      errorObj._x = 'Plot X is required';
    }

    if (object._y === '') {
      errorObj._y = 'Plot Y is required';
    }
  }

  return errorObj;
};

exports.validateObject = validateObject;