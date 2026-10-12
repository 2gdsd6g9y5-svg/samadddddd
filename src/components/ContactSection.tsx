import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { SupportedLanguage, ContactFormData } from '../types';
import { CONTACT_INFO, SERVICES, TRANSLATIONS, LANGUAGES_SUPPORTED } from '../data/content';

interface ContactSectionProps {
  currentLang: SupportedLanguage;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  initialService = '',
}) => {
  const t = TRANSLATIONS[currentLang];

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: initialService || SERVICES[0].title,
    preferredLanguage: currentLang === 'ar' ? 'Arabo' : currentLang === 'ur' ? 'Urdu' : currentLang === 'fr' ? 'Francese' : currentLang === 'en' ? 'Inglese' : 'Italiano',
    message: '',
    urgency: 'normale',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Inserisci il tuo nome e cognome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Inserisci un indirizzo email valido.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = 'Inserisci un recapito telefonico valido con prefisso.';
    }

    if (!formData.privacyAccepted) {
      newErrors.privacy = 'È necessario accettare il trattamento dei dati personali per inviare la richiesta.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch with client-side state handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    const text = `Salve Italia Immigrazione, vorrei informazioni per: ${formData.serviceId}. Mi chiamo ${formData.fullName || 'un cliente'}.`;
    return `https://wa.me/393532136704?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contatti" className="py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
            <span className="w-6 h-[1.5px] bg-[#B45F42]" />
            <span>{t.contactHeading.kicker}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10263D] leading-tight text-balance">
            {t.contactHeading.title}
          </h2>

          <p className="text-base sm:text-lg text-[#536176] leading-relaxed">
            {t.contactHeading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-bold text-[#10263D]">
                Recapiti Ufficiali dello Studio
              </h3>
              <p className="text-sm text-[#536176] leading-relaxed">
                Puoi contattarci telefonicamente, via WhatsApp o via email, oppure prenotare un colloquio compilando il form a lato.
              </p>
            </div>

            <div className="space-y-4">
              {/* Telephone */}
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="p-5 rounded-xl bg-white border border-[#E7DED4] flex items-center gap-4 hover:border-[#B45F42]/60 hover:shadow-sm transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#10263D]/5 text-[#10263D] group-hover:bg-[#B45F42] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#536176] block">Telefono & Chiamate</span>
                  <span className="font-mono text-base font-bold text-[#10263D] tracking-wide">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              {/* WhatsApp direct */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white border border-[#E7DED4] flex items-center gap-4 hover:border-emerald-600 hover:shadow-sm transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#536176] block">WhatsApp Ufficiale</span>
                  <span className="font-mono text-base font-bold text-emerald-800 tracking-wide">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-5 rounded-xl bg-white border border-[#E7DED4] flex items-center gap-4 hover:border-[#B45F42]/60 hover:shadow-sm transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#10263D]/5 text-[#10263D] group-hover:bg-[#B45F42] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#536176] block">Posta Elettronica</span>
                  <span className="font-mono text-sm font-semibold text-[#10263D]">{CONTACT_INFO.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="p-5 rounded-xl bg-white border border-[#E7DED4] flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#10263D]/5 text-[#10263D]">
                  <MapPin className="w-5 h-5 text-[#B45F42]" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#536176] block">Sede Operativa</span>
                  <span className="text-sm font-semibold text-[#10263D]">{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Timetable note */}
            <div className="p-4 rounded-xl bg-[#10263D] text-white flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-semibold text-white">Ricevimento su Prenotazione</p>
                <p className="text-[#E7DED4]/80 leading-relaxed">
                  Per dedicare a ciascun fascicolo il tempo necessario, l'accesso allo studio è concordato su appuntamento.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E7DED4] p-6 sm:p-10 shadow-sm">
              {submittedSuccess ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#10263D]">
                    {t.contactHeading.successTitle}
                  </h3>

                  <p className="text-sm text-[#536176] max-w-md mx-auto leading-relaxed">
                    {t.contactHeading.successMessage}
                  </p>

                  <div className="p-4 bg-[#FCFAF6] border border-[#E7DED4] rounded-xl text-left text-xs text-[#173650] max-w-md mx-auto space-y-1">
                    <div><strong>Richiedente:</strong> {formData.fullName}</div>
                    <div><strong>Servizio:</strong> {formData.serviceId}</div>
                    <div><strong>Lingua selezionata:</strong> {formData.preferredLanguage}</div>
                    <div><strong>Recapito:</strong> {formData.phone} ({formData.email})</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Invia anche su WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          serviceId: SERVICES[0].title,
                          preferredLanguage: 'Italiano',
                          message: '',
                          urgency: 'normale',
                          privacyAccepted: false,
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#10263D] hover:bg-[#FCFAF6] border border-[#E7DED4] rounded transition-colors"
                    >
                      Nuova richiesta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#E7DED4] pb-4">
                    <h3 className="font-editorial text-2xl font-bold text-[#10263D]">
                      {t.contactHeading.formTitle}
                    </h3>
                    <p className="text-xs text-[#536176] mt-1">
                      I campi contrassegnati con (*) sono obbligatori per formulare una risposta appropriata.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                        {t.contactHeading.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Es. Mario Rossi o Tariq Al-Mansoor"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FCFAF6] focus:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42] ${
                          errors.fullName ? 'border-red-500' : 'border-[#E7DED4]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                        {t.contactHeading.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nome@esempio.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FCFAF6] focus:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42] ${
                          errors.email ? 'border-red-500' : 'border-[#E7DED4]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                        {t.contactHeading.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 333 1234567"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FCFAF6] focus:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42] ${
                          errors.phone ? 'border-red-500' : 'border-[#E7DED4]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Area */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                        {t.contactHeading.serviceLabel}
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                      >
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.code}. {srv.title}
                          </option>
                        ))}
                        <option value="Altro / Caso speciale">Altra procedura / Caso specifico</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Language */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                        {t.contactHeading.languageLabel}
                      </label>
                      <select
                        value={formData.preferredLanguage}
                        onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                      >
                        {LANGUAGES_SUPPORTED.map((lang) => (
                          <option key={lang.name} value={lang.name}>
                            {lang.flag} {lang.name} ({lang.nativeName})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Urgency */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                        {t.contactHeading.urgencyLabel}
                      </label>
                      <div className="flex items-center gap-4 h-[42px]">
                        <label className="inline-flex items-center gap-2 text-xs text-[#173650] cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value="normale"
                            checked={formData.urgency === 'normale'}
                            onChange={() => setFormData({ ...formData, urgency: 'normale' })}
                            className="text-[#B45F42] focus:ring-[#B45F42]"
                          />
                          <span>Normale</span>
                        </label>
                        <label className="inline-flex items-center gap-2 text-xs text-red-700 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value="urgente"
                            checked={formData.urgency === 'urgente'}
                            onChange={() => setFormData({ ...formData, urgency: 'urgente' })}
                            className="text-red-600 focus:ring-red-500"
                          />
                          <span>Urgente (Scadenza / Notifica)</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
                      {t.contactHeading.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrivi brevemente lo stato della tua pratica, eventuali ricevute o documenti in tuo possesso..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className="mt-1 rounded text-[#B45F42] focus:ring-[#B45F42] border-[#E7DED4]"
                      />
                      <span className="text-xs text-[#536176] leading-relaxed">
                        {t.contactHeading.privacyLabel}
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.privacy}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-all shadow-md shadow-[#B45F42]/15 active:scale-[0.99] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
                    >
                      {isSubmitting ? (
                        <span>{t.contactHeading.submittingBtn}</span>
                      ) : (
                        <>
                          <span>{t.contactHeading.submitBtn}</span>
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
      </div>
    </section>
  );
};
