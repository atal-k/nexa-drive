// ============================================
// 📁 src/components/common/CarCard.js
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-card__image">
        <img src={car.image} alt={car.name} />
      </div>
      
      <div className="car-card__content">
        <h3 className="car-card__title">{car.name}</h3>
        <p className="car-card__price">Starting at ₹{car.price}</p>
        
        <div className="car-card__specs">
          <span>{car.fuelType}</span>
          <span>{car.transmission}</span>
          <span>{car.mileage} kmpl</span>
        </div>
        
        <Link 
          to={`/cars/${car.id}`} 
          className="btn btn--primary car-card__btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
