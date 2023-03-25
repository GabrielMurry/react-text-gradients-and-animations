"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// shape not required - default circle (other option ellipse)
// position not required - default 'center'
// colors required
const RadialTextGradient = _ref => {
  let {
    shape,
    position,
    colors,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("span", {
    style: {
      // if position of gradient is unspecified, it defaults to center
      background: "radial-gradient(".concat(shape ? shape : "circle", " at ").concat(position ? position : "center", ", ").concat(colors.join(), ")"),
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent"
    }
  }, children);
};
var _default = RadialTextGradient;
exports.default = _default;