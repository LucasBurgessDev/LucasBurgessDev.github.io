/*import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
                    <SocialIcon url="https://twitter.com/LukeyBurge" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://github.com/LucasBurgessDev" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://www.linkedin.com/in/luke-burgess-4b0975101/" style={{ height: 50, width: 50 }} /> */


import React from 'react';
import './Footer.css';
import { Button } from './button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive updates on new blog and project posts
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>How it works</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Demos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>GitHub</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fas fa-database'/>
              LucasBurgessDev
            </Link>
          </div>
          <small class='website-rights'>LucasBurgessDev</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link GitHub'
              to='/'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link LinkedIn'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
