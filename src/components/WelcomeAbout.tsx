import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WelcomeAbout: React.FC<{ onNavigate?: (page: string) => void }> = () => {
  const { t, language } = useLanguage();

  const pillars = [
    {
      num: '01',
      title: t.welcome.pillar1Title,
      description: t.welcome.pillar1Desc,
      tag: t.welcome.pillar1Tag,
    },
    {
      num: '02',
      title: t.welcome.pillar2Title,
      description: t.welcome.pillar2Desc,
      tag: t.welcome.pillar2Tag,
    },
    {
      num: '03',
      title: t.welcome.pillar3Title,
      description: t.welcome.pillar3Desc,
      tag: t.welcome.pillar3Tag,
    },
    {
      num: '04',
      title: t.welcome.pillar4Title,
      description: t.welcome.pillar4Desc,
      tag: t.welcome.pillar4Tag,
    },
  ];

  return (
    <section id="school-heritage" className="py-12 sm:py-16 md:py-24 bg-[#fafafc] dark:bg-[#030718] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean Typography */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
            {language === 'tw' ? 'SANTA MARIA ABAKƆSƐM • EST. 2020' : 'OUR SANTA MARIA HERITAGE · EST. 2020'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d176d] dark:text-white tracking-tight leading-tight">
            {t.welcome.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            {t.welcome.description}
          </p>
        </div>

        {/* 4 Pillars Grid - Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white dark:bg-[#060c24] border border-slate-200/90 dark:border-white/10 hover:border-orange-300 rounded-3xl p-6 sm:p-7 transition-all flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 group"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-[#f95716] mb-3 sm:mb-4">
                  {pillar.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0d176d] dark:text-white mb-2 sm:mb-3 group-hover:text-[#f95716] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-400">
                <span>{pillar.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pedagogical Creed Box */}
        <div className="bg-white dark:bg-[#060c24] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 dark:border-white/10 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#f95716]" />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-2">
            {t.welcome.quoteTitle}
          </span>
          <blockquote className="font-serif italic text-base sm:text-xl md:text-2xl text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
            {t.welcome.quoteText}
          </blockquote>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t.welcome.quoteAuthor} {t.welcome.quoteRole}
          </div>
        </div>
      </div>
    </section>
  );
};
