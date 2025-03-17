// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Cars from './Cars';
import WhyUsSection from '../components/WhyUsSection';
import FAQSection from '../components/FAQSection';
import Locations from '../components/Locations';

const Home = () => {
  return (
    <div>
      <Hero />
      <Cars />
      <WhyUsSection />
      <Testimonial />
      <FAQSection />
      <Locations /> {/* This will render the Locations component */}
    </div>
  );
};

export default Home;
