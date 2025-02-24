import React from 'react';
import { Link } from "react-router-dom";
import "./BlogItem.css";
import Chip from '../common/Chip.js';

function BlogItem({
  blog: {
    id,
    para1,
    title,
    created_on,
    author_name,
    author_avatar,
    category,
    cover,
  },
}) {
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img src={cover} alt="cover" className="blogItem-cover" />
        {/* need to change image */}
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{para1}</p>
        <footer>
          <div className="blogItem-author">
            <img src={author_avatar} alt="avatar" />
            <div>
              <h6>{author_name}</h6>
              <p>{created_on}</p>
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default BlogItem;