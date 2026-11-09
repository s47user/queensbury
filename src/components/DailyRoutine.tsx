import React from 'react';
import { Clock, Sun, Coffee, BookOpen, Utensils, Heart, Home, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DailyRoutine: React.FC = () => {
  const { language } = useLanguage();

  const scheduleItems = [
    {
      time: '7:00 AM',
      period: 'Morning Gate',
      title: 'Arrival & Welcoming Gate',
      description:
        'Gates open promptly at our Santa Maria campus. Children are greeted warmly by name, practice hanging their bags and changing into comfortable indoor shoes, fostering immediate morning independence.',
      icon: Sun,
      highlight: 'Independence Practice',
    },
    {
      time: '7:30 AM',
      period: 'Breakfast',
      title: 'Wholesome Morning Breakfast',
      description:
        'A warm, balanced breakfast served family-style. Children practice pouring their own water and cleaning up their placemats, reinforcing practical life skills.',
      icon: Coffee,
      highlight: 'Self-Care & Nutrition',
    },
    {
      time: '8:00 AM',
      period: 'Assembly & Circle',
      title: 'Morning Gathering & Montessori Work Cycle',
      description:
        'Gathering for songs, community devotion, and calendar discussion, followed by the core 2.5-hour uninterrupted Montessori work cycle with sensorial and mathematical materials.',
      icon: BookOpen,
      highlight: 'Core Work Period',
    },
    {
      time: '12:00 PM',
      period: 'Nutrition',
      title: 'Nutritious Hot Lunch & Rest',
      description:
        'Freshly prepared hot balanced lunch featuring wholesome local and international favorites, followed by quiet story time, digestion, and restorative nap time for younger children.',
      icon: Utensils,
      highlight: 'Family-Style Dining',
    },
    {
      time: '3:00 PM',
      period: 'Closing',
      title: 'Regular School Closing & Pick-Up',
      description:
        'Closing reflections, singing, and packing of belongings. Orderly gate dismissal begins for parents and authorized guardians with security verification.',
      icon: Home,
      highlight: 'Dismissal Cycle',
    },
    {
      time: '4:00 PM',
      period: 'Extended Care',
      title: 'Supervised After-Care & Quiet Play',
      description:
        'Extended supervised care for working parents until 4:00 PM, featuring guided board games, outdoor courtyard play, drawing, and gentle teacher companionship.',
      icon: Heart,
      highlight: 'Working Parent Support',
    },
  ];

  return (
    <section id="routine" className="py-16 bg-[#fafafc] dark:bg-[#0a1128] border-b border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-sans uppercase tracking-widest text-[#f95716] font-bold mb-2">
            {language === 'tw' ? 'DA BIARA NHYEHYƐEƐ • SANTA MARIA' : 'THE DAILY RHYTHM • PREDICTABLE, CALM STRUCTURE'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d176d] dark:text-white font-bold tracking-tight leading-tight">
            {language === 'tw' ? 'Da Biara Nhyehyɛeɛ a Ɛma Abofra Ahotɔ' : 'A day shaped by rhythm, joy, and purposeful focus.'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            {language === 'tw'
              ? 'Mmofra nketewa pɛ nhyehyɛeɛ a ɛntutu da biara. Yɛn da biara berɛ nhyehyɛeɛ ma abofra nya kwan siesie ne ho, sua adeɛ wɔ ahotɔ mu, didi yie, na ɔgye n\'ahome.'
              : 'Young children thrive on predictability. Our daily schedule balances active physical coordination, deep individualized work cycles, shared meals, and quiet restorative moments at Queensbury Santa Maria.'}
          </p>

          <div className="mt-6 flex items-start gap-2.5 p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-500/20 text-xs text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-4 h-4 text-[#f95716] shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-900 dark:text-white">Campus Schedule Notice:</strong> Gates open at 7:00 AM sharp. Children arriving by 7:30 AM enjoy a calm breakfast transition before the 8:00 AM work cycle starts.
            </span>
          </div>
        </div>

        {/* Timeline Grid in Rising Sun Style White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 hover:border-[#f95716]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xl sm:text-2xl font-bold text-[#0d176d] dark:text-amber-400">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-[#f95716] font-bold bg-[#f95716]/10 px-2.5 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-2 group-hover:text-[#f95716] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                  <span>{item.highlight}</span>
                  <Icon className="w-4 h-4 text-[#f95716]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
