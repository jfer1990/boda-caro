import React from 'react';
import { Users } from 'lucide-react';

const ParentsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-ivory">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Nuestras Familias
          </h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Bride's Parents */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-soft-beige/30">
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
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-soft-beige/30">
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