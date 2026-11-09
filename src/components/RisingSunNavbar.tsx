import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface RisingSunNavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenAdmissions: () => void;
}

export const RisingSunNavbar: React.FC<RisingSunNavbarProps> = ({
  activePage,
  onNavigate,
  onOpenAdmissions,
}) => {
  const { isDark, toggleTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    {
      label: 'Philosophy',
      id: 'philosophy',
      hasDropdown: true,
      subItems: [
        { label: 'Montessori Method', id: 'philosophy' },
        { label: 'Holistic Development', id: 'philosophy' },
        { label: 'Sensorial Apparatus', id: 'philosophy' },
      ],
    },
    {
      label: 'About Us',
      id: 'about',
      hasDropdown: true,
      subItems: [
        { label: 'Our Story & Heritage', id: 'about' },
        { label: 'Faculty & Educators', id: 'about' },
        { label: 'Care & Nutrition', id: 'about' },
      ],
    },
    { label: 'Programmes', id: 'programmes' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'News', id: 'news' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-3 sm:top-5 z-[60] mx-auto w-[95vw] sm:w-max max-w-7xl rounded-full p-1.5 sm:p-2 pr-2.5 sm:pr-4 backdrop-blur-2xl transition-all duration-300 ${
        isDark
          ? scrolled
            ? 'bg-[#09103b]/95 border border-indigo-500/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10'
            : 'bg-[#080e33]/90 border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.5)] ring-1 ring-white/10'
          : scrolled
            ? 'bg-white/95 shadow-xl ring-1 ring-black/5'
            : 'bg-white/90 ring-1 ring-black/5 shadow-[0_12px_36px_rgba(13,23,109,0.12)]'
      }`}
    >
      <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-5 xl:gap-7">
        {/* Brand Crest & Title */}
        <button
          type="button"
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2 sm:gap-2.5 pl-1.5 sm:pl-2 group outline-none cursor-pointer shrink-0"
        >
          {/* Authentic Queensbury Crest in Rising Sun Pill Aesthetic */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0d176d] border border-amber-400/50 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2894] to-[#09104f]" />
            <div className="relative flex flex-col items-center">
              <span className="font-serif font-black text-amber-300 text-xs sm:text-sm tracking-tight leading-none">
                QM
              </span>
              <span className="text-[6px] sm:text-[7px] text-white/80 font-mono tracking-widest uppercase">
                ACCRA
              </span>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span
              className={`font-bold text-sm sm:text-base md:text-lg tracking-tight leading-none font-sans transition-colors ${
                isDark ? 'text-white' : 'text-[#0d176d]'
              }`}
            >
              Queensbury
            </span>
            <span
              className={`hidden sm:block text-[9px] font-mono tracking-widest uppercase font-semibold leading-tight mt-0.5 transition-colors ${
                isDark ? 'text-amber-300/80' : 'text-slate-500'
              }`}
            >
              Santa Maria · Accra
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-4 xl:flex text-[13px] font-semibold relative">
          {navItems.map((item) => (
            <div
              key={item.id + item.label}
              className="relative group py-2"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center gap-1 transition-colors outline-none cursor-pointer rounded-md ${
                  activePage === item.id
                    ? 'text-[#f95716] font-bold'
                    : isDark
                      ? 'text-slate-200 hover:text-[#f95716]'
                      : 'text-slate-700 hover:text-[#f95716]'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.id && (
                <div className="absolute left-0 top-full pt-2 w-52 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div
                    className={`rounded-2xl p-2 shadow-2xl border ring-1 ring-black/5 flex flex-col gap-1 ${
                      isDark
                        ? 'bg-[#0f1747] border-indigo-500/30 text-white'
                        : 'bg-white border-slate-100 text-slate-800'
                    }`}
                  >
                    {item.subItems?.map((sub) => (
                      <button
                        key={sub.label}
                        type="button"
                        onClick={() => handleItemClick(sub.id)}
                        className={`w-full text-left px-3 py-2 text-xs font-medium rounded-xl transition-colors cursor-pointer ${
                          isDark
                            ? 'text-slate-200 hover:text-[#f95716] hover:bg-white/5'
                            : 'text-slate-700 hover:text-[#f95716] hover:bg-orange-50/60'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Action: Day/Night Toggle & Orange CTA Pill */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Day & Night Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm ${
              isDark
                ? 'bg-indigo-950/90 text-amber-300 hover:bg-indigo-900 border border-indigo-500/40 shadow-[0_0_15px_rgba(251,191,36,0.25)]'
                : 'bg-amber-50 text-amber-600 hover:bg-amber-100 border border-amber-200/90'
            }`}
            title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            aria-label="Toggle day and night mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-800 transition-transform duration-500 hover:-rotate-45" />
            )}
          </button>

          {/* Orange Primary Pill CTA */}
          <button
            type="button"
            onClick={onOpenAdmissions}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#f95716] hover:bg-[#e0480b] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer ${
              isDark
                ? 'text-white hover:bg-white/10'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          className={`xl:hidden absolute top-full left-0 right-0 mt-3 p-4 rounded-3xl border shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 max-h-[75vh] overflow-y-auto ${
            isDark
              ? 'bg-[#09103b]/98 backdrop-blur-2xl border-white/15 text-white'
              : 'bg-white/95 backdrop-blur-2xl border-slate-100 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${
                  activePage === item.id
                    ? 'bg-[#f95716] text-white font-bold'
                    : isDark
                      ? 'text-slate-200 hover:bg-white/5'
                      : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Day / Night Segmented Switch */}
            <div
              className={`p-3 rounded-2xl flex items-center justify-between mt-2 border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                {isDark ? (
                  <Moon className="w-4 h-4 text-amber-300" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
                <span>Theme Mode</span>
              </div>
              <div className="flex items-center gap-1 p-0.5 rounded-full bg-slate-200/80 dark:bg-black/40">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    !isDark
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ☀️ Day
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isDark
                      ? 'bg-[#0d176d] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  🌙 Night
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between px-2 mt-1">
              <span className="text-xs text-slate-400 font-mono">SANTA MARIA, ACCRA</span>
              <button
                type="button"
                onClick={() => {
                  onOpenAdmissions();
                  setMobileOpen(false);
                }}
                className="text-xs font-bold text-[#f95716] uppercase font-mono tracking-wider cursor-pointer"
              >
                Admissions →
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
