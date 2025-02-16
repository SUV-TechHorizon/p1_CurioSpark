import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h2>SUV-TechHorizon</h2>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#" onClick={() => handleNavClick('home')}>Home</a></li>
          <li><a href="#" onClick={() => handleNavClick('courses')}>Courses</a></li>
          <li><a href="#" onClick={() => handleNavClick('about')}>About</a></li>
          <li><a href="#" onClick={() => handleNavClick('blog')}>Blog</a></li>
          <li><a href="#" onClick={() => handleNavClick('testimonials')}>Testimonials</a></li>
          <li><a href="#" onClick={() => handleNavClick('contact')}>Contact</a></li>
        </ul>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/Facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/Twitter.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/LinkedIN.png" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/Instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 