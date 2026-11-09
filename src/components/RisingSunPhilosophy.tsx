import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface RisingSunPhilosophyProps {
  onOpenCalendar: () => void;
}

export const RisingSunPhilosophy: React.FC<RisingSunPhilosophyProps> = ({ onOpenCalendar }) => {
  const items = [
    {
      title: 'Personalized Learning',
      desc: 'We tailor our Montessori approach to each child\'s unique learning style, promoting individual growth, independent inquiry, and authentic confidence.',
    },
    {
      title: 'Nurturing Environment',
      desc: 'We provide a safe, supportive, and stimulating environment where children can thrive emotionally, socially, and academically without anxiety.',
    },
    {
      title: 'Experienced Educators',
      desc: 'Our dedicated teachers are internationally certified and deeply committed to fostering creativity, curiosity, and a lifelong passion for discovery.',
    },
    {
      title: 'Holistic Development',
      desc: 'We focus on developing both robust academic foundations and essential character virtues, preparing every child for purposeful global citizenship.',
    },
  ];

  const upcomingEvents = [
    {
      date: 'MAY 18',
      title: 'Montessori Open Classroom Day',
      type: 'Campus Event',
    },
    {
      date: 'JUN 04',
      title: 'Annual Speech & Prize Giving Day',
      type: 'Academic Milestone',
    },
    {
      date: 'JUL 12',
      title: 'STEM & Cultural Arts Exhibition',
      type: 'Showcase',
    },
  ];

  return (
    <section id="philosophy" className="w-full bg-[#fafafc] dark:bg-[#0a1128] py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans">
            OUR PHILOSOPHY
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d176d] dark:text-white tracking-tight leading-tight">
            A foundation built on holistic development.
          </h2>
        </div>

        {/* Two Column Layout: Timeline vs Sticky Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Timeline items */}
          <div className="lg:col-span-8 relative">
            {/* Vertical timeline line */}
            <div className="hidden sm:block absolute left-4 top-8 bottom-12 w-0.5 bg-orange-200/70 dark:bg-orange-500/30" />

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

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Upcoming Events Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white dark:bg-[#101b42] rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 shadow-lg relative overflow-hidden">
              {/* Card top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f95716]" />

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-[#f95716] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white tracking-tight">
                  Upcoming events
                </h3>
              </div>

              {/* Event items list */}
              <div className="space-y-4 mb-8">
                {upcomingEvents.map((evt, eIdx) => (
                  <div
                    key={eIdx}
                    className="p-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-white/5 flex items-start gap-4"
                  >
                    <div className="px-3 py-2 rounded-xl bg-[#0d176d] text-white text-center shrink-0">
                      <span className="block font-sans text-xs font-bold uppercase tracking-wider text-[#f95716]">
                        {evt.date.split(' ')[0]}
                      </span>
                      <span className="block font-serif text-lg font-bold leading-none mt-0.5">
                        {evt.date.split(' ')[1]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-sans uppercase tracking-wider text-slate-400 block mb-0.5">
                        {evt.type}
                      </span>
                      <h4 className="font-sans font-semibold text-sm text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {evt.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Calendar Button */}
              <button
                type="button"
                onClick={onOpenCalendar}
                className="w-full py-3.5 px-6 rounded-full border-2 border-[#0d176d] dark:border-amber-400 text-[#0d176d] dark:text-amber-300 font-bold text-sm tracking-wider uppercase hover:bg-[#0d176d] hover:text-white dark:hover:bg-amber-400 dark:hover:text-[#0a1128] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>VIEW CALENDAR</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
