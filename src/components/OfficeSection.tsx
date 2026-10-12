import React from 'react';
import { MapPin, Navigation, Train, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, TRANSLATIONS } from '../data/content';
import { SupportedLanguage } from '../types';
import officeFacadeImg from '../assets/images/office_milan_facade_1791808880330.jpg';

interface OfficeSectionProps {
  currentLang: SupportedLanguage;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT_INFO.address
  )}`;

  return (
    <section id="ufficio" className="py-24 bg-[#FCFAF6] border-b border-[#E7DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office description & Transit info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
              <span className="w-6 h-[1.5px] bg-[#B45F42]" />
              <span>{t.officeHeading.kicker}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10263D] leading-tight text-balance">
              {t.officeHeading.title}
            </h2>

            <p className="text-base text-[#536176] leading-relaxed">
              Il nostro ufficio a Milano si trova nella tranquilla e centrale zona di Città Studi, facilmente raggiungibile con la metropolitana e con tutti i principali mezzi pubblici. Riceviamo su appuntamento per dedicare a ciascun fascicolo il tempo e l'attenzione necessari.
            </p>

            {/* Address & Quick Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E7DED4] flex items-start gap-3.5 shadow-xs">
                <MapPin className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]">Indirizzo dello Studio</span>
                  <p className="text-sm font-semibold text-[#173650]">{CONTACT_INFO.address}</p>
                  <p className="text-xs text-[#536176]">Zona Città Studi / Piola - Milano Est</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7DED4] flex items-start gap-3.5 shadow-xs">
                <Clock className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]">Orari di Ricevimento</span>
                  <p className="text-xs text-[#536176] leading-relaxed">{CONTACT_INFO.hours}</p>
                  <p className="text-[11px] text-[#B45F42] font-semibold">Si raccomanda la prenotazione anticipata dell'appuntamento.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7DED4] flex items-start gap-3.5 shadow-xs">
                <Train className="w-5 h-5 text-[#B45F42] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]">Trasporti e Collegamenti</span>
                  <ul className="text-xs text-[#536176] space-y-1">
                    <li><strong className="text-[#10263D]">Metropolitana:</strong> Linea M2 (Verde) — Stazioni Piola (5 min) o Lambrate FS (7 min a piedi).</li>
                    <li><strong className="text-[#10263D]">Treno:</strong> Stazione FS Milano Lambrate (collegamenti regionali e suburbani).</li>
                    <li><strong className="text-[#10263D]">Linee bus & tram:</strong> Linee 39, 54, 62, 93 a pochi passi.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#10263D] hover:bg-[#173650] rounded transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#B45F42]" />
                <span>Apri indicazioni su Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Building Facade Photograph & Map embed */}
          <div className="lg:col-span-6 space-y-6">
            {/* Building Photo */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E7DED4] bg-white">
              <img
                src={officeFacadeImg}
                alt="Palazzo storico milanese in cui ha sede l'ufficio di Italia Immigrazione"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#10263D] text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B45F42]" />
                  <span className="font-semibold">{CONTACT_INFO.address}</span>
                </div>
                <span className="text-[#E7DED4]/80">Milano (MI)</span>
              </div>
            </div>

            {/* Map Frame (OpenStreetMap embed for Milan, Via Ampère) */}
            <div className="rounded-xl overflow-hidden border border-[#E7DED4] shadow-sm bg-white">
              <div className="p-3 bg-[#FCFAF6] border-b border-[#E7DED4] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#10263D]">Mappa della zona · Via Ampère 126</span>
                <span className="text-[11px] text-[#536176]">Milano Lambrate / Città Studi</span>
              </div>
              <iframe
                title="Mappa Ufficio Italia Immigrazione Milano"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.2200%2C45.4800%2C9.2350%2C45.4900&amp;layer=mapnik&amp;marker=45.4851%2C9.2272"
                className="w-full h-56 border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
