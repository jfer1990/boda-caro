import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Users, Star } from 'lucide-react';
import guestsData from '../data/guests.json';
import { useParams } from 'react-router-dom';

interface Guest {
  id: number;
  name: string;
  maxGuests: number;
  confirmed: boolean;
  companions: string[];
  slug: string;
}

const RSVPForm: React.FC = () => {
  const [nameInput, setNameInput] = useState('');
  const [suggestions, setSuggestions] = useState<Guest[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const [selectedCompanions, setSelectedCompanions] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { slug } = useParams<{ slug: string }>();

  // Si hay slug, seleccionar al invitado correspondiente
  useEffect(() => {
    if (slug) {
      const guest = guestsData.find(g => g.slug === slug);
      if (guest) {
        setSelectedGuest(guest);
        setNameInput(guest.name);
        setShowSuggestions(false);
      }
    }
  }, [slug]);

  // Autocompletador por nombre
  useEffect(() => {
    if (!slug && nameInput.length >= 2) {
      const filtered = guestsData.filter(guest =>
        guest.name.toLowerCase().includes(nameInput.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [nameInput, slug]);

  const selectGuest = (guest: Guest) => {
    setSelectedGuest(guest);
    setNameInput(guest.name);
    setSelectedCompanions([]);
    setShowSuggestions(false);
  };

  const toggleCompanion = (companion: string) => {
    setSelectedCompanions(prev =>
      prev.includes(companion)
        ? prev.filter(c => c !== companion)
        : [...prev, companion]
    );
  };

  const generateICS = () => {
    const title = "Boda de Carolina Rodríguez y Esteban Pacheco";
    const description = "Celebración de la boda de Carolina y Esteban. ¡No faltes!";
    const location = "Dirección del evento, Ciudad, México";
    const startDate = new Date(Date.UTC(2025, 9, 4, 18, 0, 0));
    const endDate = new Date(Date.UTC(2025, 9, 4, 23, 0, 0));
    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    return (
      `BEGIN:VCALENDAR\n` +
      `VERSION:2.0\n` +
      `BEGIN:VEVENT\n` +
      `DTSTART:${formatDate(startDate)}\n` +
      `DTEND:${formatDate(endDate)}\n` +
      `SUMMARY:${title}\n` +
      `DESCRIPTION:${description}\n` +
      `LOCATION:${location}\n` +
      `END:VEVENT\n` +
      `END:VCALENDAR`
    );
  };

  const handleDownload = () => {
    const blob = new Blob([generateICS()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Boda_Carolina_Esteban.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const confirmAttendance = async () => {
    if (!selectedGuest) return;
    try {
      const payload = {
        name: selectedGuest.name,
        maxGuests: selectedGuest.maxGuests,
        confirmed: true,
        confirmedCompanions: selectedCompanions,
      };

      const res = await fetch("/confirm-assistance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to confirm attendance");

      await res.json();
      setIsConfirmed(true);
    } catch (err) {
      console.error(err);
      alert("Hubo un error al confirmar tu asistencia. Intenta de nuevo.");
    } finally {
      handleDownload();
    }
  };

  const reset = () => {
    setNameInput('');
    setSelectedGuest(null);
    setSelectedCompanions([]);
    setIsConfirmed(false);
    setShowSuggestions(false);
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-gold animate-pulse" fill="currentColor" />
            <Star className="w-4 h-4 text-gold animate-pulse animation-delay-1000" fill="currentColor" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Confirma tu Asistencia
          </h2>
        </div>

        <div className="bg-ivory rounded-2xl p-8 shadow-soft border border-cream/50 relative">
          {!isConfirmed ? (
            <div className="space-y-6">

              {/* INPUT Y AUTOCOMPLETADOR */}
              {!slug && (
                <div className="relative">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    placeholder="Ingresa tu nombre"
                    className="w-full px-4 py-4 bg-white border border-cream/50 rounded-xl focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all duration-200 text-lg"
                  />
                  {showSuggestions && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-cream/50 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      {suggestions.map(g => (
                        <button
                          key={g.id}
                          onClick={() => selectGuest(g)}
                          className="w-full px-4 py-3 text-left hover:bg-cream/30 transition-colors duration-200 border-b border-cream/30 last:border-b-0"
                        >
                          <div className="font-medium text-charcoal">{g.name}</div>
                          <div className="text-sm text-charcoal text-opacity-60">
                            Máximo {g.maxGuests} {g.maxGuests === 1 ? 'persona' : 'personas'}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CHECKBOXES DE ACOMPAÑANTES */}
              {selectedGuest && (
                <div className="bg-white rounded-xl p-6 border border-muted-green/20 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-6 h-6 text-muted-green" />
                    <h3 className="text-xl font-medium text-charcoal">
                      ¡Hola {selectedGuest.name}!
                    </h3>
                  </div>

                  {selectedGuest.companions.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-sm text-charcoal text-opacity-70 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Selecciona tus acompañantes:
                      </span>
                      {selectedGuest.companions.map((companion, index) => (
                        <label key={index} className="flex items-center gap-2 text-charcoal text-opacity-80">
                          <input
                            type="checkbox"
                            checked={selectedCompanions.includes(companion)}
                            onChange={() => toggleCompanion(companion)}
                          />
                          {companion}
                        </label>
                      ))}
                    </div>
                  )}
                  <p>
                   <span className="text-sm text-charcoal text-opacity-70 flex items-center gap-2">
                    Si hubiera algún cambio en su asistencia, por favor avísanos antes del sábado 27 de Septiembre. ¡Gracias!
                  </span>
                  </p>
                  <button
                    onClick={confirmAttendance}
                    className="w-full bg-gradient-to-r from-muted-green to-muted-green/90 hover:from-muted-green/90 hover:to-muted-green text-black font-medium py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-soft"
                  >
                    Confirmar Asistencia
                  </button>
                </div>
              )}

              {/* ALERTA SI NO EXISTE INVITADO */}
              {!slug && nameInput.length >= 3 && suggestions.length === 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm">
                    Tu invitación no está registrada. Verifica tu nombre.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-muted-green" />
              </div>
              <h3 className="text-2xl font-medium text-charcoal mb-4">¡Confirmado!</h3>
              <p className="text-charcoal text-opacity-70 mb-6">
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
