// ============================================
// 📁 src/pages/Vehicles.js
// ============================================
import React from 'react';
import VehicleSearch from '../components/common/VehicleSearch';
import './Vehicles.css';

const Vehicles = () => {
  return (
    <div className="vehicles-page">
      <div className="container">
        <h1 className="page-title">Our Vehicles</h1>        
        <VehicleSearch />
      </div>
    </div>
  );
};

export default Vehicles;
