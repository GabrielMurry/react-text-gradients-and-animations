"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom");
var _RadialTextGradient = _interopRequireDefault(require("../RadialTextGradient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(() => {
  (0, _react.cleanup)();
});
test("should render RadialTextGradient component", () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_RadialTextGradient.default, {
    colors: ["red", "blue"]
  }));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toBeInTheDocument();
});
test("should output children of RadialTextGradient", () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_RadialTextGradient.default, {
    colors: ["red", "blue"]
  }, "Hello World"));
  const radialTextGradient = _react.screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveTextContent("Hello World");
});