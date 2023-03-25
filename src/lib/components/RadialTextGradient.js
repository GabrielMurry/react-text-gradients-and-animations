import React from "react";
// shape not required - default circle (other option ellipse)
// position not required - default 'center'
// colors required
const RadialTextGradient = ({ shape, position, colors, children }) => {
  return (
    <span
      style={{
        // if position of gradient is unspecified, it defaults to center
        background: `radial-gradient(${shape ? shape : "circle"} at ${
          position ? position : "center"
        }, ${colors.join()})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default RadialTextGradient;
