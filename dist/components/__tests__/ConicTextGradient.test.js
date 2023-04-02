"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom");
var _ConicTextGradient = _interopRequireDefault(require("../ConicTextGradient"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(() => {
  (0, _react.cleanup)();
});
test("should render ConicTextGradient component", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    colors: ["red", "blue"]
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toBeInTheDocument();
});
test("should output children of ConicTextGradient", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveTextContent("Hello World");
});
test("should test correct user inputted angle prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    angle: 90,
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle("background: conic-gradient(from 90deg at center, red, blue)");
});
test("should test correct user inputted position prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    position: "left",
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle("background: conic-gradient(from 0deg at center, red, blue)");
});
test("should test correct user inputted animate prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    children: "Hello World"
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle("backgroundSize: 400% 400%");
});
test("should test correct user inputted animateDirection prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    animateDirection: "horizontal",
    children: "Hello World"
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle("animation: gradient-animate-horizontal 5s ease infinite");
});
test("should test correct user inputted animateDuration prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConicTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    animateDuration: 10,
    children: "Hello World"
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle("animation: gradient-animate-vertical 10s ease infinite");
});