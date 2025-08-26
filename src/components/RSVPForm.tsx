import React, { useState, useEffect } from 'react';
import { Phone, Check, AlertCircle, Users, Star } from 'lucide-react';
import guestsData from '../data/guests.json';

interface Guest {
  id: number;
  name: string;
  phone: string;
  maxGuests: number;
  confirmed: boolean;
  companions: string[];
}

const RSVPForm: React.FC = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [suggestions, setSuggestions] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [companions, setCompanions] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (phoneInput.length >= 2) {
      const filtered = guestsData.filter(guest => 
        guest.phone.replace('+52', '').includes(phoneInput) || 
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
    // Only allow numbers and limit to 10 digits
    const numbersOnly = value.replace(/\D/g, '');
    if (numbersOnly.length <= 10) {
      setPhoneInput(numbersOnly);
    }
  };

  const selectGuest = (guest: Guest) => {
    setSelectedGuest(guest);
    setPhoneInput(guest.phone.replace('+52', ''));
    setCompanions(guest.companions || []);
    setShowSuggestions(false);
  };

  const addCompanion = () => {
    if (selectedGuest && companions.length < selectedGuest.maxGuests - 1) {
      setCompanions([...companions, '']);
    }
  };

  const updateCompanion = (index: number, name: string) => {
    const updated = [...companions];
    updated[index] = name;
    setCompanions(updated);
  };

  const removeCompanion = (index: number) => {
    const updated = companions.filter((_, i) => i !== index);
    setCompanions(updated);
  };

  const confirmAttendance = () => {
    if (selectedGuest) {
      setIsConfirmed(true);
      console.log('Confirmed attendance for:', selectedGuest.name, 'with companions:', companions.filter(c => c.trim()));
    }
  };

  const reset = () => {
    setPhoneInput('');
    setSelectedGuest(null);
    setCompanions([]);
    setIsConfirmed(false);
    setShowSuggestions(false);
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="absolute top-12 right-10 w-2 h-2 bg-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-8 w-1.5 h-1.5 bg-soft-blue/30 rounded-full animate-pulse animation-delay-3000"></div>
      
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-gold animate-pulse" fill="currentColor" />
            <Phone className="w-8 h-8 text-gold" />
            <Star className="w-4 h-4 text-gold animate-pulse animation-delay-1000" fill="currentColor" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Confirma tu Asistencia
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70">
            Tu presencia es el regalo más importante para nosotros
          </p>
        </div>
        
        <div className="bg-ivory rounded-2xl p-8 shadow-soft border border-cream/50 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-1 h-1 bg-muted-green/40 rounded-full animate-pulse"></div>
          
          {!isConfirmed ? (
            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Número de teléfono
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/60 font-medium pointer-events-none">
                    +52
                  </div>
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={handlePhoneChange}
                    className="w-full pl-16 pr-4 py-4 bg-white border border-cream/50 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all duration-200 text-lg"
                    placeholder="5512345678"
                  />
                </div>
                
                {/* Suggestions Dropdown */}
                {showSuggestions && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-cream/50 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((guest) => (
                      <button
                        key={guest.id}
                        onClick={() => selectGuest(guest)}
                        className="w-full px-4 py-3 text-left hover:bg-cream/30 transition-colors duration-200 border-b border-cream/30 last:border-b-0 group"
                      >
                        <div className="font-medium text-charcoal group-hover:text-muted-green transition-colors duration-200">
                          {guest.name}
                        </div>
                        <div className="text-sm text-charcoal/60">
                          {guest.phone} • Máximo {guest.maxGuests} {guest.maxGuests === 1 ? 'persona' : 'personas'}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {selectedGuest && (
                <div className="bg-white rounded-xl p-6 border border-muted-green/20 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-6 h-6 text-muted-green" />
                    <h3 className="text-xl font-medium text-charcoal">
                      ¡Hola {selectedGuest.name}!
                    </h3>
                  </div>
                  
                  <p className="text-charcoal/70 mb-4">
                    Nos emociona saber que estarás con nosotros en este día tan especial.
                  </p>
                  
                  {selectedGuest.maxGuests > 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-charcoal/70">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">
                          Puedes traer hasta {selectedGuest.maxGuests - 1} {selectedGuest.maxGuests === 2 ? 'acompañante' : 'acompañantes'}
                        </span>
                      </div>
                      
                      {companions.map((companion, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={companion}
                            onChange={(e) => updateCompanion(index, e.target.value)}
                            placeholder={`Nombre del acompañante ${index + 1}`}
                            className="flex-1 px-3 py-2 bg-cream/30 border border-cream/50 rounded-lg focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all duration-200"
                          />
                          <button
                            onClick={() => removeCompanion(index)}
                            className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      
                      {companions.length < selectedGuest.maxGuests - 1 && (
                        <button
                          onClick={addCompanion}
                          className="w-full py-2 text-muted-green hover:bg-muted-green/10 border border-muted-green/30 rounded-lg transition-colors duration-200 text-sm"
                        >
                          + Agregar acompañante
                        </button>
                      )}
                    </div>
                  )}
                  
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
                    Tu invitación no está registrada. Por favor verifica tu número de teléfono.
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