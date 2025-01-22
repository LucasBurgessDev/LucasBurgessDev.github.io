import React from 'react';
import "../../App.css";
import { Button } from '../common/button';
import './HeroSection.css';
//import Image from '../images/img-7.jpg';
import Video from "../../videos/video-5.mp4";

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
        <h1>Insights Inside</h1>
        <p>A collection of my thoughts on technology, worldly goings on and life beyond the shire.</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            id="letsgo"
          >
            GET STARTED
          </Button>
{/*           <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("On Demand ghg Button Clicked")}
            id="demo"
          >
            ON DEMAND DEMOS <i className="far fa-play-circle" />
          </Button> */}
        </div>
      </div>
    );
}

export default HeroSection