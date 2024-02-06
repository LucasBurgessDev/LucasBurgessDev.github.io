import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmptyList from "../common/EmptyList.js";
import { blogList } from "../../config/data.js";
import Chip from "../common/Chip.js";
import "./BlogPost.css";
import { CalculateReadTime } from "./WordCount.js";


function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <p>
              Estimated Read Time:{" "}
              <CalculateReadTime content={blog.description} /> minutes
            </p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default BlogPost;
