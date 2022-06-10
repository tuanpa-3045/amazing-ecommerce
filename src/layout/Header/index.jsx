import React, { useContext, useEffect, useRef } from "react";
import { getProducts } from "../../api/api";
import { ProductsContext } from "../../context/";

import "./styles.scss";

function Header() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  const handleSearch = (e) => {
    setProductsPage({
      ...productsPage,

      pagination: {
        _page: 1,
        _limit: 16,
      },
      isClearFilter: true,
      filters: {
        ...productsPage.filters,

        brand: {
          brand_like: e.target.value,
        },
      },
    });
  };

  return (
    <header>
      <div className="logo" style={{ "--aspect-ratio": "1:1" }}>
        <img src="/logo.png" alt="photo1" />
      </div>
      <h1 className="nameLogo">amazing</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search a product"
          onChange={handleSearch}
        />
        <button type="submit" className="btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
