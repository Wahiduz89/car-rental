// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGasPump, FaCar, FaChair } from 'react-icons/fa';
import { GiGearStick, GiSteeringWheel } from 'react-icons/gi';
import { MdElectricCar, MdDateRange } from 'react-icons/md';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import WhyUsSection from '../components/WhyUsSection';
import FAQSection from '../components/FAQSection';
import cars from '../data/carData';
import TopRentedCars from '../components/TopRentedCars';
const Home = () => {
  const getFeatureIcon = (feature, value) => {
    const iconSize = 20;
    const iconClass = "text-blue-500";

    switch(feature) {
      case 'transmission':
        return <GiGearStick size={iconSize} className={iconClass} />;
      case 'fuelType':
        return value.toLowerCase() === 'electric' 
          ? <MdElectricCar size={iconSize} className={iconClass} />
          : <FaGasPump size={iconSize} className={iconClass} />;
      case 'seats':
        return <FaChair size={iconSize} className={iconClass} />;
      case 'type':
        return <FaCar size={iconSize} className={iconClass} />;
      default:
        return <GiSteeringWheel size={iconSize} className={iconClass} />;
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50">
<Hero />

         {/* Add TopRentedCars here */}
      <TopRentedCars />
      {/* Cars Grid Section */}
      <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            Our Premium Fleet
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cars.map((car) => (
            <Link 
              to={`/cars/${car.id}`}
              key={car.id}
              className="group relative block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600 shadow-sm">
                  ${car.pricePerDay}/day
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6">
                {/* Title and Year */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.brand} {car.model}
                  </h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {car.year}
                  </span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center space-x-2">
                    {getFeatureIcon('transmission')}
                    <span className="text-sm text-gray-600 capitalize">
                      {car.transmission}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {getFeatureIcon('fuelType', car.fuelType)}
                    <span className="text-sm text-gray-600 capitalize">
                      {car.fuelType}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {getFeatureIcon('seats')}
                    <span className="text-sm text-gray-600">
                      {car.seats} Seats
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MdDateRange className="text-blue-500" size={20} />
                    <span className="text-sm text-gray-600">
                      Available Now
                    </span>
                  </div>
                </div>

                {/* Location and CTA */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      <i className="fas fa-map-marker-alt text-blue-500"></i>
                      {car.location}
                    </span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group/button">
                    <span>Details</span>
                    <span className="ml-2 group-hover/button:translate-x-1 transition-transform">
                      <i className="fas fa-chevron-right text-sm"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhyUsSection />
      <Testimonial />
      <FAQSection />
    </div>
  );
};

export default Home;