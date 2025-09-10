import React from 'react';
import { Quote, Star } from 'lucide-react';

const ParentsThought: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-cream/30 to-soft-blue/10 relative">
      <div className="absolute top-12 left-12 w-2 h-2 bg-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-muted-green/30 rounded-full animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Star className="w-4 h-4 text-gold animate-pulse" fill="currentColor" />
          <Quote className="w-12 h-12 text-gold opacity-60" />
          <Star className="w-4 h-4 text-gold animate-pulse animation-delay-1000" fill="currentColor" />
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft border border-gold/20">
          <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8 italic">
            "Con la bendición de Dios y la alegría de compartir este momento con nuestros seres queridos, tenemos el honor de invitarles a la celebración de nuestra boda."
          </blockquote>
          
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          
          <p className="text-lg text-charcoal text-opacity-70 font-light">
            Con todo nuestro amor,
            <br />
            <span className="font-medium text-muted-green">Las familias Rodríguez-Díaz y Pacheco-Tamayo</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParentsThought;