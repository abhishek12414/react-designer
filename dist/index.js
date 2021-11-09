"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ArrangePanel", {
  enumerable: true,
  get: function get() {
    return _panels.ArrangePanel;
  }
});
Object.defineProperty(exports, "Ellipse", {
  enumerable: true,
  get: function get() {
    return _objects.Ellipse;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _objects.Image;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _objects.Path;
  }
});
Object.defineProperty(exports, "Preview", {
  enumerable: true,
  get: function get() {
    return _Preview2["default"];
  }
});
Object.defineProperty(exports, "Rect", {
  enumerable: true,
  get: function get() {
    return _objects.Rect;
  }
});
Object.defineProperty(exports, "SizePanel", {
  enumerable: true,
  get: function get() {
    return _panels.SizePanel;
  }
});
Object.defineProperty(exports, "StylePanel", {
  enumerable: true,
  get: function get() {
    return _panels.StylePanel;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _objects.Text;
  }
});
Object.defineProperty(exports, "TextPanel", {
  enumerable: true,
  get: function get() {
    return _panels.TextPanel;
  }
});
Object.defineProperty(exports, "Vector", {
  enumerable: true,
  get: function get() {
    return _objects.Vector;
  }
});
exports["default"] = void 0;

var _Designer = _interopRequireDefault(require("./components/Designer"));

var _Preview2 = _interopRequireDefault(require("./Preview"));

var _objects = require("./components/shared/objects");

var _panels = require("./components/panels");

var _default = _Designer["default"];
exports["default"] = _default;