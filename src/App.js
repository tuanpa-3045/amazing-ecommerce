import React, { useReducer, useState } from "react";

import { ProductsContext } from "./context";

import Home from "./pages/Home";

import "./sass/style.scss";

export const initialState = {
  products: [],
  categories: [],
  pagination: {
    _page: 1,
    _limit: 16,
    _totalProducts: 100,
  },
  loading: false,
  timeLoading: 0,
  isClearFilter: false,
  filters: {
    category: {
      categories_like: null,
    },
    search: {
      q: null,
    },
    rating: {
      rating_like: null,
    },
    type: { type_like: null },
    brand: { brand_like: null },
    price: {
      price_lte: null,
      price_gte: null,
    },
    order: {
      _sort: null,
      _order: null,
    },
  },
};

function App() {
  const [productsPage, setProductsPage] = useState(initialState);
  return (
    <ProductsContext.Provider value={{ productsPage, setProductsPage }}>
      <Home />
    </ProductsContext.Provider>
  );
}

export default App;
