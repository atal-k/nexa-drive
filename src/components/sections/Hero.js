// ============================================
// 📁 src/components/sections/Hero.js
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__video-container">
        <video 
          className="hero__video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/van-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero__video-overlay"></div>
      </div>
      
      <div className="hero__content">
        <div className="container">
          <div className="hero__text">
            <h1 className="hero__title">Get your Dream Vehicle</h1>
            <p className="hero__subtitle">
              Experience automotive excellence with every drive
            </p>
            <div className="hero__actions">
              <Link to="/vehicles" className="btn btn--primary btn--large">
                Explore Collection
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--large">
                Book Test Drive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;