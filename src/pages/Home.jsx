import React from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

import Header from "../layout/Header";

import "./styles.scss";

function Home() {
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
