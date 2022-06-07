import React from "react";
import "./styles.scss";

function Header() {
  return (
    <header>
      <div className="logo" style={{ "--aspect-ratio": "1:1" }}>
        <img src="/logo.png" alt="photo1" />
      </div>
      <h1 className="nameLogo">amazing</h1>
      <div className="search">
        <input type="text" placeholder="Search a product" />
        <button type="submit" className="btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
