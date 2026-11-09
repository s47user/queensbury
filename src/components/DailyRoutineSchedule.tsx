/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Clock, 
  Utensils, 
  Sun, 
  BookOpen, 
  Smile, 
  Moon, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Coffee,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DailyRoutineSchedule: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'meals' | 'learning' | 'aftercare'>('all');

  const scheduleEvents = [
    {
      time: '7:00 AM',
      titleEn: 'Arrival & Warm Reception',
      titleTw: 'Mmofra Ba & Akwaaba',
      category: 'routine',
      badge: 'Arrival',
      icon: Sun,
      descEn: 'Early morning gates open. Attentive educators greet each child individually; children hang their bags, slip into indoor footwear, and enter their prepared classroom environment.',
      descTw: 'Sukuu pon bue 7:00 AM. Akyerɛkyerɛfoɔ gye mmofra no fɛfɛɛfɛ na wɔkɔ wɔn sukuudan mu asomdwoeɛ mu.',
      highlight: false,
    },
    {
      time: '7:30 AM',
      titleEn: 'Nutritious Breakfast (School Provided)',
      titleTw: 'Anɔpa Aduane Pa (Sukuu no Ma)',
      category: 'meals',
      badge: 'Meals Provided',
      icon: Coffee,
      descEn: 'The school provides freshly prepared, balanced hot breakfast every morning. Children eat together, developing table manners, independence, and social bonding.',
      descTw: 'Sukuu no nsa ano na wɔnoa anɔpa aduane a ahoɔden wom ma mmofra no nyinaa ansa na adesua afiri ase.',
      highlight: true,
      highlightColor: 'orange',
    },
    {
      time: '8:00 AM',
      titleEn: 'Morning Assembly & Community Devotion',
      titleTw: 'Anɔpa Nhyiamu & Mpaebɔ',
      category: 'routine',
      badge: 'Community',
      icon: Smile,
      descEn: 'Children and educators gather for community singing, values of grace and courtesy, national and school anthems, and moral guidance.',
      descTw: 'Mmofra ne akyerɛkyerɛfoɔ hyia to dwom, bɔ mpaeɛ, na wosua suban pa ne obu a ɛsɛ sɛ wɔda no adi kyerɛ afoforɔ.',
      highlight: false,
    },
    {
      time: '8:30 AM',
      titleEn: 'Morning Refreshment & Hydration Break',
      titleTw: 'Anɔpa Ahomgye (Simma 30)',
      category: 'routine',
      badge: '30-Min Break',
      icon: Clock,
      descEn: 'A 30-minute break for washroom routines, hand washing, hydration, and gentle social interactions in a calm setting.',
      descTw: 'Mmofra no gye wɔn ahome simma 30, hohoro wɔn nsa, nom nsuo, na wɔsiesie wɔn ho ma adesua titire no.',
      highlight: false,
    },
    {
      time: '9:00 AM – 12:00 PM',
      titleEn: 'Montessori 3-Hour Uninterrupted Work Cycles & Lessons',
      titleTw: 'Montessori Adesua Titire (Dɔnhwere 3)',
      category: 'learning',
      badge: 'Core Pedagogy',
      icon: BookOpen,
      descEn: 'The hallmark of authentic Montessori. Children immerse themselves in self-chosen activities: Practical Life, Sensorial materials, Phonetics and Language, Mathematics, and Cultural discoveries under attentive educator guidance.',
      descTw: 'Mmofra no fa nsa ka nneɛma sua adeɛ dɔnhwere mmiɛnsa a obiara nntwa wɔn nsam: adekyerɛ, nkontabuo, kasa, ne amammerɛ.',
      highlight: true,
      highlightColor: 'lemon',
    },
    {
      time: '12:00 PM',
      titleEn: 'Nutritious Hot Lunch (School Provided)',
      titleTw: 'Awia Aduane a Ɛyɛ Dɛ (Sukuu no Ma)',
      category: 'meals',
      badge: 'Meals Provided',
      icon: Utensils,
      descEn: 'Wholesome, freshly cooked hot lunch provided on campus by our dedicated culinary team. Balanced Ghanaian and continental dishes designed for growing young minds.',
      descTw: 'Awia aduane pa a ahoɔden wom a sukuu no noa wɔ beaeɛ a ahotew wom ma mmofra no nyinaa didi mee.',
      highlight: true,
      highlightColor: 'orange',
    },
    {
      time: '2:00 PM',
      titleEn: 'Afternoon Transition, Rest & Storytelling',
      titleTw: 'Awia Ahomgye & Anansesɛm',
      category: 'learning',
      badge: 'Rest & Care',
      icon: Moon,
      descEn: 'Peaceful transition period. Crèche and younger learners enjoy hygienic floor cot naps, while older kindergarteners participate in storytelling, library reading, and expressive arts.',
      descTw: 'Mmofra nketewa no da ahomegyeɛ beaeɛ pa, na mmofra akeseɛ no tie anansesɛm na wɔkenkan nwoma fɛfɛɛfɛ.',
      highlight: false,
    },
    {
      time: '3:00 PM',
      titleEn: 'Regular Closing & Daily Handoff',
      titleTw: 'Sukuu Pon & Awofoɔ Nsa a Wɔde Mmofra Hyɛ Mu',
      category: 'routine',
      badge: 'Dismissal',
      icon: Clock,
      descEn: 'Standard school day concludes. Safe, verified pickup process where parents and authorized guardians receive daily developmental updates from classroom teachers.',
      descTw: 'Sukuu pon dɔn mmiɛnsa pɛpɛɛpɛ. Akyerɛkyerɛfoɔ de mmofra no hyɛ awofoɔ anaa wɔn a wɔwɔ tumi nsa.',
      highlight: false,
    },
    {
      time: '3:00 PM – 4:00 PM',
      titleEn: 'Extra Hours & Extended After-Care',
      titleTw: 'Akyi Mmerɛ & Nhwɛsoɔ Pa',
      category: 'aftercare',
      badge: 'Extended Care',
      icon: Heart,
      descEn: 'Supervised care for working families requiring late pickup. Learners engage in cooperative board games, outdoor gross-motor play, and structured drawing.',
      descTw: 'Awofoɔ a adwuma sie wɔn no tumi gya wɔn mmofra ma akyerɛkyerɛfoɔ hwɛ wɔn yie kɔsi 4:00 PM.',
      highlight: false,
    },
    {
      time: 'Saturday & Sunday',
      titleEn: 'Dedicated Weekend Daycare & Family Care Support',
      titleTw: 'Memeneda & Kwasida Mmofra Nhwɛsoɔ',
      category: 'aftercare',
      badge: 'Weekend Service',
      icon: Calendar,
      descEn: 'Specialized weekend childcare provided on campus for parents with weekend work, continuous shifts, or emergency commitments. Safe, nurturing, and familiar.',
      descTw: 'Queensbury Montessori ma awofoɔ akwanya sɛ wɔde mmofra no bɛba Memeneda ne Kwasida nso ma yɛahwɛ wɔn yie.',
      highlight: true,
      highlightColor: 'lemon',
    },
  ];

  const filteredEvents = scheduleEvents.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'meals') return item.category === 'meals';
    if (activeFilter === 'learning') return item.category === 'learning';
    if (activeFilter === 'aftercare') return item.category === 'aftercare';
    return true;
  });

  return (
    <section id="daily-routine" className="py-20 bg-white dark:bg-[#070d24] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
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

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d176d] dark:text-white tracking-tight">
              {language === 'tw' ? 'Da Biara Nhyehyɛeɛ wɔ Queensbury' : 'Daily Routine & Operational Schedule'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {language === 'tw'
                ? 'Yɛn nhyehyɛeɛ ma mmofra a wɔadi firi afe 0 kɔsi 6 ahobammbɔ, aduane pa (anɔpa ne awia), adesua a nteaseɛ wom, ne akyi mmerɛ nhwɛsoɔ kɔsi Memeneda ne Kwasida.'
                : 'Designed specifically for children aged 0 to 6 years. With both Breakfast and Lunch provided on-site, structured Montessori work cycles, and weekend daycare, Queensbury supports both child growth and working parents.'}
            </p>
          </div>

          {/* Quick Pillars Summary */}
          <div className="shrink-0 flex flex-wrap gap-2">
            <div className="px-4 py-2.5 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-500/20 text-xs font-bold text-[#f95716] flex items-center gap-2 shadow-sm">
              <Utensils className="w-4 h-4" />
              <span>Breakfast (7:30) & Lunch (12:00) Included</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-[#f4fae6] dark:bg-[#1a2b00]/40 border border-[#70b800]/40 text-xs font-bold text-[#4d7c0f] dark:text-[#a3e635] flex items-center gap-2 shadow-sm">
              <Calendar className="w-4 h-4" />
              <span>Sat & Sun Weekend Care Available</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar">
          {[
            { id: 'all', label: 'Complete Daily Rhythm' },
            { id: 'meals', label: 'Meals Provided (Breakfast & Lunch)' },
            { id: 'learning', label: 'Montessori Work Cycles' },
            { id: 'aftercare', label: 'After-Care & Weekend Daycare' },
          ].map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#0d176d] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-[#101b42] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((item, idx) => {
            const Icon = item.icon;
            const isOrange = item.highlightColor === 'orange';
            const isLemon = item.highlightColor === 'lemon';

            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between ${
                  isOrange
                    ? 'bg-gradient-to-br from-orange-50/80 to-white dark:from-[#1a140f] dark:to-[#101b42] border-orange-300 dark:border-orange-500/30 shadow-md ring-1 ring-orange-200 dark:ring-orange-500/20'
                    : isLemon
                      ? 'bg-gradient-to-br from-[#f7fceb] to-white dark:from-[#132007] dark:to-[#101b42] border-[#70b800]/50 dark:border-[#70b800]/30 shadow-md ring-1 ring-[#70b800]/30'
                      : 'bg-[#fafafc] dark:bg-[#101b42] border-slate-200/90 dark:border-white/10 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar: Time and Category Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                          isOrange
                            ? 'bg-[#f95716] text-white shadow-sm'
                            : isLemon
                              ? 'bg-[#70b800] text-white shadow-sm'
                              : 'bg-[#0d176d] text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-serif font-extrabold text-base sm:text-lg text-[#0d176d] dark:text-white">
                        {item.time}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isOrange
                          ? 'bg-[#f95716]/10 text-[#f95716] border border-[#f95716]/20'
                          : isLemon
                            ? 'bg-[#70b800]/15 text-[#4d7c0f] dark:text-[#a3e635] border border-[#70b800]/30'
                            : 'bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-2 leading-snug">
                    {language === 'tw' ? item.titleTw : item.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {language === 'tw' ? item.descTw : item.descEn}
                  </p>
                </div>

                {/* Footer Indicator if highlight */}
                {item.highlight && (
                  <div
                    className={`mt-2 pt-3 border-t text-[11px] font-sans font-bold flex items-center gap-1.5 ${
                      isOrange
                        ? 'border-orange-200 dark:border-orange-500/20 text-[#f95716]'
                        : 'border-[#70b800]/30 text-[#4d7c0f] dark:text-[#a3e635]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {isOrange
                        ? 'Fully provided by Queensbury kitchen'
                        : item.time.includes('Weekend')
                          ? 'Saturday & Sunday weekend care'
                          : 'Core Montessori child development cycle'}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Operational Highlights Card */}
        <div className="mt-12 rounded-3xl p-8 bg-gradient-to-r from-[#0d176d] via-[#101b42] to-[#0a1128] text-white border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#f95716]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#70b800]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#f95716] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold mb-1">Complete School Nutrition</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Both <strong>Breakfast (7:30 AM)</strong> and <strong>Hot Lunch (12:00 PM)</strong> are freshly prepared and served daily. No morning food packing stress for parents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#70b800] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold mb-1">Saturday & Sunday Care</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Weekend daycare provided on campus in Santa Maria for parents with work shifts, retail commitments, or weekend obligations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold mb-1">Ages 0 to 6 Years Dedicated</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Crèche, Nursery, and Kindergarten (highest level). 100% of our campus facilities and certified staff are devoted exclusively to early childhood foundation.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
