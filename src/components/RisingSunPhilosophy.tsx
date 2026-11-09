import React from 'react';
import { Brain, Heart, Users, Compass, Calendar, ArrowUpRight } from 'lucide-react';

interface RisingSunPhilosophyProps {
  onOpenCalendar: () => void;
}

export const RisingSunPhilosophy: React.FC<RisingSunPhilosophyProps> = ({ onOpenCalendar }) => {
  const items = [
    {
      icon: Brain,
      title: 'Personalized Learning',
      desc: 'We tailor our Montessori approach to each child\'s unique learning style, promoting individual growth, independent inquiry, and authentic confidence.',
    },
    {
      icon: Heart,
      title: 'Nurturing Environment',
      desc: 'We provide a safe, supportive, and stimulating environment where children can thrive emotionally, socially, and academically without anxiety.',
    },
    {
      icon: Users,
      title: 'Experienced Educators',
      desc: 'Our dedicated teachers are internationally certified and deeply committed to fostering creativity, curiosity, and a lifelong passion for discovery.',
    },
    {
      icon: Compass,
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
    <section id="philosophy" className="w-full bg-[#fafafc] dark:bg-[#060b24] py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono">
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
              {items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative sm:pl-12 flex items-start group">
                    {/* Orange timeline dot */}
                    <div className="hidden sm:flex absolute left-2.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f95716] ring-4 ring-orange-100 dark:ring-orange-950/60 items-center justify-center transition-transform group-hover:scale-125" />

                    {/* Card */}
                    <div className="w-full bg-white dark:bg-[#0c143d] rounded-3xl border border-slate-200/90 dark:border-indigo-500/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group-hover:-translate-y-1">
                      {/* Left navy icon block */}
                      <div className="sm:w-44 bg-[#0d176d] p-8 flex items-center justify-center shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#f95716] ring-1 ring-white/15">
                          <IconComponent className="w-8 h-8" strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Right text body */}
                      <div className="p-8 sm:p-9 flex-1 relative overflow-hidden flex flex-col justify-center">
                        {/* Faint watermark icon */}
                        <IconComponent
                          className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-100 dark:text-white/5 opacity-60 pointer-events-none"
                          strokeWidth={1}
                        />

                        <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white mb-3 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed relative z-10">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Upcoming Events Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white dark:bg-[#0c143d] rounded-3xl p-8 border border-slate-200/80 dark:border-indigo-500/20 shadow-lg relative overflow-hidden">
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
                      <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#f95716]">
                        {evt.date.split(' ')[0]}
                      </span>
                      <span className="block font-serif text-lg font-bold leading-none mt-0.5">
                        {evt.date.split(' ')[1]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
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
                className="w-full py-3.5 px-6 rounded-full border-2 border-[#0d176d] dark:border-amber-400 text-[#0d176d] dark:text-amber-300 font-bold text-sm tracking-wider uppercase hover:bg-[#0d176d] hover:text-white dark:hover:bg-amber-400 dark:hover:text-[#060b24] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
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
