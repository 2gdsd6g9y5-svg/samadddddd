import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS, LANGUAGES_SUPPORTED } from '../data/content';

interface HeaderProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section for underline indicator
      const sections = ['home', 'chi-siamo', 'servizi', 'come-funziona', 'team', 'lingue', 'ufficio', 'contatti'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', href: '#home', label: t.nav.home },
    { id: 'servizi', href: '#servizi', label: t.nav.services },
    { id: 'team', href: '#team', label: t.nav.team },
    { id: 'chi-siamo', href: '#chi-siamo', label: 'Chi Siamo' },
    { id: 'come-funziona', href: '#come-funziona', label: t.nav.howItWorks },
    { id: 'lingue', href: '#lingue', label: t.nav.languages },
    { id: 'ufficio', href: '#ufficio', label: t.nav.office },
    { id: 'contatti', href: '#contatti', label: t.nav.contact },
  ];

  const currentLangObj = LANGUAGES_SUPPORTED.find((l) => l.code === currentLang) || LANGUAGES_SUPPORTED[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#10263D]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
          : 'bg-gradient-to-b from-[#10263D]/90 via-[#10263D]/50 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Lockup (Exactly like SH / STERLING & HART in reference screenshot) */}
          <a
            href="#home"
            className="flex items-center gap-3.5 text-white group focus-visible:outline-none"
          >
            {/* Serif Monogram Logo */}
            <div className="flex items-center justify-center">
              <span className="font-editorial text-3xl sm:text-[34px] font-normal tracking-tighter text-white leading-none">
                II
              </span>
            </div>

            {/* Elegant vertical divider line */}
            <div className="h-8 w-[1px] bg-white/30" />

            {/* Two-line Law Firm Wordmark */}
            <div className="flex flex-col justify-center">
              <span className="font-editorial text-sm sm:text-base tracking-[0.22em] text-white font-medium uppercase leading-tight">
                ITALIA & IMMIGRAZIONE
              </span>
              <span className="text-[9px] sm:text-[9.5px] tracking-[0.28em] text-[#E7DED4]/80 uppercase font-medium mt-0.5">
                MILANO · CONSULENZA & ASSISTENZA
              </span>
            </div>
          </a>

          {/* Navigation Links (With Active Underline indicator like in reference screenshot) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#E7DED4]/90">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
                    isActive ? 'text-white' : 'text-[#E7DED4]/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Underline indicator exactly as in screenshot */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone: Language Selector & Dark Rectangular CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs text-xs font-medium text-[#E7DED4] hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                aria-expanded={langDropdownOpen}
                aria-label="Seleziona lingua"
              >
                <Globe className="w-3.5 h-3.5 opacity-80" />
                <span className="text-[11px] font-mono uppercase">{currentLangObj.code.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 text-white/60" />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-[#10263D] border border-white/15 rounded-xs shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  {LANGUAGES_SUPPORTED.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code as SupportedLanguage);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                        currentLang === lang.code ? 'text-white font-bold bg-white/10' : 'text-[#E7DED4]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="text-[11px] opacity-70" dir={lang.rtl ? 'rtl' : 'ltr'}>
                        {lang.nativeName}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Midnight Button matching "Book Consultation" in screenshot */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider text-white bg-[#0e2338] hover:bg-[#173650] border border-white/25 rounded-xs transition-all duration-200 shadow-sm active:scale-98 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 text-white/90 hover:text-white"
              aria-label="Lingua"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 rounded-xs"
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile language picker */}
        {langDropdownOpen && (
          <div className="lg:hidden mt-3 p-2 bg-[#10263D] border border-white/15 rounded-xs shadow-xl grid grid-cols-2 gap-1">
            {LANGUAGES_SUPPORTED.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code as SupportedLanguage);
                  setLangDropdownOpen(false);
                }}
                className={`p-2 text-xs text-left rounded-xs flex items-center gap-2 ${
                  currentLang === lang.code ? 'bg-[#173650] text-white font-bold' : 'text-[#E7DED4] hover:bg-white/5'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#10263D]/98 backdrop-blur-xl border border-white/15 rounded-xs shadow-2xl space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#E7DED4] hover:text-white hover:bg-white/5 rounded-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/15">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold tracking-wider text-white bg-[#0e2338] border border-white/30 rounded-xs transition-colors shadow"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
