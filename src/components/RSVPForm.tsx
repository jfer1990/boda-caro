import React, { useState, useEffect } from 'react';
import { Phone, Check, AlertCircle } from 'lucide-react';
import guestsData from '../data/guests.json';

interface Guest {
  id: number;
  name: string;
  phone: string;
  confirmed: boolean;
}

const RSVPForm: React.FC = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [suggestions, setSuggestions] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (phoneInput.length >= 2) {
      const filtered = guestsData.filter(guest => 
        guest.phone.includes(phoneInput) || 
        guest.name.toLowerCase().includes(phoneInput.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [phoneInput]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits after +52
    const numbersOnly = value.replace(/\D/g, '');
    if (numbersOnly.length <= 10) {
      setPhoneInput(numbersOnly);
    }
  };

  const selectGuest = (guest: Guest) => {
    setSelectedGuest(guest);
    setPhoneInput(guest.phone.replace('+52', ''));
    setShowSuggestions(false);
  };

  const confirmAttendance = () => {
    if (selectedGuest) {
      setIsConfirmed(true);
      // Here you would typically update the guest data
      console.log('Confirmed attendance for:', selectedGuest.name);
    }
  };

  const reset = () => {
    setPhoneInput('');
    setSelectedGuest(null);
    setIsConfirmed(false);
    setShowSuggestions(false);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Phone className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Confirma tu Asistencia
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70">
            Tu presencia es el regalo más importante para nosotros
          </p>
        </div>
        
        <div className="bg-ivory rounded-2xl p-8 shadow-soft border border-soft-beige/30">
          {!isConfirmed ? (
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Número de teléfono
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/60 font-medium">
                    +52
                  </div>
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={handlePhoneChange}
                    className="w-full pl-16 pr-4 py-4 bg-white border border-soft-beige/50 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-colors duration-200 text-lg"
                    placeholder="5512345678"
                  />
                </div>
                
                {/* Suggestions Dropdown */}
                {showSuggestions && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-soft-beige/50 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((guest) => (
                      <button
                        key={guest.id}
                        onClick={() => selectGuest(guest)}
                        className="w-full px-4 py-3 text-left hover:bg-soft-beige/30 transition-colors duration-200 border-b border-soft-beige/30 last:border-b-0"
                      >
                        <div className="font-medium text-charcoal">{guest.name}</div>
                        <div className="text-sm text-charcoal/60">{guest.phone}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {selectedGuest && (
                <div className="bg-white rounded-xl p-6 border border-muted-green/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-6 h-6 text-muted-green" />
                    <h3 className="text-xl font-medium text-charcoal">
                      ¡Hola {selectedGuest.name}!
                    </h3>
                  </div>
                  <p className="text-charcoal/70 mb-6">
                    Nos emociona saber que estarás con nosotros en este día tan especial.
                  </p>
                  
                  <button
                    onClick={confirmAttendance}
                    className="w-full bg-gradient-to-r from-muted-green to-muted-green/90 hover:from-muted-green/90 hover:to-muted-green text-white font-medium py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-soft"
                  >
                    Confirmar Asistencia
                  </button>
                </div>
              )}
              
              {phoneInput.length >= 3 && suggestions.length === 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm">
                    No encontramos tu invitación. Por favor verifica tu número de teléfono.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="text-2xl font-medium text-charcoal mb-4">
                ¡Confirmado!
              </h3>
              <p className="text-charcoal/70 mb-6">
                Gracias por confirmar tu asistencia. ¡Te esperamos con mucha ilusión!
              </p>
              <button
                onClick={reset}
                className="bg-gold/10 hover:bg-gold/20 text-gold font-medium py-3 px-6 rounded-full transition-colors duration-200"
              >
                Confirmar otra invitación
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;