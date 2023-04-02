"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom");
var _RadialTextGradient = _interopRequireDefault(require("../RadialTextGradient"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(() => {
  (0, _react.cleanup)();
});
test("should render RadialTextGradient component", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    colors: ["red", "blue"]
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toBeInTheDocument();
});
test("should output children of RadialTextGradient", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveTextContent("Hello World");
});
test("should test correct user inputted shape prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    shape: "ellipse",
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle("background: radial-gradient(ellipse at center, red, blue)");
});
test("should test correct user inputted position prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    position: "left",
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle("background: radial-gradient(ellipse at left, red, blue)");
});
test("should test correct user inputted animate prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    children: "Hello World"
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle("backgroundSize: 400% 400%");
});
test("should test correct user inputted animateDirection prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    animateDirection: "horizontal",
    children: "Hello World"
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle("animation: gradient-animate-horizontal 5s ease infinite");
});
test("should test correct user inputted animateDuration prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadialTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    animateDuration: 10,
    children: "Hello World"
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle("animation: gradient-animate-vertical 10s ease infinite");
});