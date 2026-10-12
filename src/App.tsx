/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SupportedLanguage } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { LanguagesSection } from './components/LanguagesSection';
import { EthicsSection } from './components/EthicsSection';
import { OfficeSection } from './components/OfficeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('it');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('');

  // Handle dynamic text direction (RTL for Arabic and Urdu)
  useEffect(() => {
    const isRtl = currentLang === 'ar' || currentLang === 'ur';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    } else {
      setConsultationService('');
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#10263D] flex flex-col selection:bg-[#B45F42]/20 selection:text-[#10263D]">
      {/* Fixed Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 2. Chi Siamo / Mission */}
        <AboutSection currentLang={currentLang} />

        {/* 3. Servizi (6 core areas with deep document checklist modal) */}
        <ServicesSection
          currentLang={currentLang}
          onOpenConsultationWithService={(serviceTitle) => handleOpenConsultation(serviceTitle)}
        />

        {/* 4. Come funziona (4-step workflow) */}
        <ProcessSection
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 5. Team di 5 persone */}
        <TeamSection currentLang={currentLang} />

        {/* 6. Lingue & Comunicazione */}
        <LanguagesSection
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 7. Esperienza e Collaborazione Legale */}
        <EthicsSection />

        {/* 8. Ufficio di Milano */}
        <OfficeSection currentLang={currentLang} />

        {/* 9. Contatti & Form di Richiesta */}
        <ContactSection
          currentLang={currentLang}
          initialService={consultationService}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating WhatsApp Quick Link */}
      <FloatingWhatsApp />

      {/* Fast Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />
    </div>
  );
}
