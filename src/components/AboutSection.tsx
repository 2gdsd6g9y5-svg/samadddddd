import React from 'react';
import { Shield, Scale, Clock, Award } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../data/content';
import meetingRoomImg from '../assets/images/consulting_meeting_1791808892831.jpg';

interface AboutSectionProps {
  currentLang: SupportedLanguage;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="chi-siamo" className="py-24 bg-[#FCFAF6] border-b border-[#E7DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
              <span className="w-6 h-[1.5px] bg-[#B45F42]" />
              <span>{t.about.kicker}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10263D] leading-tight text-balance">
              {t.about.title}
            </h2>

            <p className="text-lg text-[#173650] font-medium leading-relaxed">
              {t.about.lead}
            </p>

            <div className="space-y-4 text-base text-[#536176] leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-white border border-[#E7DED4] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#10263D]/5 text-[#10263D]">
                    <Scale className="w-5 h-5 text-[#B45F42]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#10263D]">Rigore Normativo</h4>
                </div>
                <p className="text-xs text-[#536176]">
                  Pratiche istruite nel pieno rispetto del Testo Unico sull'Immigrazione (D.Lgs. 286/98).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E7DED4] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#10263D]/5 text-[#10263D]">
                    <Shield className="w-5 h-5 text-[#B45F42]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#10263D]">Tutela Deontologica</h4>
                </div>
                <p className="text-xs text-[#536176]">
                  Collaborazione sinergica con avvocati iscritti all'Albo per la massima garanzia giuridica.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E7DED4] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#10263D]/5 text-[#10263D]">
                    <Clock className="w-5 h-5 text-[#B45F42]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#10263D]">Monitoraggio Costante</h4>
                </div>
                <p className="text-xs text-[#536176]">
                  Controllo periodico delle scadenze e solleciti tempestivi presso gli uffici competenti.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-[#E7DED4] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#10263D]/5 text-[#10263D]">
                    <Award className="w-5 h-5 text-[#B45F42]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#10263D]">Trasparenza Totale</h4>
                </div>
                <p className="text-xs text-[#536176]">
                  Nessuna promessa infondata: chiarezza immediata sui tempi e sui reali requisiti di legge.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#E7DED4] bg-[#10263D]">
              <img
                src={meetingRoomImg}
                alt="Studio e sala consultazione di Italia Immigrazione a Milano"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#E7DED4]/90 mb-1">
                  SEDE OPERATIVA DI MILANO
                </div>
                <div className="font-editorial text-lg sm:text-xl font-bold">
                  Accoglienza professionale e riservatezza garantita
                </div>
                <div className="mt-2 text-xs text-[#E7DED4]/80 flex items-center gap-2">
                  <span>Via Andrea Maria Ampère 126</span>
                  <span>·</span>
                  <span>Ricevimento su appuntamento</span>
                </div>
              </div>
            </div>

            {/* Decorative background accent badge */}
            <div className="hidden sm:block absolute -top-4 -left-4 -z-10 w-24 h-24 border-2 border-[#B45F42]/30 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
