import React from "react";
import Rating from "./Rating";

function RefineByRatings(props) {
  return (
    <>
      <h4>Ratings</h4>
      <ul>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={4 - i}>
            <Rating rate={4 - i} />
            <span> & Up </span>
            <span>123456</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RefineByRatings;
