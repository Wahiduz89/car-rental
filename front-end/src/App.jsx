// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetails';
import TermsAndConditions from "./pages/TermsAndConditions";
import Contact from './pages/Contact';
import Privacy from './pages/Privacy'; // Import Privacy component
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} /> {/* Add Privacy route */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;