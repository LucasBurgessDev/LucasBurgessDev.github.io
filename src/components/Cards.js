import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import ImageADF from '../images/adf.png';
import ImageGithub from '../images/github.png';
import ImagePython from '../images/pythonspark.jpeg';
import ImageStream from "../images/streamdata.png";
import ImageTerraform from '../images/terraform.svg';

function Cards() {
    return (
      <div className="cards">
        <h1>Projects Worked On</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={ImageTerraform}
                text="Create infrastructure on demand with Terraform. Copyright: https://hashicorp.com/brand"
                label="DevOps/IaC"
                path="/Projects"
              />
              <CardItem
                src={ImageADF}
                text="Data ELT with Azure Data Factory, Data Lake and SQL. Used with permission from Microsoft."
                label="Data"
                path="/Projects"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={ImageStream}
                text="Data Streaming with Azure Event Hubs and IBM MQ. Used with permission from Microsoft."
                label="Data"
                path="/Projects"
              />
              <CardItem
                src={ImagePython}
                text="Python based ETL with Azure Databricks utilising Spark. Used with permission from Microsoft."
                label="Data"
                path="/Projects"
              />
              <CardItem
                src={ImageGithub}
                text="Automated CI/CD with GitHub Actions."
                label="DevOps"
                path="/Projects"
              />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Cards
