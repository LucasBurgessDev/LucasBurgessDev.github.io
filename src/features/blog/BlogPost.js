import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmptyList from "../../components/ui/EmptyList";
import Chip from "../../components/ui/Chip";
import "./BlogPost.css";
import { CalculateReadTime } from "./WordCount.js";
import { getBlogInfo } from "../../services/api";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogInfo(id);
        if (data && data.length > 0) {
          setBlog(data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="blog-page-container">
      <Link to="/blog" className="blog-goBack">
        <i className="fas fa-arrow-left"></i> Back to Blog
      </Link>
      {loading ? (
        <div className="loading-spinner">
          <TailSpin
            visible={true}
            height="50"
            width="50"
            color="hsl(var(--accent-primary))"
            ariaLabel="circle-loading"
            wrapperClass="TailSpin"
          />
        </div>
      ) : blog ? (
        <article className="blog-wrap">
          <header className="blog-header">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.sub_category &&
                blog.sub_category.map((category, i) => (
                  <Chip key={i} label={category} />
                ))}
            </div>
            <div className="blog-meta">
              <span className="blog-date">
                <i className="far fa-calendar-alt"></i> Published {blog.created_on}
              </span>
              <span className="blog-readTime">
                <i className="far fa-clock"></i> {(() => {
                  const textForReadTime = (blog.content || [])
                    .filter(b => b.type !== 'image')
                    .map(b => b.value || "")
                    .join(" ")
                    .trim();
                  return CalculateReadTime(textForReadTime);
                })()}
              </span>
            </div>
          </header>

          <div className="blog-content">
            {blog.cover && <img src={blog.cover} alt="Cover" className="blog-cover-img" />}
            
            {blog.content && blog.content.length > 0 ? (
              blog.content.map((block, index) => {
              const type = (block.type || '').toLowerCase();
              const value = block.value || '';

              if (!value) return null;

              switch (type) {
                case 'text':
                case 'body':
                case 'conclusion':
                case 'introduction':
                  return <p key={index} className="blog-para">{value}</p>;
                case 'image':
                  return (
                    <div key={index} className="blog-content-image">
                      <img src={value} alt={block.alt || 'Blog visual'} />
                      {block.caption && <span className="blog-image-caption">{block.caption}</span>}
                    </div>
                  );
                case 'header':
                  return <h2 key={index} className="blog-content-header">{value}</h2>;
                default:
                  return <p key={index} className="blog-para">{value}</p>;
              }
              })
            ) : null}
          </div>
        </article>
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default BlogPost;
