import React from "react";
import "../GradientAnimate.css"; // used simply for keyframing gradient animations

// shape not required - default circle (other option ellipse)
// position not required - default 'center'
// colors required
// animate not required - default false
// animateDuration not required - default 10
// animateDirection not required - default vertical
const RadialTextGradient = ({
  shape,
  position,
  colors,
  animate,
  animateDuration,
  animateDirection,
  children,
}) => {
  return (
    <span
      data-testid="radialTextGradient"
      style={{
        // if position of gradient is unspecified, it defaults to center
        background: `radial-gradient(${shape ? shape : "circle"} at ${
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

export default RadialTextGradient;
