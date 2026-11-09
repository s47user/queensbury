import React from 'react';
import { Calendar, Clock, MapPin, Download, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SchoolEvent {
  id: string;
  title: string;
  category: 'academic' | 'community' | 'observation' | 'culture';
  dateBadge: {
    month: string;
    day: string;
    dayOfWeek: string;
  };
  time: string;
  location: string;
  description: string;
  targetAudience: string;
}

const EVENTS_DATA: SchoolEvent[] = [
  {
    id: 'term-opening',
    title: 'Academic Term Resumption & New Pupil Welcome',
    category: 'academic',
    dateBadge: {
      month: 'MAY',
      day: '06',
      dayOfWeek: 'Wednesday',
    },
    time: '7:00 AM – 3:00 PM',
    location: 'Queensbury Main Campus, Santa Maria',
    description: 'Welcome back to our continuing learners and warm orientation morning for newly enrolled infants, toddlers, and kindergarteners.',
    targetAudience: 'All Enrolled Families & New Entrants',
  },
  {
    id: 'open-classroom',
    title: 'Open Montessori Observation Week',
    category: 'observation',
    dateBadge: {
      month: 'MAY',
      day: '20',
      dayOfWeek: 'Wed – Fri',
    },
    time: '9:00 AM – 11:00 AM (By Slot)',
    location: 'Individual Learning Ateliers, Santa Maria',
    description: 'Prospective and current parents sit in quiet classroom observation to witness children engaged in 3-hour uninterrupted sensorial and math work cycles.',
    targetAudience: 'Prospective Parents & Families',
  },
  {
    id: 'cultural-day',
    title: 'Ghanaian Heritage & Cultural Discovery Feast',
    category: 'culture',
    dateBadge: {
      month: 'JUN',
      day: '12',
      dayOfWeek: 'Friday',
    },
    time: '9:30 AM – 1:00 PM',
    location: 'Botanical Discovery Courtyard, Santa Maria',
    description: 'Celebration of Ghanaian heritage with traditional Kente & local attire, Ga & Akan folklore storytelling, music, drumming, and tasting of indigenous dishes.',
    targetAudience: 'Children, Parents & Faculty',
  },
  {
    id: 'milestones-expo',
    title: 'Child Milestone Exhibition & Growth Conferences',
    category: 'community',
    dateBadge: {
      month: 'JUL',
      day: '10',
      dayOfWeek: 'Friday',
    },
    time: '8:30 AM – 2:00 PM',
    location: 'Santa Maria Campus Assembly Hall',
    description: 'Individual portfolio exhibitions where children present their practical life, language, and sensorial achievements to parents alongside educator reviews.',
    targetAudience: 'Queensbury Parents & Guardians',
  },
];

export const UpcomingEvents: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="events" className="py-12 bg-[#fafafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-sans uppercase tracking-widest text-[#f95716] font-bold mb-2">
              {language === 'tw' ? 'SUKUU KALENDA & DWUMADI' : 'SCHOOL CALENDAR & ACTIVITIES • SANTA MARIA'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0d176d] font-bold tracking-tight leading-tight">
              {language === 'tw' ? 'Dwumadi a Ɛreba & Kalenda' : 'Upcoming Dates & Community Life'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-light">
              {language === 'tw'
                ? 'Kɔ so hu berɛ pɔtee a afe no dwumadi bɛkɔ so wɔ Santa Maria sukuu bea no mu.'
                : 'Stay synchronized with academic milestones, parent observation periods, and rich cultural celebrations happening at our Santa Maria campus.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori,%20please%20send%20me%20the%20current%20term%20academic%20calendar%20and%20event%20schedule."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0d176d] hover:bg-[#f95716] rounded-full transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#f95716]" />
              <span>Request Term Calendar (WhatsApp)</span>
            </a>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENTS_DATA.map((event) => {
            const categoryBadge = {
              academic: 'bg-blue-50 text-blue-700 border border-blue-200',
              observation: 'bg-amber-50 text-amber-800 border border-amber-200',
              culture: 'bg-purple-50 text-purple-700 border border-purple-200',
              community: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
            }[event.category];

            return (
              <div
                key={event.id}
                className="bg-white dark:bg-[#101b42] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-white/10 hover:border-[#f95716]/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Date Badge & Category */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-[#0d176d] text-white flex flex-col items-center justify-center font-sans shadow-md shrink-0 group-hover:bg-[#f95716] transition-colors">
                        <span className="text-[10px] tracking-widest text-amber-300 uppercase font-bold leading-none">
                          {event.dateBadge.month}
                        </span>
                        <span className="text-xl font-bold leading-tight text-white">
                          {event.dateBadge.day}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#f95716] block uppercase tracking-wider font-sans">
                          {event.dateBadge.dayOfWeek}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                          {event.targetAudience}
                        </span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider ${categoryBadge}`}>
                      {event.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d176d] dark:text-white leading-snug mb-2 group-hover:text-[#f95716] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Footer metadata */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 font-sans text-[11px] text-slate-600 dark:text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-[#f95716]" />
                      <span>{event.time}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[11px] text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-[#0d176d]" />
                      <span>{event.location.split(',')[0]}</span>
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(event.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#0d176d] hover:text-[#f95716] transition-colors text-xs"
                  >
                    <span>RSVP via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
