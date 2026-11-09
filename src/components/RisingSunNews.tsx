import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RisingSunNewsProps {
  onNavigateToNews?: () => void;
}

export const RisingSunNews: React.FC<RisingSunNewsProps> = ({ onNavigateToNews }) => {
  const { language } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      badge: 'CAMPUS UPDATE',
      date: 'October 12, 2024',
      dateTw: 'October 12, 2024',
      titleEn: 'Queensbury Montessori Enhances Botanical Sensory Garden & Outdoor Discovery Space',
      titleTw: 'Queensbury Montessori Siesiee Nhwiren & Nsa ano Mfikyifuo Foforɔ Wɔ Santa Maria',
      snippetEn:
        'Our outdoor courtyard now features indigenous fruit trees, tactile herb beds, and a gross-motor play balance track designed for natural motor development.',
      snippetTw:
        'Yɛasiesie yɛn agoprama no na yɛadua nneɛma fɛfɛɛfɛ a mmofra betumi asua nneɛma pii afi mu wɔ Santa Maria.',
      fullContentEn:
        'Queensbury Montessori School has unveiled its refreshed Botanical Discovery Courtyard at our Santa Maria campus. Incorporating child-height sensory flora boxes, water transfer channels, and shaded wooden benches, this outdoor space bridges classroom botany with tactile life exploration under Accra sunshine.',
      image: '/src/assets/images/gallery_botanical_garden_1793951912444.jpg',
    },
    {
      id: 2,
      badge: 'ACADEMIC MILESTONE',
      date: 'November 2, 2024',
      dateTw: 'November 2, 2024',
      titleEn: 'Term Open Classroom Observation Week Announced for Queensbury Families',
      titleTw: 'Awofoɔ Nsrahwɛ Dapɛn a Wɔbɛba Abɛhwɛ Mmofra Sukuudan Mu Dwumadi',
      snippetEn:
        '“Parents are warmly invited to sit quietly inside our 3-hour Montessori work cycles to witness their child’s natural concentration and deep self-discipline.”',
      snippetTw:
        '“Yɛto nsa frɛ awofoɔ nyinaa sɛ mommra mmɛhwɛ sɛnea mo mmofra suani wɔ ahofadie ne asomdwoeɛ mu.”',
      fullContentEn:
        'Queensbury Montessori School opens its doors for our biannual Open Classroom Observation Cycle. Parents are welcomed into the Crèche, Nursery, and Kindergarten environments for uninterrupted 45-minute observational windows to observe Montessori materials in action.',
      image: '/src/assets/images/hero_montessori_classroom_1793950102607.jpg',
    },
    {
      id: 3,
      badge: 'FACULTY & CARE',
      date: 'December 15, 2024',
      dateTw: 'December 15, 2024',
      titleEn: 'Faculty Completes Annual Pediatric First Aid & Montessori Sensorial Refresh Workshop',
      titleTw: 'Akyerɛkyerɛfoɔ Nteteeɛ Wɔ Mmofra Apɔmuden ne Akwahosan Ho',
      snippetEn:
        'Our educators and early caregivers concluded intensive pediatric wellness training to ensure paramount hygiene, child safety, and caring guidance.',
      snippetTw:
        'Yɛn akyerɛkyerɛfoɔ no anya nteteeɛ foforɔ wɔ bammbɔ ne aduro a wɔde boa mmofra ntɛm ara ho.',
      fullContentEn:
        'All Queensbury Montessori lead guides and childcare assistants have completed accredited Pediatric First Aid and Child Safeguarding certification. In accordance with our hygiene and care protocols, continuous training ensures our Santa Maria haven remains secure, clean, and serene for all learners.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="news" className="w-full bg-[#fafafc] dark:bg-[#060b24] py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header with Title and "View All ↗" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
              {language === 'tw' ? 'SANTA MARIA NSƐM FOFORƆ' : 'CAMPUS ANNOUNCEMENTS'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0d176d] dark:text-white">
              {language === 'tw' ? 'Nsɛm Foforɔ & Nkaebɔ' : 'News & School Life'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onNavigateToNews}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d176d] dark:text-amber-300 hover:text-[#f95716] transition-colors border-b border-[#0d176d]/30 dark:border-amber-400/40 hover:border-[#f95716] pb-1 w-fit group cursor-pointer"
          >
            <span>{language === 'tw' ? 'Hwɛ Nsɛm Nyinaa' : 'View All'}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(idx)}
              className="bg-white dark:bg-[#0c143d] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-indigo-500/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={article.image}
                  alt={article.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 text-[#f95716] text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                      {article.badge}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-400 font-sans">
                      {language === 'tw' ? article.dateTw : article.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#f95716] transition-colors">
                    {language === 'tw' ? article.titleTw : article.titleEn}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {language === 'tw' ? article.snippetTw : article.snippetEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center text-xs font-bold text-[#0d176d] dark:text-amber-300 uppercase tracking-wider group-hover:text-[#f95716] transition-colors">
                  <span>{language === 'tw' ? 'KENKAN PII' : 'READ MORE'}</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0c143d] text-slate-800 dark:text-slate-100 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative border border-slate-200 dark:border-indigo-500/30">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-600 dark:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 text-[#f95716] text-[11px] font-mono font-bold tracking-wider uppercase mb-3 inline-block">
              {articles[selectedArticle].badge} • {articles[selectedArticle].date}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-4">
              {language === 'tw'
                ? articles[selectedArticle].titleTw
                : articles[selectedArticle].titleEn}
            </h3>

            <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-slate-900">
              <img
                src={articles[selectedArticle].image}
                alt="News article"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6">
              {language === 'tw'
                ? articles[selectedArticle].snippetTw
                : articles[selectedArticle].fullContentEn}
            </p>

            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="px-6 py-3 rounded-full bg-[#0d176d] dark:bg-[#1a2894] hover:bg-[#132087] dark:hover:bg-[#2537c7] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              {language === 'tw' ? 'To Mu' : 'Close Article'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
