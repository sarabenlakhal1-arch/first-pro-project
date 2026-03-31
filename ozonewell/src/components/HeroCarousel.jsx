import { useState, useEffect } from 'react';
import './HeroCarousel.css';
import heroImg from '../assets/hero.png';

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImg,
      title: 'CATALOGUE GÉNÉRAL 2026',
      subtitle: 'NOUVEAU 2026'
    },
    {
      image: heroImg,
      title: 'SOLUTIONS PROFESSIONNELLES',
      subtitle: 'QUALITÉ PREMIUM'
    },
    {
      image: heroImg,
      title: 'ÉQUIPEMENTS MODERNES',
      subtitle: 'INNOVATION 2026'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-text-left">
                <h1 className="slide-title">{slide.title}</h1>
              </div>
              <div className="slide-text-right">
                <span className="slide-subtitle">{slide.subtitle}</span>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-nav prev" onClick={goToPrevious} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button className="carousel-nav next" onClick={goToNext} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <div className="carousel-pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
