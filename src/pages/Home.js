// ============================================
// 📁 src/pages/Home.js
// ============================================
import React from 'react';
import Hero from '../components/sections/Hero';
import CarCard from '../components/common/CarCard';
import { getFeaturedCars } from '../data/cars';
import './Home.css';

const Home = () => {
  const featuredCars = getFeaturedCars();

  return (
    <div className="home">
      <Hero />
      
      <section className="featured-cars">
        <div className="container">
          <h2 className="section-title">Featured Cars</h2>
          <div className="cars-grid">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Best Prices</h3>
              <p>Competitive pricing with no hidden costs</p>
            </div>
            <div className="feature">
              <h3>Quality Service</h3>
              <p>Expert service and maintenance support</p>
            </div>
            <div className="feature">
              <h3>Wide Selection</h3>
              <p>Choose from 100+ car models</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
