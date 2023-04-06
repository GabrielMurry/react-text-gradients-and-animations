import React, { ReactNode } from "react";
import "../GradientAnimate.css"; // used simply for keyframing gradient animations

interface RadialProps {
  shape?: string;
  position?: string;
  colors: string[];
  animate?: boolean;
  animateDuration?: number;
  animateDirection?: string;
  className?: string;
  children?: ReactNode;
}

// shape not required - default circle (other option ellipse)
// position not required - default 'center'
// colors required
// animate not required - default false
// animateDuration not required - default 10
// animateDirection not required - default vertical
const RadialTextGradient = (props: RadialProps) => {
    return (
        <span
            data-testid="radialTextGradient"
            className={props.className}
            style={{
                // if position of gradient is unspecified, it defaults to center
                background: `radial-gradient(${props.shape ? props.shape : "circle"} at ${
                    props.position ? props.position : "center"
                }, ${props.colors.join()})`,
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

export default RadialTextGradient;
