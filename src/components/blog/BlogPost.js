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
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
            <p className="blog-date">Published {blog.createdAt}</p>
            <p>
              Estimated Read Time:{" "}
              <CalculateReadTime
                content={blog.para1.concat(blog.para2, blog.para3, blog.para4)}
                //content={blog.para1}
              />{" "}
              minutes
            </p>
          </header>
          <img src={blog.cover} />
          <p className="blog-para">{blog.para1}</p>
          <img src={blog.para1_image} />
          <p className="blog-para">{blog.para2}</p>
          <img src={blog.para2_image} />
          <p className="blog-para">{blog.para3}</p>
          <img src={blog.para3_image} />
          <p className="blog-para">{blog.para4}</p>
          <img src={blog.para4_image} />
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default BlogPost;
