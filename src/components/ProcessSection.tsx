import React from 'react';
import { ArrowRight, CheckCircle, FileSearch, Send, RefreshCw } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { PROCESS_STEPS, TRANSLATIONS } from '../data/content';

interface ProcessSectionProps {
  currentLang: SupportedLanguage;
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  currentLang,
  onOpenConsultation,
}) => {
  const t = TRANSLATIONS[currentLang];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileSearch className="w-5 h-5 text-[#B45F42]" />;
      case 1:
        return <CheckCircle className="w-5 h-5 text-[#B45F42]" />;
      case 2:
        return <Send className="w-5 h-5 text-[#B45F42]" />;
      case 3:
        return <RefreshCw className="w-5 h-5 text-[#B45F42]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#B45F42]" />;
    }
  };

  return (
    <section id="come-funziona" className="py-24 bg-[#FCFAF6] border-b border-[#E7DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
            <span className="w-6 h-[1.5px] bg-[#B45F42]" />
            <span>METODO DI LAVORO</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10263D] leading-tight text-balance">
            Come lavoriamo: quattro passaggi chiari, nessun imprevisto
          </h2>

          <p className="text-base sm:text-lg text-[#536176] leading-relaxed">
            Dalla prima valutazione preliminare al conseguimento dell'obiettivo: seguiamo un metodo rigoroso e collaudato per azzerare gli errori e prevenire dinieghi o ritardi.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-[#E7DED4] shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header step index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-md bg-[#FCFAF6] border border-[#E7DED4]">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-editorial text-3xl font-bold text-[#E7DED4]">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#10263D] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#536176] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7DED4]/60 text-[11px] text-[#173650] font-medium bg-[#FCFAF6] -mx-6 -mb-6 p-4 rounded-b-xl">
                <span className="text-[#B45F42] font-bold">Punto chiave: </span>
                <span>{step.details}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fast CTA strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#10263D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-editorial text-xl sm:text-2xl font-bold">
              Hai una pratica bloccata o devi richiedere un visto?
            </h4>
            <p className="text-xs sm:text-sm text-[#E7DED4]">
              Prenota una prima analisi orientativa per capire quali sono le opzioni previste dalla legge.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-all whitespace-nowrap shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
          >
            <span>{t.nav.cta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
