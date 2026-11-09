import React from 'react';
import { ArrowUpRight, Phone, MapPin, Sparkles } from 'lucide-react';

interface RisingSunCampusesProps {
  onNavigateToBranches?: () => void;
  onSelectBranch?: (facilityId: string) => void;
}

export const RisingSunCampuses: React.FC<RisingSunCampusesProps> = ({
  onNavigateToBranches,
  onSelectBranch,
}) => {
  const facilities = [
    {
      id: 'creche-sanctuary',
      name: 'Infant Sleep & Daycare Suite',
      stage: 'CRÈCHE · AGES 0 TO 2 YEARS',
      phone: '050 568 8484',
      address: 'Low wooden floor beds, natural airflow, and 1:1 caregiver nurturing in Santa Maria',
      image: '/src/assets/images/facility_sleep_sanctuary_1793951151256.jpg',
    },
    {
      id: 'nursery-atelier',
      name: 'Practical Life & Sensorial Atelier',
      stage: 'NURSERY · AGES 2 TO 4 YEARS',
      phone: '024 113 3632',
      address: 'Child-scaled solid wood shelves, cylinder blocks, pink tower, and practical life frames',
      image: '/assets/school/school_fb_photo_3.jpg',
    },
    {
      id: 'kindergarten-wing',
      name: 'Kindergarten & Mathematics Discovery Wing',
      stage: 'KINDERGARTEN · AGES 4 TO 6 YEARS',
      phone: '050 568 8484',
      address: 'Golden beads decimal system, sandpaper phonetics, and botanical sensory courtyard',
      image: '/assets/school/school_fb_photo_4.jpg',
    },
  ];

  return (
    <section id="facilities" className="w-full bg-[#0d176d] dark:bg-[#030718] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Header with Title and "Explore Full Campus Facilities ↗" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
              SANTA MARIA CAMPUS · ACCRA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Prepared Environments & Facilities
            </h2>
          </div>

          <button
            type="button"
            onClick={onNavigateToBranches}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-[#f95716] transition-colors border-b border-white/30 hover:border-[#f95716] pb-1 w-fit group cursor-pointer"
          >
            <span>Explore All Campus Facilities</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 3 Prepared Environments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => onSelectBranch && onSelectBranch(fac.id)}
              className="bg-white dark:bg-[#060c24] text-slate-900 dark:text-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col border border-slate-100 dark:border-white/10 group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-1">
                    {fac.stage}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-2">
                    {fac.name}
                  </h3>
                  <div className="flex items-start gap-2 text-slate-500 dark:text-slate-300 text-xs mb-4">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                    <span>{fac.address}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-mono text-sm font-semibold">
                    <Phone className="w-4 h-4 text-[#0d176d] dark:text-amber-400" />
                    <span className="text-slate-700 dark:text-slate-200">{fac.phone}</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[#0d176d] dark:text-white group-hover:bg-[#f95716] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
