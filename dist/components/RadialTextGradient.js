"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../GradientAnimate.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// used simply for keyframing gradient animations

// shape not required - default circle (other option ellipse)
// position not required - default 'center'
// colors required
// animate not required - default false
// animateDuration not required - default 10
// animateDirection not required - default vertical
const RadialTextGradient = _ref => {
  let {
    shape,
    position,
    colors,
    animate,
    animateDuration,
    animateDirection,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("span", {
    "data-testid": "radialTextGradient",
    style: {
      // if position of gradient is unspecified, it defaults to center
      background: "radial-gradient(".concat(shape ? shape : "circle", " at ").concat(position ? position : "center", ", ").concat(colors.join(), ")"),
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "".concat(animate ? "400% 400%" : ""),
      // background size must be smaller if you are animating, if no animate, then normal size
      animation: "".concat(
      // if user selects animation true (default is false - no animation)
      animate ? // animation is referencing keyframes in GradientAnimate.css
      "gradient-animate-".concat(animateDirection ? animateDirection : "vertical", " ").concat(animateDuration ? animateDuration : 5, "s ease infinite") : "")
    }
  }, children);
};
var _default = RadialTextGradient;
exports.default = _default;