import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import ComputerVision from "../../images/Computer-Vision.jpg";
import ImageLukeDeckChair from '../../images/Luke Deck chair Twickenham Pic.jpeg';

function Cards() {
    return (
      <div className="cards">
        <h1>Featured Work</h1>
        <div className="bento-grid">
            <div className="bento-item main-item">
              <CardItem
                src={ImageLukeDeckChair}
                text="Welcome To My Blog"
                label="LATEST"
                path="/blog/1"
              />
            </div>
            <div className="bento-item side-item-1">
              <CardItem
                src={ComputerVision}
                text="Computer Vision"
                label="AI"
                path="/blog/2"
              />
            </div>
            <div className="bento-item side-item-2">
               {/* Placeholder for future content or smaller features */}
               <div className="placeholder-card">
                  <h3>More Coming Soon</h3>
               </div>
            </div>
        </div>
      </div>
    );
}

export default Cards;
