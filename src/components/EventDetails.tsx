import React from 'react';
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';

const EventDetails: React.FC = () => {
  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-ivory to-cream/30 relative">
      <div className="absolute top-20 left-12 w-2 h-2 bg-muted-green/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-8 w-1.5 h-1.5 bg-gold/30 rounded-full animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Calendar className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Detalles del Evento
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70">
            Acompáñanos en este día tan especial
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-cream/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-1 h-1 bg-soft-blue/40 rounded-full animate-pulse"></div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Ceremonia Religiosa</h3>
            </div>
            
            <div className="space-y-4 text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Calendar className="w-4 h-4" />
                <span>4 de Octubre, 2024</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Clock className="w-4 h-4" />
                <span>[Hora por confirmar]</span>
              </div>
              
              <div className="pt-4 border-t border-cream/50">
                <p className="text-charcoal/70 text-sm mb-2">
                  [Dirección de la iglesia por confirmar]
                </p>
                <p className="text-charcoal/60 text-xs">
                  Mérida, Yucatán
                </p>
              </div>
            </div>
            
            <button
              onClick={() => openGoogleMaps('Mérida, Yucatán')}
              className="w-full bg-muted-green hover:bg-muted-green/90 text-white font-medium py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              Ver en Google Maps
            </button>
          </div>
          
          {/* Reception */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-cream/50 relative overflow-hidden">
            <div className="absolute top-4 left-4 w-1 h-1 bg-gold/40 rounded-full animate-pulse animation-delay-1000"></div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Recepción</h3>
            </div>
            
            <div className="space-y-4 text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Calendar className="w-4 h-4" />
                <span>4 de Octubre, 2024</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-charcoal/70">
                <Clock className="w-4 h-4" />
                <span>[Hora por confirmar]</span>
              </div>
              
              <div className="pt-4 border-t border-cream/50">
                <p className="text-charcoal/70 text-sm mb-2">
                  [Dirección del salón por confirmar]
                </p>
                <p className="text-charcoal/60 text-xs">
                  Mérida, Yucatán
                </p>
              </div>
            </div>
            
            <button
              onClick={() => openGoogleMaps('Mérida, Yucatán')}
              className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              Ver en Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;