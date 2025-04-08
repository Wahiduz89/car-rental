// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import SearchButton from "./SearchButton";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });

  useEffect(() => {
    // Handle video autoplay
    const videoElement = document.querySelector('.hero-video');
    const attemptPlay = () => {
      videoElement?.play()
        .catch(error => {
          console.log('Autoplay prevented, showing fallback image');
          videoElement.controls = false;
        });
    };
    attemptPlay();
    
    // Optional: Add intersection observer for mobile optimization
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    }, { threshold: 0.5 });

    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0 z-0">
        <video
          className="hero-video w-full h-full object-cover brightness-75"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          poster="/video-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center p-6 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up">
          Find Your Perfect Ride
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md animate-fade-in-up delay-100">
          Premium vehicles at unbeatable prices
        </p>

        {/* Search Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mx-4 transform transition-all hover:shadow-3xl animate-fade-in-up delay-200">
          <form className="grid md:grid-cols-3 gap-4 text-gray-900">
            {/* Pickup Location */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold uppercase tracking-wide text-gray-600">
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="City or Airport"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Pickup Date */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold uppercase tracking-wide text-gray-600">
                Pickup Date
              </label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Drop-off Date */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold uppercase tracking-wide text-gray-600">
                Drop-off Date
              </label>
              <input
                type="date"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div className="md:col-span-3">
              <SearchButton formData={formData} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;