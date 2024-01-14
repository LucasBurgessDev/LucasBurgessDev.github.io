import React from "react";
import "./EmptyList.css";
import clearImg from "../../images/github.png";

const EmptyList = () => (
  <div className="emptyList-wrap">
    <img src={clearImg} alt="empty" />
  </div>
);

export default EmptyList;
