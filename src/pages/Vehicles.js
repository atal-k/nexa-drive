// ============================================
// 📁 src/pages/Vehicles.js
// ============================================
import React, { useState, useEffect } from 'react';
import VehicleCard from '../components/common/VehicleCard';
import { getAllVehicles } from '../data/vehicles';
import './Vehicles.css';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [filters, setFilters] = useState({
    wheeler: '',
    range: ''
  });

  useEffect(() => {
    const allVehicles = getAllVehicles();
    setVehicles(allVehicles);
    setFilteredVehicles(allVehicles);
  }, []);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let filtered = vehicles;
    if (newFilters.wheeler) {
      filtered = filtered.filter(vehicle => vehicle.bodyType === newFilters.wheeler);
    }
    if (newFilters.range) {
      filtered = filtered.filter(vehicle => {
        const rangeStr = vehicle.specs?.range || '';
        const numericRange = parseInt(String(rangeStr).replace(/[^0-9]/g, ''), 10) || 0;
        if (newFilters.range === 'below_150') return numericRange < 150;
        if (newFilters.range === 'above_150') return numericRange >= 150;
        return true;
      });
    }

    setFilteredVehicles(filtered);
  };

  return (
    <div className="vehicles-page">
      <div className="container">
        <h1 className="page-title">Our Vehicles</h1>

        <div className="filters">
          <select 
            value={filters.wheeler}
            onChange={(e) => handleFilterChange('wheeler', e.target.value)}
          >
            <option value="">All Wheeler Types</option>
            <option value="3-Wheeler">3-Wheeler</option>
            <option value="4-Wheeler">4-Wheeler</option>
          </select>

          <select 
            value={filters.range}
            onChange={(e) => handleFilterChange('range', e.target.value)}
          >
            <option value="">All Ranges</option>
            <option value="below_150">Below 150 km</option>
            <option value="above_150">150 km and above</option>
          </select>
        </div>

        <div className="vehicles-grid">
          {filteredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="no-results">
            <p>No vehicles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;
