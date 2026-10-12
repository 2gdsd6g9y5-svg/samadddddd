import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#10263D] text-white text-xs px-3.5 py-2 rounded-lg shadow-xl border border-[#173650] animate-in fade-in slide-in-from-right-3 duration-200">
          <span>Chatta con noi su WhatsApp</span>
          <span className="font-mono text-[#E7DED4] tabular-nums font-semibold">({CONTACT_INFO.phone})</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5"
            aria-label="Chiudi avviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Contattaci su WhatsApp al +39 353 213 6704"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
