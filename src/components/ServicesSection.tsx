import React, { useState } from 'react';
import { Compass, FileCheck, Users, Award, Building2, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { ServiceItem, SupportedLanguage } from '../types';
import { SERVICES, TRANSLATIONS } from '../data/content';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  currentLang: SupportedLanguage;
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onOpenConsultationWithService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = TRANSLATIONS[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#B45F42]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#B45F42]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#B45F42]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#B45F42]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#B45F42]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#B45F42]" />;
      default:
        return <FileCheck className="w-5 h-5 text-[#B45F42]" />;
    }
  };

  return (
    <section id="servizi" className="py-24 bg-[#10263D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
            <span className="w-6 h-[1.5px] bg-[#B45F42]" />
            <span>{t.servicesHeading.kicker}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            {t.servicesHeading.title}
          </h2>

          <p className="text-base sm:text-lg text-[#E7DED4] leading-relaxed">
            {t.servicesHeading.subtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#173650]/50 hover:bg-[#173650]/80 border border-white/10 hover:border-[#B45F42]/50 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div>
                {/* Top index and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B45F42]/40 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs tracking-wider text-[#E7DED4]/70">
                      {service.code} / 06
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-editorial text-2xl font-bold text-white mb-2 group-hover:text-[#FCFAF6] transition-colors">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-medium text-[#B45F42] mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#E7DED4]/90 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet list of key features */}
                <ul className="space-y-2 mb-6 border-t border-white/10 pt-4">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#E7DED4]/80">
                      <span className="text-[#B45F42] font-bold">·</span>
                      <span className="line-clamp-2">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to open Details Modal */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#B45F42] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42] rounded py-1"
                >
                  <span>Requisiti e Procedura</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenConsultationWithService(service.title)}
                  className="text-xs text-[#E7DED4]/70 hover:text-white underline underline-offset-4 transition-colors"
                >
                  Richiedi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForConsultation={onOpenConsultationWithService}
        />
      )}
    </section>
  );
};
