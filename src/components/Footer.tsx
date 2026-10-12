import React from 'react';
import { Phone, Mail, MapPin, Scale, Shield, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../data/content';
import { SupportedLanguage } from '../types';

interface FooterProps {
  currentLang: SupportedLanguage;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10263D] text-[#E7DED4] border-t border-[#173650]">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Overview (Col 5) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#B45F42] flex items-center justify-center text-white font-serif font-bold text-base">
                IT
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-bold text-white leading-tight">
                  Italia Immigrazione
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#E7DED4]/70">
                  MILANO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E7DED4]/80 leading-relaxed">
              Orientamento specialistico e assistenza nelle procedure di immigrazione, visti, permessi di soggiorno, ricongiungimenti e cittadinanza a Milano.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center gap-2 text-white hover:text-[#B45F42] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B45F42]" />
                <span className="font-mono tabular-nums">{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-white hover:text-[#B45F42] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B45F42]" />
                <span className="font-mono">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-[#E7DED4]/80">
                <MapPin className="w-3.5 h-3.5 text-[#B45F42] shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigazione
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#chi-siamo" className="hover:text-white transition-colors">Chi siamo</a></li>
              <li><a href="#servizi" className="hover:text-white transition-colors">Servizi</a></li>
              <li><a href="#come-funziona" className="hover:text-white transition-colors">Come funziona</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">I Professionisti</a></li>
              <li><a href="#lingue" className="hover:text-white transition-colors">Lingue</a></li>
              <li><a href="#ufficio" className="hover:text-white transition-colors">Sede di Milano</a></li>
              <li><a href="#contatti" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Core Services (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ambiti di Assistenza
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#servizi" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening & Consultation CTA (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Studio & Appuntamenti
            </h4>
            <p className="text-xs text-[#E7DED4]/80 leading-relaxed">
              Ricevimento su appuntamento presso la nostra sede di Milano (Città Studi / M2 Piola).
            </p>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-colors text-center"
            >
              Richiedi appuntamento
            </button>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-[#E7DED4]/60">Orari: Lun-Sab 09:30-18:30</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Torna in cima alla pagina"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Deontological Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="p-4 rounded-lg bg-black/20 border border-white/5 text-[11px] text-[#E7DED4]/70 space-y-2 leading-relaxed">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Scale className="w-3.5 h-3.5 text-[#B45F42]" />
              <span>Nota deontologica e trasparenza professionale:</span>
            </div>
            <p>
              Italia Immigrazione è un servizio di orientamento, informazione e assistenza burocratica per le procedure di immigrazione con sede in Milano. Le attività riservate per legge alla professione forense, l'eventuale consulenza legale specialistica e la difesa o patrocinio in giudizio (Tribunale Ordinario, TAR, Consiglio di Stato) sono svolte esclusivamente da o in stretta collaborazione con avvocati regolarmente iscritti all'Albo degli Avvocati, nel pieno rispetto del Codice Deontologico Forense e delle vigenti normative di legge.
            </p>
            <p>
              Non si forniscono garanzie di accoglimento per le istanze, dipendendo l'esito finale dalla valutazione discrezionale e di legittimità delle Autorità competenti (Questura, Prefettura, Ambasciate e Consolati della Repubblica Italiana).
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-white/5 bg-[#0a1a2b] py-6 text-xs text-[#E7DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Italia Immigrazione — Milano. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <span>Conformità GDPR & Privacy</span>
            <span>·</span>
            <span>Via Ampère 126, Milano</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
