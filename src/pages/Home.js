// ============================================
// 📁 src/pages/Home.js
// ============================================
import React from 'react';
import Hero from '../components/sections/Hero';
import VehicleCard from '../components/common/VehicleCard';
import { getFeaturedVehicles } from '../data/vehicles';
import './Home.css';

const Home = () => {
  const featuredVehicles = getFeaturedVehicles();

  return (
    <div className="home">
      <Hero />
      
      <section className="featured-vehicles">
        <div className="container">
          <h2 className="section-title">Featured Vehicles</h2>
          <div className="vehicles-grid">
            {featuredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
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
              <p>Choose from multiple electric vehicle models</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
