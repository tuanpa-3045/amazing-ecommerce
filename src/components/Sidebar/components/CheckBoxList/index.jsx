import React, { useState, useEffect } from "react";

import "./CheckBoxList.scss";

function CheckBoxList({ optionList, productsPage, setProductsPage, name }) {
  let [listCheckbox, setListCheckbox] = useState([]);

  const handleClickCheckbox = (e) => {
    if (listCheckbox.includes(e.target.value)) {
      setListCheckbox(listCheckbox.filter((item) => item !== e.target.value));
    } else {
      setListCheckbox([...listCheckbox, e.target.value]);
    }
  };

  useEffect(() => {
    if (name === "brand") {
      setProductsPage({
        ...productsPage,
        filters: {
          ...productsPage.filters,
          brand: {
            brand_like: listCheckbox,
          },
        },
      });
    } else {
      setProductsPage({
        ...productsPage,
        filters: {
          ...productsPage.filters,
          type: {
            type_like: listCheckbox,
          },
        },
      });
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
