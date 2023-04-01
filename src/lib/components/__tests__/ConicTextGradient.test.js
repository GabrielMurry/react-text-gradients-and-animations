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

test("should test correct user inputted angle prop", () => {
  render(
    <ConicTextGradient angle={90} colors={["red", "blue"]}>
      Hello World
    </ConicTextGradient>
  );
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle(
    "background: conic-gradient(from 90deg at center, red, blue)"
  );
});

test("should test correct user inputted position prop", () => {
  render(
    <ConicTextGradient position={"left"} colors={["red", "blue"]}>
      Hello World
    </ConicTextGradient>
  );
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle(
    "background: conic-gradient(from 0deg at center, red, blue)"
  );
});

test("should test correct user inputted animate prop", () => {
  render(
    <ConicTextGradient colors={["red", "blue"]} animate>
      Hello World
    </ConicTextGradient>
  );
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle("backgroundSize: 400% 400%");
});

test("should test correct user inputted animateDirection prop", () => {
  render(
    <ConicTextGradient
      colors={["red", "blue"]}
      animate
      animateDirection={"horizontal"}
    >
      Hello World
    </ConicTextGradient>
  );
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle(
    "animation: gradient-animate-horizontal 5s ease infinite"
  );
});

test("should test correct user inputted animateDuration prop", () => {
  render(
    <ConicTextGradient colors={["red", "blue"]} animate animateDuration={10}>
      Hello World
    </ConicTextGradient>
  );
  const conicTextGradient = screen.getByTestId("conicTextGradient");
  expect(conicTextGradient).toHaveStyle(
    "animation: gradient-animate-vertical 10s ease infinite"
  );
});
