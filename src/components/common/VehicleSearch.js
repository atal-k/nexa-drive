// ============================================
// 📁 src/components/common/VehicleSearch.js
// ============================================
import React, { useState, useEffect, useMemo } from 'react';
import VehicleCard from './VehicleCard';
import { getAllVehicles } from '../../data/vehicles';
import './VehicleSearch.css';

const VehicleSearch = ({ onResultsChange, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    bodyType: '',
    priceRange: ''
  });
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const allVehicles = useMemo(() => getAllVehicles(), []);

  // Filter and search vehicles
  const filteredVehicles = useMemo(() => {
    let results = allVehicles;

    // Text search
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(vehicle => 
        vehicle.name.toLowerCase().includes(searchLower) ||
        vehicle.bodyType.toLowerCase().includes(searchLower) ||
        vehicle.transmission.toLowerCase().includes(searchLower) ||
        vehicle.specs?.range?.toLowerCase().includes(searchLower) ||
        vehicle.specs?.payloadCapacity?.toLowerCase().includes(searchLower)
      );
    }

    // Apply filters
    if (filters.bodyType) {
      results = results.filter(vehicle => vehicle.bodyType === filters.bodyType);
    }


    if (filters.priceRange) {
      results = results.filter(vehicle => {
        const priceStr = vehicle.price.replace(/[₹,]/g, '');
        const price = parseInt(priceStr, 10);
        
        switch (filters.priceRange) {
          case 'under_5l':
            return price < 500000;
          case '5l_to_10l':
            return price >= 500000 && price < 1000000;
          case '10l_above':
            return price >= 1000000;
          default:
            return true;
        }
      });
    }

    // Sort results
    results.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price_low':
          return parseInt(a.price.replace(/[₹,]/g, ''), 10) - parseInt(b.price.replace(/[₹,]/g, ''), 10);
        case 'price_high':
          return parseInt(b.price.replace(/[₹,]/g, ''), 10) - parseInt(a.price.replace(/[₹,]/g, ''), 10);
        case 'range':
          return parseInt(b.specs?.range?.replace(/[^0-9]/g, '') || 0, 10) - parseInt(a.specs?.range?.replace(/[^0-9]/g, '') || 0, 10);
        default:
          return 0;
      }
    });

    return results;
  }, [allVehicles, searchTerm, filters, sortBy]);

  // Notify parent component of results change
  useEffect(() => {
    if (onResultsChange) {
      onResultsChange(filteredVehicles);
    }
  }, [filteredVehicles, onResultsChange]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      bodyType: '',
      priceRange: ''
    });
    setSortBy('name');
  };

  const hasActiveFilters = searchTerm || Object.values(filters).some(value => value !== '');

  return (
    <div className={`vehicle-search ${className}`}>
      {/* Search Header */}
      <div className="vehicle-search__header">
        <div className="vehicle-search__input-group">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search vehicles by name, type, or specifications..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
          </div>
          
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
            </svg>
            Filters
            {hasActiveFilters && <span className="filter-badge">{Object.values(filters).filter(v => v).length + (searchTerm ? 1 : 0)}</span>}
          </button>
        </div>

        {/* Results Summary */}
        <div className="vehicle-search__summary">
          <span className="results-count">
            {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? 's' : ''} found
          </span>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="clear-filters">
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="vehicle-search__filters">
          <div className="filters-grid">
            <div className="filter-group">
              <label>Body Type</label>
              <select
                value={filters.bodyType}
                onChange={(e) => handleFilterChange('bodyType', e.target.value)}
              >
                <option value="">All Types</option>
                <option value="3-Wheeler">3-Wheeler</option>
                <option value="4-Wheeler">4-Wheeler</option>
              </select>
            </div>


            <div className="filter-group">
              <label>Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="under_5l">Under ₹5 Lakh</option>
                <option value="5l_to_10l">₹5-10 Lakh</option>
                <option value="10l_above">Above ₹10 Lakh</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name (A-Z)</option>
                <option value="price_low">Price (Low to High)</option>
                <option value="price_high">Price (High to Low)</option>
                <option value="range">Range (Highest First)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="vehicle-search__results">
        {filteredVehicles.length > 0 ? (
          <div className="vehicles-grid">
            {filteredVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
            <h3>No vehicles found</h3>
            <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="btn btn--primary">
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleSearch;
