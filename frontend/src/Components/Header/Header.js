import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = ({ onSectionChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home'); // Manage activeSection as state

  const slides = useMemo(() => [
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3",
      title: "Welcome to CurioSpark Technologies",
      description: "Igniting Minds, Sparking Futures"
    },
    {
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
      title: "Learn From The Best",
      description: "Expert instructors from top industries"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3",
      title: "Cutting-Edge Technology",
      description: "Stay ahead with modern tech education"
    }
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  }, [slides.length]);

  // Example function to change active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (onSectionChange) {
      onSectionChange(section);
    }

    // Scroll the target section into view
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      {activeSection === 'home' && (
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="cta-button">Get Started</button>
              </div>
            </div>
          ))}
          <button className="carousel-btn prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 