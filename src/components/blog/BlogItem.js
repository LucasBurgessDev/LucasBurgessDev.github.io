import React from 'react';
import { Link } from "react-router-dom";
import "./BlogItem.css";
import Chip from '../common/Chip.js';

function BlogItem({
  blog: {
    id,
    para1,
    para2,
    para3,
    para4,
    para1_image,
    para2_image,
    para3_image,
    para4_image,
    title,
    createdAt,
    authorName,
    authorAvatar,
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
            <img src={authorAvatar} alt="avatar" />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default BlogItem;