import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface LocationCardProps {
  title: string;
  address: string;
  time?: string;
  mapUrl: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ title, address, time, mapUrl }) => {
  const handleMapClick = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-gold">
      <h3 className="font-serif text-2xl text-blue-900 mb-3 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-gold" />
        {title}
      </h3>
      
      {time && (
        <p className="text-lg font-semibold text-blue-800 mb-2">
          {time}
        </p>
      )}
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {address}
      </p>
      
      <button
        onClick={handleMapClick}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <ExternalLink className="w-4 h-4" />
        Ver en Google Maps
      </button>
    </div>
  );
};

export default LocationCard;