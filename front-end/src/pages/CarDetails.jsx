import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import cars from '../data/carData';
import { FaGasPump, FaChair } from 'react-icons/fa';
import { GiGearStick } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [relatedCars, setRelatedCars] = useState([]);

  useEffect(() => {
    if (!id) {
      navigate('/cars');
      return;
    }

    const numericId = parseInt(id, 10);
    
    // Validate ID
    if (isNaN(numericId)) {
      navigate('/not-found');
      return;
    }

    const foundCar = cars.find(c => c.id === numericId);
    
    if (foundCar) {
      setCar(foundCar);
      // Get related cars (excluding current car)
      const filtered = cars
        .filter(c => c.id !== numericId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
      setRelatedCars(filtered);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  if (!car) return null; // Handled by navigation

  return (
    <div className="container mx-auto p-4">
      {/* Main Car Details */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-16">
        <div className="md:w-1/2">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{car.brand} {car.model}</h2>
            <div className="space-y-2 mb-4">
              <p className="text-gray-600">
                <span className="font-medium">Year:</span> {car.year}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Location:</span> {car.location}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Available From:</span> 
                {new Date(car.availableFrom).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Available To:</span> 
                {new Date(car.availableTo).toLocaleDateString()}
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <GiGearStick className="text-blue-500" />
                <span className="font-medium">Transmission:</span> {car.transmission}
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                {car.fuelType === 'Electric' ? (
                  <MdDateRange className="text-blue-500" />
                ) : (
                  <FaGasPump className="text-blue-500" />
                )}
                <span className="font-medium">Fuel Type:</span> {car.fuelType}
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <FaChair className="text-blue-500" />
                <span className="font-medium">Seats:</span> {car.seats}
              </p>
            </div>
            <div className="text-2xl font-semibold text-blue-600 mb-4">
              ${car.pricePerDay}/day
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Back
            </button>
            <Link
              to={`/booking?carId=${car.id}`}
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Related Cars Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">More Cars You Might Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedCars.map((car) => (
            <Link 
              to={`/cars/${car.id}`}
              key={car.id}
              className="group relative block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow-sm">
                  ${car.pricePerDay}/day
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{car.brand} {car.model}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="flex items-center text-sm text-gray-600">
                    <GiGearStick className="mr-1 text-blue-500" /> {car.transmission}
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    {car.fuelType === 'Electric' ? (
                      <MdDateRange className="mr-1 text-blue-500" />
                    ) : (
                      <FaGasPump className="mr-1 text-blue-500" />
                    )} {car.fuelType}
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    <FaChair className="mr-1 text-blue-500" /> {car.seats} Seats
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;