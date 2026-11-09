import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Navigation,
  MessageSquare,
  HelpCircle,
  Image as ImageIcon,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  LocateFixed,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ParentPortalFeatures: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'maps' | 'faq' | 'moments' | 'notices'>('maps');

  // Commute State
  const [startLocation, setStartLocation] = useState('Lapaz, Accra');
  const [travelMode, setTravelMode] = useState<'driving' | 'transit' | 'walking'>('driving');
  const [locating, setLocating] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const popularAreas = [
    'Santa Maria',
    'Kwashieman',
    'Sowutuom',
    'Lapaz',
    'Ablekuma',
    'Awoshie',
    'Anyaa',
    'Mallam',
    'Achimota',
  ];

  const handleUseCurrentLocation = () => {
    setLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setStartLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
          setLocating(false);
        },
        () => {
          setStartLocation('My Location');
          setLocating(false);
        },
        { timeout: 6000 }
      );
    } else {
      setStartLocation('My Location');
      setLocating(false);
    }
  };

  const handleOpenGoogleMapsDirections = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const destination = encodeURIComponent(
      'Queensbury Montessori School, Santa Maria, Auntie Aku Last Stop, Accra, Ghana'
    );
    const originParam = startLocation.trim()
      ? `&origin=${encodeURIComponent(startLocation.trim())}`
      : '&origin=My+Location';
    const modeParam = travelMode ? `&travelmode=${travelMode}` : '';

    const url = `https://www.google.com/maps/dir/?api=1${originParam}&destination=${destination}${modeParam}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const parentFaqs = [
    {
      question: 'How can we encourage morning independence so dressing is less frustrating?',
      answer:
        'Place 2 pre-selected weather-appropriate outfits on a low, child-accessible hook or shelf the night before. Use velcro or slip-on shoes. Allow 10 extra unhurried minutes in the morning so your child can practice pulling on socks and fastening shoes without being rushed.',
      topic: 'Independence & Daily Routine',
    },
    {
      question: 'My 3-year-old struggles to share toys and gets frustrated. How does Montessori handle this?',
      answer:
        'In true Montessori environments, children are not forced to share an active work item mid-activity. Instead, each child has protected focus until they are finished and return the material to the shelf. At home, give your child an area for their special belongings and encourage taking turns naturally rather than sudden snatching.',
      topic: 'Emotional Regulation & Sharing',
    },
    {
      question: 'When is a child ready for toilet learning in Crèche / Nursery?',
      answer:
        'Signs of readiness include staying dry for 2 hours, showing curiosity when adults use the bathroom, and being able to pull pants down independently. We partner closely with parents during this transition using gentle consistency, low stools, and comfortable clothing without pressure.',
      topic: 'Self-Care & Potty Transition',
    },
    {
      question: 'How do you support children experiencing separation anxiety during drop-off?',
      answer:
        'Predictable, warm, and brief goodbyes work best. A consistent ritual—a warm hug, saying "I will see you at 3:00 PM after fruit time," and confident hand-off to the teacher—builds trust. Lingering or sneaking away increases anxiety. Our caregivers stay close to comfort and engage the child immediately.',
      topic: 'School Transition & Attachment',
    },
    {
      question: 'What should be packed for snacks and hydration at school?',
      answer:
        'We encourage wholesome, fresh foods: peeled fruits (pawpaw, watermelon, sweet banana), boiled eggs, small whole-wheat sandwiches, and reusable water bottles. We avoid sweetened packaged drinks or processed candies to support steady focus and balanced energy throughout the day.',
      topic: 'Nutrition & Health',
    },
  ];

  const classroomMoments = [
    {
      title: 'Practical Life & Independence',
      description: 'Care of self and environment: pouring water, spooning grains, and buttoning frames.',
      image: '/src/assets/images/programme_nursery_practical_1793950102981.jpg',
      stage: 'Nursery (2–4 Years)',
    },
    {
      title: 'Sensorial Dimension & Geometry',
      description: 'Exploring dimension, tactile weight, and geometric forms using wooden Montessori apparatus.',
      image: '/assets/school/school_fb_photo_1.jpg',
      stage: 'Kindergarten (4–6 Years)',
    },
    {
      title: 'Outdoor Exploration & Social Play',
      description: 'Courtyard movement, sand play, gross motor coordination, and cooperative communication.',
      image: '/assets/school/school_fb_photo_2.jpg',
      stage: 'All Stages',
    },
    {
      title: 'Language & Phonetic Sandpaper Letters',
      description: 'Tracing tactile letters with fingertips while pronouncing pure phonetic sounds.',
      image: '/assets/school/school_fb_photo_3.jpg',
      stage: 'Preschool & Kindergarten',
    },
  ];

  return (
    <section id="parent-portal" className="py-12 bg-[#fafafc] dark:bg-[#0a1128] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-sans uppercase tracking-widest text-[#f95716] font-bold mb-2">
            PARENT RESOURCES & CAMPUS TOOLS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0d176d] dark:text-white font-bold tracking-tight leading-tight">
            Practical resources to support your family’s journey.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Plan your morning commute with live Google Maps directions, consult early childhood guidelines, explore classroom moments, and view term notices.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#101b42] rounded-2xl max-w-3xl mb-8 border border-slate-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab('maps')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'maps'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Navigation className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Maps & Commute Directions</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Montessori Home FAQs</span>
          </button>

          <button
            onClick={() => setActiveTab('moments')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'moments'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Classroom Moments</span>
          </button>

          <button
            onClick={() => setActiveTab('notices')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'notices'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>PTA & Term Notices</span>
          </button>
        </div>

        {/* Tab 1: Maps & Commute */}
        {activeTab === 'maps' && (
          <div className="bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                  CAMPUS COMMUTE TO SANTA MARIA
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                  Plan Your Commute to Queensbury
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                  Direct navigation to our Santa Maria campus (Auntie Aku Last Stop, near North Deseret Hospital).
                </p>
              </div>

              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={locating}
                className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60 dark:border-white/10"
              >
                <LocateFixed className={`w-4 h-4 text-[#f95716] ${locating ? 'animate-spin' : ''}`} />
                <span>{locating ? 'Detecting Location...' : 'Use My Current Location'}</span>
              </button>
            </div>

            <form onSubmit={handleOpenGoogleMapsDirections} className="space-y-5 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                    Your Starting Neighborhood (Accra)
                  </label>
                  <div className="relative">
                    <Compass className="w-4 h-4 text-[#f95716] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={startLocation}
                      onChange={(e) => setStartLocation(e.target.value)}
                      placeholder="e.g. Lapaz, Sowutuom, Kwashieman, Ablekuma"
                      className="w-full text-xs pl-10 pr-3 py-3 bg-slate-50 dark:bg-[#09102b] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#142052] focus:border-[#f95716] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                    Travel Mode
                  </label>
                  <select
                    value={travelMode}
                    onChange={(e) => setTravelMode(e.target.value as any)}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-[#09102b] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#142052] focus:border-[#f95716] outline-none cursor-pointer"
                  >
                    <option value="driving">🚗 Driving / School Drop-off</option>
                    <option value="transit">🚌 Public Transit (Trotro & Taxi)</option>
                    <option value="walking">🚶 Walking (Local Neighborhood)</option>
                  </select>
                </div>
              </div>

              {/* Quick Pick Areas */}
              <div>
                <span className="text-[11px] font-sans uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
                  Quick Select Starting Point:
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularAreas.map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setStartLocation(area)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                        startLocation === area
                          ? 'bg-[#0d176d] text-white border-[#0d176d]'
                          : 'bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#f95716]'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0d176d] hover:bg-[#132087] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#f95716]" />
                  <span>Open Route in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </form>

            {/* Embedded interactive map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#09102b] aspect-16/9 sm:aspect-21/9 shadow-inner relative">
              <iframe
                title="Queensbury Montessori School Location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Queensbury+Montessori+School+Santa+Maria+Accra+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Montessori Home FAQs */}
        {activeTab === 'faq' && (
          <div className="bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                  MONTESSORI EARLY CHILDHOOD GUIDANCE
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                  Practical Parenting at Home
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                  Common questions regarding toddler development, toilet learning, morning independence, and positive discipline.
                </p>
              </div>

              <a
                href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori%20Admissions%2C%20I%20have%20a%20question%20about%20early%20childhood%20development%20and%20enrollment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Ask on WhatsApp (024 113 3632)</span>
              </a>
            </div>

            <div className="space-y-3 max-w-4xl">
              {parentFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#09102b] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-wider text-[#f95716] font-bold block mb-1">
                          {faq.topic}
                        </span>
                        <h4 className="font-serif text-base font-bold text-[#0d176d] dark:text-white">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="p-1 rounded-full bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 shrink-0 mt-1">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-white/5 font-sans">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Classroom Moments Photo Showcase */}
        {activeTab === 'moments' && (
          <div className="bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                DISCOVERY IN ACTION
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                Daily Classroom Learning Moments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                Photographs from our prepared environments in Santa Maria showing hands-on Montessori materials, practical life exercises, and collaborative play.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classroomMoments.map((moment, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] flex flex-col justify-between"
                >
                  <div className="aspect-16/10 overflow-hidden relative">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0d176d]/90 backdrop-blur-md text-white text-[10px] font-sans uppercase font-bold tracking-wider">
                      {moment.stage}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-1">
                      {moment.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {moment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Parent Notices & PTA */}
        {activeTab === 'notices' && (
          <div className="bg-white dark:bg-[#101b42] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                COMMUNITY BULLETIN · SANTA MARIA
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                Parent-Teacher Association & Term Updates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                Direct bulletins for current families regarding academic milestones, health notices, and PTA assemblies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#09102b] border border-slate-100 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-[#0d176d] dark:text-white text-base">
                    Uniform & Footwear Guidelines
                  </h4>
                  <span className="text-[11px] font-sans text-[#f95716] uppercase font-bold bg-[#f95716]/10 px-2.5 py-1 rounded-full">
                    Notice 01
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Please ensure children wear comfortable velcro or slip-on shoes so they can independently practice putting on and taking off footwear each morning.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#09102b] border border-slate-100 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-[#0d176d] dark:text-white text-base">
                    PTA General Meeting & Progress Review
                  </h4>
                  <span className="text-[11px] font-sans text-[#0d176d] dark:text-blue-300 uppercase font-bold bg-blue-100 dark:bg-blue-950/60 px-2.5 py-1 rounded-full">
                    Notice 02
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Our termly parent-teacher gathering takes place on campus. Meet with class educators, review portfolio milestones, and discuss term activities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#09102b] border border-slate-100 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-[#0d176d] dark:text-white text-base">
                    Healthy Lunch & Fruit Break Reminder
                  </h4>
                  <span className="text-[11px] font-sans text-emerald-700 dark:text-emerald-300 uppercase font-bold bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                    Notice 03
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Fresh fruits and water are shared during mid-morning break. Hot nutritious lunches are freshly prepared daily in our clean campus kitchen.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
