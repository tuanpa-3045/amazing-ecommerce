import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../../api/api";
import { setCategory } from "../../../../redux/action";

import "./styles.scss";

function Categories() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((res) => setCategories(res.data));
  }, []);

  const handleFindCategory = (e) => {
    dispatch(setCategory(e.target.dataset.category));
  };

  return (
    <div className="categories">
      <h3>Show results for</h3>
      {categories.map((item, index) => (
        <li key={index} onClick={handleFindCategory} data-category={item.name}>
          {item.name}
        </li>
      ))}
    </div>
  );
}

export default Categories;
