import { useState } from "react";
import classNames from "classnames";

const Light = ({ color, active }) => {
  return (
    <div
      className={classNames(
        "h-20 w-20 border-2 border-black rounded-full m-2 bg-gray",
        {
          "bg-red-500": active && color === "red",
          "bg-green-500": active && color === "green",
          "bg-yellow-400": active && color === "yellow",
        }
      )}
    ></div>
  );
};

export default function TrafficLight() {
  const [turn, setTurn] = useState("red");

  let nextTurn;
  let turn_duration;

  if (turn === "red") {
    nextTurn = "yellow";
    turn_duration = 4000;
  }
  if (turn === "green") {
    nextTurn = "red";
    turn_duration = 3000;
  }
  if (turn === "yellow") {
    nextTurn = "green";
    turn_duration = 500;
  }

  setTimeout(() => {
    setTurn(nextTurn);
  }, turn_duration);

  return (
    <div>
      <Light color="red" active={turn === "red"} />
      <Light color="yellow" active={turn === "yellow"} />
      <Light color="green" active={turn === "green"} />
    </div>
  );
}
