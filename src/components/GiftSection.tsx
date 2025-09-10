import React, { useState } from 'react';
import { Gift, CreditCard, Building2, Smartphone, Star, X } from 'lucide-react';

const GiftSection: React.FC = () => {
  const [showSpei, setShowSpei] = useState(false);

  const paymentOptions = [
    {
      name: 'Transferencia SPEI',
      icon: Building2,
      description: 'Transferencia bancaria',
      action: 'Ver Datos Bancarios',
      onClick: () => setShowSpei(true)
    },
    // {
    //   name: 'OXXO Pay',
    //   icon: Smartphone,
    //   description: 'Pago en tienda OXXO',
    //   action: 'Generar Código',
    //   onClick: () => alert('Aquí se puede generar el código OXXO más adelante')
    // },
    {
      name: 'Usar tarjeta bancaria',
      icon: CreditCard,
      description: 'Dona seguro con tu tarjeta (Stripe)',
      action: 'Tarjeta',
      onClick: () => window.open('https://buy.stripe.com/bJe7sL3s48FYbbR6Y24ZG00', '_blank')
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream/30 to-ivory relative">
      <div className="absolute top-16 left-10 w-2 h-2 bg-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-muted-green/30 rounded-full animate-pulse animation-delay-2000"></div>

      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Star className="w-4 h-4 text-gold animate-pulse" fill="currentColor" />
          <Gift className="w-8 h-8 text-gold" />
          <Star className="w-4 h-4 text-gold animate-pulse animation-delay-1000" fill="currentColor" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
          Mesa de Regalos
        </h2>

        <div className="w-16 h-px bg-gold mx-auto mb-8"></div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gold/20 mb-8">
          <p className="text-lg text-charcoal text-opacity-80 leading-relaxed mb-6">
            Su presencia es nuestro mejor regalo. Si desean hacernos un obsequio, 
            agradecemos sus aportaciones a través de los siguientes medios.
          </p>

          <div className="bg-gold/10 rounded-lg p-4 border border-gold/30">
            <p className="text-sm text-charcoal text-opacity-70 italic">
              "Es mejor dar que recibir, pero recibir con gratitud también es una bendición"
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {paymentOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                onClick={option.onClick}
                className="w-full bg-white hover:bg-cream/30 border border-cream/50 rounded-xl p-6 transition-all duration-300 group transform hover:scale-[1.02] shadow-soft hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-charcoal group-hover:text-muted-green transition-colors duration-300">
                      {option.name}
                    </h3>
                    <p className="text-sm text-charcoal text-opacity-60">{option.description}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-green group-hover:text-gold transition-colors duration-300">
                    {option.action}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-muted-green/10 rounded-xl border border-muted-green/20">
          <p className="text-sm text-muted-green text-opacity-80">
            💚 Cualquier contribución será recibida con mucho amor y gratitud
          </p>
        </div>
      </div>

      {/* Modal SPEI */}
      {showSpei && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setShowSpei(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-semibold mb-4">Datos Bancarios SPEI</h3>
            <p className="text-gray-700 mb-2"><strong>Nombre:</strong> María Pérez</p>
            <p className="text-gray-700 mb-2"><strong>CLABE:</strong> 012345678901234567</p>
            <p className="text-gray-700 mb-2"><strong>Cuenta:</strong> 1234567890</p>
            <p className="text-gray-500 text-sm mt-4 italic">
              Copien estos datos en su app bancaria para realizar la transferencia.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GiftSection;
