import React, { useState, useEffect } from "react";
import { FaCarSide, FaChair } from "react-icons/fa"; // Car and Chair icons
import { GiGearStickPattern, GiGasPump } from "react-icons/gi"; // Gear and Gas Pump icons
import cars from "../data/cardata";




const Cars = () => {
  // State to hold the selected car for booking
  const [selectedCar, setSelectedCar] = useState(null);
  // Replace with your actual WhatsApp number (digits only, no "+" or dashes)
  const whatsappNumber = "8453261735";

  // useEffect: When a car is selected, build the WhatsApp URL and redirect
  useEffect(() => {
    if (selectedCar) {
      // Create a booking message with the selected car details
      const message = encodeURIComponent(
        `Hello, I'm interested in renting the ${selectedCar.brand} ${selectedCar.model} (Year: ${selectedCar.year}). Please send me more details.`
      );
      const url = `https://wa.me/${whatsappNumber}?text=${message}`;
      // Open WhatsApp booking in a new tab
      window.open(url, "_blank");
      // Optionally, clear the selected car to avoid repeated redirects
      setSelectedCar(null);
    }
  }, [selectedCar, whatsappNumber]);

  // Handler for Rent Now button
  const handleRentNow = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-8">Our Cars</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white border-2 border-gray-200 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:border-blue-500 transition-all duration-300 w-full max-w-sm mx-auto flex flex-col"
        >
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {car.brand} {car.model}
            </h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Year:</span> {car.year}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Price Per Day:</span> ${car.pricePerDay}
            </p>
            <div className="flex items-center text-gray-600 mb-1">
              <GiGearStickPattern className="mr-2" />
              <span className="font-medium">Transmission:</span>
              <span className="ml-1">{car.transmission}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-1">
              <GiGasPump className="mr-2" />
              <span className="font-medium">Fuel Type:</span>
              <span className="ml-1">{car.fuelType}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-1">
              <FaChair className="mr-2" />
              <span className="font-medium">Seats:</span>
              <span className="ml-1">{car.seats}</span>
            </div>
            <div className="flex-grow" />
            <button
              onClick={() => handleRentNow(car)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center"
            >
              <FaCarSide className="mr-2" /> Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Cars;
