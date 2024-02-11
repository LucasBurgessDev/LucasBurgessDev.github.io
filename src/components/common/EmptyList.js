import React from "react";
import "./EmptyList.css";
import clearImg from "../../images/github.png";

const EmptyList = ({ message }) => (
  <div className="emptyList-wrap">
    <p>{message}</p>
    <img src={clearImg} alt="empty" />
  </div>
);

export default EmptyList;
