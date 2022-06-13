import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

import Header from "../layout/Header";
import { getProduct } from "../redux/action";

import "./styles.scss";

function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(
      getProduct({
        ...product?.category,
        ...product?.rate,
        ...product?.type,
        ...product?.brand,
        ...product?.price,
        ...product?.search,
        ...product?.order,
        ...product?.pagination,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    product?.category,
    product?.rate,
    product?.type,
    product?.brand,
    product?.price,
    product?.search,
    product?.order,
    product?.pagination?._page,
  ]);

  return (
    <div className="container-fluid">
      <Header />
      <div className="wrapper row gx-3">
        <div className="sidebar col-12 col-sm-2">
          <Sidebar />
        </div>
        <div className="content col-12 col-sm-10">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
