"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getDragTransformedCoords = function getDragTransformedCoords(object, transformedDimension) {
  var _object$height;

  object._x = +(object.x / transformedDimension.transformWidth).toFixed(2);
  object._y = +(transformedDimension.layoutHeight / transformedDimension.transformHeight - object.y / transformedDimension.transformHeight - ((_object$height = object === null || object === void 0 ? void 0 : object.height) !== null && _object$height !== void 0 ? _object$height : 0) / transformedDimension.transformHeight).toFixed(2);
  return object;
};

var _default = getDragTransformedCoords;
exports["default"] = _default;