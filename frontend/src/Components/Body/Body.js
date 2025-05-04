import React, { useState, useEffect } from "react";
import "./Body.css";
import { Link, useNavigate } from "react-router-dom";
import testimonials from '../JSON/Testimonial.json'
import AboutUs from "../pages/AboutUs";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { IconButton } from "@mui/material";
import OurMentors from "../pages/Mentors";
import Testimonials from "../pages/Testimonials";
import Courses from "../pages/Courses";

const Body = ({ activeSection }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate(); // Hook to navigate between routes

  const handleRedirect = () => {
    navigate("/about"); // Change "/target-page" to your desired route
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
                {testimonials.slice(0, 3).map((testimonial, index) => (
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
          <Courses />
        );

      case "about":
        return (
          <AboutUs />
        );

      case "mentors":
        return (
          <OurMentors />
        );

      case "testimonials":
        return (
          <Testimonials />
        )

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
