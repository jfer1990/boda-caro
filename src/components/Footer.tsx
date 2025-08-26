import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="w-8 h-8 text-gold mx-auto mb-6 animate-pulse" fill="currentColor" />
        
        <h3 className="font-serif text-2xl md:text-3xl mb-6">
          Elena Carolina & Esteban
        </h3>
        
        <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
        
        <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
          Gracias por ser parte de nuestra historia de amor. 
          Tu presencia en este día especial significa el mundo para nosotros.
        </p>
        
        <p className="text-white/60 text-sm">
          Con todo nuestro amor y gratitud ✨
        </p>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/40 text-xs">
            © 2024 Elena Carolina & Esteban - Hecho con amor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;