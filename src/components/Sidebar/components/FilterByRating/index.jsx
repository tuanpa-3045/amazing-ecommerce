import React, { useContext } from "react";
import { getProducts } from "../../../../api/api";
import { ProductsContext } from "../../../../context";
import Rating from "./Rating";

function RefineByRatings(props) {
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  const handleFilterRating = (e) => {
    setProductsPage({
      ...productsPage,

      isClearFilter: true,
      pagination: {
        _page: 1,
        _limit: 16,
      },
      filters: {
        ...productsPage.filters,

        rating: {
          rating_like: e.target.value,
        },
      },
    });
  };
  return (
    <>
      <h4>Ratings</h4>
      <ul>
        {Array.from({ length: 4 }, (_, i) => (
          <li
            key={4 - i}
            data-rating={4 - i}
            value={4 - i}
            onClick={handleFilterRating}
          >
            <Rating rate={4 - i} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RefineByRatings;
