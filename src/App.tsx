import React, { useState, useEffect } from 'react';
import { RisingSunNavbar } from './components/RisingSunNavbar';
import { RisingSunHero } from './components/RisingSunHero';
import { RisingSunStats } from './components/RisingSunStats';
import { RisingSunPhilosophy } from './components/RisingSunPhilosophy';
import { RisingSunCampuses } from './components/RisingSunCampuses';
import { RisingSunWhyChooseUs } from './components/RisingSunWhyChooseUs';
import { RisingSunNews } from './components/RisingSunNews';
import { RisingSunTestimonials } from './components/RisingSunTestimonials';
import { RisingSunAdmissions } from './components/RisingSunAdmissions';
import { RisingSunFooter } from './components/RisingSunFooter';
import { CampusTourModal } from './components/CampusTourModal';
import { FacilitiesShowcase } from './components/FacilitiesShowcase';
import { LearningExperience } from './components/LearningExperience';
import { Programmes } from './components/Programmes';
import { DailyRoutine } from './components/DailyRoutine';
import { MealsCareWellbeing } from './components/MealsCareWellbeing';
import { UpcomingEvents } from './components/UpcomingEvents';
import { ParentPortalFeatures } from './components/ParentPortalFeatures';
import { LocationContact } from './components/LocationContact';
import { ThreeDMaterialViewer } from './components/ThreeDMaterialViewer';
import { WelcomeAbout } from './components/WelcomeAbout';
import { MontessoriPhilosophy } from './components/MontessoriPhilosophy';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { MessageCircle, ArrowUp, Play, X } from 'lucide-react';

export type PageId =
  | 'home'
  | 'philosophy'
  | 'about'
  | 'programmes'
  | 'facilities'
  | 'branches'
  | 'gallery'
  | 'news'
  | 'calendar'
  | 'contact'
  | 'admissions';

function QueensburyMainApp() {
  const { isDark } = useTheme();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedBranchForTour, setSelectedBranchForTour] = useState('Santa Maria Campus');

  // Sync hash routing for direct access (#/admissions, #/about, #/facilities, etc.)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'philosophy',
        'about',
        'programmes',
        'facilities',
        'branches',
        'gallery',
        'news',
        'calendar',
        'contact',
        'admissions',
      ];
      if (validPages.includes(hash as PageId)) {
        // Map legacy aliases
        let target: PageId = hash as PageId;
        if (hash === 'branches' || hash === 'gallery') target = 'facilities';
        if (hash === 'philosophy') target = 'about';
        if (hash === 'calendar') target = 'news';
        setCurrentPage(target);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '') {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const navigateTo = (page: string) => {
    const validPages: PageId[] = [
      'home',
      'philosophy',
      'about',
      'programmes',
      'facilities',
      'branches',
      'gallery',
      'news',
      'calendar',
      'contact',
      'admissions',
    ];
    let target = validPages.includes(page as PageId) ? (page as PageId) : 'home';
    if (target === 'branches' || target === 'gallery') target = 'facilities';
    if (target === 'philosophy') target = 'about';
    if (target === 'calendar') target = 'news';
    setCurrentPage(target);
    window.location.hash = target === 'home' ? '' : `#/${target}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBookTourForBranch = (branchName: string) => {
    setSelectedBranchForTour(branchName);
    setIsTourModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'bg-[#030718] text-slate-100' : 'bg-[#fafafc] text-slate-800'
      } selection:bg-[#f95716] selection:text-white flex flex-col justify-between transition-colors duration-300`}
    >
      {/* Floating Pill Navbar with Crest, Links & Apply Button */}
      <RisingSunNavbar
        activePage={currentPage === 'branches' ? 'facilities' : currentPage}
        onNavigate={navigateTo}
        onOpenAdmissions={() => navigateTo('admissions')}
      />

      {/* Main Routed Page Content */}
      <main className="w-full flex-1">
        {/* HOME VIEW: EXACT REPLICA OF THE ARCHITECTURE WITH REAL QUEENSBURY SANTA MARIA INFO */}
        {currentPage === 'home' && (
          <div className="space-y-0 animate-in fade-in duration-300">
            {/* 1. Full-bleed Dark Carousel Hero with Headline & Dual Action Pills */}
            <RisingSunHero
              onOpenAdmissions={() => navigateTo('admissions')}
              onExploreMore={() => navigateTo('about')}
            />

            {/* 2. Deep Navy Stats Strip with Divider Columns */}
            <RisingSunStats />

            {/* 3. Our Philosophy Vertical Timeline with Sticky Upcoming Events Card */}
            <RisingSunPhilosophy
              onOpenCalendar={() => navigateTo('calendar')}
            />

            {/* 4. Prepared Environments & Learning Spaces */}
            <RisingSunCampuses
              onNavigateToBranches={() => navigateTo('facilities')}
              onSelectBranch={() => {
                navigateTo('facilities');
              }}
            />

            {/* 5. Why Choose Us with Portrait Photo, Floating Orange Badge, Italic Quote & Bullets */}
            <RisingSunWhyChooseUs
              onOpenVideo={() => setIsVideoModalOpen(true)}
              onExploreProgrammes={() => navigateTo('programmes')}
            />

            {/* 6. News & Announcements 3-Card Grid */}
            <RisingSunNews
              onNavigateToNews={() => navigateTo('news')}
            />

            {/* 7. What Families Say Navy Testimonials with Real Community Tags */}
            <RisingSunTestimonials />
          </div>
        )}

        {/* ABOUT & PHILOSOPHY VIEW (CONSOLIDATED) */}
        {(currentPage === 'about' || currentPage === 'philosophy') && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
                  OUR HERITAGE & MISSION · EST. 2020
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Inspiring Independence, Dignity & Discovery.
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Founded in 2020 in Santa Maria, Auntie Aku, Queensbury Montessori School provides an authentic, child-centred early learning haven in western Accra founded upon Dr. Maria Montessori's principles.
                </p>
              </div>

              {/* Welcome & Story */}
              <WelcomeAbout onNavigate={navigateTo} />

              {/* Montessori Method Timeline */}
              <div className="mt-16">
                <RisingSunPhilosophy onOpenCalendar={() => navigateTo('news')} />
              </div>

              {/* 5 Pedagogical Framework Pillars */}
              <div className="mt-16">
                <MontessoriPhilosophy />
              </div>

              {/* 3D Sensorial Apparatus Viewer */}
              <div className="mt-16">
                <ThreeDMaterialViewer />
              </div>

              {/* Why Choose Us Highlight */}
              <div className="mt-16">
                <RisingSunWhyChooseUs
                  onOpenVideo={() => setIsVideoModalOpen(true)}
                  onExploreProgrammes={() => navigateTo('programmes')}
                />
              </div>

              {/* Care, Wellbeing & Meals */}
              <div className="mt-16">
                <MealsCareWellbeing />
              </div>
            </div>
          </div>
        )}

        {/* PROGRAMMES VIEW */}
        {currentPage === 'programmes' && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
                  ACADEMIC PATHWAYS · AGES 0 TO 6
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Nurturing Stages: Crèche to Kindergarten
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Discover child-centred developmental curricula structured across Crèche, Nursery, and Kindergarten stages at our Santa Maria campus.
                </p>
              </div>

              {/* Programmes Tabs & Curriculum */}
              <Programmes onSelectProgramme={() => navigateTo('admissions')} />

              {/* Daily Routine */}
              <div className="mt-16">
                <DailyRoutine />
              </div>
            </div>
          </div>
        )}

        {/* FACILITIES & CAMPUS TOUR VIEW (CONSOLIDATED) */}
        {(currentPage === 'facilities' || currentPage === 'branches' || currentPage === 'gallery') && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
                  CAMPUS INFRASTRUCTURE & LIFE · SANTA MARIA
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Prepared Environments & Campus Life
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Tour our Infant Sleep Sanctuary, Sensorial Atelier, Kindergarten Discovery Wing, Dining Pavilion, and Botanical Discovery Courtyard in Santa Maria, Accra.
                </p>
              </div>

              {/* Facilities Showcase with Tour CTA */}
              <FacilitiesShowcase onBookTour={() => setIsTourModalOpen(true)} />

              {/* Masonry Photo Gallery */}
              <div className="mt-20">
                <div className="mb-10 text-center max-w-2xl mx-auto">
                  <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
                    VISUAL ARCHIVE
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-3">
                    Everyday Learning Moments
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Honest, unhurried glimpses of our children engaged in Montessori work cycles, botanical care, and creative play in Santa Maria.
                  </p>
                </div>
                <LearningExperience />
              </div>
            </div>
          </div>
        )}

        {/* ADMISSIONS VIEW: 7-STEP PIPELINE + SANTA MARIA INTAKE */}
        {currentPage === 'admissions' && (
          <div className="animate-in fade-in duration-300">
            <RisingSunAdmissions />
          </div>
        )}

        {/* NEWS & CALENDAR VIEW (CONSOLIDATED) */}
        {(currentPage === 'news' || currentPage === 'calendar') && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
              <div className="max-w-3xl">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
                  COMMUNITY & ACADEMIC CALENDAR
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Campus News, Term Dates & Events
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Stay synchronized with term resumptions, observation cycles, cultural day celebrations, and pedagogical workshops in Santa Maria.
                </p>
              </div>
            </div>

            {/* News Articles */}
            <RisingSunNews onNavigateToNews={() => navigateTo('news')} />

            {/* Events timeline */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
              <UpcomingEvents />

              {/* Parent Support Features */}
              <div className="mt-16">
                <ParentPortalFeatures />
              </div>
            </div>
          </div>
        )}

        {/* CONTACT VIEW: AUTHENTIC QUEENSBURY SANTA MARIA CONTACT */}
        {currentPage === 'contact' && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
                  GET IN TOUCH · SANTA MARIA, ACCRA
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Connect with Queensbury
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Located in Santa Maria (Auntie Aku Last Stop), Accra. Our admissions desk and head teacher are here to assist your family. Call 050 568 8484 or WhatsApp 024 113 3632.
                </p>
              </div>

              <LocationContact />
            </div>
          </div>
        )}
      </main>

      {/* Deep Navy Footer on All Views */}
      <RisingSunFooter onNavigate={navigateTo} />

      {/* Floating Action Buttons: WhatsApp Concierge + Back to Top */}
      <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3">
        {/* WhatsApp Floating Circle Button */}
        <a
          href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori%20Admissions%2C%20I%20would%20like%20to%20inquire%20about%20enrollment%20in%20Santa%20Maria."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 ring-2 sm:ring-4 ring-white/80 group cursor-pointer"
          aria-label="Chat with Admissions on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        </a>

        {/* Back To Top Floating Circle Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0d176d] text-white flex items-center justify-center shadow-lg hover:bg-[#f95716] hover:scale-110 transition-all duration-300 ring-2 ring-white/60 cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Campus Tour Booking Modal */}
      {isTourModalOpen && (
        <CampusTourModal
          isOpen={isTourModalOpen}
          onClose={() => setIsTourModalOpen(false)}
        />
      )}

      {/* Campus Video Tour Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video tour"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full flex items-center justify-center bg-slate-900 text-white relative">
              <img
                src="/assets/school/school_fb_photo_1.jpg"
                alt="Queensbury Montessori Campus Video Tour"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f95716] text-white flex items-center justify-center mb-3 sm:mb-4 shadow-xl ring-4 sm:ring-8 ring-white/20 animate-pulse">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  Queensbury Montessori School Video Tour
                </h3>
                <p className="text-white/80 text-xs sm:text-sm max-w-md">
                  Experience our child-scaled prepared environments, self-directed work cycles, and campus community in Santa Maria, Accra.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <QueensburyMainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
