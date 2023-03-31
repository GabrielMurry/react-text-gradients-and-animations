import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadialTextGradient from "../RadialTextGradient";

afterEach(() => {
  cleanup();
});

test("should render RadialTextGradient component", () => {
  render(<RadialTextGradient colors={["red", "blue"]}></RadialTextGradient>);
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toBeInTheDocument();
});

test("should output children of RadialTextGradient", () => {
  render(
    <RadialTextGradient colors={["red", "blue"]}>
      Hello World
    </RadialTextGradient>
  );
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveTextContent("Hello World");
});
