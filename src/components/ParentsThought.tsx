import React from 'react';
import { Quote } from 'lucide-react';

const ParentsThought: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-muted-green/10 to-soft-beige/20">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="w-12 h-12 text-gold mx-auto mb-8 opacity-60" />
        
        <blockquote className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-8 italic">
          "Hoy vemos florecer el amor que sembramos en sus corazones. 
          Que esta unión sea bendecida con la misma felicidad, comprensión 
          y cariño que han llenado nuestros hogares."
        </blockquote>
        
        <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
        
        <p className="text-lg text-charcoal/70 font-light">
          Con todo nuestro amor,
          <br />
          <span className="font-medium">Las familias Rodríguez-Díaz y Pacheco-Tamayo</span>
        </p>
      </div>
    </section>
  );
};

export default ParentsThought;