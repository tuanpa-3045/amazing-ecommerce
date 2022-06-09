import React, { useContext } from "react";
import "./styles.scss";

import Categories from "./components/Categories";
import FilterByType from "./components/FilterByType";
import FilterByBrand from "./components/FilterByBrand";
import FilterByRating from "./components/FilterByRating";
import FilterByPrices from "./components/FilterByPrices";
import { ProductsContext } from "../../context";
function Sidebar() {
  const handleClearFilter = () => {
    setProductsPage({
      ...productsPage,
      isClearFilter: false,
      filters: {},
    });
  };
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  return (
    <aside className="list-filter">
      {productsPage?.isClearFilter && (
        <section>
          <button className="btn-clear" onClick={handleClearFilter}>
            <i
              className="fa-solid fa-eraser"
              style={{ marginRight: "5px" }}
            ></i>
            Clear all filters
          </button>
        </section>
      )}
      <section>
        <Categories />
        <h3>Refine by</h3>
        <FilterByType />
        <FilterByBrand />
        <FilterByRating />
        <FilterByPrices />
      </section>
    </aside>
  );
}

export default Sidebar;
