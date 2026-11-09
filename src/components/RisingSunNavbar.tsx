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
  const { isDark, toggleTheme } = useTheme();
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
      label: 'About & Philosophy',
      id: 'about',
      hasDropdown: true,
      subItems: [
        { label: 'Our Story & Heritage', id: 'about' },
        { label: 'Montessori Method', id: 'about' },
        { label: 'Sensorial Learning', id: 'about' },
        { label: 'Care & Daily Nutrition', id: 'about' },
      ],
    },
    {
      label: 'Programmes',
      id: 'programmes',
      hasDropdown: true,
      subItems: [
        { label: 'Crèche (0–2 yrs)', id: 'programmes' },
        { label: 'Nursery (2–4 yrs)', id: 'programmes' },
        { label: 'Kindergarten (4–6 yrs)', id: 'programmes' },
        { label: 'Daily Work Cycle', id: 'programmes' },
      ],
    },
    {
      label: 'News & Calendar',
      id: 'news',
      hasDropdown: true,
      subItems: [
        { label: 'Campus Announcements', id: 'news' },
        { label: 'Academic Term Dates', id: 'news' },
        { label: 'Parent Resources', id: 'news' },
      ],
    },
    { label: 'Contact & Location', id: 'contact' },
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
            ? 'bg-[#0b1437]/95 border border-slate-700/60 shadow-[0_16px_40px_rgba(0,0,0,0.6)]'
            : 'bg-[#0d176d]/90 border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
          : scrolled
            ? 'bg-white/95 border border-slate-200/80 shadow-xl'
            : 'bg-white/90 border border-slate-100 shadow-[0_12px_36px_rgba(13,23,109,0.1)]'
      }`}
    >
      <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4 xl:gap-6">
        {/* Brand Crest & Title */}
        <button
          type="button"
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 pl-1 sm:pl-2 group outline-none cursor-pointer shrink-0 text-left"
        >
          {/* Authentic Queensbury Shield Emblem (Natural ratio, no circular clipping) */}
          <div className="relative h-10 sm:h-12 w-auto shrink-0 transition-transform duration-200 group-hover:scale-105">
            <img
              src="/assets/logo.png"
              alt="Queensbury Montessori School Crest"
              className="h-full w-auto object-contain drop-shadow-sm"
            />
          </div>

          <div className="flex flex-col text-left justify-center">
            <span
              className={`font-serif font-bold text-base sm:text-lg tracking-tight leading-none transition-colors ${
                isDark ? 'text-white' : 'text-[#0d176d]'
              }`}
            >
              Queensbury
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider uppercase leading-tight mt-1 transition-colors ${
                isDark ? 'text-amber-300' : 'text-amber-700'
              }`}
            >
              Montessori Sch. · Santa Maria
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-3 lg:gap-4 xl:flex text-[13px] font-semibold relative">
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
                className={`flex items-center gap-1 transition-colors outline-none cursor-pointer px-2 py-1 rounded-lg ${
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
                        ? 'bg-[#0b1437] border-slate-700 text-white'
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
                ? 'bg-white/10 text-amber-300 hover:bg-white/15 border border-white/15'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/90'
            }`}
            title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            aria-label="Toggle day and night mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-[#0d176d] transition-transform duration-500 hover:-rotate-45" />
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
              ? 'bg-[#0b1437]/98 backdrop-blur-2xl border-white/15 text-white'
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
            <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/10">
              <button
                type="button"
                onClick={() => {
                  onOpenAdmissions();
                  setMobileOpen(false);
                }}
                className="w-full py-3 rounded-2xl bg-[#f95716] text-white text-xs font-bold uppercase tracking-wider text-center"
              >
                Apply for Admission (2024/2025)
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
