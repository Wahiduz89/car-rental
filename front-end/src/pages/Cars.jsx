// src/pages/Cars.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCarSide, FaChair } from "react-icons/fa";
import { GiGearStickPattern, GiGasPump } from "react-icons/gi";
import cars from "../data/carData";

const Cars = () => {
  const location = useLocation();
  const [filteredCars, setFilteredCars] = useState([]);
  const searchParams = location.state?.searchParams || {};

  useEffect(() => {
    const filterCars = () => {
      let result = [...cars];

      if (searchParams.pickupLocation) {
        result = result.filter(car => 
          car.location.toLowerCase().includes(searchParams.pickupLocation.toLowerCase())
        );
      }

      if (searchParams.pickupDate && searchParams.dropoffDate) {
        result = result.filter(car => {
          const availableFrom = new Date(car.availableFrom);
          const availableTo = new Date(car.availableTo);
          const pickupDate = new Date(searchParams.pickupDate);
          const dropoffDate = new Date(searchParams.dropoffDate);

          return pickupDate >= availableFrom && dropoffDate <= availableTo;
        });
      }

      setFilteredCars(result);
    };

    if (searchParams.pickupLocation || searchParams.pickupDate) {
      filterCars();
    } else {
      setFilteredCars(cars);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Cars</h1>
      {filteredCars.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl text-red-500 mb-4">No cars found matching your criteria</h2>
          <Link to="/" className="text-blue-500 hover:underline">
            Try another search
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{car.brand} {car.model}</h2>
                <div className="flex items-center gap-4 mb-2">
                  <span className="flex items-center">
                    <GiGearStickPattern className="mr-1" /> {car.transmission}
                  </span>
                  <span className="flex items-center">
                    <GiGasPump className="mr-1" /> {car.fuelType}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-blue-600">${car.pricePerDay}/day</p>
                  <Link
                    to={`/cars/${car.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;