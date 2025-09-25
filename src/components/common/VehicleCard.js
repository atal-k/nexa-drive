// ============================================
// 📁 src/components/common/VehicleCard.js
// ============================================
import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  const imageSrc = `/images/${vehicle.images?.[0] || ''}`;

  return (
    <div className="vehicle-card">
      <div className="vehicle-card__image">
        <img src={imageSrc} alt={vehicle.name} />
      </div>
      
      <div className="vehicle-card__content">
        <h3 className="vehicle-card__title">{vehicle.name}</h3>
        <p className="vehicle-card__price">{vehicle.price}</p>
        
        <div className="vehicle-card__specs">
          <span>{vehicle.transmission}</span>
          <span>{vehicle.bodyType}</span>
          <span>{vehicle.specs?.range}</span>
        </div>
        
        <Link 
          to={`/vehicles/${vehicle.id}`}
          className="btn btn--primary vehicle-card__btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
