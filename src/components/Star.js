import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const Star = ({ n }) => {
  const [starsColored, setStarsColored] = useState(0);
  const [rating, setRating] = useState(0);

  function handleMouseEnter(i) {
    if (!rating) {
      setStarsColored(i);
      return;
    } else {
      if (i > starsColored) {
        //setRating(starsColored);
        setStarsColored(i);
      }
    }
  }

  function handleMouseLeave(i) {
    if (!rating) {
      setStarsColored(0);
      return;
    } else {
      setStarsColored(rating);
    }
  }
  let stars = Array.from({ length: n }).map((_, index) => {
    return (
      <FaStar
        size={50}
        color={index < starsColored ? "#FFD700" : "white"}
        onClick={() => {
          setStarsColored(index + 1);
          setRating(index + 1);
        }}
        onMouseEnter={() => {
          handleMouseEnter(index + 1);
        }}
        onMouseLeave={() => {
          handleMouseLeave(index + 1);
        }}
      />
    );
  });
  return <div className="flex gap-3">{stars}</div>;
};

export default Star;
