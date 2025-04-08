// src/components/SearchButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchButton = ({ formData }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/cars', { state: { searchParams: formData } });
  };

  return (
    <button
      type="submit"
      onClick={handleSearch}
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
    >
      Search Cars
    </button>
  );
};

export default SearchButton;