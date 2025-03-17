import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCarSide, FaChair } from "react-icons/fa";
import { GiGearStickPattern, GiGasPump } from "react-icons/gi";
import cars from "../data/cardata";

const Cars = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Link to={`/cars/${car.id}`} key={car.id}>
            <div className="bg-white border-2 border-gray-200 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:border-blue-500 transition-all duration-300 w-full max-w-sm mx-auto flex flex-col">
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
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center"
                >
                  <FaCarSide className="mr-2" /> View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cars;
