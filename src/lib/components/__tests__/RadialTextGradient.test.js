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

test("should test correct user inputted shape prop", () => {
  render(
    <RadialTextGradient shape={"ellipse"} colors={["red", "blue"]}>
      Hello World
    </RadialTextGradient>
  );
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle(
    "background: radial-gradient(ellipse at center, red, blue)"
  );
});

test("should test correct user inputted position prop", () => {
  render(
    <RadialTextGradient position={"left"} colors={["red", "blue"]}>
      Hello World
    </RadialTextGradient>
  );
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle(
    "background: radial-gradient(ellipse at left, red, blue)"
  );
});

test("should test correct user inputted animate prop", () => {
  render(
    <RadialTextGradient colors={["red", "blue"]} animate>
      Hello World
    </RadialTextGradient>
  );
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle("backgroundSize: 400% 400%");
});

test("should test correct user inputted animateDirection prop", () => {
  render(
    <RadialTextGradient
      colors={["red", "blue"]}
      animate
      animateDirection={"horizontal"}
    >
      Hello World
    </RadialTextGradient>
  );
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle(
    "animation: gradient-animate-horizontal 5s ease infinite"
  );
});

test("should test correct user inputted animateDuration prop", () => {
  render(
    <RadialTextGradient colors={["red", "blue"]} animate animateDuration={10}>
      Hello World
    </RadialTextGradient>
  );
  const radialTextGradient = screen.getByTestId("radialTextGradient");
  expect(radialTextGradient).toHaveStyle(
    "animation: gradient-animate-vertical 10s ease infinite"
  );
});
