"use strict";

var _react = require("@testing-library/react");
require("@testing-library/jest-dom");
var _LinearTextGradient = _interopRequireDefault(require("../LinearTextGradient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
afterEach(() => {
  (0, _react.cleanup)();
});
test("should render LinearTextGradient component", () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_LinearTextGradient.default, {
    colors: ["red", "blue"]
  }));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toBeInTheDocument();
});
test("should output children of LinearTextGradient", () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_LinearTextGradient.default, {
    colors: ["red", "blue"]
  }, "Hello World"));
  const linearTextGradient = _react.screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveTextContent("Hello World");
});