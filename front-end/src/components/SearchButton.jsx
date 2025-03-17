import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchButton = ({ formData }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!formData.pickupLocation || !formData.pickupDate || !formData.dropoffDate) {
      alert('Please fill all required fields');
      return;
    }

    const pickupDate = new Date(formData.pickupDate);
    const dropoffDate = new Date(formData.dropoffDate);

    if (dropoffDate <= pickupDate) {
      alert('Drop-off date must be after pickup date');
      return;
    }

    navigate('/cars', { 
      state: { 
        searchParams: {
          ...formData,
          pickupDate: pickupDate.toISOString(),
          dropoffDate: dropoffDate.toISOString()
        }
      }
    });
  };

  return (
    <div className="md:col-span-3">
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md transition-colors"
      >
        Search Cars
      </button>
    </div>
  );
};

export default SearchButton;