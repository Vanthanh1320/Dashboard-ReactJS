import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {

  return (
    <div className="col-7">
      <div className="header__search">
        <span className="search-icon">
          <FaSearch />
        </span>
        <input type="text" className="form-search" placeholder="Search" />
      </div>
    </div>
  );
}

export default Search;
