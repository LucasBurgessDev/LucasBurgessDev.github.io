import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmptyList from "../common/EmptyList.js";
import Chip from "../common/Chip.js";
import "./BlogPost.css";
import { CalculateReadTime } from "./WordCount.js";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

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
          <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#000000"
            ariaLabel="bars-loading"
            wrapperClass="TailSpin"
          />
        </div>
      ) : blog ? (
        <div className="blog-wrap">
          <header>
            <h1>{blog[0].title}</h1>
            <div className="blog-subCategory">
              {blog[0].sub_category &&
                blog[0].sub_category.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
            </div>
            <p className="blog-date">Published {blog[0].created_on}</p>
            <p>
              Estimated Read Time:{" "}
              <CalculateReadTime
                content={blog.reduce((acc, curr) => acc + curr.content, "")}
              />{" "}
              minutes
            </p>
          </header>
          <div className="blog-content">
            {blog.map((item) => {
              switch (item.object_type) {
                case "introduction":
                  return (
                    <div className="introduction">
                      <p>{item.content}</p>
                    </div>
                  );
                case "body":
                  return (
                    <div className="body">
                      <p>{item.content}</p>
                    </div>
                  );
                case "image":
                  return (
                    <img
                      src={item.content}
                      alt="Blog Image"
                      className="blog-image"
                    />
                  );
                case "conclusion":
                  return (
                    <div className="conclusion">
                      <p>{item.content}</p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default BlogPost;

