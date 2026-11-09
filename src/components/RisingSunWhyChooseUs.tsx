import React, { useState } from 'react';
import { ArrowUpRight, Play, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface RisingSunWhyChooseUsProps {
  onOpenVideo?: () => void;
  onExploreProgrammes: () => void;
}

export const RisingSunWhyChooseUs: React.FC<RisingSunWhyChooseUsProps> = ({
  onOpenVideo,
  onExploreProgrammes,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const strengths = [
    {
      title: 'Child-Led Exploration',
      desc: 'Children select purposeful work from accessible wooden shelves, pursuing their intrinsic developmental urges under attentive guide observation.',
    },
    {
      title: 'Authentic Sensorial Foundation',
      desc: 'Concrete materials—from the pink tower to sandpaper phonetics—enable tactile hands to master abstract ideas naturally.',
    },
    {
      title: 'Pediatric Care & Hot Nutrition',
      desc: 'Freshly prepared hot balanced meals cooked on-site, dedicated hygienic sleep floor suites, and trained early childhood caregivers.',
    },
    {
      title: 'Rooted in Santa Maria Community',
      desc: 'Conveniently situated near Auntie Aku Last Stop, providing calm, safe, and dignified early learning for western Accra families.',
    },
  ];

  return (
    <section id="why-choose-us" className="w-full bg-[#fafafc] dark:bg-[#030718] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
            OUR PEDAGOGICAL STRENGTHS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d176d] dark:text-white tracking-tight">
            Why Choose Queensbury Montessori
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photography with floating badge & video play trigger */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 ring-1 ring-slate-900/10 dark:ring-white/10 aspect-[4/5]">
                <img
                  src="/assets/school/school_fb_photo_2.jpg"
                  alt="Queensbury Montessori Learner in Santa Maria"
                  className="w-full h-full object-cover"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d176d]/50 via-transparent to-transparent" />

                {/* Video Play Overlay Button */}
                <button
                  type="button"
                  onClick={() => (onOpenVideo ? onOpenVideo() : setIsPlayingVideo(!isPlayingVideo))}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  aria-label="Play Campus Video Tour"
                >
                  <div className="w-20 h-20 rounded-full bg-white/95 text-[#0d176d] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f95716] group-hover:text-white ring-8 ring-white/30">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </button>
              </div>

              {/* Floating Orange Experience Badge */}
              <div className="absolute -bottom-4 right-1 sm:-bottom-6 sm:-right-4 bg-[#f95716] text-white p-3.5 sm:p-5 rounded-2xl shadow-xl border-2 sm:border-4 border-[#fafafc] dark:border-[#060c24] flex items-center gap-3 sm:gap-4 max-w-[240px] sm:max-w-xs animate-in zoom-in-95 duration-500">
                <div className="font-serif text-2xl sm:text-4xl font-extrabold leading-none tracking-tight">
                  2020
                </div>
                <div className="text-[11px] sm:text-xs uppercase font-mono tracking-wider font-bold leading-snug">
                  Nurturing Potential in Santa Maria
                </div>
              </div>

              {/* Decorative small achievement pill */}
              <div className="absolute -top-3 left-1 sm:-top-4 sm:-left-4 bg-[#0d176d] text-white px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full shadow-lg border-2 border-white/20 flex items-center gap-1.5 sm:gap-2">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f95716]" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider">SANTA MARIA · ACCRA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote + Bullets + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Italic Quote with Orange Left Border */}
            <div className="border-l-4 border-[#f95716] pl-6 py-2 mb-8 bg-orange-50/40 dark:bg-orange-950/20 rounded-r-2xl">
              <p className="font-serif italic text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
                “Queensbury Montessori School offers a nurturing sanctuary where each child’s unique potential is cultivated through self-direction, dignity, and sensorial discovery. We prepare young learners for purposeful, confident lives.”
              </p>
            </div>

            {/* Bullets with Orange Dots */}
            <div className="space-y-6 mb-10">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f95716] shrink-0 mt-2 ring-4 ring-orange-100 dark:ring-orange-950/60" />
                  <div>
                    <h4 className="font-sans font-bold text-base text-[#0d176d] dark:text-amber-300 inline mr-2">
                      {item.title}:
                    </h4>
                    <span className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Pill Button */}
            <div>
              <button
                type="button"
                onClick={onExploreProgrammes}
                className="inline-flex items-center gap-2 bg-[#0d176d] dark:bg-[#1a2894] text-white hover:bg-[#132087] dark:hover:bg-[#2537c7] px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <span>EXPLORE STAGES & ROUTINE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
