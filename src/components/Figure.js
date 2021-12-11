import React from "react";

const Figure = () => {
  return (
    <div className="figure-container">
      <svg height="250px" width="200px" className="figure">
        {/* Post */}
        <line x1="50" y1="10" x2="50" y2="240" />
        <line x1="50" y1="10" x2="160" y2="10" />
        <line x1="160" y1="10" x2="160" y2="60" />
        <line x1="10" y1="240" x2="90" y2="240" />
        {/* Head */}
        <circle cx="160" cy="90" r="25" />
        {/* Body */}
        <line x1="160" y1="120" x2="160" y2="180" />
        {/* Left Arm */}
        <line x1="160" y1="140" x2="130" y2="160" />
        {/* Right Arm */}
        <line x1="160" y1="140" x2="190" y2="160" />
        {/* Left Leg */}
        <line x1="160" y1="180" x2="140" y2="210" />
        {/* Right Leg */}
        <line x1="160" y1="180" x2="180" y2="210" />
      </svg>
    </div>
  );
};

export default Figure;
