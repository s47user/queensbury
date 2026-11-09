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
      image: '/src/assets/images/hero_montessori_classroom_1793950102607.jpg',
      headline: 'Where Curious Minds Grow into Lifelong Explorers',
      subheadline:
        'An authentic, child-centred Montessori sanctuary in Santa Maria, Auntie Aku, Accra. Nurturing independence, creativity, and purposeful early childhood growth.',
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop',
      headline: 'Empowering Inquisitive Minds with Hands-On Apparatus',
      subheadline:
        'From Crèche through Kindergarten, children explore self-paced discovery in child-scaled prepared environments tailored to their sensitive developmental windows.',
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
      headline: 'Rooted in Santa Maria: Dignity, Grace & Character',
      subheadline:
        'Serving families across Santa Maria, Kwashieman, Sowutuom, and Ablekuma with nutritious hot meals, safe gatekeeping, and dedicated educators.',
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
        {/* Subtle Location Capsule */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-md border border-white/20 text-white/90 text-[10px] sm:text-xs font-mono font-medium tracking-wider mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500 max-w-full text-center">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
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
