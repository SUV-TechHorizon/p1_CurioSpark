import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({ onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleNavClick = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => handleNavClick('home')} className="no-underline flex items-center">
          <img src="/logo.png" alt="curiospark_logo.png" className="image-logo" />
        </Link>

      </div>
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => handleNavClick('home')}>Home</Link></li>
          <li><Link to="/courses" onClick={() => handleNavClick('courses')}>Courses</Link></li>
          <li><Link to="/about" onClick={() => handleNavClick('about')}>About</Link></li>
          <li><Link to="/blog" onClick={() => handleNavClick('blog')}>Blog</Link></li>
          <li><Link to="/testimonials" onClick={() => handleNavClick('testimonials')}>Testimonials</Link></li>
          <li><Link to="/contact" onClick={() => handleNavClick('contact')}>Contact</Link></li>
        </ul>

        <div className="social-links">
          <Link to="https://www.facebook.com/people/Curiospark-Technologies-Private-Limited/61572727858342/?rdid=ZWMpgLYkHqpNJbAb&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F18syKkZnT1%252F" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/Facebook.png" alt="Facebook" />
          </Link>
          {/* <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/Twitter.png" alt="Twitter" />
          </Link> */}
          <Link to="https://www.linkedin.com/company/curiospark-technologies-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/PNG/Color/LinkedIN.png" alt="LinkedIn" />
          </Link>
          <Link to="https://www.instagram.com/curiospark_technologies/#" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;