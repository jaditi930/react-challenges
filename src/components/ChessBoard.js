import React, { useState } from "react";

const isDiagonal = (x, y, i, j) => {
  // secondary diagonal
  if (i + j === x + y) return true;
  //primary diagonal
  if (y - x === j - i) return true;

  return false;
};

const initBoard = () => {
  //   let backgroundColor = Array.from({ length: 8 }).fill(
  //     Array.from({ length: 8 }).fill("white")
  //   );
  let backgroundColor = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }).fill("white")
  );

  for (let i = 0; i < 8; i++) {
    let start_color = i % 2 === 0 ? "black" : "white";

    for (let j = 0; j < 8; j++) {
      if (j === 0) backgroundColor[i][j] = start_color;
      else {
        if (backgroundColor[i][j - 1] === "black")
          backgroundColor[i][j] = "white";
        else backgroundColor[i][j] = "black";
      }
    }
  }
  return backgroundColor;
};

const Box = ({ color, x, y, handleClick }) => {
  return (
    <div
      className="w-[75px] h-[75px]"
      style={{
        backgroundColor: `${color}`,
      }}
      onClick={() => {
        handleClick(x, y);
      }}
    ></div>
  );
};

const Row = ({ row_no, row_colors, handleClick }) => {
  const row = Array.from({ length: 8 }).map((_, index) => {
    return (
      <Box
        color={row_colors[index]}
        x={row_no}
        y={index}
        key={row_no + index}
        handleClick={handleClick}
      />
    );
  });

  return <div className="flex">{row}</div>;
};

const ChessBoard = () => {
  const [colors, setColors] = useState(initBoard());

  const handleClick = (x, y) => {
    let new_colors = initBoard();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (isDiagonal(i, j, x, y)) new_colors[i][j] = "red";
      }
    }
    setColors(new_colors);
  };

  return Array.from({ length: 8 }).map((_, index) => {
    return (
      <Row
        row_no={index}
        key={index}
        row_colors={colors[index]}
        handleClick={handleClick}
      />
    );
  });
};

export default ChessBoard;
