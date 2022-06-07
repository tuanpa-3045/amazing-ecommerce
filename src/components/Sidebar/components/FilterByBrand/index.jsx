import React from "react";
import CheckBoxList from "../CheckBoxList";
import "../../styles.scss";

function FilterByBrand() {
  const type = [
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
  return (
    <>
      <h4>Brand</h4>
      <div className="filters-search">
        <input
          type="text"
          placeholder="Search for other..."
          className="w-100 my-3"
        ></input>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <CheckBoxList optionList={type} />
    </>
  );
}

export default FilterByBrand;
