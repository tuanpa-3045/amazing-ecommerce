import React, { useContext, useEffect, useState } from "react";
import { getCategories } from "../../../../api/api";
// import { categories } from "../../../../constants";
import { ProductsContext } from "../../../../context";
import "./styles.scss";

function Categories() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFindCategory = (e) => {
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
    <div className="categories">
      <h3>Show results for</h3>
      {categories?.map((item, index) => (
        <li key={index} onClick={handleFindCategory} data-category={item.name}>
          {item.name}
        </li>
      ))}
    </div>
  );
}

export default Categories;
