import React from 'react';
import { ArrowUpRight, ArrowRight, Calendar, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RisingSunNewsProps {
  onNavigateToNews: () => void;
}

export const RisingSunNews: React.FC<RisingSunNewsProps> = ({ onNavigateToNews }) => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      badge: 'CAMPUS CEREMONY',
      date: 'August 18, 2024',
      dateTw: 'August 18, 2024',
      titleEn: 'Queensbury Montessori Celebrates 1st Graduation & Speech Giving Day',
      titleTw: 'Queensbury Montessori Di Nkunim Wɔ Mmofra Nteteeɛ & Graduation Afahyɛ Mu',
      snippetEn:
        'Our Head of School commended our young learners, dedicated teachers, and parents for an inspiring year of learning, character building, and joyful milestones.',
      snippetTw:
        'Sukuu panyin no hyɛɛ awofoɔ, akyerɛkyerɛfoɔ, ne mmofra no nkuran wɔ mmɔdenmɔ kɛseɛ a wɔabɔ wɔ afe no mu.',
      fullContentEn:
        'The Santa Maria campus hosted a colorful and joyful 1st Graduation and Speech Giving Day. Faculty, parents, and community elders gathered under festive balloon arches to celebrate our learners as they stepped confidently into their next educational milestones.',
      image: '/assets/school/school_fb_photo_1.jpg',
      imageAlt: 'Queensbury Montessori Head of School speaking at the 1st Graduation ceremony',
    },
    {
      id: 2,
      badge: 'ACADEMIC MILESTONES',
      date: 'August 18, 2024',
      dateTw: 'August 18, 2024',
      titleEn: 'Graduating Learners & Faculty Cut the Milestone Celebration Cake',
      titleTw: 'Mmofra ne Akyerɛkyerɛfoɔ Twa Afahyɛ Paanoo Wɔ Sukuu No Mu',
      snippetEn:
        'Surrounded by loving teachers and families, our young learners gathered to cut the official milestone cake celebrating the completion of their early childhood cycle.',
      snippetTw:
        'Akyerɛkyerɛfoɔ ne awofoɔ hyiamu twaa afahyɛ paanoo de kyerɛɛ anigyeɛ kɛseɛ wɔ sukuu no nkabom mu.',
      fullContentEn:
        'Dressed in their ceremonial caps and traditional stoles, our young scholars united with their teachers to cut the celebratory graduation cake. The milestone represents years of nurturing care, practical life independence, and social grace.',
      image: '/assets/school/school_fb_photo_8.jpg',
      imageAlt: 'Teachers and graduating children cutting the graduation cake together',
    },
    {
      id: 3,
      badge: 'STUDENT HONOURS',
      date: 'August 18, 2024',
      dateTw: 'August 18, 2024',
      titleEn: 'Personalized Academic Citations & Certificates Awarded to Young Achievers',
      titleTw: 'Wɔde Nidi Nkrataa & Abasobɔdeɛ Ma Mmofra a Wɔabɔ Mmɔden',
      snippetEn:
        'Faculty proudly presented framed citations and achievement certificates recognizing each child’s unique virtues, perseverance, and social courtesy.',
      snippetTw:
        'Akyerɛkyerɛfoɔ no de abasobɔdeɛ nkrataa maa mmofra mmiako mmiako de hyɛɛ wɔn suban pa ne nimdeɛ anuonyam.',
      fullContentEn:
        'Each graduating child received a framed personal citation celebrating their individual growth, kindness, and developmental progress at Queensbury. The faculty emphasized that celebrating individual character reinforces lifelong confidence.',
      image: '/assets/school/school_fb_photo_5.jpg',
      imageAlt: 'Queensbury Montessori teacher presenting a framed graduation citation to a student',
    },
  ];

  return (
    <section id="news" className="w-full bg-[#fafafc] dark:bg-[#0a1128] py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header with Title and "View All ↗" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans block mb-2">
              {language === 'tw' ? 'SANTA MARIA NSƐM FOFORƆ' : 'CAMPUS ANNOUNCEMENTS & NEWS'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0d176d] dark:text-white">
              {language === 'tw' ? 'Sukuu No Nsɛm & Afahyɛ' : 'Life & Milestones at Queensbury'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onNavigateToNews}
            className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-wider text-[#0d176d] dark:text-amber-400 hover:text-[#f95716] uppercase transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>{language === 'tw' ? 'Hwɛ Nsɛm Nyinaa' : 'View All Campus News'}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 3-Card News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-[#101b42] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-200/80 dark:border-white/10 flex flex-col group cursor-pointer"
              onClick={onNavigateToNews}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#09102b]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0d176d]/90 backdrop-blur-md text-white text-[10px] font-sans font-bold uppercase tracking-wider border border-white/20">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-sans mb-3 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#f95716]" />
                    <span>{language === 'tw' ? item.dateTw : item.date}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d176d] dark:text-white leading-snug tracking-tight mb-3 group-hover:text-[#f95716] transition-colors">
                    {language === 'tw' ? item.titleTw : item.titleEn}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                    {language === 'tw' ? item.snippetTw : item.snippetEn}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-xs font-sans font-bold text-[#f95716] uppercase tracking-wider group-hover:text-[#e0480b] transition-colors">
                  <span>{language === 'tw' ? 'Kenkan Bio' : 'Read Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
