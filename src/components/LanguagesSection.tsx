import React from 'react';
import { Globe2, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { LANGUAGES_SUPPORTED, TRANSLATIONS } from '../data/content';

interface LanguagesSectionProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenConsultation: () => void;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  currentLang,
  onLanguageChange,
  onOpenConsultation,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="lingue" className="py-24 bg-[#10263D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
              <span className="w-6 h-[1.5px] bg-[#B45F42]" />
              <span>COMUNICAZIONE SENZA BARRIERE</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Parliamo la tua lingua. Nessun malinteso nei tuoi documenti.
            </h2>

            <p className="text-base sm:text-lg text-[#E7DED4] leading-relaxed">
              Nelle procedure di immigrazione in Italia, anche una singola parola tradotta in modo errato o un'inesatta interpretazione anagrafica può bloccare un fascicolo per mesi o causare preavvisi di rigetto.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Traduzioni e legalizzazioni certificate</p>
                  <p className="text-xs text-[#E7DED4]/80">Adeguamento di certificati di nascita, matrimonio, casellari giudiziali e titoli di studio.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Colloqui diretti nella tua lingua madre</p>
                  <p className="text-xs text-[#E7DED4]/80">Interpreti madrelingua per arabo (classico, egiziano, darija), urdu, francese e inglese.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Chiarezza totale sui moduli da firmare</p>
                  <p className="text-xs text-[#E7DED4]/80">Ti spieghiamo clausola per clausola ogni modulo prima di qualsiasi inoltro formale.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-colors shadow-sm"
              >
                <span>Richiedi colloquio nella tua lingua</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Interactive Language Cards */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E7DED4]/70 mb-4 flex items-center justify-between">
              <span>LINGUE GESTITE DIRETTAMENTE NELLO STUDIO</span>
              <span>CLICCA PER CAMBIARE LINGUA DEL SITO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LANGUAGES_SUPPORTED.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.name}
                    type="button"
                    onClick={() => {
                      if (['it', 'en', 'fr', 'ar', 'ur'].includes(lang.code)) {
                        onLanguageChange(lang.code as SupportedLanguage);
                      }
                    }}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#173650] border-[#B45F42] ring-1 ring-[#B45F42] text-white shadow-lg'
                        : 'bg-[#173650]/40 border-white/10 hover:bg-[#173650]/80 text-[#E7DED4]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{lang.flag}</span>
                        <div>
                          <p className="text-sm font-bold text-white">{lang.name}</p>
                          <p className="text-xs text-[#E7DED4]/70 font-medium" dir={lang.rtl ? 'rtl' : 'ltr'}>
                            {lang.nativeName}
                          </p>
                        </div>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B45F42] text-white px-2 py-0.5 rounded">
                          Attiva
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#E7DED4]/80 mt-1 line-clamp-1" dir={lang.rtl ? 'rtl' : 'ltr'}>
                      {lang.note}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
