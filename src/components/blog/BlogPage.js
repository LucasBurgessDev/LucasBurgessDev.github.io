import React, { useState } from "react";
import "./BlogPage.css";
import BlogList from "./BlogList.js";
import EmptyList from "../common/EmptyList.js";
import SearchBar from "../common/SearchBar.js";
import { blogList } from "../../config/data.js";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Handle search key change
  const handleSearchKey = (searchKey) => {
    setSearchKey(searchKey);
    const filteredBlogs = blogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div className="blog_page">
      <div className="page_name">Articles</div>
      <div className="search_bar">
        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          handleSearchKey={handleSearchKey}
        />
      </div>
      <div className="container">
        <div className="blog_posts">
          {/* Render Blog List or No Results Message */}
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
