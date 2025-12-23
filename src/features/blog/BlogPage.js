import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogPage.css";
import BlogList from "./BlogList.js";
import EmptyList from "../../components/ui/EmptyList";
import SearchBar from "../../components/ui/SearchBar";
import { getBlogInfo } from "../../services/api";
import { TailSpin } from "react-loader-spinner";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      const data = await getBlogInfo();
      console.log("Fetched blogs data in BlogPage:", data);
      if (Array.isArray(data)) {
        setBlogs(data);
      } else if (data && Array.isArray(data.blogs)) {
         setBlogs(data.blogs);
      } else {
        console.error("Unexpected data format received from API:", data);
        setBlogs([]);
        setError("Unexpected data format received from server.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setError("Failed to fetch blogs. Please check your connection or try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSearchKey = (searchKey) => {
    setSearchKey(searchKey);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
  );

  const handleClearSearch = () => {
    setSearchKey("");
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
            <TailSpin
              visible={true}
              height="50"
              width="50"
              color="hsl(var(--accent-primary))"
              ariaLabel="circle-loading"
              wrapperClass="TailSpin"
            />
          ) : error ? (
            <div className="error-message">
              <h3>Oops! Something went wrong.</h3>
              <p>{error}</p>
              <button onClick={fetchBlogs} className="retry-btn">Retry</button>
            </div>
          ) : filteredBlogs.length ? (
            <BlogList blogs={filteredBlogs} />
          ) : (
            <EmptyList message="No results found." clearSearch={handleClearSearch} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
