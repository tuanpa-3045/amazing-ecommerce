import React, { useContext } from "react";
import CheckBoxList from "../CheckBoxList";
import "../../styles.scss";
import { ProductsContext } from "../../../../context";
import { brands } from "../../../../constants";

function FilterByBrand() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  const handleFilterBrand = (e) => {
    setProductsPage({
      ...productsPage,

      pagination: {
        _page: 1,
        _limit: 16,
      },
      isClearFilter: true,
      filters: {
        ...productsPage.filters,
        category: {
          categories_like: e.target.dataset.category,
        },
      },
    });
  };

  return (
    <>
      <h4>Brand</h4>
      <div className="filters-search">
        <input
          type="text"
          placeholder="Search for other..."
          className="w-100 my-3"
          onChange={handleFilterBrand}
        ></input>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <CheckBoxList
        optionList={brands}
        productsPage={productsPage}
        setProductsPage={setProductsPage}
        name={"brand"}
      />
    </>
  );
}

export default FilterByBrand;
