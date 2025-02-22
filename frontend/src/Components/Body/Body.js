import React, { useState, useEffect } from 'react';
import './Body.css';
import { faker } from '@faker-js/faker'; // npm install @faker-js/faker

const Body = ({ activeSection }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Generate an array of testimonial objects with random names and images
    const generatedTestimonials = Array.from({ length: 3 }, (_, index) => ({
      name: faker.person.fullName(), //Generate random name using faker
      //You can use the index for different profile pictures.
      //Or use faker.image.avatar() for truly random images.
      imageUrl: `https://i.pravatar.cc/100?img=${index + 3}`,
      testimonial: `The courses here transformed my career. I'm now working as a developer!`, //You can also make this dynamic.
    }));
    setTestimonials(generatedTestimonials);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000); // Reset form submission state after 3 seconds
  };


  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          
          <div className="home-section">
            <section id="courses" className="courses-section">
              <h2>Our Courses</h2>
              <div className="courses-grid">
                <div className="course-card">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Web Development" />
                  <div className="course-content">
                    <h3>Web Development</h3>
                    <p>Learn modern web development with React, Node.js, and more.</p>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
                <div className="course-card">
                  <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" alt="Data Science" />
                  <div className="course-content">
                    <h3>Data Science</h3>
                    <p>Master data analysis, machine learning, and statistics.</p>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
                <div className="course-card">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="AI" />
                  <div className="course-content">
                    <h3>Artificial Intelligence</h3>
                    <p>Explore AI, deep learning, and neural networks.</p>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="courses-grid-2">
                <button className="courses-grid-button">Show more</button>
              </div>
            </section>

            <section id="about" className="about-section">
              <h2>About Us</h2>
              <div className="about-content">
                <p>SUV-TechHorizon is dedicated to providing high-quality education in technology and computer science. Our mission is to make learning accessible, engaging, and effective for students worldwide.</p>
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

      case 'courses':
        return (
          <div className="section-wrapper">
            <section className="courses-section single-section">
              <h2>Our Courses</h2>
              <div className="courses-grid">
                <div className="course-card">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Web Development" />
                  <div className="course-content">
                    <h3>Web Development</h3>
                    <p>Learn modern web development with React, Node.js, and more.</p>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
                <div className="course-card">
                  <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" alt="Data Science" />
                  <div className="course-content">
                    <h3>Data Science</h3>
                    <p>Master data analysis, machine learning, and statistics.</p>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
                <div className="course-card">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="AI" />
                  <div className="course-content">
                    <h3>Artificial Intelligence</h3>
                    <p>Explore AI, deep learning, and neural networks.</p>
                    <button className="btn">Learn More</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="section-wrapper">
            <section className="about-section single-section">
              <h2>About Us</h2>
              <div className="about-content">
                <p>SUV-TechHorizon is dedicated to providing high-quality education in technology and computer science. Our mission is to make learning accessible, engaging, and effective for students worldwide.</p>
              </div>
            </section>
          </div>
        );

      case 'blog':
        return (
          <section className="blog-section">
            <h2>Our Blog</h2>
            <div className="blog-grid">
              <div className="blog-post">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Blog" />
                <h3>Latest Trends in Technology</h3>
                <p>Explore the cutting-edge developments in tech education...</p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        return (
          <section className="testimonials-section">
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
        );

      case 'contact':
        return (
          <section className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-container">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
                {formSubmitted && <p className="form-feedback">Thank you for your message!</p>}
              </form>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main className={`main-content ${activeSection !== 'home' ? 'single-section-view' : ''}`}>
      {renderSection()}
    </main>
  );
};

export default Body;