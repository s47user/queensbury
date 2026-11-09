import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const RisingSunStats: React.FC = () => {
  const { language } = useLanguage();

  const stats = [
    {
      value: '2020',
      labelEn: 'ESTABLISHED IN SANTA MARIA',
      labelTw: 'WƆHYƐƐ ASEƐ WƆ SANTA MARIA',
    },
    {
      value: '0–6',
      labelEn: 'CRÈCHE TO KINDERGARTEN',
      labelTw: 'MFEƐ 0 KƆSI 6 MMUSUA',
    },
    {
      value: '100%',
      labelEn: 'MONTESSORI SENSORIAL APPARATUS',
      labelTw: 'MONTESSORI NSA ANO NNEƐMA',
    },
    {
      value: '7:00 AM',
      labelEn: 'EARLY GATE & NURTURING CARE',
      labelTw: 'ANƆPA ANƆPA BAMMBƆ & NHYEHYƐEƐ',
    },
  ];

  return (
    <section className="w-full bg-[#0d176d] text-white py-10 sm:py-14 md:py-16 px-4 z-30 relative shadow-2xl">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center px-2 sm:px-4 py-2 sm:py-0"
            >
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#f95716] font-bold mb-2 sm:mb-3 tracking-tight">
                {s.value}
              </span>
              <div className="w-6 sm:w-8 h-px bg-white/30 mb-2 sm:mb-3" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-white/85 font-semibold font-mono leading-tight max-w-[160px] sm:max-w-none">
                {language === 'tw' ? s.labelTw : s.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
