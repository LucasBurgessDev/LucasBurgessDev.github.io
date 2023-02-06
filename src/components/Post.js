import React from 'react';
import './post_styles.css';

function Post() {
    return (
        <div className='blog_post'>
            <div className='section section1'>
                <div className="post_title">
                    <span>Title</span>
                </div>
                <div className="post_subtitle">
                    <span>Subtitle</span>
                </div>
            </div>
            <div className='section section2'>
                <div className="post_title">
                    <span>Title</span>
                </div>
                <div className="post_subtitle">
                    <span>Subtitle</span>
                </div>
            </div>
            <div className='section section3'>
                <div className="post_title">
                    <span>Title</span>
                </div>
                <div className="post_subtitle">
                    <span>Subtitle</span>
                </div>
            </div>
            <div className='section section4'>
                <div className="post_title">
                    <span>Title</span>
                </div>
                <div className="post_subtitle">
                    <span>Subtitle</span>
                </div>
            </div>
            <div className='section section5'>
                <div className="post_title">
                    <span>Title</span>
                </div>
                <div className="post_subtitle">
                    <span>Subtitle</span>
                </div>
            </div>
        </div>
    )
}

export default Post;