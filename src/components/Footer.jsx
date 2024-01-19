// Footer.js

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <h1>Shadow<span className='primary'>Wrestler</span></h1>
        </Link>
        </div>
        <div className='support-section'>
          
         
          <div className='support-links'>
            <a href='/'>Contact</a>
            <a href='/'>FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
