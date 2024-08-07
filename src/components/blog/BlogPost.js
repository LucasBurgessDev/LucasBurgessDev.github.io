import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmptyList from "../common/EmptyList.js";
import Chip from "../common/Chip.js";
import "./BlogPost.css";
import { CalculateReadTime } from "./WordCount.js";
import axios from "axios";
import { Bars } from "react-loader-spinner";

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Initialize loading state
  const apiUrl = "https://get-blog-info-7hptrwqgna-nw.a.run.app";
  //const apiUrl = "http://localhost:5000/get_blog_info";

  const fetchBlog = async () => {
    try {
      const response = await axios.get(apiUrl + "?blog_id=" + parseInt(id), {
        headers: { "Content-Type": "application/json" },
        crossDomain: true,
      });
      setBlog(response.data[0]); // Always access the first item in the array
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  useEffect(() => {
    fetchBlog(); // Fetch blog when component mounts
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <Bars
            visible={true}
            height="300"
            width="300"
            color="#000000"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : blog ? (
        <div className="blog-wrap">
          <header>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.sub_category &&
                blog.sub_category.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
            </div>
            <p className="blog-date">Published {blog.created_on}</p>
            <p>
              Estimated Read Time:{" "}
              <CalculateReadTime
                content={
                  blog.para1 +
                  " " +
                  blog.para2 +
                  " " +
                  blog.para3 +
                  " " +
                  blog.para4
                }
              />{" "}
              minutes
            </p>
          </header>
          <img src={blog.cover} alt="Cover" />
          <p className="blog-para">{blog.para1}</p>
          {blog.para1_image && <img src={blog.para1_image} alt="Para1" />}
          <p className="blog-para">{blog.para2}</p>
          {blog.para2_image && <img src={blog.para2_image} alt="Para2" />}
          <p className="blog-para">{blog.para3}</p>
          {blog.para3_image && <img src={blog.para3_image} alt="Para3" />}
          <p className="blog-para">{blog.para4}</p>
          {blog.para4_image && <img src={blog.para4_image} alt="Para4" />}
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default BlogPost;
