import React from "react";
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

test("should test correct user inputted angle prop", () => {
    render(
        <LinearTextGradient angle={90} colors={["red", "blue"]}>
      Hello World
        </LinearTextGradient>
    );
    const linearTextGradient = screen.getByTestId("linearTextGradient");
    expect(linearTextGradient).toHaveStyle(
        "background: linear-gradient(90deg, red, blue)"
    );
});

test("should test correct user inputted animate prop", () => {
    render(
        <LinearTextGradient colors={["red", "blue"]} animate>
      Hello World
        </LinearTextGradient>
    );
    const linearTextGradient = screen.getByTestId("linearTextGradient");
    expect(linearTextGradient).toHaveStyle("backgroundSize: 400% 400%");
});

test("should test correct user inputted animateDirection prop", () => {
    render(
        <LinearTextGradient
            colors={["red", "blue"]}
            animate
            animateDirection={"horizontal"}
        >
      Hello World
        </LinearTextGradient>
    );
    const linearTextGradient = screen.getByTestId("linearTextGradient");
    expect(linearTextGradient).toHaveStyle(
        "animation: gradient-animate-horizontal 5s ease infinite"
    );
});

test("should test correct user inputted animateDuration prop", () => {
    render(
        <LinearTextGradient colors={["red", "blue"]} animate animateDuration={10}>
      Hello World
        </LinearTextGradient>
    );
    const linearTextGradient = screen.getByTestId("linearTextGradient");
    expect(linearTextGradient).toHaveStyle(
        "animation: gradient-animate-vertical 10s ease infinite"
    );
});
