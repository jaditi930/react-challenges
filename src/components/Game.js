// import React, { useState } from "react";

// function generateShuffledArray(items) {
//   const length = items.length;
//   // Create an array with integers from 1 to length
//   const array = Array.from({ length }, (_, i) => i);

//   // Shuffle the array using the Fisher-Yates algorithm
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

//   let shuffledItems = [];

//   for (let i = 0; i < array.length; i++) {
//     console.log(items[array[i]], array[i]);
//     shuffledItems.push(items[array[i]]);
//   }
//   return shuffledItems;
// }

// const Game = ({ data }) => {
//   const items = [];
//   Object.entries(data).forEach((item) => {
//     items.push(item[0], item[1]);
//   });
//   //console.log(items);

//   const shuffledItems = generateShuffledArray(items);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   //console.log(shuffledItems);

//   const itemButtons = shuffledItems.map((item, index) => {
//     return (
//       <button key={index} className="border-2 border-black bg-gray-300 p-2">
//         {item}
//       </button>
//     );
//   });

//   return <div className="flex gap-2 flex-wrap">{itemButtons}</div>;
// };

// export default Game;

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

const Game = ({ total }) => {
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

export default Game;
