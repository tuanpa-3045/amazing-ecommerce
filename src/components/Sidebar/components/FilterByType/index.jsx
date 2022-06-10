import React, { useContext } from "react";
import { types } from "../../../../constants";
import { ProductsContext } from "../../../../context";
import CheckBoxList from "../CheckBoxList";

function FilterByType() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  return (
    <>
      <h4>Type</h4>
      <CheckBoxList
        optionList={types}
        productsPage={productsPage}
        setProductsPage={setProductsPage}
        name={"type"}
      />
    </>
  );
}

export default FilterByType;
