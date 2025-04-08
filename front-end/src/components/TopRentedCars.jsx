// src/components/TopRentedCars.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import cars from '../data/carData';

const TopRentedCars = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000 })
  ]);
  
  const topCars = [...cars].sort((a, b) => b.rentals - a.rentals).slice(0, 5);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Trending <span className="text-blue-600">This Season</span>
          </h2>
          <p className="text-gray-600 text-lg">Most loved by our customers</p>
        </motion.div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {topCars.map((car, index) => (
              <div className="embla__slide min-w-[85%] md:min-w-[45%] lg:min-w-[30%]" key={car.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      #{index + 1} Popular
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{car.brand} {car.model}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">
                          ${car.pricePerDay}
                        </span>
                        <span className="text-gray-500">/day</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
                        <FaStar className="text-yellow-400" />
                        <span className="font-medium">{car.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {car.rentals}+ rentals
                        </span>
                      </div>
                      <span className="text-gray-500 flex items-center">
                        <svg 
                          className="w-4 h-4 mr-1 text-blue-500"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {car.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .embla__slide {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .embla__slide:not(.is-selected) {
          opacity: 0.7;
          transform: scale(0.95);
        }
        .embla__slide.is-selected {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default TopRentedCars;