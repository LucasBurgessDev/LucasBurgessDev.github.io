import React from "react";
import "./EmptyList.css";
import clearImg from "../../images/github.png"; //TODO: add proper image for no results

const EmptyList = ({ message }) => (
  <div className="emptyList-wrap">
    {/* <p>{message}</p> */}
    <img src={clearImg} alt="empty" />
  </div>
);

export default EmptyList;
