import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { getBlogInfo } from '../../services/api';
import { TailSpin } from 'react-loader-spinner';

function Cards() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogInfo();
                let blogList = [];
                if (Array.isArray(data)) {
                    blogList = data;
                } else if (data && Array.isArray(data.blogs)) {
                    blogList = data.blogs;
                }
                
                // Sort by date descending
                const sortedBlogs = blogList.sort((a, b) => new Date(b.created_on) - new Date(a.created_on));
                // Take top 4
                setBlogs(sortedBlogs.slice(0, 4));
            } catch (error) {
                console.error("Error fetching blogs for home page:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <div className="cards-loading">
                <TailSpin
                    visible={true}
                    height="50"
                    width="50"
                    color="hsl(var(--accent-primary))"
                    ariaLabel="circle-loading"
                    wrapperClass="TailSpin"
                />
            </div>
        );
    }

    return (
        <div className="cards">
            <h1>Featured Work</h1>
            <div className="bento-grid">
                {blogs.map((blog, index) => (
                    <div key={blog.id} className={`bento-item item-${index + 1}`}>
                        <CardItem
                            src={blog.cover}
                            text={blog.title}
                            label={blog.category.toUpperCase()}
                            path={`/blog/${blog.id}`}
                        />
                    </div>
                ))}
                <div className={`bento-item item-${blogs.length + 1} coming-soon-item`}>
                    <div className="placeholder-card">
                        <h3>More Coming Soon</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
