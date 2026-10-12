import React from 'react';
import { X, Check, FileText, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { CONTACT_INFO } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E7DED4] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-[#10263D] text-white p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
            aria-label="Chiudi finestra"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45F42] mb-2">
            <span>SERVIZIO {service.code}</span>
            <span>·</span>
            <span>ITALIA IMMIGRAZIONE MILANO</span>
          </div>

          <h3 id="service-modal-title" className="font-editorial text-2xl sm:text-3xl font-bold leading-tight">
            {service.title}
          </h3>

          <p className="mt-2 text-sm text-[#E7DED4] leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10263D] mb-2">
              Panoramica e Orientamento
            </h4>
            <p className="text-sm text-[#536176] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Destinatari */}
          <div className="p-3.5 bg-[#FCFAF6] rounded-lg border border-[#E7DED4]">
            <span className="text-xs font-bold text-[#10263D] block mb-1">A chi è rivolto:</span>
            <p className="text-xs text-[#536176]">{service.targetAudience}</p>
          </div>

          {/* Cosa comprende il nostro supporto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10263D] mb-3">
              Cosa comprende l'assistenza dello studio
            </h4>
            <ul className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#173650]">
                  <Check className="w-4 h-4 text-[#B45F42] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documenti tipici richiesti */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10263D] mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#B45F42]" />
              <span>Documenti tipici da preparare</span>
            </h4>
            <div className="bg-[#FCFAF6] border border-[#E7DED4] rounded-lg p-4 space-y-2">
              {service.requiredDocs.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#536176]">
                  <span className="text-[#B45F42] font-bold">·</span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-[#536176] italic">
              * La lista completa ed esatta verrà personalizzata durante il primo colloquio in base alla tua specifica casistica.
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-[#FCFAF6] border-t border-[#E7DED4] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-[#536176]">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="hover:text-[#10263D] flex items-center gap-1 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#B45F42]" />
              <span className="font-mono tabular-nums">{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 flex items-center gap-1 font-medium text-emerald-800"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Rapido</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              onSelectForConsultation(service.title);
              onClose();
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
          >
            <span>Richiedi assistenza per questo servizio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
