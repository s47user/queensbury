import React, { useState } from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProgrammesProps {
  onSelectProgramme: (prog: 'creche' | 'nursery' | 'kindergarten') => void;
}

export const Programmes: React.FC<ProgrammesProps> = ({ onSelectProgramme }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'creche' | 'nursery' | 'kindergarten'>('nursery');

  const programmes = {
    creche: {
      id: 'creche',
      age: '0–2 Years',
      subtitle: 'The Nurturing Nest',
      title: 'Crèche & Infant Discovery',
      tagline: 'A gentle, safe environment of sensory exploration, physical movement, and warm individual bonding.',
      description:
        'Our Santa Maria Crèche environment is thoughtfully prepared for babies and toddlers taking their earliest steps into the world. Low wooden floor beds, grasping toys, tactile sensory fabrics, and attentive caregivers create an atmosphere of peaceful, secure attachment.',
      features: [
        'Dedicated caregiver-to-infant ratio ensuring responsive, unhurried care',
        'Natural wooden grasping materials, mobile objects, and tactile textures',
        'Gentle motor freedom: floor mats for rolling, crawling, and pulling up',
        'Daily rhythm respecting individual infant sleep, feeding, and awake cycles',
        'Warm communication and language immersion through singing and storytelling',
      ],
      schedule: '7:00 AM – 3:00 PM (After-care until 4:00 PM)',
      image: '/assets/school/school_fb_photo_10.jpg',
      imageAlt: 'Crèche toddler exploring color sensory spheres guided by early educators at Queensbury Montessori',
      status: 'Admissions Open (Limited infant spaces)',
    },
    nursery: {
      id: 'nursery',
      age: '2–4 Years',
      subtitle: 'Early Explorers',
      title: 'Montessori Nursery',
      tagline: 'Fostering practical independence, language refinement, and cooperative play.',
      description:
        'The Nursery environment meets the child during the sensitive period for language, order, and physical movement. Children engage joyfully in practical life exercises—pouring, buttoning, sweeping—and develop the concentration required for advanced mathematical and phonetic concepts.',
      features: [
        'Hands-on Practical Life: pouring, sorting, folding, and self-care',
        'Sensorial Apparatus: Pink Tower, Brown Stair, and Cylinder Blocks',
        'Phonetic language immersion with sandpaper letters and storytelling',
        'Social grace and courtesy: greeting peers, taking turns, peaceful conflict resolution',
        'Daily assembly, music, rhythmic movement, and outdoor discovery',
      ],
      schedule: '7:00 AM – 3:00 PM (After-care until 4:00 PM)',
      image: '/assets/school/school_fb_photo_9.jpg',
      imageAlt: 'Young learner demonstrating practical life water pouring and balance at Queensbury Montessori',
      status: 'Rolling Admissions (Subject to space availability)',
    },
    kindergarten: {
      id: 'kindergarten',
      age: '4–6 Years',
      subtitle: 'Confident Thinkers',
      title: 'Montessori Kindergarten (KG1 & KG2)',
      tagline: 'Bridging concrete sensorial understanding to abstract literacy, mathematics, and science.',
      description:
        'In the Kindergarten years, children blossom into self-assured, empathetic leaders. They master multi-digit decimal math through Golden Beads, decode complex words with the Moveable Alphabet, and investigate botany, geography, and world cultures with boundless enthusiasm.',
      features: [
        'Advanced Mathematics: Golden Bead material, Stamp Game, and multiplication boards',
        'Early Literacy: moveable alphabet, word building, expressive reading and creative writing',
        'Cultural & Natural Sciences: puzzle maps, animal classification, plant care, weather cycles',
        'Leadership & Mentorship: helping younger peers and collaborating in group projects',
        'Comprehensive preparation for seamless transition into primary school',
      ],
      schedule: '7:00 AM – 3:00 PM (After-care until 4:00 PM)',
      image: '/assets/school/school_fb_photo_15.jpg',
      imageAlt: 'Graduating Kindergarten scholars in royal blue gowns and ceremonial kente stoles',
      status: 'Enrolling for Upcoming Academic Term',
    },
  };

  const current = programmes[activeTab];

  return (
    <section id="stages-curriculum" className="py-12 bg-[#fafafc] dark:bg-[#0a1128] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programme Selection Segmented Tabs in Rising Sun Pill Aesthetic */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-[#101b42] rounded-2xl max-w-xl mb-10 border border-slate-200 dark:border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('creche')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
              activeTab === 'creche'
                ? 'bg-[#0d176d] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            {language === 'tw' ? 'Crèche (0–2 yrs)' : 'Crèche & Daycare (0–2 yrs)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nursery')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
              activeTab === 'nursery'
                ? 'bg-[#0d176d] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            {language === 'tw' ? 'Nursery (2–4 yrs)' : 'Montessori Nursery (2–4 yrs)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kindergarten')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
              activeTab === 'kindergarten'
                ? 'bg-[#0d176d] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            {language === 'tw' ? 'Kindergarten (4–6 yrs)' : 'Kindergarten (4–6 yrs)'}
          </button>
        </div>

        {/* Selected Programme Display Card in High-End White Frame */}
        <div className="bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />

          {/* Content Left */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#f95716] font-bold mb-2">
                <span>{current.subtitle}</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
                <span className="text-slate-600 dark:text-slate-400 font-semibold">{current.age}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d176d] dark:text-white mb-3">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-amber-700 dark:text-amber-300 font-medium mb-4">
                “{current.tagline}”
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
                {current.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-3 mb-8">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-[#f95716] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Schedule */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <Clock className="w-4 h-4 text-[#f95716]" />
                <span><strong className="text-slate-900 dark:text-white">Schedule:</strong> {current.schedule}</span>
              </div>
              <button
                onClick={() => onSelectProgramme(activeTab)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0d176d] hover:bg-[#f95716] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{language === 'tw' ? 'Bisa Sukuu Yi Ho Asɛm' : `Inquire for ${current.title}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Photography Right */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full bg-slate-100">
            <img
              src={current.image}
              alt={current.imageAlt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-[#101b42]/90 backdrop-blur-md rounded-2xl border border-white/60 dark:border-white/10 shadow-xl">
              <div className="font-serif font-bold text-[#0d176d] dark:text-white text-sm">
                {current.title}
              </div>
              <div className="text-[11px] text-[#f95716] font-sans font-bold mt-0.5">
                {current.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
