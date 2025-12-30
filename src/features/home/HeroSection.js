import React from 'react';
import "../../App.css";
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Video from "../../videos/video-5.mp4";

function HeroSection() {
    return (
      <div className="hero-container">
        <video
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>CRAFTING THE<br />DIGITAL FUTURE</h1>
          <p>Interaction Design & Creative Technology</p>
          <div className="hero-btns">
            <Link to='/blog'>
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                READ BLOG
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default HeroSection;