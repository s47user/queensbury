import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Check, Copy, ArrowUpRight, Send, Navigation, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LocationContact: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    stage: 'Montessori Nursery (2–4 Years)',
    message: '',
  });

  const fullAddress = 'Queensbury Montessori School, Santa Maria (Auntie Aku / Last Stop), near North Deseret Hospital, Accra, Ghana';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: '',
        phone: '',
        email: '',
        stage: 'Montessori Nursery (2–4 Years)',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="w-full bg-[#fafafc] text-slate-800 space-y-12">
      {/* Real Campus Location & Direct Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Detailed Campus Address & Operational Hub (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#f95716]">
                OFFICIAL SANTA MARIA CAMPUS
              </span>
              <span className="text-xs text-slate-400 font-mono">ACCRA · EST. 2020</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] tracking-tight mb-4">
              {language === 'tw' ? 'Yɛn Sukuu Bea Wɔ Santa Maria' : 'Queensbury Montessori Campus'}
            </h3>

            <div className="space-y-4 text-sm text-slate-600 mb-8">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <MapPin className="w-5 h-5 text-[#f95716] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 leading-snug">
                    {fullAddress}
                  </p>
                  <p className="text-xs text-amber-700 font-medium mt-1">
                    {language === 'tw'
                      ? 'Ahyɛnsodeɛ: Ɛbɛn North Deseret Hospital, Auntie Aku Last Stop.'
                      : 'Landmark: Near North Deseret Hospital, Auntie Aku Last Stop.'}
                  </p>
                </div>
              </div>

              {/* Operating Hours Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0d176d] mb-1">
                    <Clock className="w-4 h-4 text-[#f95716]" />
                    <span>School Hours</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 block">Monday – Friday</span>
                  <span className="text-xs text-slate-500">7:00 AM – 3:00 PM (Regular)</span>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">After-care until 4:00 PM</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0d176d] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#f95716]" />
                    <span>Admissions & Tours</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 block">Daily Walkthroughs</span>
                  <span className="text-xs text-slate-500">8:30 AM – 2:00 PM</span>
                  <span className="text-[11px] text-amber-700 font-semibold block mt-0.5">Visits by appointment</span>
                </div>
              </div>

              {/* Neighborhood catchment info */}
              <div className="text-xs text-slate-500 leading-relaxed font-sans">
                {language === 'tw'
                  ? 'Ɛyɛ mmerɛ sɛ awofoɔ a wɔwɔ Kwashieman, Sowutuom, Ablekuma, Lapaz, ne Mallam de wɔn mmofra bɛba ha ntɛm.'
                  : 'Easily accessible for commuting families across Santa Maria, Kwashieman, Sowutuom, Ablekuma, Lapaz, and Mallam.'}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://maps.google.com/?q=Queensbury+Montessori+School+Santa+Maria+Accra+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 sm:px-6 rounded-full bg-[#0d176d] hover:bg-[#132087] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <Navigation className="w-4 h-4" />
              <span>{language === 'tw' ? 'Kwan a Wobɛfa So Aba' : 'Get Driving Directions'}</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="py-3 px-5 sm:px-6 rounded-full border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'tw' ? 'Wɔatwe Beaeɛ No!' : 'Copied to Clipboard!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{language === 'tw' ? 'Fa Beaeɛ No Kɔ' : 'Copy Full Address'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Direct Admissions Contact Hub (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          {/* WhatsApp Direct Admissions Card */}
          <div className="bg-gradient-to-br from-[#132087] to-[#0d176d] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#f95716] block mb-2">
              INSTANT ADMISSIONS HOTLINE
            </span>
            <h3 className="font-serif text-2xl font-bold mb-3 tracking-tight">
              {language === 'tw' ? 'Kasa Kyerɛ Yɛn Wɔ WhatsApp So' : 'Connect Directly on WhatsApp'}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {language === 'tw'
                ? 'Wopɛ sɛ wonya mmuaeɛ ntɛm ara anaa? Kasa kyerɛ yɛn admissions team wɔ WhatsApp so.'
                : 'Speak with our admissions coordinators to verify classroom placements, check daily routine times, or book an observational walkthrough.'}
            </p>

            <a
              href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori%20Admissions%2C%20I%20would%20like%20to%20inquire%20about%20enrollment%20at%20Santa%20Maria."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{language === 'tw' ? 'BUE WHATSAPP (024 113 3632)' : 'CHAT ON WHATSAPP: 024 113 3632'}</span>
            </a>
          </div>

          {/* Quick Telephone Helplines Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md">
            <h4 className="font-serif text-xl font-bold text-[#0d176d] mb-4">
              {language === 'tw' ? 'Frɛ Yɛn Tɛlɛfon So' : 'Official Phone & Email'}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="font-bold text-slate-800 block">Main Campus Line</span>
                  <span className="text-xs text-slate-400">Head of School & Administration</span>
                </div>
                <a
                  href="tel:0505688484"
                  className="font-mono font-bold text-[#0d176d] hover:text-[#f95716] transition-colors"
                >
                  050 568 8484
                </a>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="font-bold text-slate-800 block">Admissions WhatsApp</span>
                  <span className="text-xs text-slate-400">Enrollment & Form Enquiries</span>
                </div>
                <a
                  href="https://wa.me/233241133632"
                  className="font-mono font-bold text-[#25D366] hover:underline"
                >
                  024 113 3632
                </a>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Official Email</span>
                  <span className="text-xs text-slate-400">Direct Inquiries</span>
                </div>
                <a
                  href="mailto:info@queensburymontessori.edu.gh"
                  className="text-xs font-semibold text-[#0d176d] hover:text-[#f95716] transition-colors truncate max-w-[180px]"
                >
                  info@queensburymontessori.edu.gh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Inquiry Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />

        <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-2">
          {language === 'tw' ? 'KASA KYERƐ YƐN' : 'SEND A DIRECT INQUIRY'}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] mb-3 tracking-tight">
          {language === 'tw' ? 'Mena Yɛn Nkratoɔ Ntɛm' : 'We Welcome Your Questions'}
        </h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed max-w-2xl">
          {language === 'tw'
            ? 'Hyehyɛ nkyerɛwee yi na yɛn akyerɛkyerɛfoɔ ne wo bɛkasa ntɛm ara fa abofra no adesua ho.'
            : 'Whether you have questions about our Crèche ratios, Montessori work cycles, nutritional lunches, or fees, our admissions desk will respond within 24 hours.'}
        </p>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-emerald-900">
              {language === 'tw' ? 'Yɛanya Wo Nkratoɔ No!' : 'Inquiry Sent Successfully!'}
            </h4>
            <p className="text-emerald-700 text-xs sm:text-sm">
              {language === 'tw'
                ? 'Yɛbɛkasa akyerɛ wo ntɛm ara. Medaase.'
                : 'Thank you for contacting Queensbury Montessori School. Our admissions team will connect with you shortly.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'tw' ? 'Wo Din *' : 'Parent / Guardian Name *'}
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'tw' ? 'Email Beaeɛ' : 'Email Address'}
                </label>
                <input
                  type="email"
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  {language === 'tw' ? 'Adesua Gyinapɛn' : 'Stage of Interest'}
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
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-1">
                {language === 'tw' ? 'Wo Nkratoɔ Anaa Asɛmmisa' : 'Your Message / Inquiry'}
              </label>
              <textarea
                rows={4}
                required
                placeholder={
                  language === 'tw'
                    ? 'Kyerɛw nsɛmmisa biara fa sukuu no, adidie, mmofra mfeɛ, anaasɛ nsrahwɛ ho...'
                    : 'Please share your questions regarding enrollment, classroom placements, admissions timeline, or booking a visit...'
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0d176d] hover:bg-[#132087] text-white font-bold text-sm tracking-wide uppercase shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{language === 'tw' ? 'MENA NKRATOƆ NO' : 'SUBMIT INQUIRY'}</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
