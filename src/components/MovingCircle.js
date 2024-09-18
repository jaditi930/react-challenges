import React, { useState, useEffect } from "react";

const MovingCircle = () => {
  const [circle, setCircle] = useState({ top: 0, left: 0, show: false });
  function handleMouseMove(e) {
    setCircle({ top: e.pageY, left: e.pageX, show: true });
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      onMouseEnter={(e) => {
        console.log("mouse entered");
        handleMouseMove(e);
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        id="circle"
        style={{
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          position: "absolute",
          backgroundColor: "red",
          top: `${circle.top - 15}px`,
          left: `${circle.left - 15}px`,
          display: `${circle.show ? "block" : "none"}`,
        }}
      ></div>
    </div>
  );
};

export default MovingCircle;
