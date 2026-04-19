import { useState, useEffect } from 'react';
import './HeroCarousel.css';

import hotelImg from '../assets/photozon/hotel.jpeg';
import schoolImg from '../assets/photozon/school.jpeg';
import cafeImg from '../assets/photozon/cafe.jpeg';
import sportImg from '../assets/photozon/sport.jpeg';
import santeImg from '../assets/photozon/sante.jpeg';
import travailImg from '../assets/photozon/travail.jpeg';
import commerceImg from '../assets/photozon/commerce.jpeg';
import coiffeurImg from '../assets/photozon/coiffeur.png';

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLOGAN_UNIQUE = "Respirer un air sain pour un bien-être quotidien";

  const slides = [
    { image: hotelImg, title: 'Hôtellerie', subtitle: SLOGAN_UNIQUE },
    { image: schoolImg, title: 'Établissements Scolaires', subtitle: SLOGAN_UNIQUE },
    { image: cafeImg, title: 'Café-Restaurant', subtitle: SLOGAN_UNIQUE },
    { image: sportImg, title: 'Salle de Sport', subtitle: SLOGAN_UNIQUE },
    { image: santeImg, title: 'Santé & Médical', subtitle: SLOGAN_UNIQUE },
    { image: travailImg, title: 'Environnement de Travail', subtitle: SLOGAN_UNIQUE },
    { image: commerceImg, title: 'Commerces', subtitle: SLOGAN_UNIQUE },
    { image: coiffeurImg, title: 'Salons de Coiffure', subtitle: SLOGAN_UNIQUE },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-text-wrapper">
                <h1 className="slide-title">{slide.title}</h1>
                <div className="slide-divider"></div>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <a href="/solutions" className="slide-cta">Découvrir nos solutions</a>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-nav prev" onClick={goToPrevious}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="carousel-nav next" onClick={goToNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        <div className="carousel-pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;