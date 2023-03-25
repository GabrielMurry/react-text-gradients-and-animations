"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// angle not required - default 0, position not required - default 'center'
// colors required
const ConicTextGradient = _ref => {
  let {
    angle,
    position,
    colors,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("span", {
    style: {
      background: "conic-gradient(from ".concat(angle ? angle : 0, "deg at ").concat(position ? position : "center", ", ").concat(colors.join(), ")"),
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent"
    }
  }, children);
};
var _default = ConicTextGradient;
exports.default = _default;