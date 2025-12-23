import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import './NotFound.css';

function NotFound() {
  return (
    <div className='not-found-container'>
      <div className='not-found-card'>
        <h1>404</h1>
        <h2>Oops! Looks like you're lost in space.</h2>
        <p>Nothing here but digital dust bunnies and broken links.</p>
        <div className='not-found-btn'>
          <Link to='/'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large'>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
