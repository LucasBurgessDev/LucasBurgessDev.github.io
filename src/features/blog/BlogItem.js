import React from 'react';
import { Link } from "react-router-dom";
import "./BlogItem.css";
import Chip from '../../components/ui/Chip';

function BlogItem({
  blog: {
    id,
    content,
    title,
    created_on,
    author_name,
    author_avatar,
    category,
    cover,
  },
}) {
  // The backend normalizes content to a flat array of { type, value }
  // blocks; the listing preview uses the first text block.
  const getDescription = (content) => {
    const block = Array.isArray(content)
      ? content.find((b) => ['text', 'body', 'introduction', 'conclusion'].includes(b.type) && b.value)
      : null;
    return block?.value || "Read more about this project...";
  };

  const description = getDescription(content);

  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img src={cover} alt="cover" className="blogItem-cover" />
        {/* need to change image */}
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
        <footer>
          <div className="blogItem-author">
            <img 
              src={author_avatar.startsWith('http') ? author_avatar : `/images/${author_avatar}`} 
              alt="avatar" 
            />
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