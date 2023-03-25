import React from "react";

const TextGradient = ({ angle, colors, children }) => {
  return (
    <span
      style={{
        background: `linear-gradient(${angle}deg, ${colors.join()})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default TextGradient;
