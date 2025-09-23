// ============================================
// 📁 src/pages/About.js
// ============================================
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">About AutoDrive</h1>
        
        <div className="about__content">
          <div className="about__section">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, AutoDrive has been at the forefront of automotive 
              innovation, providing customers with reliable, efficient, and 
              stylish vehicles.
            </p>
          </div>
          
          <div className="about__section">
            <h2>Our Mission</h2>
            <p>
              To make car ownership accessible and enjoyable for everyone through 
              innovative technology and exceptional service.
            </p>
          </div>
          
          <div className="stats">
            <div className="stat">
              <h3>50,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Car Models</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Service Centers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
