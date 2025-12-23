import React from "react";
import "./EmptyList.css";

const EmptyList = ({ message = "No blogs found.", clearSearch }) => (
  <div className="emptyList-wrap">
    <div className="emptyList-content">
      <i className="fas fa-search"></i>
      <h3>{message}</h3>
      <p>We couldn't find what you were looking for. Please try a different category or search term.</p>
      {clearSearch && (
        <button className="go-back-btn" onClick={clearSearch}>
          Clear Search
        </button>
      )}
    </div>
  </div>
);

export default EmptyList;
