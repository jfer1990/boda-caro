import React from 'react';
import { Heart, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute top-12 right-12 w-2 h-2 bg-soft-blue/20 rounded-full animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-10 left-16 w-1 h-1 bg-gold/20 rounded-full animate-pulse animation-delay-1000"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Star className="w-4 h-4 text-gold animate-pulse" fill="currentColor" />
          <Heart className="w-8 h-8 text-gold animate-pulse" fill="currentColor" />
          <Star className="w-4 h-4 text-gold animate-pulse animation-delay-1000" fill="currentColor" />
        </div>
        
        <h3 className="font-serif text-2xl md:text-3xl mb-6">
          Elena Carolina & Esteban
        </h3>
        
        <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Dios bendice este amor y a quienes lo celebran con nosotros."
          </p>
          
          <p className="text-white/70 text-sm">
            Gracias por ser parte de nuestra historia de amor ✨
          </p>
        </div>
        
        <div className="pt-8 border-t border-white/20">
          <p className="text-white/40 text-xs">
            © 2024 Elena Carolina & Esteban - 4 de Octubre, Mérida, Yucatán
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;