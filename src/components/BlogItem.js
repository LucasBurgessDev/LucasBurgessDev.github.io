import React from 'react';
import { Link } from "react-router-dom";
import "./BlogItem.css";
import Chip from './Chip.js';
import cover from "../images/github.png";

function BlogItem({blog:{id,description,title,createdAt,authorName,authorAvatar,category}}) {
    return (
      <div className="blogItem-wrap">
        <img src={cover} alt="cover" className="blogItem-cover" />
        {/* need to change image */}
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
        <footer>
          <div className="blogItem-author">
            <img src={authorAvatar} alt="avatar" />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link className="blogItem-link" to={`/blog/${id}`}>
            ➝
          </Link>
        </footer>
      </div>
    );
}

export default BlogItem;