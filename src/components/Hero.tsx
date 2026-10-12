import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import heroBg from '../assets/images/hero_classical_columns_sunset_1791809852643.jpg';

interface HeroProps {
  currentLang: SupportedLanguage;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      kicker: 'ASSISTENZA. ORIENTAMENTO. OPPORTUNITÀ.',
      titleLine1: 'Il Tuo Futuro in Italia.',
      titleLine2: 'Il Giusto Supporto, Al Tuo Fianco.',
      desc: 'Ti accompagniamo nella comprensione delle procedure di immigrazione in Italia, con orientamento personalizzato, supporto multilingue e collaborazione con professionisti legali qualificati.',
      primaryBtn: 'Richiedi una consulenza',
      secondaryBtn: 'I Nostri Servizi',
    },
    {
      kicker: 'RIGORE. CHIAREZZA. COMPETENZA.',
      titleLine1: 'Procedure Trasparenti.',
      titleLine2: 'Nessun Imprevisto o Falsa Promessa.',
      desc: 'Dall\'analisi preventiva di ammissibilità alla conclusione formale dell\'iter: massima precisione documentale per visti, permessi di soggiorno e cittadinanza.',
      primaryBtn: 'Richiedi una consulenza',
      secondaryBtn: 'Come Lavoriamo',
    },
    {
      kicker: 'MILANO. MULTILINGUE. AUTOREVOLE.',
      titleLine1: 'Orientamento Specialistico',
      titleLine2: 'Per Famiglie, Lavoratori e Imprese.',
      desc: 'Consulenza dedicata in italiano, arabo, urdu, francese e inglese, con ricevimento su appuntamento presso la nostra sede di Milano Città Studi.',
      primaryBtn: 'Prenota un appuntamento',
      secondaryBtn: 'La Nostra Sede',
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Optional subtle auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden select-none"
    >
      {/* Background with Classical Columns & Sunset Skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Palazzo classico con maestose colonne ioniche e panorama urbano al tramonto dorato"
          className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Precise Cinematic Law Firm Scrim (Matching Reference Screenshot) */}
        {/* Deep dark navy fade from left to reveal columns on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10263D]/95 via-[#10263D]/80 via-55% to-[#10263D]/25 to-90%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10263D] via-transparent via-30% to-[#10263D]/70 to-100%" />
      </div>

      {/* Left Slider Arrow (<) */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-xs"
        aria-label="Diapositiva precedente"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Right Slider Arrow (>) */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-xs"
        aria-label="Diapositiva successiva"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 my-auto w-full">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Kicker Tagline (Exactly like "EXPERIENCE. PERSPECTIVE. RESULTS.") */}
          <div className="mb-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E7DED4]/90 uppercase">
              {slide.kicker}
            </span>
          </div>

          {/* Grand White Serif Title (Exactly like "Trusted Legal Counsel / For Businesses & Families") */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.25rem] font-normal text-white tracking-tight leading-[1.08] mb-6 text-balance drop-shadow-xs">
            <span className="block">{slide.titleLine1}</span>
            <span className="block">{slide.titleLine2}</span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-[#E7DED4]/90 font-normal leading-relaxed max-w-xl mb-9">
            {slide.desc}
          </p>

          {/* Dual Action Buttons (Solid White + Outline, exactly like Screenshot) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Solid White Button with Right Arrow */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#10263D] bg-white hover:bg-[#FCFAF6] rounded-xs transition-colors shadow-lg active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <span>{slide.primaryBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Transparent Outline Button */}
            <a
              href="#servizi"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#10263D]/40 hover:bg-[#10263D]/70 border border-white/40 hover:border-white rounded-xs transition-all backdrop-blur-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <span>{slide.secondaryBtn}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Carousel Indicator (01 —— 02 03) & Right Slogan */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 w-full pt-8">
        <div className="flex items-center justify-between text-xs text-[#E7DED4]/80">
          {/* Bottom Left Carousel numbers and progress line (01 —— 02 03) */}
          <div className="flex items-center gap-4 font-mono">
            {slides.map((_, idx) => (
              <React.Fragment key={idx}>
                <button
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`text-xs sm:text-sm transition-colors ${
                    currentSlide === idx ? 'text-white font-bold' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  0{idx + 1}
                </button>
                {currentSlide === idx && idx < slides.length - 1 && (
                  <div className="w-10 sm:w-16 h-[1.5px] bg-white" />
                )}
                {currentSlide !== idx && idx < slides.length - 1 && (
                  <div className="w-4 h-[1px] bg-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Right Law Firm Credo */}
          <div className="hidden md:block">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#E7DED4]/70 font-medium">
              ESPERIENZA. TRASPARENZA. RIGORE NORMATIVO A MILANO.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
