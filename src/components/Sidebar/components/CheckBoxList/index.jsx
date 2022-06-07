import React, { useState, useEffect } from "react";
import "./CheckBoxList.scss";

function CheckBoxList(props) {
  const { optionList } = props;
  return (
    <div className="checkbox-list">
      <ul className="checkbox-list__list">
        {optionList?.map((option, index) => (
          <li key={index}>
            <input type="checkbox" id={option.title} value={option.title} />
            <label htmlFor={option.title}>
              {option.title} <span>({option.amount})</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBoxList;
