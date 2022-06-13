import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

import { setClearFilter } from "../../redux/action";

import Categories from "./components/Categories";
import FilterByType from "./components/FilterByType";
import FilterByBrand from "./components/FilterByBrand";
import FilterByRating from "./components/FilterByRating";
import FilterByPrices from "./components/FilterByPrices";
function Sidebar() {
  const dispatch = useDispatch();
  const { isClearFilter, brand, type } = useSelector(
    (state) => state.productReducer
  );
  const isShowBtnClearFilter =
    isClearFilter ||
    brand?.brand_like?.length > 0 ||
    type?.type_like?.length > 0;
  const handleClearFilter = () => {
    dispatch(setClearFilter({ isClearFilter: false }));
  };

  return (
    <aside className="list-filter">
      {isShowBtnClearFilter && (
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
