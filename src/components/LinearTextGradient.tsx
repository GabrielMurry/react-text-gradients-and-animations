import React, { ReactNode } from "react";
import "../GradientAnimate.css"; // used simply for keyframing gradient animations

interface LinearProps {
  angle?: number;
  colors: string[];
  animate?: boolean;
  animateDuration?: number;
  animateDirection?: string;
  children?: ReactNode;
}

// angle not required - default 0
// colors required
// animate not required - default false
// animateDuration not required - default 10
// animateDirection not required - default vertical
const LinearTextGradient = (props: LinearProps) => {
  return (
    <span
      data-testid="linearTextGradient"
      style={{
        background: `linear-gradient(${
          props.angle ? props.angle : 0
        }deg, ${props.colors.join()})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundSize: `${props.animate ? "400% 400%" : ""}`, // background size must be smaller if you are animating, if no animate, then normal size
        animation: `${
          // if user selects animation true (default is false - no animation)
          props.animate
            ? // animation is referencing keyframes in GradientAnimate.css
              `gradient-animate-${
                props.animateDirection ? props.animateDirection : "vertical"
              } ${props.animateDuration ? props.animateDuration : 5}s ease infinite`
            : ""
        }`,
      }}
    >
      {props.children}
    </span>
  );
};

export default LinearTextGradient;
