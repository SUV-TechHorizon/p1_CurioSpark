import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000); // Reset subscription state after 3 seconds
      } else {
        console.error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: suvtechhorizon.innovate@gmail.com</p>
          <p>Phone: +91 9978572120</p>
          <p>Address: 123 Tech Street, Nagpur, Maharashtra, India</p>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Newsletter</h3>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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