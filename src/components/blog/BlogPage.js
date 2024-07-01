import React, { useState } from "react";
import "./BlogPage.css";
import BlogList from "./BlogList.js";
import EmptyList from "../common/EmptyList.js";
import SearchBar from "../common/SearchBar.js";
import { blogList as rawBlogList } from "../../config/data.js";
//import { blogList } from "../../config/get_data.js";
import lukeHeadshot from "../../images/Luke Headshot.jpg";
import lukeDeckChair from "../../images/Luke Deck chair Twickenham Pic.jpeg";

// Image mapping
const imageMap = {
  lukeHeadshot,
  lukeDeckChair,
};

// Map the blogList to include actual image paths
const blogList = rawBlogList.map(blog => ({
  ...blog,
  authorAvatar: imageMap[blog.authorAvatar], // Map the identifier to the actual image
  cover: imageMap[blog.cover], // Map the identifier to the actual image
}));

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
      <div className="blog_post_container">
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
