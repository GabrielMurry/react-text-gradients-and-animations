"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom");
var _ConicTextGradient = _interopRequireDefault(require("../ConicTextGradient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(() => {
  (0, _react.cleanup)();
});
test("should render ConicTextGradient component", () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_ConicTextGradient.default, {
    colors: ["red", "blue"]
  }));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toBeInTheDocument();
});
test("should output children of ConicTextGradient", () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_ConicTextGradient.default, {
    colors: ["red", "blue"]
  }, "Hello World"));
  const conicTextGradient = _react.screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveTextContent("Hello World");
});