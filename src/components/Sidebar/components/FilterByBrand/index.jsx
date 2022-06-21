import React from "react";
import CheckBoxList from "../CheckBoxList";
import "../../styles.scss";
import { useDispatch } from "react-redux";
import { setBrand } from "../../../../redux/action";
const types = [
  {
    title: "Insignia™",
    amount: 432,
  },
  {
    title: "Samsung",
    amount: 431,
  },
  {
    title: "Metra",
    amount: 433,
  },
  {
    title: "HP",
    amount: 217,
  },
  {
    title: "Apple",
    amount: 181,
  },
];

function FilterByBrand() {
  const dispatch = useDispatch();
  const handleFilterBrand = (e) => {
    dispatch(setBrand(e.target.value));
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
      <CheckBoxList optionList={types} name="brand" />
    </>
  );
}

export default FilterByBrand;
