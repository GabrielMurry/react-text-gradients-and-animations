"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../GradientAnimate.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// used simply for keyframing gradient animations

// angle not required - default 0, position not required - default 'center',
// colors required
// animate not required - default false
// animateDuration not required - default 10
// animateDirection not required - default vertical
const ConicTextGradient = _ref => {
  let {
    angle,
    position,
    colors,
    animate,
    animateDuration,
    animateDirection,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    "data-testid": "conicTextGradient",
    style: {
      // position can be center, left etc. or '0, 0' '50% 50%' etc
      background: "conic-gradient(from ".concat(angle ? angle : 0, "deg at ").concat(position ? position : "center", ", ").concat(colors.join(), ")"),
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "".concat(animate ? "400% 400%" : ""),
      // background size must be smaller if you are animating, if no animate, then normal size
      animation: "".concat(
      // if user selects animation true (default is false - no animation)
      animate ? // animation is referencing keyframes in GradientAnimate.css
      "gradient-animate-".concat(animateDirection ? animateDirection : "vertical", " ").concat(animateDuration ? animateDuration : 5, "s ease infinite") : "")
    },
    children: children
  });
};
var _default = ConicTextGradient;
exports.default = _default;