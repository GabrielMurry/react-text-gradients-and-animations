import React from "react";
import "../GradientAnimate.css"; // used simply for keyframing gradient animations

// angle not required - default 0, position not required - default 'center',
// colors required
// animate not required - default false
// animateDuration not required - default 10
// animateDirection not required - default vertical
const ConicTextGradient = ({
  angle,
  position,
  colors,
  animate,
  animateDuration,
  animateDirection,
  children,
}) => {
  return (
    <span
      style={{
        // position can be center, left etc. or '0, 0' '50% 50%' etc
        background: `conic-gradient(from ${angle ? angle : 0}deg at ${
          position ? position : "center"
        }, ${colors.join()})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundSize: `${animate ? "400% 400%" : ""}`, // background size must be smaller if you are animating, if no animate, then normal size
        animation: `${
          // if user selects animation true (default is false - no animation)
          animate
            ? // animation is referencing keyframes in GradientAnimate.css
              `gradient-animate-${
                animateDirection ? animateDirection : "vertical"
              } ${animateDuration ? animateDuration : 5}s ease infinite`
            : ""
        }`,
      }}
    >
      {children}
    </span>
  );
};

export default ConicTextGradient;
