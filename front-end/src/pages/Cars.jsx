import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCarSide, FaChair } from "react-icons/fa";
import { GiGearStickPattern, GiGasPump } from "react-icons/gi";
import cars from "../data/carData";

const Cars = () => {
  const location = useLocation();
  const [filteredCars, setFilteredCars] = useState([]);
  const searchParams = location.state?.searchParams || {};

  useEffect(() => {
    const filterCars = () => {
      let result = [...cars];

      // Location filter (fixed syntax)
      if (searchParams.pickupLocation) {
        result = result.filter(car =>
          car.location.toLowerCase().includes(searchParams.pickupLocation.toLowerCase())
        );
      }

      // Date availability filter
      if (searchParams.pickupDate && searchParams.dropoffDate) {
        result = result.filter(car => {
          const availableFrom = new Date(car.availableFrom);
          const availableTo = new Date(car.availableTo);
          const pickupDate = new Date(searchParams.pickupDate);
          const dropoffDate = new Date(searchParams.dropoffDate);

          return pickupDate >= availableFrom && dropoffDate <= availableTo;
        });
      }

      setFilteredCars(result);
    };

    if (searchParams.pickupLocation || searchParams.pickupDate) {
      filterCars();
    } else {
      setFilteredCars([]);
    }
  }, [searchParams]);

  // Rest of the component remains the same
  return (
    {/* Existing JSX */}
  );
};

export default Cars;