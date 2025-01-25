import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import ComputerVision from "../../images/Computer-Vision.jpg";
//import ImageGithub from "../../images/github.png";
//import ImagePython from "../../images/pythonspark.jpeg";
//import ImageStream from "../../images/streamdata.png";
//import ImageTerraform from "../../images/terraform.svg";
import WebsitePreview from '../common/WebsitePreview';
import ImageLukeDeckChair from '../../images/Luke Deck chair Twickenham Pic.jpeg';

function Cards() {
    return (
      <div className="cards">
        <h1>Featured</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={ImageLukeDeckChair}
                text="Welcome To My Blog"
                label="NEW"
                //path="/Projects"
                path="/Blog/1"
              />
              <CardItem
                src={ComputerVision}
                text="Computer Vision"
                label="Computer Vision"
                //path="/Projects"
                path="/Blog/2"
              />
{/*               <iframe
                //width="560"
                //height="315"
                src="https://www.youtube.com/embed/MV1qaFv4VUg?si=WAgrdLdfNov70Hwu"
                title="Golf Data"
                frameborder="100"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
            </ul>
            {/*                          <ul className="cards__items">
              <CardItem
                src={ImageStream}
                text="Data Streaming with Azure Event Hubs and IBM MQ. Used with permission from Microsoft."
                label="Data"
                //path="/Projects"
                path="/Blog"
              />
              <CardItem
                src={ImagePython}
                text="Python based ETL with Azure Databricks utilising Spark. Used with permission from Microsoft."
                label="Data"
                //path="/Projects"
                path="/Blog"
              />
              <CardItem
                src={ImageGithub}
                text="Automated CI/CD with GitHub Actions."
                label="DevOps"
                //path="/Projects"
                path="/Blog"
              />
            </ul>  */}
            {/*             <ul className="cards__items">
              <WebsitePreview url="https://www.wikipedia.org/" />
              <WebsitePreview url="https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12" />
              <iframe
                //width="560"
                //height="315"
                src="https://www.youtube.com/embed/MV1qaFv4VUg?si=WAgrdLdfNov70Hwu"
                title="Golf Data"
                frameborder="100"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                //width="560"
                //height="315"
                src="https://www.youtube.com/embed/PeMlggyqz0Y?si=nGTAbs7XkIxdtX77"
                title="Golf Data"
                frameborder="20"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </ul> */}
          </div>
        </div>
      </div>
    );
}

export default Cards
