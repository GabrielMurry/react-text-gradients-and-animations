"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom");
var _LinearTextGradient = _interopRequireDefault(require("../LinearTextGradient"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(() => {
  (0, _react.cleanup)();
});
test("should render LinearTextGradient component", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearTextGradient.default, {
    colors: ["red", "blue"]
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toBeInTheDocument();
});
test("should output children of LinearTextGradient", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearTextGradient.default, {
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveTextContent("Hello World");
});
test("should test correct user inputted angle prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearTextGradient.default, {
    angle: 90,
    colors: ["red", "blue"],
    children: "Hello World"
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveStyle("background: linear-gradient(90deg, red, blue)");
});
test("should test correct user inputted animate prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    children: "Hello World"
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveStyle("backgroundSize: 400% 400%");
});
test("should test correct user inputted animateDirection prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    animateDirection: "horizontal",
    children: "Hello World"
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveStyle("animation: gradient-animate-horizontal 5s ease infinite");
});
test("should test correct user inputted animateDuration prop", () => {
  (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearTextGradient.default, {
    colors: ["red", "blue"],
    animate: true,
    animateDuration: 10,
    children: "Hello World"
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveStyle("animation: gradient-animate-vertical 10s ease infinite");
});