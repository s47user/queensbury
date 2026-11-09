import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MontessoriPhilosophy: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      num: '01',
      title: 'Learning Through Exploration',
      subtitle: 'The Hand is the Chief Teacher',
      description:
        'Dr. Maria Montessori observed that the child learns through the hands. Our Santa Maria classrooms are equipped with scientifically graded materials that isolate specific sensory qualities—length, weight, texture, pitch, and geometric form—transforming abstract principles into tangible, intuitive understanding.',
      focus: 'Sensorial & Concrete',
    },
    {
      num: '02',
      title: 'Independence & Self-Confidence',
      subtitle: 'Help Me To Do It Myself',
      description:
        'From the moment children arrive at 7:00 AM, they hang their own backpacks, select their work mats, and return materials to their designated shelf. This daily autonomy builds deep self-esteem, intrinsic motivation, and respectful self-regulation.',
      focus: 'Child-Scale Autonomy',
    },
    {
      num: '03',
      title: 'Practical Life Foundation',
      subtitle: 'Dignity in Daily Living',
      description:
        'Practical life activities—pouring water, peeling fruit, sweeping crumbs, fastening buttons, and practicing grace and courtesy—are the heartbeat of our early years. They hone motor coordination, focus spans, and collaborative social harmony.',
      focus: 'Real-World Competence',
    },
    {
      num: '04',
      title: 'Creativity, Wonder & Discovery',
      subtitle: 'Freedom Within Loving Limits',
      description:
        'Children enjoy uninterrupted work cycles where they can immerse themselves deeply in an activity without artificial bells or interruptions. Curiosity is treated as a sacred spark to be protected and guided.',
      focus: 'Uninterrupted Focus',
    },
    {
      num: '05',
      title: 'Individual Pace & Development',
      subtitle: 'Honoring the Sensitive Periods',
      description:
        'No two children blossom on the identical day. Our trained guides observe each child meticulously, introducing new challenges precisely when the child exhibits the developmental readiness and enthusiasm to master them.',
      focus: 'Observation-Led Guidance',
    },
  ];

  return (
    <section id="philosophy" className="py-16 bg-[#fafafc] dark:bg-[#0a1128] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Editorial & Dignified */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-sans uppercase tracking-widest text-[#f95716] font-bold mb-2">
            {language === 'tw' ? 'MONTESSORI AKWANKYERƐ • SANTA MARIA' : 'THE MONTESSORI METHOD • CORE PEDAGOGICAL PILLARS'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d176d] dark:text-white tracking-tight leading-tight font-bold">
            {language === 'tw'
              ? 'Adesua a Ɛgyina Abofra No Ankasa Ahofadie So'
              : 'Education not as instruction, but as an aid to natural life.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            {language === 'tw'
              ? 'Montessori fapem bu abofra sɛ obi a ɔwɔ ahoɔden ne anisoadehunu kɛseɛ a ɛsɛ sɛ yɛboa no ma ɛdɔre. Wɔ Queensbury Montessori, Santa Maria, yɛsiesie bea pa ma abofra no tumi suani kɔ n\'anim.'
              : 'The Montessori philosophy views the young child not as an empty vessel to be lectured to, but as a capable, self-constructing human being endowed with immense creative energy. At Queensbury Montessori in Santa Maria, we create the prepared environment that allows that natural potential to flourish.'}
          </p>
        </div>

        {/* 5-Pillar Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={p.num}
              className={`bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 hover:border-[#f95716]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-3xl font-bold text-[#0d176d] dark:text-amber-400">
                    {p.num}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#f95716] font-bold bg-[#f95716]/10 px-2.5 py-1 rounded-full">
                    {p.focus}
                  </span>
                </div>
                <div className="text-xs font-serif italic text-amber-700 dark:text-amber-300 font-medium mb-1">
                  {p.subtitle}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0d176d] dark:text-white mb-3 group-hover:text-[#f95716] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span>Pillar 0{idx + 1} of 05</span>
                <span className="group-hover:text-[#f95716] transition-colors font-medium">Queensbury Montessori</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
