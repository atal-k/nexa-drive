// ============================================
// 📁 src/components/layout/Footer.js
// ============================================
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>AutoDrive</h3>
            <p>Your trusted car companion</p>
          </div>
          
          <div className="footer__section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/cars">Our Cars</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4>Contact Info</h4>
            <p>Phone: +91 9876543210</p>
            <p>Email: info@autodrive.com</p>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; 2025 AutoDrive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;