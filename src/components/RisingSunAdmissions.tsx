/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  FileText, 
  CreditCard, 
  Users, 
  Utensils, 
  Calendar 
} from 'lucide-react';
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
    startTerm: 'Immediate / Rolling Admission',
    hearAbout: 'Word of Mouth / Santa Maria Resident',
    notes: '',
  });

  const steps = [
    {
      step: '01',
      titleEn: 'Online Enquiry & Consultation',
      titleTw: 'Online Nhwehwɛmu & Nkitahodi',
      descEn:
        'Submit the online enquiry form below or message our admissions hotline on WhatsApp (024 113 3632). We will promptly confirm current space availability in your child’s age bracket.',
      descTw:
        'Hyehyɛ online enquiry form no anaasɛ frɛ 024 113 3632 wɔ WhatsApp so na hu sɛ sukuudan mu akwanya wɔ hɔ ma wo ba no anaa.',
    },
    {
      step: '02',
      titleEn: 'Campus Walkthrough & Prepared Environment Tour',
      titleTw: 'Sukuu Bea Nsrahwɛ & Nhwehwɛmu',
      descEn:
        'Visit our Santa Maria campus (near Auntie Aku Last Stop). Tour our child-scaled Montessori classrooms, hygienic sleep suites, dining area, and observe active morning work cycles.',
      descTw:
        'Bɛsra yɛn sukuu a ɛwɔ Santa Maria, Auntie Aku Last Stop nkyɛn, na hwɛ beaeɛ a mmofra da, baabi a wodi aduane, ne sukuudan pa no.',
    },
    {
      step: '03',
      titleEn: 'Physical Admission Form Purchase (GH₵100)',
      titleTw: 'Sukuu Krataa a Wɔtɔ wɔ Sukuu No Mu (GH₵100)',
      descEn:
        'Purchase the official physical admission form directly on-site at the school administration desk for GH₵100 (100 Cedis). Every registration requirement, document checklist, and health record requirement is detailed on the form. Payment is accepted via Cash or Mobile Money (MoMo).',
      descTw:
        'Awofoɔ tɔ physical admission form no wɔ sukuu no mu wɔ Santa Maria pɛpɛɛpɛ ma GH₵100 (100 Cedis). Wotumi de Cash anaa Mobile Money (MoMo) tua.',
    },
    {
      step: '04',
      titleEn: 'Form Submission & Child Health Verification',
      titleTw: 'Krataa No De Kɔma & Apɔmuden Nhwehwɛmu',
      descEn:
        'Return the completed physical form accompanied by the child’s birth certificate copy, weighing/vaccination card, emergency contact authorizations, and any specific dietary notes.',
      descTw:
        'Fa krataa a woahyehyɛ no ne abofra no awoɔ krataa ne aduro bɔ krataa brɛ sukuu panyin no.',
    },
    {
      step: '05',
      titleEn: 'Gentle Readiness & Guide Observation',
      titleTw: 'Abofra Ho Nsrahwɛ a Asomdwoeɛ Wɔ Mu',
      descEn:
        'Your child participates in a friendly, relaxed 30-minute Montessori work-cycle session with our lead guide to observe motor milestones, curiosity, and social comfort.',
      descTw:
        'Mmofra no ne akyerɛkyerɛfoɔ no tena fa nsa ka nneɛma pa na akyerɛkyerɛfoɔ no ahwɛ sɛnea wotumi sua adeɛ yie wɔ sukuudan mu.',
    },
    {
      step: '06',
      titleEn: 'Placement Confirmation & Uniform Fitting',
      titleTw: 'Gyinapɛn Si Pi & Ntadeɛ Siesie',
      descEn:
        'Formal placement confirmed into Crèche, Nursery, or Kindergarten. Tuition dues are settled, and the child is fitted for our official Orange & Lemon Green uniforms.',
      descTw:
        'Wɔsi abofra no gyinapɛn so pi (Crèche, Nursery, anaa Kindergarten), tua dues, na wosusu Orange & Lemon Green ntadeɛ no.',
    },
    {
      step: '07',
      titleEn: 'Welcoming & Phased Gentle Transition',
      titleTw: 'Akwaaba & Asetena Pa a Ɛbɔ Nsɛm',
      descEn:
        'A supportive phased start ensures your little one feels secure, loved, and confident in their new classroom community from day one.',
      descTw:
        'Yɛde mmerɛ kakra kyerɛ abofra no sukuu no suban pa na wanya komamyɛ, anigyeɛ, ne ahobammbɔ wɔ sukuu no mu.',
    },
  ];

  const [waLink, setWaLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `*QUEENSBURY MONTESSORI SCHOOL - ONLINE ADMISSION ENQUIRY*\n----------------------------------------\n👤 *Parent / Guardian:* ${formData.parentName}\n📞 *Phone / WhatsApp:* ${formData.phone}\n👶 *Child Name:* ${formData.childName || 'Not specified'}\n🎂 *Child Age:* ${formData.childAge || 'Not specified'}\n🎓 *Placement Level:* ${formData.stage}\n📅 *Enrollment Timing:* ${formData.startTerm}\n💬 *Inquiry Source:* ${formData.hearAbout}\n----------------------------------------\n📍 *Campus:* Santa Maria (Auntie Aku Last Stop), Accra\nℹ️ *Note:* Interested in purchasing physical form (GH₵100) on-site.\n(Submitted via website enquiry form)`
    );
    const url = `https://wa.me/233241133632?text=${text}`;
    setWaLink(url);
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-[#fafafc] dark:bg-[#0a1128] min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          {/* Dual Brand Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-sans font-bold uppercase tracking-widest mb-3 border border-slate-200 dark:border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f95716]" />
            <span className="text-[#f95716]">Orange</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#70b800]" />
            <span className="text-[#70b800]">Lemon Green</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-slate-700 dark:text-slate-200">Official Brand Colors</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
            {language === 'tw'
              ? 'Kwan a wobɛfa so abɛka Queensbury Abusua no ho.'
              : 'Admissions & Enrollment Process'}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
            {language === 'tw'
              ? 'Yɛwɔ Santa Maria (Auntie Aku Last Stop), Nkran. Yɛwɔ rolling admissions a adwuma no nntwa kwan. Tɔ physical form no wɔ sukuu no mu ma GH₵100 (Cash anaa MoMo).'
              : 'Located in Santa Maria (Auntie Aku Last Stop), Accra. We welcome learners aged 0 to 6 years with rolling admissions throughout the year. Review our enrollment guidelines and enquiry form below.'}
          </p>
        </div>

        {/* 4 Key Policy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="bg-white dark:bg-[#101b42] rounded-3xl p-6 border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f95716]" />
            <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-orange-950/40 text-[#f95716] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-1">Rolling Admissions</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              No admission deadline. Applications and enrollments are accepted continuously throughout the school term.
            </p>
          </div>

          <div className="bg-white dark:bg-[#101b42] rounded-3xl p-6 border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#70b800]" />
            <div className="w-10 h-10 rounded-2xl bg-[#f4fae6] dark:bg-[#1a2b00]/40 text-[#70b800] flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-1">Physical Form (GH₵100)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Purchased on-site at the school premises. All registration details and document checklists are outlined on the form.
            </p>
          </div>

          <div className="bg-white dark:bg-[#101b42] rounded-3xl p-6 border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0d176d]" />
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-[#0d176d] dark:text-amber-300 flex items-center justify-center mb-3">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-1">Cash or Mobile Money</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Payment for the admission form and fees is accepted in Cash or via Mobile Money (MoMo) at the admissions office.
            </p>
          </div>

          <div className="bg-white dark:bg-[#101b42] rounded-3xl p-6 border border-slate-200/90 dark:border-white/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#25D366]" />
            <div className="w-10 h-10 rounded-2xl bg-green-50 dark:bg-green-950/40 text-[#25D366] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-1">WhatsApp & PTA Channels</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Parent communication is active and transparent through our admissions WhatsApp hotline and dedicated PTA committee.
            </p>
          </div>
        </div>

        {/* 2-Column: 7-Step Pipeline vs Sticky Online Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: 7 Steps Timeline */}
          <div className="lg:col-span-7 relative">
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans">
                STEP-BY-STEP ADMISSION ROADMAP
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mt-1">
                How Enrollment Works
              </h2>
            </div>

            <div className="hidden sm:block absolute left-4 top-20 bottom-12 w-0.5 bg-orange-200/70 dark:bg-orange-500/30" />

            <div className="space-y-6">
              {steps.map((st, idx) => (
                <div key={idx} className="relative sm:pl-12 flex items-start group">
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-2.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f95716] ring-4 ring-orange-100 dark:ring-orange-950/60 items-center justify-center transition-transform group-hover:scale-125" />

                  {/* Step Card */}
                  <div className="w-full bg-white dark:bg-[#101b42] rounded-3xl p-5 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-6">
                    {/* Watermark Step Number */}
                    <div className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-200 dark:text-white/10 shrink-0 select-none group-hover:text-orange-200 dark:group-hover:text-orange-400/30 transition-colors">
                      {st.step}
                    </div>

                    <div>
                      <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#0d176d] dark:text-white mb-1.5 sm:mb-2 tracking-tight">
                        {language === 'tw' ? st.titleTw : st.titleEn}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
                        {language === 'tw' ? st.descTw : st.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Online Enquiry Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white dark:bg-[#101b42] rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#f95716] via-[#70b800] to-[#0d176d]" />

              <div className="flex items-center gap-2 text-xs font-sans font-semibold text-slate-400 uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#f95716]" />
                <span>SANTA MARIA CAMPUS · ACCRA</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-2 tracking-tight">
                {language === 'tw' ? 'Online Admission Enquiry' : 'Online Admission Enquiry Form'}
              </h2>
              <p className="text-slate-500 dark:text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Submit this enquiry to verify seat availability. Physical forms are purchased on-site for <strong>GH₵100</strong> (Cash or MoMo).
              </p>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-500/30 rounded-2xl p-6 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                    {language === 'tw' ? 'Yɛanya Wo Nkrataa!' : 'Enquiry Submitted!'}
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-4 leading-relaxed">
                    Connecting you directly with our admissions desk on WhatsApp. You can also pick up the physical admission form (GH₵100) on campus.
                  </p>
                  {waLink && (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-4"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue to WhatsApp (024 113 3632) ↗</span>
                    </a>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-sans font-bold uppercase tracking-wider text-green-800 dark:text-green-300 underline cursor-pointer"
                    >
                      {language === 'tw' ? 'Hyehyɛ Foforɔ' : 'Submit Another Enquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'tw' ? 'Ɔwofoɔ Din *' : 'Parent / Guardian Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Emmanuel Asante"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'tw' ? 'Frɛ / WhatsApp Nɔma *' : 'Phone / WhatsApp Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 024 113 3632"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        {language === 'tw' ? 'Abofra Din' : 'Child\'s Name'}
                      </label>
                      <input
                        type="text"
                        placeholder="Child's name"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                        {language === 'tw' ? 'Abofra Mfeɛ' : 'Child\'s Age'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 years 6 mos"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'tw' ? 'Adesua Gyinapɛn a Wopɛ' : 'Level / Classroom Placement'}
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Crèche & Daycare (0–2 Years)">Crèche & Daycare (0–2 Years)</option>
                      <option value="Montessori Nursery (2–4 Years)">Montessori Nursery (2–4 Years)</option>
                      <option value="Kindergarten (4–6 Years, Highest Level)">Kindergarten KG1 & KG2 (4–6 Years, Highest Level)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'tw' ? 'Bere a Wɔbɛhyɛ Ase' : 'Enrollment Timing (Rolling Admission)'}
                    </label>
                    <select
                      value={formData.startTerm}
                      onChange={(e) => setFormData({ ...formData, startTerm: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Immediate / Rolling Admission">Immediate Enrollment (Rolling Admission)</option>
                      <option value="Term 1 (September Resumption)">Term 1 (September Resumption)</option>
                      <option value="Term 2 (January Resumption)">Term 2 (January Resumption)</option>
                      <option value="Term 3 (April Resumption)">Term 3 (April Resumption)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'tw' ? 'Wotee yɛn ho asɛm he?' : 'How did you hear about Queensbury?'}
                    </label>
                    <select
                      value={formData.hearAbout}
                      onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Santa Maria Resident / Current Parent">Santa Maria Community / Current Parent</option>
                      <option value="Neighbor in Kwashieman / Sowutuom / Ablekuma">Neighbor in Kwashieman / Sowutuom / Ablekuma</option>
                      <option value="PTA Committee / Word of Mouth">PTA Committee / Word of Mouth</option>
                      <option value="WhatsApp / Social Recommendation">WhatsApp / Social Recommendation</option>
                      <option value="Drive-by Auntie Aku Last Stop">Drive-by Auntie Aku Last Stop / School Signage</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#f95716] hover:bg-[#e0480b] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer mt-4"
                  >
                    <span>
                      {language === 'tw' ? 'SOMA ENQUIRY WƆ WHATSAPP' : 'SUBMIT ENQUIRY VIA WHATSAPP'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="text-center text-[11px] text-slate-400 font-sans mt-3">
                    Physical form purchased on campus for GH₵100 · Cash or MoMo accepted.
                  </div>
                </form>
              )}

              {/* Direct Helpline Bar */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-500">Admissions Desk:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:0505688484"
                    className="font-sans font-bold text-[#0d176d] dark:text-amber-300 hover:text-[#f95716] transition-colors"
                  >
                    050 568 8484
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href="https://wa.me/233241133632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-[#25D366] hover:underline"
                  >
                    WhatsApp Desk
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
