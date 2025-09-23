// ============================================
// 📁 src/components/sections/Hero.js
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="container">
          <div className="hero__text">
            <h1 className="hero__title">Find Your Dream Car</h1>
            <p className="hero__subtitle">
              Discover the perfect vehicle for your lifestyle
            </p>
            <div className="hero__actions">
              <Link to="/cars" className="btn btn--primary btn--large hero-btn">
                Explore Cars
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--large hero-btn">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero__image">
        <img src="/images/hero-car.jpg" alt="Featured Car" />
      </div>
    </section>
  );
};

export default Hero;
