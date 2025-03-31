import React, { useState, useEffect } from "react";
import "./Body.css";
import { Link, useNavigate } from "react-router-dom";
import testimonials from '../JSON/Testimonial.json'
import { Button } from "@mui/material";
import CourseModal from "../Modal/CourseModal";
import AboutUs from "../pages/AboutUs";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { IconButton } from "@mui/material";


const Body = ({ activeSection }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");

  const navigate = useNavigate(); // Hook to navigate between routes

  const handleRedirect = () => {
    navigate("/about"); // Change "/target-page" to your desired route
  };

  const handleOpen = (course) => {
    setCourse(course); // Store which course was clicked
    setOpen(true); // Open modal
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset(); // Clear the form
        setTimeout(() => setFormSubmitted(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };



  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="home-section">
            <section id="courses" className="courses-section">
              <h2>Our Courses</h2>
              <div className="courses-grid">
                <div className="course-card">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt="Web Development"
                  />
                  <div className="course-content">
                    <h3>Web Development</h3>
                    <p>
                      Learn modern web development with React, Node.js, and
                      more.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                    alt="Data Science"
                  />
                  <div className="course-content">
                    <h3>Data Science</h3>
                    <p>
                      Master data analysis, machine learning, and statistics.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                    alt="AI"
                  />
                  <div className="course-content">
                    <h3>Artificial Intelligence</h3>
                    <p>Explore AI, deep learning, and neural networks.</p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="courses-grid-2">
                <Link to="/courses" className="courses-grid-button">
                  Show more
                </Link>
              </div>
            </section>

            <section id="about" className="about-section">
              <h2>About Us</h2>
              <div className="about-content">
                <p>
                  Curiospark Technologies is a leading IT training and solutions provider, committed to delivering
                  industry-relevant skills through practical, hands-on learning. Beyond traditional courses, we host webinars &
                  seminars led by industry experts, providing professionals with insights into emerging technologies and
                  market trends. Our interactive sessions ensure that learners stay ahead in the ever-evolving digital landscape.
                </p>
                <IconButton onClick={handleRedirect} sx={{ color: "#d4a373", mt: 1 }}>
                  <KeyboardDoubleArrowDownIcon sx={{ fontSize: 50 }} />
                </IconButton>
              </div>
            </section>

            <section id="testimonials" className="testimonials-section">
              <h2>What Our Students Say</h2>
              <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <img src={testimonial.imageUrl} alt={testimonial.name} />
                    <p>{testimonial.testimonial}</p>
                    <h4>{testimonial.name}</h4>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case "courses":
        return (
          <div className="section-wrapper">
            <section className="courses-section single-section">
              <h2>Our Courses</h2>
              <div className="courses-grid">
                <div className="course-card">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt="Web Development"
                  />
                  <div className="course-content">
                    <h3>Web Development</h3>
                    <p>
                      Learn modern web development with React, Node.js, and
                      more.
                    </p>
                    {/* <button className="btn">Learn More</button> */}
                    <Button variant="contained" color="primary" onClick={() => handleOpen("mern")}>
                      Learn More
                    </Button>

                  </div>
                </div>
                <div className="course-card">
                  <img
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                    alt="Data Science"
                  />
                  <div className="course-content">
                    <h3>Data Science</h3>
                    <p>
                      Master data analysis, machine learning, and statistics.
                    </p>
                    <Button variant="contained" color="primary" onClick={() => handleOpen("ds")}>
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                    alt="AI"
                  />
                  <div className="course-content">
                    <h3>Artificial Intelligence</h3>
                    <p>Explore AI, deep learning, and neural networks.</p>
                    <Button variant="contained" color="primary" onClick={() => handleOpen("AI")}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              {/* Render Modal and Pass Props */}
              <CourseModal open={open} onClose={() => setOpen(false)} course={course} />
            </section>
          </div>
        );

      case "about":
        return (
          <AboutUs />
        );

      case "blog":
        return (
          <section className="blog-section">
            <h2>Our Blog</h2>
            <div className="blog-grid">
              <div className="blog-post">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Blog"
                />
                <h3>Latest Trends in Technology</h3>
                <p>
                  Explore the cutting-edge developments in tech education...
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
            <div className="blog-grid">
              <div className="blog-post">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Blog"
                />
                <h3>Latest Trends in Technology</h3>
                <p>
                  Explore the cutting-edge developments in tech education...
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </section>
        );

      case "testimonials":
        return (
          <section className="testimonials-section">
            <h2>What Our Students Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <img src={testimonial.imageUrl} alt={testimonial.name} />
                  <p>{testimonial.testimonial}</p>
                  <h4>{testimonial.name}</h4>
                  <Link to={testimonial.video_url} target="_blank">
                    {/* <button className="testimonial-watch_Video_btn">
                      Watch Video
                    </button> */}
                    <button class="button-with-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        id="Play"
                        class="icon"
                      >
                        <path
                          d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                          fill="#ffffff"
                          class="color000000 svgShape"
                        ></path>
                      </svg>
                      <span class="text">Video</span>
                    </button>

                  </Link>
                </div>
              ))}
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-container">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn">
                  Send Message
                </button>
                {formSubmitted && (
                  <p className="form-feedback">Thank you for your message!</p>
                )}
              </form>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main
      className={`main-content ${activeSection !== "home" ? "single-section-view" : ""
        }`}
    >
      {renderSection()}
    </main>
  );
};

export default Body;
