import React from "react";
import CheckBoxList from "../CheckBoxList";

function FilterByType() {
  const type = [
    {
      title: "Trend cases",
      amount: 432,
    },
    {
      title: "Ult protection cases",
      amount: 431,
    },
    {
      title: "Ink cartridges",
      amount: 433,
    },
    {
      title: "Business cases",
      amount: 217,
    },
    {
      title: "Connectivity",
      amount: 181,
    },
  ];
  return (
    <>
      <h4>Type</h4>
      <CheckBoxList optionList={type} />
    </>
  );
}

export default FilterByType;
