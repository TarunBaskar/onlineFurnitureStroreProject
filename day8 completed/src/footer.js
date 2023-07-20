import React from 'react';
import './footer.css';
// import logo from './INDIAN FURNITURE-logos_black.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <img src={logo} alt="Logo" className="footer_logo" /> */}
      <h3>INDIAN FURNITURE</h3>
      <div className="footer__social">
        <a href="https://www.facebook.com" className="footer_social-icon">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" className="footer_social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" className="footer_social-icon">
          <FaInstagram />
        </a>
      </div>
      <p>
        &copy; 2023 Your Indian Furniture Store. All rights reserved. | 
        <a href="/privacy-policy" className="footer_link">Privacy Policy</a> | 
        <a href="/terms-of-service" className="footer_link">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
