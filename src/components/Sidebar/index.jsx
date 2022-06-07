import React from "react";
import "./styles.scss";

import Categories from "./components/Categories";
import FilterByType from "./components/FilterByType";
import FilterByBrand from "./components/FilterByBrand";
import FilterByRating from "./components/FilterByRating";
import FilterByPrices from "./components/FilterByPrices";
function Sidebar() {
  return (
    <aside className="list-filter">
      <section>
        <button className="btn-clear">
          <i className="fa-solid fa-eraser" style={{ marginRight: "5px" }}></i>
          Clear all filters
        </button>
      </section>
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
