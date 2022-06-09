import React, { useContext, useRef } from "react";
import { PRICE_RANGE } from "../../../../constants";
import { ProductsContext } from "../../../../context";

function FilterByPrices() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);
  const { price } = productsPage?.filters;

  const priceInput_gte = useRef();
  const priceInput_lte = useRef();

  const handleFilterPrices = (e) => {
    setProductsPage({
      ...productsPage,

      pagination: {
        _page: 1,
        _limit: 16,
      },
      isClearFilter: true,
      filters: {
        ...productsPage.filters,
        price: {
          price_gte: e.target.dataset.gte || 0,
          price_lte: e.target.dataset.lte,
        },
      },
    });
  };

  const handleFilterRangePrices = () => {
    setProductsPage({
      ...productsPage,
      isClearFilter: true,
      filters: {
        ...productsPage.filters,
        price: {
          price_gte: priceInput_gte.current.value || 0,
          price_lte: priceInput_lte.current.value,
        },
      },
    });
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
        <span className="mx-2">to</span>
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
