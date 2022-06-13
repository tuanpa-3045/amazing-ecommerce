import React from "react";
import { useDispatch } from "react-redux";
import { setRate } from "../../../../redux/action";

import Rating from "./Rating";

function RefineByRatings() {
  const dispatch = useDispatch();

  const handleFilterRating = (e) => {
    dispatch(setRate(e.target.dataset.rating));
  };
  return (
    <>
      <h4>Ratings</h4>
      <ul>
        {Array.from({ length: 4 }, (_, i) => (
          <li key={4 - i} onClick={handleFilterRating} data-rating={4 - i}>
            <Rating rate={4 - i} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RefineByRatings;
