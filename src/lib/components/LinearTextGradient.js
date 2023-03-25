import React from "react";

// angle not required - default 0
// colors required
const LinearTextGradient = ({ angle, colors, children }) => {
  return (
    <span
      style={{
        background: `linear-gradient(${
          angle ? angle : 0
        }deg, ${colors.join()})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default LinearTextGradient;
