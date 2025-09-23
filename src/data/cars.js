// ============================================
// 📁 src/data/cars.js - Mock Data
// ============================================
const cars = [
    {
      id: 1,
      name: "AutoDrive Sedan Pro",
      price: "12,50,000",
      image: "/images/sedan-pro.jpg",
      fuelType: "Petrol",
      transmission: "Automatic",
      mileage: 18,
      bodyType: "Sedan",
      featured: true,
      specs: {
        engine: "1.5L Turbocharged",
        power: "150 HP",
        torque: "250 Nm"
      }
    },
    {
      id: 2,
      name: "AutoDrive SUV Elite",
      price: "18,75,000",
      image: "/images/suv-elite.jpg",
      fuelType: "Diesel",
      transmission: "Manual",
      mileage: 22,
      bodyType: "SUV",
      featured: true,
      specs: {
        engine: "2.0L Diesel",
        power: "180 HP",
        torque: "400 Nm"
      }
    },
    {
      id: 3,
      name: "AutoDrive Eco Hatch",
      price: "8,25,000",
      image: "/images/eco-hatch.jpg",
      fuelType: "Petrol",
      transmission: "Manual",
      mileage: 24,
      bodyType: "Hatchback",
      featured: true,
      specs: {
        engine: "1.2L Petrol",
        power: "90 HP",
        torque: "115 Nm"
      }
    },
    {
      id: 4,
      name: "AutoDrive Electric One",
      price: "22,00,000",
      image: "/images/electric-one.jpg",
      fuelType: "Electric",
      transmission: "Automatic",
      mileage: 0, // Electric range in km
      bodyType: "Sedan",
      featured: false,
      specs: {
        engine: "Electric Motor",
        power: "200 HP",
        torque: "300 Nm"
      }
    }
  ];
  
  export const getAllCars = () => cars;
  export const getFeaturedCars = () => cars.filter(car => car.featured);
  export const getCarById = (id) => cars.find(car => car.id === id);