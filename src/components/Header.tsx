import React from 'react';
import { Clock, Heart, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative text-center py-16 px-6 bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30"></div>
      
      <div className="relative z-10 max-w-md mx-auto">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Star className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
          <Clock className="w-8 h-8 text-cream" />
          <Star className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-cream">
          Elena & Miguel
        </h1>
        
        <div className="flex justify-center mb-4">
          <Heart className="w-8 h-8 text-gold" fill="currentColor" />
        </div>
        
        <p className="text-xl md:text-2xl font-light mb-2 text-blue-100">
          4 de octubre de 2025
        </p>
        
        <p className="text-lg md:text-xl text-blue-200 mb-4">
          Mérida, Yucatán
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <p className="text-sm text-blue-100 mb-2">Hora de la ceremonia</p>
          <p className="text-xl font-semibold text-cream">5:00 PM</p>
        </div>
      </div>
    </header>
  );
};

export default Header;