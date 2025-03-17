// src/components/Locations.jsx
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get('/api/locations');
        setLocations(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Rental Locations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
        {/* Location List */}
        <div className="grid gap-4">
          {locations.map(location => (
            <div 
              key={location._id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => setSelectedLocation(location)}
            >
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {location.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{location.address}</p>
              <p className="text-blue-600 text-sm font-medium">
                Phone: {location.contact}
              </p>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          {!isLoaded ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              Loading Map...
            </div>
          ) : (
            <GoogleMap
              zoom={10}
              center={{ lat: locations[0]?.lat, lng: locations[0]?.lng }}
              mapContainerClassName="w-full h-full"
            >
              {locations.map(location => (
                <Marker
                  key={location._id}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={() => setSelectedLocation(location)}
                />
              ))}
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;