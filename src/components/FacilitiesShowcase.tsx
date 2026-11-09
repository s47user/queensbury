import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, CheckCircle2, Calendar, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Facility {
  id: string;
  name: string;
  category: 'sleep' | 'dining' | 'atelier' | 'outdoor' | 'wellness';
  tag: string;
  ageGroup: string;
  headline: string;
  description: string;
  image: string;
  highlights: string[];
  safetyProtocol: string;
}

const FACILITIES_DATA: Facility[] = [
  {
    id: 'sleep-sanctuary',
    name: 'Infant & Toddler Rest & Sleep Suite',
    category: 'sleep',
    tag: 'Rest & Care',
    ageGroup: 'Crèche & Toddlers (0–3 Years)',
    headline: 'Peaceful, light-filtered rest suites designed for natural biological rhythm.',
    description: 'Montessori early childhood recognizes rest as a foundational cornerstone of cognitive development. Our sleep suite is purposefully insulated from high-stimulation zones, featuring low wooden floor beds and ventilated wooden cots with fresh cotton bedding.',
    image: '/src/assets/images/facility_sleep_sanctuary_1793951151256.jpg',
    highlights: [
      'Low floor beds and individual solid-wood cots that preserve autonomy',
      'Continuous air circulation and soft linen blackout curtains',
      'Dedicated 1:1 caregiver watch during all nap and resting cycles',
      'Calming acoustic atmosphere and dimmable gentle warmth',
    ],
    safetyProtocol: 'Individual bedding laundered daily; zero loose cords or hazards; monitored breathing checks every 15 minutes.',
  },
  {
    id: 'dining-pavilion',
    name: 'Child-Scaled Dining & Nutrition Pavilion',
    category: 'dining',
    tag: 'Nutrition & Autonomy',
    ageGroup: 'All Learners (Crèche to KG2)',
    headline: 'Family-style communal dining where healthy habits and grace & courtesy flourish.',
    description: 'Meals at Queensbury are not rushed assemblies; they are celebrated Montessori practical life experiences. Children sit at low solid-wood tables, learn to pour water from child-sized glass pitchers, and enjoy wholesome hot meals prepared in our hygienic on-site kitchen.',
    image: '/src/assets/images/facility_dining_hall_1793951168327.jpg',
    highlights: [
      'Ergonomic low tables and chairs fostering upright posture and self-feeding',
      'Accessible drink stations with small pitchers and washable cups',
      'Daily freshly prepared Ghanaian & continental breakfast and hot lunch',
      'Table manners, communal clean-up, and peer conversation etiquette',
    ],
    safetyProtocol: 'Hygienic kitchen inspected weekly; allergen tracking per child; zero artificial preservatives in cooked meals.',
  },
  {
    id: 'practical-atelier',
    name: 'Practical Life & Sensorial Atelier',
    category: 'atelier',
    tag: 'Prepared Environment',
    ageGroup: 'Nursery & Kindergarten (2–6 Years)',
    headline: 'Authentic child-proportioned apparatus arranged on open wooden shelving.',
    description: 'Every Montessori classroom at Queensbury is a scientifically prepared environment. Children are free to select their own activities—from button frames, sweeping, and spooning, to cylinder blocks, binomial cubes, and sandpaper letters.',
    image: '/src/assets/images/programme_nursery_practical_1793950102981.jpg',
    highlights: [
      'Genuine AMI-standard solid wood materials imported for tactile precision',
      'Child-height accessible open shelving without plastic containers',
      'Dedicated quiet reading nook with rich African and global picture books',
      '3-hour uninterrupted daily work cycles promoting profound focus',
    ],
    safetyProtocol: 'Non-toxic beeswax finishes on all wooden materials; rounded corners on all furnishings; daily sanitization.',
  },
  {
    id: 'botanical-garden',
    name: 'Botanical Discovery Courtyard & Play Garden',
    category: 'outdoor',
    tag: 'Nature & Gross Motor',
    ageGroup: 'All Ages (Guided Discovery)',
    headline: 'Shaded sensory flora, raised garden beds, and safe gross-motor freedom.',
    description: 'Nature is a primary teacher in authentic Montessori pedagogy. Our Santa Maria campus courtyard features indigenous fruit trees, tactile herb beds, and a gross-motor play balance track designed for natural motor development.',
    image: '/src/assets/images/learning_outdoors_nature_1793950104302.jpg',
    highlights: [
      'Raised planting beds where children plant seeds and care for plants',
      'Shaded wooden pergolas protecting tender skin from intense midday sun',
      'Natural wooden climbing arches and balance logs for motor coordination',
      'Sensory water and sand play tables designed for physics exploration',
    ],
    safetyProtocol: 'Fully enclosed perimeter fencing with monitored access gates; impact-absorbing sand beneath climbing apparatus.',
  },
  {
    id: 'wellness-suite',
    name: 'Pediatric Care & Rest Station',
    category: 'wellness',
    tag: 'Health & First Aid',
    ageGroup: 'Campus-Wide Protection',
    headline: 'Quiet, comforting first-aid station with direct pediatric clinic coordination.',
    description: 'Parents entrust us with their most precious gift. In the event of a sudden temperature spike or minor scrape, our peaceful sick bay provides an unhurried, comfortable isolation cot with certified pediatric first-aid equipment.',
    image: '/src/assets/images/facility_wellness_sickbay_1793951183518.jpg',
    highlights: [
      'Quiet, air-conditioned resting cot separated from active classrooms',
      'Equipped first-aid medical dispensary with pediatric digital diagnostics',
      'Immediate parent notification protocol via direct phone and WhatsApp',
      'Designated medical transport link with North Deseret Hospital (Santa Maria)',
    ],
    safetyProtocol: 'Sterilised linens; mandatory temperature screening on arrival; certified paediatric CPR first-aider on staff.',
  },
];

interface FacilitiesShowcaseProps {
  onBookTour?: () => void;
}

export const FacilitiesShowcase: React.FC<FacilitiesShowcaseProps> = ({ onBookTour }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility>(FACILITIES_DATA[0]);

  const filterTabs = [
    { id: 'all', label: 'All Environments' },
    { id: 'sleep', label: 'Rest & Sleep Suite' },
    { id: 'dining', label: 'Dining Pavilion' },
    { id: 'atelier', label: 'Montessori Atelier' },
    { id: 'outdoor', label: 'Botanical Courtyard' },
    { id: 'wellness', label: 'Care & Wellness' },
  ];

  const filteredFacilities = activeTab === 'all'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === activeTab);

  return (
    <section id="campus-facilities" className="py-12 sm:py-16 md:py-24 bg-[#fafafc] dark:bg-[#030718] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
              {language === 'tw' ? 'SANTA MARIA SUKUUDAN PA' : 'PREPARED LEARNING SPACES · SANTA MARIA'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d176d] dark:text-white tracking-tight leading-tight">
              {language === 'tw'
                ? 'Sukuudan a Wɔasiesie Ma Mmofra Ahofadie'
                : 'Designed for Early Childhood Autonomy & Safety'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {language === 'tw'
                ? 'Sukuudan pa a mmofra betumi de wɔn nsa aka nneɛma na wɔasua nyansa wɔ asomdwoeɛ mu wɔ Santa Maria, Auntie Aku Last Stop nkyɛn.'
                : 'Every space at Queensbury Montessori in Santa Maria is crafted to child proportions—empowering self-direction, joyful discovery, and peaceful security.'}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onBookTour}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#0d176d] hover:bg-[#132087] text-white rounded-full transition-all shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#f95716]" />
              <span>Schedule Walkthrough</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-4 mb-10 border-b border-slate-200 dark:border-white/10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-xs font-bold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0d176d] text-white shadow-md'
                    : 'bg-white dark:bg-[#060c24] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-[#0b1540]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Featured Facility Interactive Showcase */}
        <div className="bg-white dark:bg-[#060c24] rounded-3xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 mb-14">
          {/* Main Visual Column */}
          <div className="lg:col-span-7 relative group min-h-[340px] sm:min-h-[440px] bg-slate-100 dark:bg-slate-900">
            <img
              src={selectedFacility.image}
              alt={selectedFacility.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 bg-[#f95716] text-white text-[11px] font-mono font-bold tracking-wider uppercase rounded-full">
                {selectedFacility.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-white">
                {selectedFacility.name}
              </h3>
              <p className="text-xs text-white/80 font-sans mt-0.5">
                {selectedFacility.ageGroup}
              </p>
            </div>
          </div>

          {/* Detailed Editorial Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white dark:bg-[#060c24]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                PREPARED ENVIRONMENT SPECS
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-[#0d176d] dark:text-white font-bold leading-snug mb-3">
                {selectedFacility.headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                {selectedFacility.description}
              </p>

              <div className="space-y-2.5 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  Key Environment Highlights:
                </span>
                {selectedFacility.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#f95716] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Protocol Note */}
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/10 bg-orange-50/50 dark:bg-orange-950/20 p-4 rounded-2xl border border-orange-100 dark:border-orange-500/20">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d176d] dark:text-amber-300 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#f95716]" />
                <span>Health & Safety Assurance</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {selectedFacility.safetyProtocol}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => {
            const isSelected = selectedFacility.id === fac.id;
            return (
              <div
                key={fac.id}
                onClick={() => setSelectedFacility(fac)}
                className={`cursor-pointer rounded-3xl p-5 transition-all border ${
                  isSelected
                    ? 'bg-blue-50/50 dark:bg-[#0b1540] border-[#0d176d] dark:border-amber-400 shadow-lg ring-2 ring-[#0d176d]/15'
                    : 'bg-white dark:bg-[#060c24] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md'
                }`}
              >
                <div className="aspect-16/10 rounded-2xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-900 relative">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-black/75 backdrop-blur-md text-[10px] text-white rounded-full font-mono font-bold">
                    {fac.tag}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-serif font-bold text-base text-[#0d176d] dark:text-white">
                    {fac.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#f95716] font-bold uppercase">
                    {fac.ageGroup.split('(')[0].trim()}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-300 line-clamp-2 font-light">
                  {fac.headline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verification & Visit Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0d176d] to-[#132087] text-white rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#f95716] text-white text-[10px] font-mono font-bold tracking-wider uppercase rounded-full mb-2">
              SANTA MARIA CAMPUS VISITS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Observe the Prepared Environment in Person
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/85 font-light leading-relaxed">
              Photographs convey atmosphere, but Montessori is best felt in person. Parents are warmly invited to schedule a quiet classroom observation during our morning 3-hour work cycle (9:00 AM – 11:00 AM) in Santa Maria, Accra.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onBookTour}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#f95716] hover:bg-[#e0480b] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all text-center shadow-lg cursor-pointer"
            >
              Book Campus Walkthrough
            </button>
            <a
              href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20view%20your%20campus%20facilities%20in%20Santa%20Maria."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 border border-white/30 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all text-center"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
