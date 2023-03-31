import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConicTextGradient from "../ConicTextGradient";

afterEach(() => {
  cleanup();
});

test("should render ConicTextGradient component", () => {
  render(<ConicTextGradient colors={["red", "blue"]}></ConicTextGradient>);
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toBeInTheDocument();
});

test("should output children of ConicTextGradient", () => {
  render(
    <ConicTextGradient colors={["red", "blue"]}>Hello World</ConicTextGradient>
  );
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveTextContent("Hello World");
});
