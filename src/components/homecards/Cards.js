import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
//import ImageADF from "../../images/adf.png";
//import ImageGithub from "../../images/github.png";
//import ImagePython from "../../images/pythonspark.jpeg";
//import ImageStream from "../../images/streamdata.png";
import ImageTerraform from "../../images/terraform.svg";
import WebsitePreview from '../common/WebsitePreview';

function Cards() {
    return (
      <div className="cards">
        <h1>Highlights</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={ImageTerraform}
                text="Welcome To My Blog"
                label="NEW"
                //path="/Projects"
                path="/Blog/1"
              />
{/*               <CardItem
                src={ImageADF}
                text="Computer Vision"
                label="Computer Vision"
                //path="/Projects"
                path="/Blog/2"
              /> */}
            </ul>
{/*             <ul className="cards__items">
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
            </ul> */}
            <ul className="cards__items">
              <WebsitePreview url="https://www.wikipedia.org/" />
              {/* <WebsitePreview url="https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12" /> */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1nXACVQmfoU?si=zvMPwAbXwFej5CKJ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Cards
