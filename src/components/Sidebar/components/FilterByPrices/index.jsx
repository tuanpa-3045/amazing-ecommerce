import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../../../redux/action";

const PRICE_RANGE = [
  { lte: 1 },
  { gte: 1, lte: 80 },
  { gte: 80, lte: 160 },
  { gte: 160, lte: 240 },
  { gte: 240, lte: 1820 },
  { gte: 1820, lte: 3400 },
  { gte: 3400, lte: 4980 },
  { gte: 4980 },
];

function FilterByPrices() {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.productReducer);
  const priceInput_gte = useRef();
  const priceInput_lte = useRef();

  const handleFilterPrices = (e) => {
    dispatch(
      setPrice({
        gte: e.target.dataset.gte || 0,
        lte: e.target.dataset.lte,
      })
    );
  };

  const handleFilterRangePrices = () => {
    dispatch(
      setPrice({
        gte: priceInput_gte.current.value || 0,
        lte: priceInput_lte.current.value,
      })
    );
  };

  return (
    <>
      <h4>Prices</h4>
      <div className="prices">
        <ul>
          {price?.price_gte && price?.price_lte ? (
            <li
              data-gte={price.price_gte}
              data-lte={price.price_lte}
              onClick={handleFilterPrices}
            >
              ${price.price_gte} - ${price.price_lte}
            </li>
          ) : price?.price_gte ? (
            <li
              data-gte={price.price_gte}
              data-lte={price.price_lte}
              onClick={handleFilterPrices}
            >
              ≥ ${price.price_gte}
            </li>
          ) : price?.price_lte ? (
            <li
              data-gte={price.price_gte}
              data-lte={price.price_lte}
              onClick={handleFilterPrices}
            >
              ≤ ${price.price_lte}
            </li>
          ) : (
            PRICE_RANGE.map((priceRange, index) => (
              <li
                key={index}
                data-gte={priceRange.gte}
                data-lte={priceRange.lte}
                onClick={handleFilterPrices}
              >
                {priceRange.gte && priceRange.lte
                  ? `$${priceRange.gte} - ${priceRange.lte}`
                  : priceRange.gte
                  ? `≥ ${priceRange.gte}`
                  : `≤ ${priceRange.lte}`}
              </li>
            ))
          )}
        </ul>
      </div>
      <form>
        <label>
          $
          <input
            type="number"
            min={0}
            ref={priceInput_gte}
            defaultValue={price?.price_gte}
          ></input>
        </label>
        <span className="mx-1">to</span>
        <label>
          $
          <input
            type="number"
            min={0}
            ref={priceInput_lte}
            defaultValue={price?.price_lte}
          ></input>
        </label>
        <button
          type="button"
          className="btn-go"
          onClick={handleFilterRangePrices}
        >
          Go
        </button>
      </form>
    </>
  );
}

export default FilterByPrices;
