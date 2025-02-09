import React, { useState, useEffect } from "react";

// Sample testimonial data (replace or extend with your own)
const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "The service was fantastic! The car was clean, comfortable, and perfect for my trip.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "A seamless experience from start to finish. Highly recommended for anyone renting a car.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "Affordable rates and excellent customer support. I will definitely use their service again!",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigate to the previous testimonial
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, text, image } = testimonialData[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="relative bg-white shadow-lg rounded-lg p-8">
        <p className="text-lg italic text-gray-700 mb-4">"{text}"</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h4 className="text-xl font-semibold">{name}</h4>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full focus:outline-none"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full focus:outline-none"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-4">
        {testimonialData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
