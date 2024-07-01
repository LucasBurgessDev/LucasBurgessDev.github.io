import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogPage.css";
import BlogList from "./BlogList.js";
import EmptyList from "../common/EmptyList.js";
import SearchBar from "../common/SearchBar.js";
//import { blogList as rawBlogList } from "../../config/data.js";
//import lukeHeadshot from "../../images/Luke Headshot.jpg";
//import lukeDeckChair from "../../images/Luke Deck chair Twickenham Pic.jpeg";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const apiUrl = "https://get-blog-info-7hptrwqgna-nw.a.run.app";

  // Define fetchBlogs function
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiUrl);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
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
          {blogs.length ? (
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