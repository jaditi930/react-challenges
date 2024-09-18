import React, { useEffect, useState } from "react";

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

const GridLights = () => {
  const [lights, setLights] = useState(Array.from({ length: 9 }).map((_) => 0));
  const rows = 3;
  const [order, setOrder] = useState([]);

  function handleChange(index) {
    const newState = [...lights];
    setOrder([...order, index]);
    newState[index] = 1;
    setLights(newState);
  }

  function resetState(index) {
    setLights((prevState) => {
      const newState = [...prevState];
      newState[index] = 0;
      return newState;
    });
  }

  useEffect(() => {
    let off_lights = lights.filter((light) => light == 0);
    if (off_lights.length == 0) {
      order.map((value, index) => {
        setTimeout(() => {
          resetState(value);
        }, 300 * (index + 1));
        setOrder([]);
      });
    }
  }, [lights]);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Box state={lights[0]} index={0} handleChange={handleChange} />
        <Box state={lights[1]} index={1} handleChange={handleChange} />
        <Box state={lights[2]} index={2} handleChange={handleChange} />
      </div>
      <div className="flex">
        <Box state={lights[3]} index={3} handleChange={handleChange} />
        <Box state={lights[4]} index={4} handleChange={handleChange} />
        <Box state={lights[5]} index={5} handleChange={handleChange} />
      </div>
      <div className="flex">
        <Box state={lights[6]} index={6} handleChange={handleChange} />
        <Box state={lights[7]} index={7} handleChange={handleChange} />
        <Box state={lights[8]} index={8} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default GridLights;
