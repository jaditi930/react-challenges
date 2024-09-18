import React, { useState, useEffect } from "react";

const ProgressBar = ({ TIME }) => {
  const [seconds, setSeconds] = useState(TIME);
  let width_percent = 100 / TIME;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setSeconds((seconds) => {
        console.log(seconds);
        if (seconds - 1 === 0) clearInterval(id);
        return seconds - 1;
      });
      setWidth((width) => width + width_percent);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div>{seconds}</div>
      <div
        style={{
          border: "2px solid grey",
          height: "10px",
          borderRadius: "20px",
        }}
      >
        <div
          id="progress-bar"
          style={{
            height: "100%",
            width: `${width}%`,
            backgroundColor: "#2a2a92",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
