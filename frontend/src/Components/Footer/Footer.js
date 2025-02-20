import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000); // Reset subscription state after 3 seconds
  };

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
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
            {subscribed && <p className="form-feedback">Thank you for subscribing!</p>}
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