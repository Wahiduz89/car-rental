// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';

import WhyUsSection from '../components/WhyUsSection';
import FAQSection from '../components/FAQSection';


const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUsSection />
      <Testimonial />
      <FAQSection />
    </div>
  );
};
export default Home;
