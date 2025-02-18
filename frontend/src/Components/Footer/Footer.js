import React from "react";
// import "../../images";
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="subscribe_bt">
            <a href="#">Subscribe</a>
          </div>
          <input
            type="text"
            className="email_text"
            placeholder="Enter Your Email"
            name="Enter Your Email"
          />
          <div className="footer_section_2">
            <div className="row">
              <div className="col-lg-3 margin_top">
                <div className="call_text">
                  <a href="#">
                    <img src="images/call-icon1.png" />
                    <span className="padding_left_15">
                      Call Now +01 9876543210
                    </span>
                  </a>
                </div>
                <div className="call_text">
                  <a href="#">
                    <img src="images/mail-icon1.png" />
                    <span className="padding_left_15">demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="information_main">
                  <h4 className="information_text">Information</h4>
                  <p className="many_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="information_main">
                  <h4 className="information_text">Helpful Links</h4>
                  <div className="footer_menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="news.html">News</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="information_main">
                  <div className="footer_logo">
                    <a href="index.html">
                      <img src="images/footer-logo.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
