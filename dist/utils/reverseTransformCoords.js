"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var reverseTransformCoords = function reverseTransformCoords(data, transformedLayoutObj, zoneObject) {
  var layoutWidth = zoneObject.width,
      layoutHeight = zoneObject.height; // handle if zone height or width is empty

  if (!layoutHeight || !layoutWidth) {
    return [];
  }

  var transformedWidth = transformedLayoutObj.layoutWidth / zoneObject.width;
  var transformedHeight = transformedLayoutObj.layoutHeight / zoneObject.height;
  var transformedCoordinates = data.map(function (item) {
    var _item$labelCoordinate, _item$labelCoordinate2;

    switch (item.elementType || item.type) {
      case 'polygon':
        item.path = item.path.map(function (key) {
          var _key$x, _key$y;

          var coordinates = {};
          coordinates.x = +(((_key$x = key.x1) !== null && _key$x !== void 0 ? _key$x : key.x) / transformedWidth).toFixed(2);
          coordinates.y = +(((_key$y = key.y1) !== null && _key$y !== void 0 ? _key$y : key.y) / transformedHeight).toFixed(2);
          return coordinates;
        });
        item.x = item.path[0].x;
        item.y = item.path[0].y;
        item.moveX = item.x;
        item.moveY = item.y;
        break;

      case 'rect':
        item.x = +(item.x / transformedWidth).toFixed(2);
        item.y = +(item.y / transformedHeight).toFixed(2);
        item.width = +(item.width / transformedWidth).toFixed(2);
        item.height = +(item.height / transformedHeight).toFixed(2);
        break;

      case 'circle':
        item.x = +(item.x / transformedWidth).toFixed(2);
        item.y = +(item.y / transformedHeight).toFixed(2);
        item.radius = +(item.radius / transformedHeight).toFixed(2);
        break;

      case 'ellipse':
        item.x = +(item.x / transformedWidth).toFixed(2);
        item.y = +(item.y / transformedHeight).toFixed(2);
        item.width = +(item.width / transformedWidth).toFixed(2);
        item.height = +(item.height / transformedHeight).toFixed(2);
        break;
      // case 'image':
      //   item.width = +((transformedWidth) * item.width).toFixed(2);
      //   item.height = +((transformedHeight) * item.height).toFixed(2);
      //   item.width = transformedLayoutWidth;
      //   item.height = transformedLayoutHeight;
      //   break;

      case 'gateway':
        item.x = +(item.x / transformedWidth).toFixed(2);
        item.y = +(item.y / transformedHeight).toFixed(2);
        item.plot.x = +(item.plot.x / transformedWidth).toFixed(2);
        item.plot.y = +(item.plot.y / transformedHeight).toFixed(2);
        break;

      default:
        return item;
    }

    if (layoutWidth && layoutHeight && item !== null && item !== void 0 && (_item$labelCoordinate = item.labelCoordinates) !== null && _item$labelCoordinate !== void 0 && _item$labelCoordinate.x && item !== null && item !== void 0 && (_item$labelCoordinate2 = item.labelCoordinates) !== null && _item$labelCoordinate2 !== void 0 && _item$labelCoordinate2.y) {
      item.labelCoordinates.x = +(item.labelCoordinates.x / transformedWidth).toFixed(2);
      item.labelCoordinates.y = +(item.labelCoordinates.y / transformedHeight).toFixed(2);
    }

    return item;
  });
  return transformedCoordinates;
};

var _default = reverseTransformCoords;
exports["default"] = _default;