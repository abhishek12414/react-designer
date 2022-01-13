"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Icon = function Icon(_ref) {
  var active = _ref.active,
      className = _ref.className,
      icon = _ref.icon,
      size = _ref.size,
      style = _ref.style,
      onClick = _ref.onClick;

  var renderGraphic = function renderGraphic() {
    switch (icon) {
      case 'image':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M21 19v-14c0-1.1-.9-2-2-2h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-12.5-5.5l2.5 3.01 3.5-4.51 4.5 6h-14l3.5-4.5z"
        }));

      case 'format-bold':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4h-6.25v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zm-5.6-4.29h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9h-3.5v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
        }));

      case 'format-italic':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M10 4v3h2.21l-3.42 8h-2.79v3h8v-3h-2.21l3.42-8h2.79v-3z"
        }));

      case 'format-underline':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M12 17c3.31 0 6-2.69 6-6v-8h-2.5v8c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5v-8h-2.5v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2h-14z"
        }));

      case 'format-align-left':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M15 15h-12v2h12v-2zm0-8h-12v2h12v-2zm-12 6h18v-2h-18v2zm0 8h18v-2h-18v2zm0-18v2h18v-2h-18z"
        }));

      case 'format-align-center':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M7 15v2h10v-2h-10zm-4 6h18v-2h-18v2zm0-8h18v-2h-18v2zm4-6v2h10v-2h-10zm-4-4v2h18v-2h-18z"
        }));

      case 'format-align-right':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M3 21h18v-2h-18v2zm6-4h12v-2h-12v2zm-6-4h18v-2h-18v2zm6-4h12v-2h-12v2zm-6-6v2h18v-2h-18z"
        }));

      case 'add-box':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M19 3h-14c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"
        }));

      case 'add':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z"
        }));

      case 'text-format':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M5 17v2h14v-2h-14zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75 11h2.1l.9-2.2zm2.5-6.82l1.87 5.02h-3.74l1.87-5.02z"
        }));

      case 'text':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M5 17v2h14v-2h-14zm4.5-4.2h5l.9 2.2h2.1l-4.75-11h-1.5l-4.75 11h2.1l.9-2.2zm2.5-6.82l1.87 5.02h-3.74l1.87-5.02z"
        }));

      case 'rect':
        return /*#__PURE__*/_react["default"].createElement("rect", {
          width: 14,
          height: 14,
          x: 4,
          y: 5,
          rx: 3,
          ry: 3
        });

      case 'ellipse':
        return /*#__PURE__*/_react["default"].createElement("circle", {
          r: 8,
          cx: 11,
          cy: 12
        });

      case 'polygon':
        return /*#__PURE__*/_react["default"].createElement("g", {
          transform: 'scale(0.034) translate(100 25)'
        }, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M477.043,219.205L378.575,48.677c-7.974-13.802-22.683-22.292-38.607-22.292H143.041c-15.923, 0-30.628,8.49-38.608,22.292 L5.971,219.205c-7.961,13.801-7.961,30.785,0,44.588l98.462, 170.543c7.98,13.802,22.685,22.293,38.608,22.293h196.926 c15.925,0,30.634-8.491, 38.607-22.293l98.469-170.543C485.003,249.99,485.003,233.006,477.043,219.205z"
        }));

      case 'rotate':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M18.4 10.6c-1.85-1.61-4.25-2.6-6.9-2.6-4.65 0-8.58 3.03-9.96 7.22l2.36.78c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88l-3.62 3.62h9v-9l-3.6 3.6z"
        }));

      case 'send-to-back':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
          x: 7,
          y: 7,
          width: 13,
          height: 13,
          fill: "#ababab",
          strokeWidth: 1,
          stroke: "black"
        }), /*#__PURE__*/_react["default"].createElement("rect", {
          x: 1,
          y: 1,
          width: 13,
          height: 13,
          fill: "white",
          stroke: "black",
          strokeWidth: 1
        }));

      case 'bring-to-front':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("rect", {
          x: 7,
          y: 7,
          width: 13,
          height: 13,
          fill: "white",
          strokeWidth: 1,
          stroke: "black"
        }), /*#__PURE__*/_react["default"].createElement("rect", {
          x: 1,
          y: 1,
          width: 13,
          height: 13,
          fill: "#ababab",
          stroke: "black",
          strokeWidth: 1
        }));

      case 'map':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none"
        }), /*#__PURE__*/_react["default"].createElement("path", {
          d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"
        }));

      case 'track':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M0 0h24v24H0V0z",
          fill: "none"
        }), /*#__PURE__*/_react["default"].createElement("path", {
          d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
        }), /*#__PURE__*/_react["default"].createElement("circle", {
          cx: "12",
          cy: "9",
          r: "2.5"
        }));

      case 'back':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        });

      case 'wifi':
      case 'gateway':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
        });

      case 'eye-on':
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
          d: "M8 10c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2-1.104 0-2 .895-2 2 0 1.105.896 2 2 2z",
          fillRule: "nonzero",
          fillOpacity: "1",
          fill: "#000",
          stroke: "none"
        }), /*#__PURE__*/_react["default"].createElement("path", {
          d: "M8 4c2.878 0 5.378 1.621 6.635 4-1.257 2.379-3.757 4-6.635 4-2.878 0-5.377-1.621-6.635-4C2.623 5.621 5.122 4 8 4zm0 7c-2.3 0-4.322-1.194-5.478-3C3.678 6.194 5.7 5 8 5c2.3 0 4.322 1.194 5.479 3C12.322 9.806 10.3 11 8 11z",
          fillRule: "evenodd",
          fillOpacity: "1",
          fill: "#000",
          stroke: "none"
        }));

      case 'eye-off':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "M13.508 7.801c.556-.527 1.036-1.134 1.422-1.801h-1.185C12.48 7.814 10.378 9 8 9 5.622 9 3.52 7.814 2.254 6H1.07c.386.667.866 1.274 1.421 1.801L.896 9.396l.708.707L3.26 8.446c.71.523 1.511.932 2.374 1.199l-.617 2.221.964.268.626-2.255C7.06 9.96 7.525 10 8 10c.475 0 .94-.041 1.392-.12l.626 2.254.964-.268-.617-2.221c.863-.267 1.663-.676 2.374-1.2l1.657 1.658.708-.707-1.595-1.595z",
          fillRule: "nonzero",
          fillOpacity: "1",
          fill: "#000",
          stroke: "none"
        });

      case 'pencil':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
        });

      case 'delete':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
        });

      case 'error-outline':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        });

      case 'error':
        return /*#__PURE__*/_react["default"].createElement("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        });

      default:
        return /*#__PURE__*/_react["default"].createElement("g", null);
    }
  };

  var styles = {
    fill: active ? 'black' : '#b5b5b5',
    verticalAlign: 'middle',
    width: size,
    height: size
  };
  return /*#__PURE__*/_react["default"].createElement("svg", {
    // fit={true}
    className: className,
    viewBox: size ? "0 0 ".concat(size, " ").concat(size, " ") : '0 0 24 24',
    preserveAspectRatio: "xMidYMid meet",
    style: _objectSpread(_objectSpread({}, styles), style),
    onClick: onClick
  }, renderGraphic());
};

Icon.propTypes = {
  icon: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].number,
  style: _propTypes["default"].object,
  active: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
Icon.defaultProps = {
  size: 16
};
var _default = Icon;
exports["default"] = _default;