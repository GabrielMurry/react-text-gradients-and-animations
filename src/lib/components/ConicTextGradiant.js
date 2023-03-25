import React from "react";

// angle not required - default 0, position not required - default 'center'
// colors required
const ConicTextGradient = ({ angle, position, colors, children }) => {
  return (
    <span
      style={{
        background: `conic-gradient(from ${angle ? angle : 0}deg at ${
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

export default ConicTextGradient;
