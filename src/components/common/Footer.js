import React from 'react';
import './Footer.css';
import { Button } from "./button";
import sendtodb from "./SubmitButton";

function Footer() {
  return (
    <div className="footer-container">
{/*       <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive updates on new blog and project posts
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas" id="subscribe">
          <form>
            <input
              className="footer-input"
              name="email"
              //type="email"
              type="text"
              id="email-input"
              placeholder="Your Email"
            />
            <Button
              buttonStyle="btn--outline"
              id="contactme"
              onClick={(event) => sendtodb(event, 100)}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section> */}
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
