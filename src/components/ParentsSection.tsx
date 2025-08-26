import React from 'react';
import { Users, Heart } from 'lucide-react';

const ParentsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-ivory relative">
      <div className="absolute top-10 right-10 w-2 h-2 bg-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-soft-blue/30 rounded-full animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Nuestras Familias
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Con el amor y bendición de nuestros padres
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Bride's Parents */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-cream/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-1 h-1 bg-gold/30 rounded-full animate-pulse"></div>
              
              <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-muted-green" fill="currentColor" />
              </div>
              
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Padres de la Novia
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-medium text-charcoal">
                    Luis Fernando Rodríguez Fernández
                  </p>
                  <p className="text-charcoal/60 text-sm">Papá</p>
                </div>
                
                <div className="w-8 h-px bg-gold/30 mx-auto"></div>
                
                <div>
                  <p className="text-lg font-medium text-charcoal">
                    Gladys Elena Díaz Aguilar
                  </p>
                  <p className="text-charcoal/60 text-sm">Mamá</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Groom's Parents */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-cream/50 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-1 h-1 bg-soft-blue/40 rounded-full animate-pulse animation-delay-1000"></div>
              
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-gold" fill="currentColor" />
              </div>
              
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Padres del Novio
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-medium text-charcoal">
                    Humberto Pacheco
                  </p>
                  <p className="text-charcoal/60 text-sm">Papá</p>
                </div>
                
                <div className="w-8 h-px bg-gold/30 mx-auto"></div>
                
                <div>
                  <p className="text-lg font-medium text-charcoal">
                    Lili Tamayo
                  </p>
                  <p className="text-charcoal/60 text-sm">Mamá</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;