import classNames from "classnames";
import React from "react";

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

export default Light;
