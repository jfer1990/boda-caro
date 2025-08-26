import React from 'react';
import { Gift, CreditCard, Building2, Smartphone } from 'lucide-react';

const GiftSection: React.FC = () => {
  const paymentOptions = [
    {
      name: 'Transferencia Bancaria',
      icon: Building2,
      description: 'BBVA Bancomer',
      action: 'Ver Datos'
    },
    {
      name: 'OXXO Pay',
      icon: Smartphone,
      description: 'Pago en tienda OXXO',
      action: 'Generar Código'
    },
    {
      name: 'PayPal',
      icon: CreditCard,
      description: 'Pago en línea',
      action: 'Ir a PayPal'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto text-center">
        <Gift className="w-12 h-12 text-gold mx-auto mb-6" />
        
        <h2 className="font-serif text-3xl md:text-4xl text-blue-900 mb-6">
          Mesa de Regalos
        </h2>
        
        <p className="text-gray-700 mb-8 leading-relaxed">
          Tu presencia es nuestro mayor regalo. Si deseas obsequiarnos algo, 
          agradecemos tu contribución monetaria para nuestro nuevo hogar y 
          la llegada de nuestra pequeña princesa.
        </p>
        
        <div className="space-y-4">
          {paymentOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                className="w-full bg-cream hover:bg-yellow-100 border border-gold/20 rounded-lg p-4 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-blue-900">{option.name}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                  <span className="text-sm font-medium text-blue-800">
                    {option.action}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <p className="text-sm text-blue-800">
            💙 Cualquier contribución será recibida con mucho amor y gratitud
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;