import { useState, useRef } from "react";

function Circle({ color, top, left }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        backgroundColor: `${color}`,
        top: `${top - 10}px`,
        left: `${left - 10}px`,
      }}
    ></div>
  );
}

export default function CirclesGame() {
  const [circlesData, setCircles] = useState([]);
  const [undoCircles, setUndoCircles] = useState([]);
  function handleClick(e) {
    //console.log(e.pageX, e.pageY);
    setCircles([...circlesData, { top: e.pageY, left: e.pageX, color: "red" }]);
  }
  function reset() {
    setCircles([]);
    setUndoCircles([]);
  }
  function undo() {
    let last_circle = circlesData[circlesData.length - 1];
    circlesData.splice(circlesData.length - 1, 1);
    setUndoCircles([...undoCircles, last_circle]);
  }
  function redo() {
    let first_circle = undoCircles[0];
    setUndoCircles(undoCircles.slice(1));
    setCircles([...circlesData, first_circle]);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          padding: "10px",
        }}
      >
        <button onClick={undo} disabled={circlesData.length === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={undoCircles.length === 0}>
          Redo
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      <div
        style={{
          width: "100vw",
          height: "90vh",
          //position: "relative",
          border: "2px solid red",
        }}
        onClick={handleClick}
      >
        {circlesData.map((circle, index) => {
          return (
            <Circle
              color={circle.color}
              left={circle.left}
              top={circle.top}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
