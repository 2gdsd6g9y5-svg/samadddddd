import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { SERVICES, CONTACT_INFO, LANGUAGES_SUPPORTED } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService || SERVICES[0].title);
  const [meetingType, setMeetingType] = useState<'in_sede' | 'online_meet' | 'telefonico'>('in_sede');
  const [preferredLanguage, setPreferredLanguage] = useState('Italiano');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('Inserisci almeno nome completo e recapito telefonico.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#E7DED4] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#10263D] text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-mono tracking-widest uppercase text-[#B45F42] block mb-1">
            ITALIA IMMIGRAZIONE · MILANO
          </span>

          <h3 id="consultation-modal-title" className="font-editorial text-2xl font-bold">
            Richiedi una Consulenza Gratuita
          </h3>

          <p className="text-xs text-[#E7DED4] mt-1">
            Primo inquadramento orientativo in sede a Milano o via videochiamata / telefono.
          </p>
        </div>

        {/* Form or Success State */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-editorial text-2xl font-bold text-[#10263D]">
                Richiesta Confermata
              </h4>

              <p className="text-xs sm:text-sm text-[#536176] max-w-sm mx-auto leading-relaxed">
                Abbiamo registrato la tua richiesta. Un nostro consulente ti contatterà al numero <strong className="text-[#10263D]">{phone}</strong> per concordare data e orario dell'appuntamento.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/393532136704?text=${encodeURIComponent(
                    `Salve, ho richiesto una consulenza per ${service}. Mi chiamo ${fullName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conferma subito su WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-[#536176] hover:text-[#10263D]"
                >
                  Chiudi finestra
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Es. Ahmed Hassan o Chiara Bianchi"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1">
                    Telefono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+39 353 213 6704"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tuaemail@gmail.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1">
                  Procedura o Argomento
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.code}. {s.title}
                    </option>
                  ))}
                  <option value="Consulenza generale">Orientamento generale</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1">
                    Modalità Colloquio
                  </label>
                  <select
                    value={meetingType}
                    onChange={(e) => setMeetingType(e.target.value as any)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                  >
                    <option value="in_sede">In Studio a Milano (Via Ampère)</option>
                    <option value="online_meet">Videochiamata Google Meet</option>
                    <option value="telefonico">Colloquio Telefonico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1">
                    Lingua del colloquio
                  </label>
                  <select
                    value={preferredLanguage}
                    onChange={(e) => setPreferredLanguage(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                  >
                    {LANGUAGES_SUPPORTED.map((l) => (
                      <option key={l.name} value={l.name}>
                        {l.flag} {l.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-[#536176] pt-1">
                La prima consulenza serve a verificare la sussistenza dei requisiti di legge ed è svolta senza alcun impegno vincolante.
              </p>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-all shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                >
                  {isSubmitting ? (
                    <span>Registrazione in corso...</span>
                  ) : (
                    <>
                      <span>Prenota la consulenza orientativa</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
