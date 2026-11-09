import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface RisingSunHeroProps {
  onOpenAdmissions: () => void;
  onExploreMore: () => void;
}

export const RisingSunHero: React.FC<RisingSunHeroProps> = ({
  onOpenAdmissions,
  onExploreMore,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/school/school_fb_photo_15.jpg',
      headline: 'Where Curious Minds Grow into Confident Scholars',
      subheadline:
        'A dedicated, child-centred Montessori school in Santa Maria (Auntie Aku Last Stop), Accra. Nurturing independence, dignity, and purposeful early childhood growth.',
    },
    {
      image: '/assets/school/school_fb_photo_9.jpg',
      headline: 'Hands-On Montessori Independence from the Earliest Years',
      subheadline:
        'From child-scaled practical life exercises to sensorial discovery, every learner develops deep concentration and joy in purposeful work.',
    },
    {
      image: '/assets/school/school_fb_photo_13.jpg',
      headline: 'Rooted in Santa Maria: Dignity, Grace & Creative Expression',
      subheadline:
        'Serving families across Santa Maria, Kwashieman, Sowutuom, and Ablekuma with nutritious meals, safe care, and dedicated educators.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-black text-center select-none">
      {/* Background Slides with Fade Transition */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={s.image}
            alt="Queensbury Montessori Prepared Environment in Santa Maria, Accra"
            className="h-full w-full object-cover brightness-[0.42] scale-105 transition-transform duration-[7000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d176d]/85 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Floating Content Box */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Subtle Location Capsule with Brand Colors */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-md border border-white/20 text-white/90 text-[10px] sm:text-xs font-sans font-medium tracking-wider mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-full text-center">
          <span className="w-2 h-2 rounded-full bg-[#f95716]" />
          <span className="w-2 h-2 rounded-full bg-[#70b800]" />
          <span className="truncate sm:whitespace-normal">SANTA MARIA · AUNTIE AKU, ACCRA · EST. 2020</span>
        </div>

        {/* Serif Big Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.14] sm:leading-[1.08] drop-shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
          {activeSlide.headline}
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 px-2 sm:px-0">
          {activeSlide.subheadline}
        </p>

        {/* Action Button Pills */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#f95716] hover:bg-[#e0480b] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Admissions</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            type="button"
            onClick={onExploreMore}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm tracking-wide backdrop-blur-md border border-white/30 transition-all duration-200 cursor-pointer"
          >
            Learn More
          </button>
        </div>

        {/* Carousel Pagination Capsule Dots */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-[#f95716]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
