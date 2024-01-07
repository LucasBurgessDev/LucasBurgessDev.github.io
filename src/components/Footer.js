import React from 'react';
import './Footer.css';
import { Button } from './button';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive updates on new blog and project posts
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline" >Subscribe</Button>
          </form>
        </div>
      </section>
      {/* <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>
            <Link to="/sign-up">How it works</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Demos</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">GitHub</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div> */}
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">LucasBurgessDev</small>
          <div class="social-icons">
            <a
              class="social-icon-link GitHub"
              href="https://github.com/LucasBurgessDev"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link LinkedIn"
              href="https://linkedin.com/luke-burgess-data"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://youtube.com/@lucasburgessdev"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/lucasburgessdev"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
