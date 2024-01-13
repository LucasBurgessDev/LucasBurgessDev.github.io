import React from 'react';
import './blog_page_styles.css';
import BlogList from "./BlogList.js";
import { SearchBar } from "./SearchBar";
import { blogList } from '../config/data.js';

function BlogPage() {
    return (
      <div className="blog_page">
        <div className="page_name">Articles</div>
        <SearchBar />
        <div className="container">
            <div className="blog_posts">
                <BlogList blogs={blogList} />
            </div>
        </div>
      </div>
    );
}

export default BlogPage;