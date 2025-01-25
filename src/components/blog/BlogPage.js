import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogPage.css";
import BlogList from "./BlogList.js";
import EmptyList from "../common/EmptyList.js";
import SearchBar from "../common/SearchBar.js";
import { TailSpin } from "react-loader-spinner";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true); // Initialize loading state
  const apiUrl = "http://localhost:5000/get_blog_info";
  if (process.env.NODE_ENV !== "production") {
    const apiUrl = "http://localhost:5000/get_blog_info";
  } else {
    const apiUrl = "https://get-blog-info-7hptrwqgna-nw.a.run.app";
  }

  // Define fetchBlogs function
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiUrl, {
        options,
        crossDomain: true,
      });
      setBlogs(response.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  useEffect(() => {
    fetchBlogs(); // Fetch blogs when component mounts
  }, []); // Empty dependency array ensures this effect runs once

  // Handle search key change
  const handleSearchKey = (searchKey) => {
    setSearchKey(searchKey);
    const filteredBlogs = blogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey("");
    fetchBlogs(); // Re-fetch all blogs
  };

  return (
    <div className="blog_page">
      <div className="page_name">Articles</div>
      <div className="search_bar">
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          handleSearchKey={handleSearchKey}
        />
      </div>
      <div className="blog_post_container">
        <div className="blog_posts">
          {loading ? (
            //<div className="loading">Loading...</div> // Loading screen
            <TailSpin
              visible={true}
              height="300"
              width="300"
              color="#000000"
              ariaLabel="circle-loading"
              //wrapperStyle={{ marginTop: "50px" }}
              wrapperClass="TailSpin"
            />
          ) : blogs.length ? (
            <BlogList blogs={blogs} />
          ) : (
            <EmptyList message="No results found." />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
