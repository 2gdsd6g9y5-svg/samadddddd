import React from 'react';
import { ShieldCheck, Scale, FileLock2, HeartHandshake } from 'lucide-react';
import { ETHICS_POINTS } from '../data/content';

export const EthicsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FCFAF6] border-b border-[#E7DED4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#B45F42]">
            <span className="w-6 h-[1.5px] bg-[#B45F42]" />
            <span>ETICA & DEONTOLOGIA</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#10263D] leading-tight text-balance">
            Esperienza, trasparenza e collaborazione con professionisti legali
          </h2>

          <p className="text-base text-[#536176] leading-relaxed">
            Rifiutiamo qualsiasi promessa ingannevole o scorciatoia burocratica. Il nostro impegno si fonda sul rispetto rigoroso della legge italiana e sulla sicurezza giuridica della tua persona e della tua famiglia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ETHICS_POINTS.map((pt, idx) => {
            const icons = [
              <Scale key={0} className="w-5 h-5 text-[#B45F42]" />,
              <ShieldCheck key={1} className="w-5 h-5 text-[#B45F42]" />,
              <FileLock2 key={2} className="w-5 h-5 text-[#B45F42]" />,
              <HeartHandshake key={3} className="w-5 h-5 text-[#B45F42]" />,
            ];

            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E7DED4] shadow-xs hover:border-[#B45F42]/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#FCFAF6] border border-[#E7DED4] w-fit mb-4">
                  {icons[idx]}
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#10263D] mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#536176] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
