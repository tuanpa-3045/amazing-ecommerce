import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortPrice } from "../../redux/action";

import CardItem from "./CardItem";
import Pagination from "../Pagination";
import "./styles.scss";

function Content() {
  const dispatch = useDispatch();
  const { products, timeLoading, pagination, isLoading, isClearFilter } =
    useSelector((state) => state.productReducer);

  const handleSortPrice = (e) => {
    dispatch(setSortPrice({ params: e.target.value }));
  };

  return (
    <div className="container-content">
      <div className="content-header">
        <p>
          {pagination?._totalProducts?.toLocaleString()} results found in:{" "}
          {timeLoading} ms
        </p>
        <div>
          <label>
            Sort by:
            <select style={{ marginLeft: "5px" }} onChange={handleSortPrice}>
              <option value="default" selected={!isClearFilter && true}>
                Featured
              </option>
              <option value="asc">Price asc.</option>
              <option value="desc">Price desc.</option>
            </select>
          </label>
        </div>
      </div>
      <div className="row">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          products &&
          products.map((product, index) => (
            <CardItem product={product} key={index} />
          ))
        )}
      </div>
      <Pagination />
    </div>
  );
}

export default Content;
