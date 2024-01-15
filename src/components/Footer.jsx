// Footer.js

import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaReddit, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div>
          <h1>Shadow<span className='primary'>Wrestler</span></h1>
        </div>
        <div className='support-section'>
          
         
          <div className='support-links'>
            <a href='/'>Contact Us</a>
            <a href='/'>FAQ</a>
            <a href='/'>Donate</a>
          </div>
          <div className='social-icons'>
            <a href='/'><FaFacebook /></a>
            <a href='/'><FaReddit /></a>
            <a href='/'><FaInstagram /></a>
            <a href='/'><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
