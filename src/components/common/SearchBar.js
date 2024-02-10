import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    <form>
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={(event) => handleSearchKey(event.target.value)}
      />
    </form>
  </div>
);

export default SearchBar;
