import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Phone, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const RisingSunAdmissions: React.FC = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    childAge: '',
    stage: 'Montessori Nursery (2–4 Years)',
    startTerm: 'Term 1 (September)',
    hearAbout: 'Word of Mouth / Santa Maria Resident',
    notes: '',
  });

  const steps = [
    {
      step: '01',
      titleEn: 'Inquiry & Initial Consultation',
      titleTw: 'Nhwehwɛmu & Nkitahodi a Ɛdi Kan',
      descEn:
        'Connect with our admissions desk via WhatsApp (024 113 3632) or telephone (050 568 8484) to verify seat availability in our Santa Maria campus for your child\'s age group.',
      descTw:
        'Kasa kyerɛ yɛn admissionsfoɔ wɔ WhatsApp so anaasɛ frɛ 050 568 8484 na hu sɛ sukuudan mu akwanya wɔ hɔ ma wo ba no anaa.',
    },
    {
      step: '02',
      titleEn: 'Campus Walkthrough & Observation',
      titleTw: 'Sukuu Bea Nsrahwɛ & Nhwehwɛmu',
      descEn:
        'Tour our Santa Maria prepared environments (near Auntie Aku Last Stop), inspect our clean sleep suites and dining pavilion, and observe an active work cycle.',
      descTw:
        'Bɛsra yɛn sukuu a ɛwɔ Santa Maria, Auntie Aku Last Stop nkyɛn, na hwɛ beaeɛ a mmofra da, baabi a wodi aduane, ne sukuudan pa no.',
    },
    {
      step: '03',
      titleEn: 'Admission Packet & Child Health Records',
      titleTw: 'Krataa a Wɔde Bɛgye No Sukuu & Apɔmuden Nkrataa',
      descEn:
        'Complete the official enrollment packet with the child\'s birth certificate, vaccination and immunization booklet copy, dietary requirements, and emergency contacts.',
      descTw:
        'Awofoɔ hyehyɛ krataa no na wɔde abofra no awoɔ krataa, aduro bɔ krataa, ne aduane pa a ɔtumi di ho nkrataa kɔma sukuu no.',
    },
    {
      step: '04',
      titleEn: 'Gentle Readiness Observation',
      titleTw: 'Abofra Ho Nsrahwɛ a Asomdwoeɛ Wɔ Mu',
      descEn:
        'Prospective learners engage in a relaxed, friendly Montessori work-cycle session with our lead guide to assess developmental milestones and social readiness.',
      descTw:
        'Mmofra no ne akyerɛkyerɛfoɔ no tena fa nsa ka nneɛma pa na akyerɛkyerɛfoɔ no ahwɛ sɛnea wotumi suani yie wɔ sukuudan mu.',
    },
    {
      step: '05',
      titleEn: 'Cohort Placement & Guide Allocation',
      titleTw: 'Sukuudan & Akyerɛkyerɛfoɔ a Wɔbɛfa Abofra No Akɔ Wɔn Nkyɛn',
      descEn:
        'The Head of School formally assigns the child to the appropriate multi-age cohort (Crèche, Nursery, or Kindergarten) based on developmental observation.',
      descTw:
        'Sukuu panyin no hwɛ nsɔhwɛ no wie a, ɔpaw sukuudan pa a ɛfata abofra no mfeɛ ne ne nimdeɛ.',
    },
    {
      step: '06',
      titleEn: 'Fee Settlement & Bespoke Uniform Fitting',
      titleTw: 'Sukuu Ka Tuatua & Ntadeɛ Siesie',
      descEn:
        'Tuition and term dues are settled, followed by uniform fitting and allocation of child-scaled stationery and learning materials.',
      descTw:
        'Wotua sukuu ka no wɔ sikasɛm beaeɛ hɔ, na wosusu ntadeɛ fɛfɛɛfɛ ne nwoma nyinaa ma abofra no.',
    },
    {
      step: '07',
      titleEn: 'Welcoming & Phased Gentle Transition',
      titleTw: 'Akwaaba & Asetena Pa a Ɛbɔ Nsɛm',
      descEn:
        'A customized phased schedule allows your child to settle happily into their new classroom community without emotional stress or separation anxiety.',
      descTw:
        'Yɛde mmerɛ kakra kyerɛ abofra no sukuu no suban pa na wanya komamyɛ, anigyeɛ, ne ahobammbɔ wɔ sukuu no mu.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fafafc] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
            {language === 'tw' ? 'MMOFRA GYEGYESU NHYEHYƐEƐ • SANTA MARIA' : 'ENROLLMENT PROCESS · SANTA MARIA'}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] tracking-tight mb-4">
            {language === 'tw'
              ? 'Kwan a wobɛfa so abɛka Queensbury Abusua no ho.'
              : 'How to join the Queensbury family.'}
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
            {language === 'tw'
              ? 'Yɛwɔ Santa Maria (Auntie Aku Last Stop), Nkran. Yɛma awofoɔ a wɔpɛ mmofra nyin pa ne nimdeɛ a ɛkorɔn akwaaba. Fa nhyehyɛeɛ nson a ɛdidisoɔ yi so.'
              : 'Located in Santa Maria (Auntie Aku), Accra. We welcome families who share our vision of authentic Montessori discovery and caring early childhood guidance. Follow our 7-step admissions pipeline below.'}
          </p>
        </div>

        {/* 2-Column: 7-Step Pipeline vs Sticky Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: 7 Steps Timeline */}
          <div className="lg:col-span-7 relative">
            <div className="hidden sm:block absolute left-4 top-8 bottom-12 w-0.5 bg-orange-200/70" />

            <div className="space-y-6">
              {steps.map((st, idx) => (
                <div key={idx} className="relative sm:pl-12 flex items-start group">
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-2.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f95716] ring-4 ring-orange-100 items-center justify-center transition-transform group-hover:scale-125" />

                  {/* Step Card */}
                  <div className="w-full bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-6">
                    {/* Watermark Step Number */}
                    <div className="font-mono text-2xl sm:text-4xl font-extrabold text-slate-200 shrink-0 select-none group-hover:text-orange-200 transition-colors">
                      {st.step}
                    </div>

                    <div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#0d176d] mb-1.5 sm:mb-2 tracking-tight">
                        {language === 'tw' ? st.titleTw : st.titleEn}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                        {language === 'tw' ? st.descTw : st.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Direct Application Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />

              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#f95716]" />
                <span>SANTA MARIA CAMPUS · ACCRA</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] mb-2 tracking-tight">
                {language === 'tw' ? 'Kyerɛ Wo Pɛ Anaa Sra Ha' : 'Initialize Application'}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                {language === 'tw'
                  ? 'Hyehyɛ nkyerɛwee yi na yɛn admissionsfoɔ ne wo akasa ntɛm ara.'
                  : 'Submit your child’s placement profile to begin Step 1 of the official enrollment cycle.'}
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-green-900 mb-2">
                    {language === 'tw' ? 'Yɛanya Wo Nkrataa!' : 'Application Initiated!'}
                  </h4>
                  <p className="text-green-700 text-sm mb-4">
                    {language === 'tw'
                      ? 'Yɛn admissions panyin bɛfrɛ wo wɔ 050 568 8484 anaasɛ ɔbɛkasa akyerɛ wo wɔ WhatsApp so.'
                      : 'Our admissions desk will contact you at your provided phone number to arrange Step 2 (Campus Observation & Tour).'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-green-800 underline cursor-pointer"
                  >
                    {language === 'tw' ? 'Hyehyɛ Foforɔ' : 'Submit Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'tw' ? 'Ɔwofoɔ Din *' : 'Parent / Guardian Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Emmanuel Asante"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'tw' ? 'Frɛ / WhatsApp Nɔma *' : 'Phone / WhatsApp Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 024 113 3632"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        {language === 'tw' ? 'Abofra Din' : 'Child\'s Name'}
                      </label>
                      <input
                        type="text"
                        placeholder="Child's first name"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        {language === 'tw' ? 'Abofra Mfeɛ' : 'Child\'s Age'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 years 6 mos"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'tw' ? 'Adesua Gyinapɛn a Wopɛ' : 'Stage / Classroom Placement'}
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                    >
                      <option value="Crèche & Daycare (0–2 Years)">Crèche & Daycare (0–2 Years)</option>
                      <option value="Montessori Nursery (2–4 Years)">Montessori Nursery (2–4 Years)</option>
                      <option value="Kindergarten (4–6 Years)">Kindergarten (4–6 Years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'tw' ? 'Bere a Wɔbɛhyɛ Ase' : 'Preferred Start Term'}
                    </label>
                    <select
                      value={formData.startTerm}
                      onChange={(e) => setFormData({ ...formData, startTerm: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                    >
                      <option value="Term 1 (September)">Term 1 (September Resumption)</option>
                      <option value="Term 2 (January)">Term 2 (January Resumption)</option>
                      <option value="Term 3 (April)">Term 3 (April Resumption)</option>
                      <option value="Immediate Mid-Term Placement">Immediate Mid-Term Placement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      {language === 'tw' ? 'Wotee yɛn ho asɛm he?' : 'How did you hear about Queensbury?'}
                    </label>
                    <select
                      value={formData.hearAbout}
                      onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                    >
                      <option value="Word of Mouth / Santa Maria Resident">Santa Maria Community / Current Parent</option>
                      <option value="Neighbor in Kwashieman / Sowutuom / Ablekuma">Neighbor in Kwashieman / Sowutuom / Ablekuma</option>
                      <option value="WhatsApp / Social Recommendation">WhatsApp / Social Recommendation</option>
                      <option value="Drive-by Auntie Aku Last Stop">Drive-by Auntie Aku Last Stop / Signage</option>
                    </select>
                  </div>

                  {/* Orange Primary Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#f95716] hover:bg-[#e0480b] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer mt-4"
                  >
                    <span>
                      {language === 'tw' ? 'HYƐ ADMISSION ASE' : 'INITIALIZE APPLICATION'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="text-center text-[11px] text-slate-400 font-sans mt-3">
                    Santa Maria, Accra · No payment processing until Step 2.
                  </div>
                </form>
              )}

              {/* Direct helpline bar */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-500">Official Desk:</span>
                <a
                  href="tel:0505688484"
                  className="font-mono font-bold text-[#0d176d] hover:text-[#f95716] transition-colors"
                >
                  050 568 8484
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
