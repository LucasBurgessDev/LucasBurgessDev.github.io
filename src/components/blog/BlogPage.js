import React, { useState } from 'react';
import "./BlogPage.css";
import BlogList from "./BlogList.js";
import EmptyList from "../common/EmptyList.js";
import SearchBar from "../common/SearchBar.js";
import { blogList } from '../../config/data.js';

const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  // Search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div className="blog_page">
      <div className="page_name">Articles</div>
      <div className="search_bar">
        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchSubmit}
          handleSearchKey={(event) => setSearchKey(event.target.value)}
        />
      </div>
      <div className="container">
        <div className="blog_posts">
          {/* Blog List & Empty View */}
          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;