import React from "react";
import "./Header.css";

// import 'font-awesome/css/font-awesome.min.css';

function Header() {
  return (
    <>
      <div className="header_section">
        <div className="header_bg">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="logo" href="index.html">
                <img src="/images/logo.png" alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
                <div className="call_section">
                  <ul>
                    <li><a href="#"><img src="/images/fb-icon.png" alt="Facebook" /></a></li>
                    <li><a href="#"><img src="/images/twitter-icon.png" alt="Twitter" /></a></li>
                    <li><a href="#"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a></li>
                    <li><a href="#"><img src="/images/instagram-icon.png" alt="Instagram" /></a></li>
                    <div className="donate_bt">
                      <a href="#"><img src="/images/search-icon.png" alt="Search" /></a>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
