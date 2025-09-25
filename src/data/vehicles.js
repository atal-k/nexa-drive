// ============================================
// 📁 src/data/vehicles.js - Mock Data
// ============================================

const vehicles = [
  {
    id: 1,
    name: "NexaDrive 3-Wheel HL",
    price: "₹4,56,000",
    images: ["3wheel-HL.webp", "3wheel-HL-SV.webp"],
    transmission: "Automatic",
    bodyType: "3-Wheeler",
    featured: true,
    specs: {
      range: "135km",
      payloadCapacity: "768 kg",
      maxSpeed: "45 km/h",
      torque: "88.55 Nm",
      fastCharging: "50 km in 15 minutes"
    }
  },
  {
    id: 2,
    name: "NexaDrive 4-Wheel LR",
    price: "₹9,86,000",
    images: [
      "4wheel-LR.webp",
      "4wheel-LR-SV.webp",
      "4wheel-LR.webp",
    ],
    transmission: "Automatic",
    bodyType: "4-Wheeler",
    featured: true,
    specs: {
      range: "160km",
      payloadCapacity: "950 kg",
      maxSpeed: "65 km/h",
      torque: "120 Nm",
      fastCharging: "70 km in 15 minutes"
    }
  },
  {
    id: 3,
    name: "NexaDrive 4-Wheel XLR",
    price: "₹12,65,000",
    images: ["4wheel-XLR.webp", "4wheel-XLR-SV.webp"],
    transmission: "Automatic",
    bodyType: "4-Wheeler",
    featured: true,
    specs: {
      range: "200km",
      payloadCapacity: "1200 kg",
      maxSpeed: "85 km/h",
      torque: "160 Nm",
      fastCharging: "100 km in 15 minutes"
    }
  }
];

export const getAllVehicles = () => vehicles;
export const getFeaturedVehicles = () => vehicles.filter(vehicle => vehicle.featured);
export const getVehicleById = (id) => vehicles.find(vehicle => vehicle.id === id);
