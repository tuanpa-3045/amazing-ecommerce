import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKey } from "../../redux/action";
import "./styles.scss";

function Header() {
  const dispatch = useDispatch();
  const { isClearFilter } = useSelector((state) => state.productReducer);

  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    !isClearFilter && setSearchInput("");
  }, [isClearFilter]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    dispatch(setSearchKey(e.target.value));
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
          value={searchInput}
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
