import React from 'react'
import { Link } from 'react-router-dom'
import Chip from "../common/Chip.js";

function carditem(props) {
    return (
      <>
        <li className="cards__item">
          <Link className="cards__item__link" to={props.path}>
            <figure
              className="cards__item__pic-wrap"
              
            >
              <img
                src={props.src}
                alt="Travel Image"
                className="cards__item__img"
              />
              <Chip label={props.label} />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
};

export default carditem;
