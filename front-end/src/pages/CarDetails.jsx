// CarDetail.jsx
// src/pages/CarDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();

  // Dummy car data for demonstration purposes.
  const car = {
    id,
    name: `Car ${id}`,
    image: 'https://via.placeholder.com/600x400', // Replace with your image URL
    description: `This is a detailed description for Car ${id}. Enjoy a comfortable and stylish ride with all the modern amenities.`,
    price: 60, // Price per day
    features: [
      'Automatic Transmission',
      'Air Conditioning',
      'GPS Navigation',
      'Bluetooth Connectivity',
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Car Image */}
        <div className="md:w-1/2">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Car Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{car.name}</h2>
            <p className="text-gray-700 mb-4">{car.description}</p>
            <ul className="list-disc list-inside mb-4">
              {car.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-2xl font-semibold text-blue-600 mb-4">
              ${car.price}/day
            </div>
          </div>

          <div>
            <Link
              to="/booking"
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

export default CarDetail;
