import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinearTextGradient from "../LinearTextGradient";

afterEach(() => {
  cleanup();
});

test("should render LinearTextGradient component", () => {
  render(<LinearTextGradient colors={["red", "blue"]}></LinearTextGradient>);
  const linearTextGradient = screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toBeInTheDocument();
});

test("should output children of LinearTextGradient", () => {
  render(
    <LinearTextGradient colors={["red", "blue"]}>
      Hello World
    </LinearTextGradient>
  );
  const linearTextGradient = screen.getByTestId("linearTextGradient");
  expect(linearTextGradient).toHaveTextContent("Hello World");
});
