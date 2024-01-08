import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';
//import Image from '../images/img-7.jpg';
import Video from '../videos/video-5.mp4';

function HeroSection() {
    return (
      <div className="hero-container">
        <video
          src={Video}
          alt="background - Video by Pressmaster from Pexels"
          autoPlay
          loop
          muted
        />
        {/* <img src={Image} alt="background" /> */}
        <h1>ANALYTICS AWAITS</h1>
        <p>Dive into the data below</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            id="letsgo"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("On Demand ghg Button Clicked")}
            id="demo"
          >
            ON DEMAND DEMOS <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    );
}

export default HeroSection