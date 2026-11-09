import React from 'react';
import { Utensils, HeartPulse, ShieldAlert, Sparkles, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MealsCareWellbeing: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="meals" className="py-16 bg-[#fafafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Meals & Nutrition Column */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold mb-3">
                <Utensils className="w-4 h-4 text-[#f95716]" />
                <span>{language === 'tw' ? 'ADUANE PA & APƆMUDEN' : 'WHOLESOME PROVISION'}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] mb-4">
                {language === 'tw' ? 'Aduane & Da Biara Nnwuma' : 'Meals & Daily Nutrition'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                {language === 'tw'
                  ? 'Yɛnim sɛ aduane pa ma ahoɔden ne adwene a ɛtumi dwen yie. Yɛn aduannoano kuo no noa aduane pa a ɛyɛ fɛ da biara wɔ sukuu no mu wɔ Santa Maria.'
                  : 'We understand that proper nutrition directly supports energy, emotional balance, and cognitive concentration. Our culinary team prepares clean, balanced meals cooked fresh daily on our Santa Maria campus using wholesome Ghanaian ingredients.'}
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-sm font-bold text-[#0d176d] mb-1">
                    Morning Breakfast (7:30 AM)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Warm cereals, wholesome porridge (Tom Brown / oats), whole grain bread, and fresh fruit to give children an energized morning start.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-sm font-bold text-[#0d176d] mb-1">
                    Balanced Hot Lunch (12:00 PM)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Carefully proportioned hot meals including rice, beans, fish, eggs, vegetable stew, and yam pottage, followed by hydration breaks.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-mono pt-4 border-t border-slate-100">
              *Allergies and special dietary requests recorded and respected during admissions registration.
            </div>
          </div>

          {/* Child Wellbeing & First Aid Column */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-bold mb-3">
                <HeartPulse className="w-4 h-4 text-[#f95716]" />
                <span>{language === 'tw' ? 'BANBƆ NE AYARASA' : 'SAFETY & PEDIATRIC CARE'}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] mb-4">
                {language === 'tw' ? 'Abofra Banbɔ & First Aid' : 'Child Wellbeing & First Aid'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                {language === 'tw'
                  ? 'Wo ba banbɔ ne yɛn dwumadi a ɛdi kan koraa. Yɛn akyerɛkyerɛfoɔ anya nteteeɛ pa wɔ pediatric first aid ne akwankyerɛ mu.'
                  : 'Your child’s emotional and physical safety is our paramount responsibility. Our entire faculty is trained in gentle, sensitive care and certified pediatric first aid protocols.'}
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-sm font-bold text-[#0d176d] mb-1">
                    Health & Sickness Protocol
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    To protect our classroom community, children with contagious symptoms rest comfortably in our ventilated recovery room while parents are promptly notified.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-sm font-bold text-[#0d176d] mb-1">
                    Immediate Medical Proximity (Santa Maria)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Located within minutes of North Deseret Hospital in Santa Maria, ensuring rapid, professional healthcare access for any emergency requirement.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-2.5 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900">After-Care Availability:</strong> Supervised after-care until 4:00 PM is available for working parents. Weekend care requests are arranged directly through admissions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
