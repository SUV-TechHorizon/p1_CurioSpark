import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: suvtechhorizon@techhorizon.com</p>
          <p>Phone: +91 9978572120</p>
          <p>Address: 123 Tech Street, Nagpur, Maharashtra, India</p>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Newsletter</h3>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SUV-TechHorizon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 