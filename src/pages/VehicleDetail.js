// ============================================
// 📁 src/pages/VehicleDetail.js
// ============================================
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicleById } from '../data/vehicles';

import ImageZoomer from '../components/common/ImageZoomer';

import './VehicleDetail.css';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const vehicleData = getVehicleById(parseInt(id));
    setVehicle(vehicleData);
    setSelectedImageIndex(0);
  }, [id]);

  if (!vehicle) {
    return <div className="loading">Loading vehicle details...</div>;
  }

  return (
    <div className="vehicle-detail">
      <div className="container">
        <div className="vehicle-detail__header">
          <h1>{vehicle.name}</h1>
          <p className="price">{vehicle.price}</p>
        </div>
        
        <div className="vehicle-detail__content">
          <div className="vehicle-detail__gallery">
            <div className="vehicle-detail__main-image">
              <ImageZoomer
                src={`/images/${vehicle.images?.[selectedImageIndex] || ''}`}
                alt={`${vehicle.name} - image ${selectedImageIndex + 1}`}
                zoomFactor={2.5}
                selectorSize={140}
              />
            </div>

            {Array.isArray(vehicle.images) && vehicle.images.length > 0 && (
              <div className="vehicle-detail__thumbnails">
                {(vehicle.images.slice(0, 12)).map((imgName, idx) => (
                  <button
                    key={`${imgName}-${idx}`}
                    className={`vehicle-detail__thumb ${idx === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    onMouseEnter={() => setSelectedImageIndex(idx)}
                    onTouchStart={() => setSelectedImageIndex(idx)}
                    aria-label={`Select image ${idx + 1}`}
                  >
                    <img src={`/images/${imgName}`} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="vehicle-detail__info">
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
                    <li>Transmission: {vehicle.transmission}</li>
                    <li>Body Type: {vehicle.bodyType}</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'specs' && (
                <div>
                  <h3>Technical Specifications</h3>
                  <table>
                    <tbody>
                      <tr><td>Range</td><td>{vehicle.specs?.range || 'N/A'}</td></tr>
                      <tr><td>Payload Capacity</td><td>{vehicle.specs?.payloadCapacity || 'N/A'}</td></tr>
                      <tr><td>Max Speed</td><td>{vehicle.specs?.maxSpeed || 'N/A'}</td></tr>
                      <tr><td>Torque</td><td>{vehicle.specs?.torque || 'N/A'}</td></tr>
                      <tr><td>Fast Charging</td><td>{vehicle.specs?.fastCharging || 'N/A'}</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="vehicle-detail__actions">
              <button className="btn btn--primary">Schedule Test Drive</button>
              <button className="btn btn--secondary">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
