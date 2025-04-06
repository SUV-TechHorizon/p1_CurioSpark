import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  let emailid = "suvtechhorizon.innovate@gmail.com";
  let phoneNumber = '+91 98600 00787 | +91 93072 64451';
  let address = 'Plot No: 34, 2nd Floor, Dattatray Nagar, Beside Axis Bank, Nagpur';

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
          <p>Email: {emailid}</p>
          <p>Phone: {phoneNumber}</p>
          <p>Address: {address}</p>
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
        <p>&copy; 2025 CurioSpark Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;