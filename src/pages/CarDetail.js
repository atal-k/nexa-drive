// ============================================
// 📁 src/pages/CarDetail.js
// ============================================
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../data/cars';
import ImageZoom from '../components/common/ImageZoom';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const carData = getCarById(parseInt(id));
    setCar(carData);
  }, [id]);

  if (!car) {
    return <div className="loading">Loading car details...</div>;
  }

  return (
    <div className="car-detail">
      <div className="container">
        <div className="car-detail__header">
          <h1>{car.name}</h1>
          <p className="price">Starting at ₹{car.price}</p>
        </div>
        
        <div className="car-detail__content">
        <div className="car-detail__gallery">
          <ImageZoom
            src={car.image}
            alt={car.name}
            className="main-image-zoom"
            zoomLevel={2}    // 2x magnification
            lensSize={250}   // 250 diameter
            // shape="square"   // square preview
          />
        </div>
          
          <div className="car-detail__info">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tab ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'overview' && (
                <div>
                  <h3>Key Features</h3>
                  <ul>
                    <li>Fuel Type: {car.fuelType}</li>
                    <li>Transmission: {car.transmission}</li>
                    <li>Mileage: {car.mileage} kmpl</li>
                    <li>Body Type: {car.bodyType}</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'specs' && (
                <div>
                  <h3>Technical Specifications</h3>
                  <table>
                    <tbody>
                      <tr><td>Engine</td><td>{car.specs?.engine || 'N/A'}</td></tr>
                      <tr><td>Power</td><td>{car.specs?.power || 'N/A'}</td></tr>
                      <tr><td>Torque</td><td>{car.specs?.torque || 'N/A'}</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="car-detail__actions">
              <button className="btn btn--primary">Schedule Test Drive</button>
              <button className="btn btn--secondary">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
