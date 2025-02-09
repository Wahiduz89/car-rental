// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import Cars from './Cars';
import WhyUsSection from '../components/WhyUsSection';




const Home = () => {
  return (
    <div>
      <Hero/>
      <Cars/>
      <WhyUsSection/>
      <Testimonial/>
    </div>
  );
};

export default Home;

