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
  // Helper function to extract text content, handling potential JSON strings
  const getDescription = (data) => {
    if (!data) return "Read more about this project...";
    
    const blocks = Array.isArray(data) ? data : (() => {
      try { return JSON.parse(data); } catch { return []; }
    })();

    if (!Array.isArray(blocks)) return "Read more about this project...";

    for (const block of blocks) {
      // If block itself is a JSON string, try to parse it
      let b = block;
      if (typeof block === 'string') {
        try { b = JSON.parse(block); } catch { continue; }
      }

      // If it's a nested array after parsing
      if (Array.isArray(b)) {
        const nestedDesc = getDescription(b);
        if (nestedDesc && nestedDesc !== "Read more about this project...") return nestedDesc;
        continue;
      }

      if (b && typeof b === 'object') {
        const type = (b.type || b.object_type || '').toLowerCase();
        const value = b.value || b.object_information;
        if (['text', 'body', 'introduction', 'conclusion'].includes(type) && value) {
          return value;
        }
      }
    }
    return "Read more about this project...";
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