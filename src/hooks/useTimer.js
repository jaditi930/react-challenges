import { useState, useEffect } from "react";
import React from "react";

const useTimer = (time) => {
  const [isRunning, setRunning] = useState(false);
  const [timeoutID, setTimeoutID] = useState(null);
  const [seconds, setSeconds] = useState(time);

  const stop = () => {
    console.log(timeoutID);

    // clearInterval(timeoutID);
    // setTimeoutID(null);
    setTimeoutID((prev) => {
      clearInterval(prev);
      return null;
    });

    setRunning(false);
    setSeconds(time);
  };

  const start = () => {
    if (timeoutID) return;
    setRunning(true);
    let id = setInterval(() => {
      setSeconds((prev) => {
        if (prev - 1 === 0) {
          stop();
          return time;
        }
        return prev - 1;
      });
    }, 1000);
    if (id) setTimeoutID(id);
  };

  return { isRunning, start, stop, seconds };
};

export default useTimer;
