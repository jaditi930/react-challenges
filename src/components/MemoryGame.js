import { getRandomColors } from "../utils";
import { useState, useEffect } from "react";

const Box = ({ turned, color, i, handleClick }) => {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        border: "1px solid black",
        backgroundColor: turned === true ? `${color}` : "white",
      }}
      onClick={() => {
        handleClick(i);
      }}
    ></div>
  );
};

const MemoryGame = ({ total }) => {
  let rows = total / 4;

  let new_colors = getRandomColors(total / 2);
  let new_colors_shuffle = [...new_colors];
  new_colors = [...new_colors, ...new_colors_shuffle];

  const [colors, setColors] = useState(new_colors);

  const [turned, setTurned] = useState(
    Array.from({ length: total }).fill(false)
  );
  const [lastTurned, setLastTurned] = useState(-1);

  function handleClick(i) {
    console.log(i, lastTurned);
    if (lastTurned == -1) setLastTurned(i);
    else {
      if (colors[i] != colors[lastTurned]) {
        setTimeout(() => {
          setTurned((turned) => {
            let new_turned = [...turned];
            new_turned[lastTurned] = false;
            new_turned[i] = false;
            return new_turned;
          });
        }, 1000);
      }
      setLastTurned(-1);
    }
    setTurned([...turned.slice(0, i), true, ...turned.slice(i + 1)]);
  }

  //console.log(colors);
  let board = Array.from({ length: rows }).map((_, index) => {
    const boxes = Array.from({ length: 4 }).map((_, index2) => {
      let i = 4 * index + index2;
      return (
        <Box
          i={i}
          turned={turned[i]}
          color={colors[i]}
          handleClick={handleClick}
        />
      );
    });
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        {boxes}
      </div>
    );
  });

  return <div>{board}</div>;
};

export default MemoryGame;
