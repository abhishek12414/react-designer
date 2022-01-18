"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransformedObjects = exports.getTransformedLayout = void 0;

var getTransformedLayout = function getTransformedLayout(width, height, zoneWidth, zoneHeight) {
  var layoutWidth = 0,
      layoutHeight = 0,
      svgLeftDistance = 0,
      svgTopDistance = 0;

  if (zoneWidth && zoneHeight) {
    var scalingWidth = width / zoneWidth;
    var scalingHeight = height / zoneHeight;

    if (!(scalingWidth * zoneHeight > height)) {
      layoutWidth = parseInt(scalingWidth * zoneWidth, 10);
      layoutHeight = parseInt(scalingWidth * zoneHeight, 10);
    } else {
      layoutWidth = parseInt(scalingHeight * zoneWidth, 10);
      layoutHeight = parseInt(scalingHeight * zoneHeight, 10);
    }

    svgLeftDistance = (width - layoutWidth) / 2;
    svgTopDistance = (height - layoutHeight) / 2;
  }

  return {
    zoneWidth: width,
    zoneHeight: height,
    layoutWidth: layoutWidth,
    layoutHeight: layoutHeight,
    transformWidth: +(layoutWidth / width).toFixed(2),
    transformHeight: +(layoutHeight / height).toFixed(2),
    svgLeftDistance: svgLeftDistance,
    svgTopDistance: svgTopDistance
  };
};

exports.getTransformedLayout = getTransformedLayout;

var getTransformedObjects = function getTransformedObjects(layoutHeight, layoutWidth, layoutCoordinates, transformedLayoutWidth, transformedLayoutHeight) {
  // handle if zone height or width is empty
  if (!layoutHeight || !layoutWidth) {
    return [];
  }

  var transformedWidth = transformedLayoutWidth / layoutWidth;
  var transformedHeight = transformedLayoutHeight / layoutHeight;
  var transformedCoordinates = layoutCoordinates.map(function (item) {
    var _item$labelCoordinate, _item$labelCoordinate2;

    switch (item.elementType || item.type) {
      case 'polygon':
        item._x = +item.path[0].x;
        item._y = +item.path[0].y;
        item.path = item.path.map(function (key) {
          var _key$x, _key$y;

          var coordinates = {};
          coordinates.x = +(transformedWidth * ((_key$x = key.x1) !== null && _key$x !== void 0 ? _key$x : key.x)).toFixed(2);
          coordinates.y = +(transformedHeight * ((_key$y = key.y1) !== null && _key$y !== void 0 ? _key$y : key.y)).toFixed(2);
          return coordinates;
        });
        item.x = item.path[0].x;
        item.y = item.path[0].y;
        item.moveX = item.x;
        item.moveY = item.y;
        break;

      case 'rect':
        item._x = item.x;
        item._y = +(layoutHeight - item.height - item.y).toFixed(2);
        item.x = +(transformedWidth * item.x).toFixed(2);
        item.y = +(transformedHeight * item.y).toFixed(2);
        item.width = +(transformedWidth * item.width).toFixed(2);
        item.height = +(transformedHeight * item.height).toFixed(2);
        break;

      case 'circle':
        item._x = item.x;
        item._y = +(layoutHeight - item.y).toFixed(2);
        item.x = +(transformedWidth * item.x).toFixed(2);
        item.y = +(transformedHeight * item.y).toFixed(2);
        item._radius = item.radius;
        item.radius = +(transformedHeight * item.radius).toFixed(2);
        break;

      case 'ellipse':
        item._x = item.x;
        item._y = item.y;
        item.x = +(transformedWidth * item.x).toFixed(2);
        item.y = +(transformedHeight * item.y).toFixed(2);
        item.width = +(transformedWidth * item.width).toFixed(2);
        item.height = +(transformedHeight * item.height).toFixed(2);
        break;

      case 'image':
        item.width = +(transformedWidth * item.width).toFixed(2);
        item.height = +(transformedHeight * item.height).toFixed(2);
        item.width = transformedLayoutWidth;
        item.height = transformedLayoutHeight;
        break;

      case 'gateway':
        item._x = item.x;
        item._y = +(layoutHeight - 18 - item.y).toFixed(2);
        item.x = +(transformedWidth * item.x).toFixed(2);
        item.y = +(transformedHeight * item.y).toFixed(2);
        item.plot._x = item.plot.x;
        item.plot._y = +(layoutHeight - 18 - item.plot.y).toFixed(2);
        item.plot.x = +(transformedWidth * item.plot.x).toFixed(2);
        item.plot.y = +(transformedHeight * item.plot.y).toFixed(2);
        break;

      default:
        return item;
    }

    if (layoutWidth && layoutHeight && item !== null && item !== void 0 && (_item$labelCoordinate = item.labelCoordinates) !== null && _item$labelCoordinate !== void 0 && _item$labelCoordinate.x && item !== null && item !== void 0 && (_item$labelCoordinate2 = item.labelCoordinates) !== null && _item$labelCoordinate2 !== void 0 && _item$labelCoordinate2.y) {
      item.labelCoordinates._x = item.labelCoordinates.x;
      item.labelCoordinates._y = +(layoutHeight - item.labelCoordinates.y).toFixed(2);
      item.labelCoordinates.x = +(transformedWidth * item.labelCoordinates.x).toFixed(2);
      item.labelCoordinates.y = +(transformedHeight * item.labelCoordinates.y).toFixed(2);
    }

    return item;
  });
  return transformedCoordinates;
};

exports.getTransformedObjects = getTransformedObjects;