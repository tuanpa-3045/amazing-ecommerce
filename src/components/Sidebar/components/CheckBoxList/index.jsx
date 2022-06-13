import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrand, setType } from "../../../../redux/action";

import "./CheckBoxList.scss";

function CheckBoxList({ optionList, name }) {
  let [listCheckbox, setListCheckbox] = useState([]);

  const { isClearFilter } = useSelector((state) => state.productReducer);
  useEffect(() => {
    !isClearFilter && setListCheckbox([]);
  }, [isClearFilter]);
  const dispatch = useDispatch();

  const handleClickCheckbox = (e) => {
    if (listCheckbox.includes(e.target.value)) {
      setListCheckbox(listCheckbox.filter((item) => item !== e.target.value));
    } else {
      setListCheckbox([...listCheckbox, e.target.value]);
    }
  };

  useEffect(() => {
    if (name === "brand") {
      dispatch(setBrand(listCheckbox));
      
    } else if (name === "type") {
      dispatch(setType(listCheckbox));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCheckbox]);

  return (
    <div className="checkbox-list">
      <ul className="checkbox-list__list">
        {optionList?.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={option.title}
                onChange={handleClickCheckbox}
                checked={listCheckbox.includes(option.title)}
              />
              {option.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBoxList;
