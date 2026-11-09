import React, { useState, useEffect } from 'react';
import { RisingSunNavbar } from './components/RisingSunNavbar';
import { RisingSunHero } from './components/RisingSunHero';
import { RisingSunStats } from './components/RisingSunStats';
import { RisingSunPhilosophy } from './components/RisingSunPhilosophy';
import { RisingSunWhyChooseUs } from './components/RisingSunWhyChooseUs';
import { RisingSunNews } from './components/RisingSunNews';
import { RisingSunTestimonials } from './components/RisingSunTestimonials';
import { RisingSunAdmissions } from './components/RisingSunAdmissions';
import { RisingSunFooter } from './components/RisingSunFooter';
import { CampusTourModal } from './components/CampusTourModal';
import { Programmes } from './components/Programmes';
import { DailyRoutine } from './components/DailyRoutine';
import { MealsCareWellbeing } from './components/MealsCareWellbeing';
import { UpcomingEvents } from './components/UpcomingEvents';
import { ParentPortalFeatures } from './components/ParentPortalFeatures';
import { LocationContact } from './components/LocationContact';
import { WelcomeAbout } from './components/WelcomeAbout';
import { MontessoriPhilosophy } from './components/MontessoriPhilosophy';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { MessageCircle, ArrowUp } from 'lucide-react';

export type PageId =
  | 'home'
  | 'philosophy'
  | 'about'
  | 'programmes'
  | 'news'
  | 'calendar'
  | 'contact'
  | 'admissions';

function QueensburyMainApp() {
  const { isDark } = useTheme();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedBranchForTour, setSelectedBranchForTour] = useState('Santa Maria Campus');

  // Sync hash routing for direct access (#/admissions, #/about, #/programmes, etc.)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'philosophy',
        'about',
        'programmes',
        'news',
        'calendar',
        'contact',
        'admissions',
      ];
      if (validPages.includes(hash as PageId)) {
        let target: PageId = hash as PageId;
        if (hash === 'philosophy') target = 'about';
        if (hash === 'calendar') target = 'news';
        setCurrentPage(target);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'facilities' || hash === 'branches' || hash === 'gallery') {
        setCurrentPage('programmes');
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
      'news',
      'calendar',
      'contact',
      'admissions',
    ];
    let target = validPages.includes(page as PageId) ? (page as PageId) : 'home';
    if (page === 'facilities' || page === 'branches' || page === 'gallery') target = 'programmes';
    if (target === 'philosophy') target = 'about';
    if (target === 'calendar') target = 'news';
    setCurrentPage(target);
    window.location.hash = target === 'home' ? '' : `#/${target}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'bg-[#0a1128] text-slate-100' : 'bg-[#fafafc] text-slate-800'
      } selection:bg-[#f95716] selection:text-white flex flex-col justify-between transition-colors duration-300 font-sans`}
    >
      {/* Floating Pill Navbar with Authentic Shield Crest & Direct Links */}
      <RisingSunNavbar
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenAdmissions={() => navigateTo('admissions')}
      />

      {/* Main Routed Page Content */}
      <main className="w-full flex-1">
        {/* HOME VIEW: AUTHENTIC QUEENSBURY SANTA MARIA OVERVIEW */}
        {currentPage === 'home' && (
          <div className="space-y-0 animate-in fade-in duration-300">
            {/* 1. Full-bleed Carousel Hero with Headline & Dual Action Pills */}
            <RisingSunHero
              onOpenAdmissions={() => navigateTo('admissions')}
              onExploreMore={() => navigateTo('about')}
            />

            {/* 2. Deep Navy Stats Strip with Divider Columns */}
            <RisingSunStats />

            {/* 3. Our Philosophy & Montessori Principles */}
            <RisingSunPhilosophy
              onOpenCalendar={() => navigateTo('news')}
            />

            {/* 4. Why Choose Us with Authentic Classroom Photography & Bullets */}
            <RisingSunWhyChooseUs
              onOpenVideo={() => setIsTourModalOpen(true)}
              onExploreProgrammes={() => navigateTo('programmes')}
            />

            {/* 5. Daily Routine & Schedule (Meals Provided & Weekend Care) */}
            <DailyRoutine />

            {/* 6. News & Announcements 3-Card Grid */}
            <RisingSunNews
              onNavigateToNews={() => navigateTo('news')}
            />

            {/* 6. What Families Say: Real Community Testimonials */}
            <RisingSunTestimonials />
          </div>
        )}

        {/* ABOUT & PHILOSOPHY VIEW (CONSOLIDATED) */}
        {(currentPage === 'about' || currentPage === 'philosophy') && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans block mb-2">
                  OUR HERITAGE & MISSION · EST. 2020
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Inspiring Independence, Dignity & Discovery.
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Founded in 2020 in Santa Maria, Auntie Aku, Queensbury Montessori School provides a dedicated, child-centred early learning environment in western Accra founded upon Dr. Maria Montessori's principles.
                </p>
              </div>

              {/* Welcome & Story */}
              <WelcomeAbout onNavigate={navigateTo} />

              {/* Montessori Method Pillars */}
              <div className="mt-16">
                <RisingSunPhilosophy onOpenCalendar={() => navigateTo('news')} />
              </div>

              {/* Montessori Philosophy Detail */}
              <div className="mt-16">
                <MontessoriPhilosophy />
              </div>

              {/* Care, Hygiene & Wellbeing */}
              <div className="mt-16">
                <MealsCareWellbeing />
              </div>
            </div>
          </div>
        )}

        {/* PROGRAMMES VIEW: CRÈCHE, NURSERY & KINDERGARTEN */}
        {currentPage === 'programmes' && (
          <div className="animate-in fade-in duration-300 pt-32 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans block mb-2">
                  EARLY CHILDHOOD PROGRAMMES · AGES 0 TO 6
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Three Stages of Natural Growth
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Tailored multi-age classrooms in Santa Maria: Crèche & Daycare (0–2 yrs), Montessori Nursery (2–4 yrs), and Kindergarten (4–6 yrs).
                </p>
              </div>

              {/* Programmes Component */}
              <Programmes onSelectProgramme={() => {}} />

              {/* Daily Routine */}
              <div className="mt-16">
                <DailyRoutine />
              </div>

              {/* Care, Nutrition & Meals */}
              <div className="mt-16">
                <MealsCareWellbeing />
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
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans block mb-2">
                  COMMUNITY & ACADEMIC CALENDAR
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Campus News, Term Dates & Events
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Stay updated with term resumptions, observation days, cultural day celebrations, and family workshops in Santa Maria.
                </p>
              </div>
            </div>

            {/* News Articles */}
            <RisingSunNews onNavigateToNews={() => navigateTo('news')} />

            {/* Events timeline */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
              <UpcomingEvents />

              {/* Parent Support Features (Maps Commute, FAQs, Photos & Notices) */}
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
                <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans block mb-2">
                  GET IN TOUCH · SANTA MARIA, ACCRA
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
                  Connect with Queensbury
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                  Located in Santa Maria (Auntie Aku Last Stop), Accra. Our admissions desk and coordinators are here to assist your family. Call 050 568 8484 or WhatsApp 024 113 3632.
                </p>
              </div>

              <LocationContact />
            </div>
          </div>
        )}
      </main>

      {/* Deep Navy Footer on All Views */}
      <RisingSunFooter onNavigate={navigateTo} />

      {/* Sticky Quick Contact Pills */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori%20School%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 text-xs font-bold uppercase tracking-wider group cursor-pointer"
          aria-label="Direct WhatsApp Hotline"
        >
          <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-sans">WhatsApp (024 113 3632)</span>
        </a>

        <button
          type="button"
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white dark:bg-[#0b1437] text-slate-700 dark:text-slate-200 shadow-md hover:shadow-xl border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer hover:-translate-y-0.5"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Campus Tour Booking Modal */}
      <CampusTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultBranch={selectedBranchForTour}
      />
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
