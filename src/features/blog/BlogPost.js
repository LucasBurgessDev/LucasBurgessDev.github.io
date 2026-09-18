import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmptyList from "../../components/ui/EmptyList";
import Chip from "../../components/ui/Chip";
import "./BlogPost.css";
import { CalculateReadTime } from "./WordCount.js";
import { getBlogInfo } from "../../services/api";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";

const VIDEO_EMBED_PATTERN = /(?:youtube\.com\/watch\?v=|youtu\.be\/|vimeo\.com\/)/;

function toEmbedUrl(url) {
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

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

  useEffect(() => {
    // setBlog and setLoading(false) land in separate renders (React 17 doesn't
    // batch state updates made after an await), so this must wait for both —
    // otherwise it fires while the loading spinner (not the code blocks) is
    // still what's actually mounted.
    if (blog && !loading) Prism.highlightAll();
  }, [blog, loading]);

  // The backend (get_blog_info) always normalizes content to a flat
  // array of { type, value } blocks before it reaches the client.
  const parsedContent = Array.isArray(blog?.content) ? blog.content : [];

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
                  const textForReadTime = parsedContent
                    .filter(b => b.type !== 'image' && b.type !== 'video')
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
            
            {parsedContent && parsedContent.length > 0 ? (
              parsedContent.map((block, index) => {
              const type = block.type;
              const value = block.value;

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
                case 'code':
                  return (
                    <pre key={index} className={`blog-code language-${block.language || 'none'}`}>
                      <code className={`language-${block.language || 'none'}`}>{value}</code>
                    </pre>
                  );
                case 'quote':
                  return (
                    <blockquote key={index} className="blog-quote">
                      <p>{value}</p>
                      {block.attribution && <cite>— {block.attribution}</cite>}
                    </blockquote>
                  );
                case 'video':
                  return (
                    <div key={index} className="blog-video-wrap">
                      {VIDEO_EMBED_PATTERN.test(value) ? (
                        <iframe
                          src={toEmbedUrl(value)}
                          title={`Blog video ${index}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video src={value} controls />
                      )}
                    </div>
                  );
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
