import React from "react";

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
  return (
    <>
      <h4>Prices</h4>
      <div className="prices">
        {PRICE_RANGE.map((range, index) => {
          return (
            <li key={index}>
              {range.gte && range.lte
                ? `$${range.gte} - ${range.lte}`
                : range.lte
                ? `≤ $${range.lte}`
                : `≥ $${range.gte}`}
            </li>
          );
        })}
      </div>
      <form>
        <label>
          $<input type="number" min={0}></input>
        </label>
        <span>to</span>
        <label>
          $<input type="number" min={0}></input>
        </label>
        <button type="submit" className="btn-go" onClick={() => null}>
          Go
        </button>
      </form>
    </>
  );
}

export default FilterByPrices;
