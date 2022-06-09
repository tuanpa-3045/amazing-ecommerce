import React, { useContext } from "react";
import CardItem from "./CardItem";
import Pagination from "../Pagination";
import "./styles.scss";

import { ProductsContext } from "../../context/";

function Content() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  const renderProduct = (products) => {
    const ArrayProduct = [];
    products.map((product, index) =>
      ArrayProduct.push(<CardItem product={product} key={index} />)
    );
    return ArrayProduct;
  };

  const handleChangePagination = (page) => {
    setProductsPage({
      ...productsPage,
      pagination: { ...productsPage.pagination, _page: page },
    });
  };

  const handleSortPrice = (e) => {
    const value = e.target.value;

    setProductsPage({
      ...productsPage,

      pagination: {
        ...productsPage.pagination,
        _page: 1,
      },
      isClearFilter: true,
      filters: {
        ...productsPage.filters,

        order: {
          _sort: value === "default" ? null : "price",
          _order: value === "default" ? null : value,
        },
      },
    });
  };
  return (
    <div className="container-content">
      <div className="content-header">
        <p>
          {productsPage?.pagination?._totalProducts?.toLocaleString()} results
          found in {productsPage.timeLoading} ms
        </p>
        <div>
          <label>
            Sort by:
            <select style={{ marginLeft: "5px" }} onChange={handleSortPrice}>
              <option value="default" defaultValue={true}>
                Featured
              </option>
              <option value="asc">Price asc.</option>
              <option value="desc">Price desc.</option>
            </select>
          </label>
        </div>
      </div>
      <div className="row">
        {productsPage.loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          renderProduct(productsPage?.products)
        )}
      </div>
      <Pagination
        pagination={productsPage.pagination}
        handleChangePagination={handleChangePagination}
      />
    </div>
  );
}

export default Content;
