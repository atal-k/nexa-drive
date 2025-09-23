
// ============================================
// 📁 src/pages/Cars.js
// ============================================
import React, { useState, useEffect } from 'react';
import CarCard from '../components/common/CarCard';
import { getAllCars } from '../data/cars';
import './Cars.css';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    fuelType: '',
    priceRange: '',
    bodyType: ''
  });

  useEffect(() => {
    const allCars = getAllCars();
    setCars(allCars);
    setFilteredCars(allCars);
  }, []);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = cars;
    if (newFilters.fuelType) {
      filtered = filtered.filter(car => car.fuelType === newFilters.fuelType);
    }
    if (newFilters.bodyType) {
      filtered = filtered.filter(car => car.bodyType === newFilters.bodyType);
    }
    
    setFilteredCars(filtered);
  };

  return (
    <div className="cars-page">
      <div className="container">
        <h1 className="page-title">Our Cars</h1>
        
        <div className="filters">
          <select 
            value={filters.fuelType}
            onChange={(e) => handleFilterChange('fuelType', e.target.value)}
          >
            <option value="">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
          
          <select 
            value={filters.bodyType}
            onChange={(e) => handleFilterChange('bodyType', e.target.value)}
          >
            <option value="">All Body Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </div>
        
        <div className="cars-grid">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="no-results">
            <p>No cars found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;
