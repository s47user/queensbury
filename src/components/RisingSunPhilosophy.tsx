/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ArrowUpRight, Compass, Target, History, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RisingSunPhilosophyProps {
  onOpenCalendar: () => void;
}

export const RisingSunPhilosophy: React.FC<RisingSunPhilosophyProps> = ({ onOpenCalendar }) => {
  const { language } = useLanguage();

  const items = [
    {
      title: 'Personalized Child-Led Pacing',
      desc: 'In multi-age Montessori prepared environments, children select purposeful activities matching their sensitive periods, progressing without artificial benchmarks or comparison.',
    },
    {
      title: 'Prepared Environments & Tactile Materials',
      desc: 'Our child-scaled classrooms are furnished with authentic Montessori didactic apparatus—cylinder blocks, sandpaper letters, and golden beads—enabling hands-on mastery.',
    },
    {
      title: 'Certified Early Childhood Guides',
      desc: 'Our dedicated educators are specifically trained in early childhood development, observing each child’s emerging interests and offering individualized presentations.',
    },
    {
      title: 'Grace, Courtesy & Community Dignity',
      desc: 'Social development is woven into daily life: respectful greeting, taking turns, caring for the environment, and resolving conflicts with gentle communication.',
    },
  ];

  const upcomingEvents = [
    {
      date: 'TERM OPEN',
      title: 'Montessori Work-Cycle Observation Week',
      type: 'Campus Event',
    },
    {
      date: 'TERM MID',
      title: 'PTA Committee General Meeting & Dialogue',
      type: 'Parent Community',
    },
    {
      date: 'AUG 18',
      title: 'Speech & Prize Giving Graduation Ceremony',
      type: 'Academic Milestone',
    },
  ];

  return (
    <section id="philosophy" className="w-full bg-[#fafafc] dark:bg-[#0a1128] py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          {/* Dual Brand Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-sans font-bold uppercase tracking-widest mb-3 border border-slate-200 dark:border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f95716]" />
            <span className="text-[#f95716]">Orange</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#70b800]" />
            <span className="text-[#70b800]">Lemon Green</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-slate-700 dark:text-slate-200">Official Brand Colors</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d176d] dark:text-white tracking-tight leading-tight">
            {language === 'tw' ? 'Yɛn Nhyɛaseɛ & Botaeɛ Pa' : 'Background, Mission & Core Philosophy'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            {language === 'tw'
              ? 'Wɔhyehyɛɛ Queensbury Montessori School wɔ afe 2020 mu wɔ Santa Maria sɛnea ɛbɛyɛ a mmofra benya Montessori adesua pa a na ɛnni mpɔtam ha.'
              : 'Established in 2020 to fill a vital community need: providing an authentic, dedicated Montessori foundation in Santa Maria (Auntie Aku Last Stop) for early learners aged 0 to 6 years.'}
          </p>
        </div>

        {/* Origin Story Banner (Founded 2020) */}
        <div className="mb-14 rounded-3xl p-7 sm:p-9 bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 shadow-md relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f95716] via-[#70b800] to-[#0d176d]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#f95716] mb-2">
                <History className="w-4 h-4 text-[#f95716]" />
                <span>ORIGIN STORY · ESTABLISHED 2020</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-3">
                Filling a Community Need in Santa Maria
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Before 2020, families living around Santa Maria, Auntie Aku Last Stop, Kwashieman, and Sowutuom had no accessible, authentic Montessori institution for their infants and young children. Queensbury Montessori School was founded to fill that exact gap—creating an unhurried, child-proportioned sanctuary where children aged 0 to 6 years can build concentration, practical self-reliance, and joyful independence.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-sans font-semibold text-slate-700 dark:text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-[#f95716] border border-orange-200 dark:border-orange-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Founded 2020
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4fae6] dark:bg-[#1a2b00]/40 text-[#4d7c0f] dark:text-[#a3e635] border border-[#70b800]/40">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Santa Maria (Auntie Aku Last Stop)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0d176d] dark:text-amber-300 border border-blue-200 dark:border-blue-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ages 0 to 6 Years Exclusively
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-[#070d24] rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 flex flex-col justify-center text-center">
              <div className="font-serif text-4xl sm:text-5xl font-black text-[#0d176d] dark:text-white mb-1">
                2020
              </div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#f95716] mb-3">
                Founding Year
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                From our very first cohort to our landmark 1st Graduation Day, empowering learners with lifelong confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Prominent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white to-orange-50/40 dark:from-[#101b42] dark:to-[#1a140f] border border-orange-200/80 dark:border-orange-500/30 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f95716]" />
            <div className="w-12 h-12 rounded-2xl bg-[#f95716] text-white flex items-center justify-center mb-5 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f95716] block mb-2">
              OUR MISSION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-3 tracking-tight">
              Nurturing Grounded, Self-Reliant Learners
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To provide an authentic, child-centred Montessori foundation that cultivates independence, intellectual curiosity, moral dignity, and social empathy in children from infancy through Kindergarten (ages 0 to 6 years).
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-white to-[#f7fceb] dark:from-[#101b42] dark:to-[#132007] border border-[#70b800]/50 dark:border-[#70b800]/30 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#70b800]" />
            <div className="w-12 h-12 rounded-2xl bg-[#70b800] text-white flex items-center justify-center mb-5 shadow-md">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#4d7c0f] dark:text-[#a3e635] block mb-2">
              OUR VISION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-3 tracking-tight">
              The Gold Standard in Early Childhood
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To be the premier early childhood Montessori benchmark in Accra, celebrated for raising self-disciplined, compassionate, and joyful thinkers who excel in their subsequent academic and life journeys.
            </p>
          </div>
        </div>

        {/* Two Column Layout: Timeline vs Sticky Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Timeline items */}
          <div className="lg:col-span-8 relative">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans">
                PEDAGOGICAL PILLARS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mt-1">
                The Four Cornerstones of Queensbury Education
              </h3>
            </div>

            {/* Vertical timeline line */}
            <div className="hidden sm:block absolute left-4 top-20 bottom-12 w-0.5 bg-orange-200/70 dark:bg-orange-500/30" />

            <div className="space-y-8">
              {items.map((item, idx) => (
                <div key={idx} className="relative sm:pl-12 flex items-start group">
                  {/* Orange timeline dot */}
                  <div className="hidden sm:flex absolute left-2.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f95716] ring-4 ring-orange-100 dark:ring-orange-950/60 items-center justify-center transition-transform group-hover:scale-125" />

                  {/* Clean Editorial Pillar Card */}
                  <div className="w-full bg-white dark:bg-[#101b42] rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 p-7 sm:p-9 group-hover:-translate-y-1 relative overflow-hidden">
                    {/* Top bar with Pillar Index */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-bold text-[#f95716] uppercase tracking-widest bg-orange-50 dark:bg-orange-950/40 px-3.5 py-1 rounded-full border border-orange-200/60 dark:border-orange-500/20">
                        PILLAR 0{idx + 1}
                      </span>
                      <span className="text-3xl font-serif font-black text-slate-200 dark:text-slate-800 select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-3 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Upcoming Events & Academic Calendar Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white dark:bg-[#101b42] rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 shadow-lg relative overflow-hidden">
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f95716]" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-[#f95716] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white tracking-tight">
                    Academic Dates
                  </h3>
                  <span className="text-[11px] font-sans text-slate-400 uppercase tracking-wider">
                    Soft Copy Calendar Available
                  </span>
                </div>
              </div>

              {/* Event items list */}
              <div className="space-y-4 mb-8">
                {upcomingEvents.map((evt, eIdx) => (
                  <div
                    key={eIdx}
                    className="p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-white/5 flex items-start gap-4"
                  >
                    <div className="px-3 py-2 rounded-xl bg-[#0d176d] text-white text-center shrink-0">
                      <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-[#f95716]">
                        {evt.date.split(' ')[0]}
                      </span>
                      <span className="block font-serif text-sm font-bold leading-none mt-0.5">
                        {evt.date.split(' ')[1] || '2024'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-sans uppercase tracking-wider text-slate-400 block mb-0.5">
                        {evt.type}
                      </span>
                      <h5 className="font-sans font-semibold text-sm text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {evt.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Academic Calendar Button */}
              <button
                type="button"
                onClick={onOpenCalendar}
                className="w-full py-3.5 px-6 rounded-full border-2 border-[#0d176d] dark:border-amber-400 text-[#0d176d] dark:text-amber-300 font-bold text-sm tracking-wider uppercase hover:bg-[#0d176d] hover:text-white dark:hover:bg-amber-400 dark:hover:text-[#0a1128] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>VIEW ACADEMIC CALENDAR</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
