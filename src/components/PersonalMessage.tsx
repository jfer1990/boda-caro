import React from 'react';
import { Heart, Baby } from 'lucide-react';

const PersonalMessage: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
          <Baby className="w-8 h-8 text-blue-600" />
          <Heart className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl text-blue-900 mb-6">
          Un Momento Especial
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed italic">
          "Por tanto, lo que Dios juntó, no lo separe el hombre."
          <br />
          <span className="text-sm text-blue-600">- Marcos 10:9</span>
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gold/20">
          <p className="text-gray-800 leading-relaxed mb-4">
            Con el corazón lleno de gratitud hacia Dios, queremos compartir contigo 
            este momento tan especial en nuestras vidas. No solo celebramos nuestro 
            amor y compromiso, sino también la bendición de esperar a nuestra 
            pequeña hija.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full border border-pink-200">
            <Baby className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-800">
              Esperando a nuestra princesa 👑
            </span>
          </div>
        </div>
        
        <p className="text-blue-800 mt-6 font-medium">
          Tu presencia hará este día aún más memorable
        </p>
      </div>
    </section>
  );
};

export default PersonalMessage;