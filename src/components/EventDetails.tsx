import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-ivory to-soft-beige/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Calendar className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Detalles del Evento
          </h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-soft-beige/30">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Ceremonia</h3>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Calendar className="w-4 h-4" />
                <span>Fecha por confirmar</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Clock className="w-4 h-4" />
                <span>Hora por confirmar</span>
              </div>
              
              <div className="pt-4 border-t border-soft-beige/50">
                <p className="text-charcoal/70 text-sm">
                  Ubicación por confirmar
                </p>
              </div>
            </div>
          </div>
          
          {/* Reception */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-soft-beige/30">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Recepción</h3>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Calendar className="w-4 h-4" />
                <span>Fecha por confirmar</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Clock className="w-4 h-4" />
                <span>Hora por confirmar</span>
              </div>
              
              <div className="pt-4 border-t border-soft-beige/50">
                <p className="text-charcoal/70 text-sm">
                  Ubicación por confirmar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;