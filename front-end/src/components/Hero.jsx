// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });

  // Log when the component mounts
  useEffect(() => {
    console.log("HeroSection mounted");
  }, []);

  // Log every time formData updates
  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search for cars:", formData);
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/car-rental-bg.jpg')" }}
    >
      {/* Overlay for a darker background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center p-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Ride</h1>
        <p className="text-lg mb-6">
          Choose your location and dates to get started
        </p>

        {/* Rental Search Form */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-4 bg-white p-4 rounded-xl shadow-lg text-gray-900"
        >
          {/* Pickup Location */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Pickup Date
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Drop-off Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Drop-off Date
            </label>
            <input
              type="date"
              name="dropoffDate"
              value={formData.dropoffDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Search Button */}
          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md"
            >
              Search Cars
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
