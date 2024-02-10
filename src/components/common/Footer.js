import React from 'react';
import './Footer.css';
import { Button } from "./button";
import YourComponent from "./SubmitButton";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <YourComponent/>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">LucasBurgessDev</small>
          <div className="social-icons">
            <a
              className="social-icon-link GitHub"
              href="https://github.com/LucasBurgessDev"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link LinkedIn"
              href="https://linkedin.com/luke-burgess-data"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://youtube.com/@lucasburgessdev"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/lucasburgessdev"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
