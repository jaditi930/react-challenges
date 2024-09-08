import React from "react";

const Box = ({ state, index, handleChange }) => {
  if (state == 1)
    return (
      <div
        className="w-[100px] h-[100px] p-5 bg-green-500 border-2 border-black"
        onClick={() => {
          handleChange(index);
        }}
      ></div>
    );
  else
    return (
      <div
        className="w-[100px] h-[100px] p-5 border-2 border-black"
        onClick={() => {
          handleChange(index);
        }}
      ></div>
    );
};

export default Box;
