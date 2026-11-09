import React, { useState } from 'react';
import {
  Sparkles,
  Trees,
  Heart,
  Maximize2,
  Eye,
  Camera,
  Layers,
  CheckCircle,
} from 'lucide-react';
import { GALLERY_ITEMS, filterGalleryItems, getCategoryCounts, GalleryPhoto } from '../utils/gallery';
import { PhotoLightbox } from './PhotoLightbox';
import { useLanguage } from '../context/LanguageContext';

export const LearningExperience: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const categories = [
    'All',
    'Nature & Garden',
    'Sensorial & Math',
    'Practical Life',
    'Creativity & Art',
    'Prepared Environment',
  ];

  const categoryCounts = getCategoryCounts(GALLERY_ITEMS);
  const filteredPhotos = filterGalleryItems(GALLERY_ITEMS, selectedCategory);

  const handleOpenLightbox = (photoId: string) => {
    const index = GALLERY_ITEMS.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setActivePhotoIndex(index);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="experience" className="py-12 bg-[#fafafc] dark:bg-[#030718] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold mb-2">
              {language === 'tw' ? 'SUKUU MFONINI AKWANKYERƐ' : 'CAMPUS ATMOSPHERE • AUTHENTIC WORK CYCLES'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0d176d] dark:text-white font-bold tracking-tight leading-tight">
              {language === 'tw' ? 'Adesua ne Ahofadie Mfonini' : 'An inspiring journey of wonder, hands-on learning, and outdoor discovery.'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {language === 'tw'
                ? 'Wɔ yɛn sukuudan pa a wɔasiesie no mu wɔ Santa Maria, mmofra no de nsa kura nneɛma mu sua adeɛ. Mia mfonini biara so na hwɛ no kɛseɛ.'
                : 'Inside our prepared classrooms and under the warm Accra sunshine, early learning unfolds through purposeful activity. Click any photograph to view our daily environment in high-resolution detail.'}
            </p>
          </div>

          {/* Quick Counter Info */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#060c24] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shadow-sm">
            <Eye className="w-4 h-4 text-[#f95716]" />
            <span>9 High-Res Moments</span>
          </div>
        </div>

        {/* Category Filter Pills in Rising Sun Pill Aesthetic */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer shadow-sm ${
                  isSelected
                    ? 'bg-[#0d176d] text-white'
                    : 'bg-white dark:bg-[#060c24] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? 'bg-[#f95716] text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${photo.title} (${photo.pillar})`}
              onClick={() => handleOpenLightbox(photo.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(photo.id);
                }
              }}
              className={`group relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 hover:border-[#f95716]/60 bg-white dark:bg-[#060c24] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f95716] ${photo.spanClass}`}
            >
              {/* Image Container with Dynamic Aspect Ratio */}
              <div className={`w-full ${photo.aspect} overflow-hidden relative`}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Dark Gradient for Legible Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                {/* Top Floating Category & Age Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[#f95716] font-mono text-[10px] uppercase tracking-wider font-bold shadow-md">
                    {photo.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 text-white/90 font-mono text-[10px]">
                    {photo.age}
                  </span>
                </div>

                {/* Hover Maximize Action Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f95716] text-white font-bold text-xs shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-1.5 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                    {photo.pillar}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 font-light leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pedagogical Ethos Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="bg-white dark:bg-[#060c24] p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 hover:border-[#f95716]/40 transition-all shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-950/50 text-[#f95716] flex items-center justify-center shrink-0">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0d176d] dark:text-white mb-2">
                Connecting with the Natural World
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                Direct engagement with organic soil, indigenous flora, natural sunlight, and fresh air grounds early nervous systems. Children learn ecological stewardship not from screens, but by tending living green garden beds in Santa Maria.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#060c24] p-7 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 hover:border-[#f95716]/40 transition-all shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-[#0d176d] dark:text-amber-300 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0d176d] dark:text-white mb-2">
                Grace, Courtesy & Empathy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                Early childhood community living teaches the foundational social habits: greeting classmates with genuine eye contact, offering help when a friend spills beads, and resolving conflicts with gentle, respectful words.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      <PhotoLightbox
        photos={GALLERY_ITEMS}
        initialIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};
