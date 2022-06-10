import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { getProducts } from "../api/api";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import { ProductsContext } from "../context";

import Header from "../layout/Header";

import "./styles.scss";

function Home() {
  const { productsPage, setProductsPage } = useContext(ProductsContext);

  useEffect(() => {
    const startAt = new Date().getTime();
    getProducts({
      ...productsPage?.pagination,
      ...productsPage?.filters?.price,
      ...productsPage?.filters?.order,
      ...productsPage?.filters?.search,
      ...productsPage?.filters?.rating,
      ...productsPage?.filters?.category,
      ...productsPage?.filters?.brand,
    }).then((res) => {
      setProductsPage({
        ...productsPage,
        products: res?.data?.products,
        pagination: res?.data?.pagination,
        timeLoading: new Date().getTime() - startAt,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    productsPage?.pagination._page,
    productsPage?.filters?.prices,
    productsPage?.filters?.order,
    productsPage?.filters?.search,
    productsPage?.filters?.rating,
    productsPage?.filters?.category,
    // productsPage?.filters?.brand,
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
