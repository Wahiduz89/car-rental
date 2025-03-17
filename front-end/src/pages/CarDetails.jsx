import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import cars from '../data/carData';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const numericId = parseInt(id, 10);
    const foundCar = cars.find(c => c.id === numericId);
    setCar(foundCar || null);
  }, [id]);

  if (!car) return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-2xl text-red-500">Car not found</h2>
      <Link to="/cars" className="text-blue-500 hover:underline mt-4 block">
        Back to Search Results
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
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
                <span className="font-medium">Available From:</span> {new Date(car.availableFrom).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Available To:</span> {new Date(car.availableTo).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Transmission:</span> {car.transmission}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Fuel Type:</span> {car.fuelType}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Seats:</span> {car.seats}
              </p>
            </div>
            <div className="text-2xl font-semibold text-blue-600 mb-4">
              ${car.pricePerDay}/day
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/cars"
              className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Back to Search
            </Link>
            <Link
              to={`/booking?carId=${car.id}`}
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;