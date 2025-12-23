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
  // Helper function to extract text content, handling potential JSON strings recursively
  const getDescription = (data) => {
    if (!data) return "Read more about this project...";
    
    // 1. If it's a string, try to parse it
    if (typeof data === 'string') {
      try {
        const parsed = JSON.parse(data);
        return getDescription(parsed);
      } catch (e) {
        // Not a JSON string, treat as plain text if it's not a block
        return data;
      }
    }

    // 2. If it's an array, look for the first text-like block
    if (Array.isArray(data)) {
      for (const item of data) {
        const result = getDescription(item);
        if (result && result !== "Read more about this project..." && typeof result === 'string' && !result.startsWith('[') && !result.startsWith('{')) {
          return result;
        }
      }
    }

    // 3. If it's an object, check if it's a content block
    if (data && typeof data === 'object') {
      const type = (data.type || data.object_type || '').toLowerCase();
      const value = data.value || data.object_information;
      
      if (['text', 'body', 'introduction', 'conclusion'].includes(type) && value) {
        // Recurse into value in case it's stringified JSON
        const parsedValue = getDescription(value);
        return parsedValue;
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