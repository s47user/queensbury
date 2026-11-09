import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Check,
  Copy,
  Navigation,
  ShieldCheck,
  ExternalLink,
  Car,
  Compass,
  LocateFixed,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LocationContact: React.FC = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    stage: 'Montessori Nursery (2–4 Years)',
    message: '',
  });

  // Maps / Commute State
  const [startLocation, setStartLocation] = useState('');
  const [travelMode, setTravelMode] = useState<'driving' | 'transit' | 'walking'>('driving');
  const [locating, setLocating] = useState(false);

  const fullAddress =
    'Queensbury Montessori School, Santa Maria (Auntie Aku / Last Stop), near North Deseret Hospital, Accra, Ghana';
  const schoolCoordinates = '5.6033,-0.2785'; // Santa Maria, Accra

  const popularAreas = [
    'Santa Maria',
    'Kwashieman',
    'Sowutuom',
    'Lapaz',
    'Ablekuma',
    'Awoshie',
    'Anyaa',
    'Mallam',
    'Achimota',
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleUseCurrentLocation = () => {
    setLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStartLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
          setLocating(false);
        },
        () => {
          // Fallback if browser permission is denied: set standard "My Location" for Google Maps
          setStartLocation('My Location');
          setLocating(false);
        },
        { timeout: 6000 }
      );
    } else {
      setStartLocation('My Location');
      setLocating(false);
    }
  };

  const handleOpenGoogleMapsDirections = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const destination = encodeURIComponent(
      'Queensbury Montessori School, Santa Maria, Auntie Aku Last Stop, Accra, Ghana'
    );
    const originParam = startLocation.trim()
      ? `&origin=${encodeURIComponent(startLocation.trim())}`
      : '&origin=My+Location';
    const modeParam = travelMode ? `&travelmode=${travelMode}` : '';

    const url = `https://www.google.com/maps/dir/?api=1${originParam}&destination=${destination}${modeParam}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct clear, professional WhatsApp script
    const waScript = `*QUEENSBURY MONTESSORI SCHOOL - INQUIRY*
----------------------------------------
👤 *Parent / Guardian:* ${formData.parentName.trim()}
📞 *Phone / WhatsApp:* ${formData.phone.trim()}
${formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : ''}🎓 *Stage of Interest:* ${formData.stage}

💬 *Message / Question:*
"${formData.message.trim()}"
----------------------------------------
📍 *Campus:* Santa Maria (Auntie Aku Last Stop), Accra
(Sent from queensburymontessori.edu.gh)`;

    const encoded = encodeURIComponent(waScript);
    const targetUrl = `https://wa.me/233241133632?text=${encoded}`;

    setSubmittedMessage(targetUrl);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full bg-[#fafafc] dark:bg-[#0a1128] text-slate-800 dark:text-slate-100 space-y-12 transition-colors duration-300">
      {/* 1. Official Campus Location & Contact Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Campus Details & Operation Hours (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#101b42] rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#f95716]">
                OFFICIAL SANTA MARIA CAMPUS
              </span>
              <span className="text-xs text-slate-400 font-sans">ACCRA · EST. 2020</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white tracking-tight mb-4">
              {language === 'tw' ? 'Yɛn Sukuu Bea Wɔ Santa Maria' : 'Queensbury Montessori Campus'}
            </h3>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 mb-8">
              <div className="flex items-start gap-3 bg-slate-50 dark:bg-[#09102b] p-4 rounded-2xl border border-slate-100 dark:border-white/10">
                <MapPin className="w-5 h-5 text-[#f95716] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white leading-snug">
                    {fullAddress}
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-medium mt-1">
                    {language === 'tw'
                      ? 'Ahyɛnsodeɛ: Ɛbɛn North Deseret Hospital, Auntie Aku Last Stop.'
                      : 'Landmark: Near North Deseret Hospital, Auntie Aku Last Stop.'}
                  </p>
                </div>
              </div>

              {/* Operating Hours Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#09102b] border border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase text-[#0d176d] dark:text-amber-300 mb-1">
                    <Clock className="w-4 h-4 text-[#f95716]" />
                    <span>School Hours</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    Monday – Friday
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    7:00 AM – 3:00 PM (Regular)
                  </span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold block mt-0.5">
                    After-care until 4:00 PM
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#09102b] border border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase text-[#0d176d] dark:text-amber-300 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#f95716]" />
                    <span>Admissions & Visits</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    Daily Campus Visits
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    8:30 AM – 2:00 PM
                  </span>
                  <span className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold block mt-0.5">
                    Bookings via WhatsApp
                  </span>
                </div>
              </div>

              {/* Commute catchment note */}
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {language === 'tw'
                  ? 'Ɛbɛn awofoɔ a wɔwɔ Santa Maria, Kwashieman, Sowutuom, Ablekuma, Lapaz, Anyaa, ne Awoshie.'
                  : 'Convenient morning commute for families across Santa Maria, Kwashieman, Sowutuom, Ablekuma, Lapaz, Anyaa, and Awoshie.'}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => handleOpenGoogleMapsDirections()}
              className="py-3 px-5 sm:px-6 rounded-full bg-[#0d176d] hover:bg-[#132087] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#f95716]" />
              <span>{language === 'tw' ? 'Kwan a Wobɛfa So Aba (Google Maps)' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="py-3 px-5 sm:px-6 rounded-full border border-slate-200 dark:border-white/15 hover:border-slate-300 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{language === 'tw' ? 'Wɔatwe Beaeɛ No!' : 'Address Copied!'}</span>
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
          <div className="bg-gradient-to-br from-[#0c1a4d] to-[#0d176d] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#f95716]">
                INSTANT WHATSAPP DESK
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-sans font-semibold">
                ● Active Now
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3 tracking-tight">
              {language === 'tw' ? 'Kasa Kyerɛ Yɛn Wɔ WhatsApp So' : 'Talk Directly with Admissions'}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
              {language === 'tw'
                ? 'Wopɛ sɛ wonya mmuaeɛ ntɛm ara anaa? Kasa kyerɛ yɛn admissions team wɔ WhatsApp so.'
                : 'Need immediate details on classroom openings, tuition structure, or arranging a morning visit? Chat directly with our admissions coordinator.'}
            </p>

            <a
              href="https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori%20School%2C%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20your%20Santa%20Maria%20campus."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{language === 'tw' ? 'BUE WHATSAPP (024 113 3632)' : 'OPEN WHATSAPP: 024 113 3632'}</span>
            </a>
          </div>

          {/* Direct Phone & Email Helplines */}
          <div className="bg-white dark:bg-[#101b42] rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-md">
            <h4 className="font-serif text-xl font-bold text-[#0d176d] dark:text-white mb-4">
              {language === 'tw' ? 'Frɛ Yɛn Tɛlɛfon So' : 'Phone & Email Channels'}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">Main Campus Line</span>
                  <span className="text-xs text-slate-400">Head of School & Administration</span>
                </div>
                <a
                  href="tel:0505688484"
                  className="font-sans font-bold text-[#0d176d] dark:text-amber-300 hover:text-[#f95716] transition-colors"
                >
                  050 568 8484
                </a>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">Admissions WhatsApp</span>
                  <span className="text-xs text-slate-400">Enrollment & Daily Enquiries</span>
                </div>
                <a
                  href="https://wa.me/233241133632"
                  className="font-sans font-bold text-[#25D366] hover:underline"
                >
                  024 113 3632
                </a>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">Official Email</span>
                  <span className="text-xs text-slate-400">General Information</span>
                </div>
                <a
                  href="mailto:info@queensburymontessori.edu.gh"
                  className="text-xs font-semibold text-[#0d176d] dark:text-amber-300 hover:text-[#f95716] transition-colors truncate max-w-[190px]"
                >
                  info@queensburymontessori.edu.gh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Google Maps Navigation to Santa Maria */}
      <div className="bg-white dark:bg-[#101b42] rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#0d176d]" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-sans block mb-1">
              LIVE NAVIGATION & COMMUTE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white">
              Directions to Queensbury Montessori School
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 max-w-2xl font-light">
              Enter your starting neighborhood or use your current location to open turn-by-turn directions directly in Google Maps.
            </p>
          </div>

          <button
            type="button"
            onClick={handleUseCurrentLocation}
            disabled={locating}
            className="self-start md:self-auto py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60 dark:border-white/10"
          >
            <LocateFixed className={`w-4 h-4 text-[#f95716] ${locating ? 'animate-spin' : ''}`} />
            <span>{locating ? 'Detecting Location...' : 'Use My Current Location'}</span>
          </button>
        </div>

        {/* Form and Quick Area Selector */}
        <form onSubmit={handleOpenGoogleMapsDirections} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-7">
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Starting Point / Your Location in Accra
              </label>
              <div className="relative">
                <Compass className="w-4 h-4 text-[#f95716] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={startLocation}
                  onChange={(e) => setStartLocation(e.target.value)}
                  placeholder="e.g. Lapaz, Sowutuom, Kwashieman, Ablekuma, or 'My Location'"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Travel Mode
              </label>
              <select
                value={travelMode}
                onChange={(e) => setTravelMode(e.target.value as any)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white cursor-pointer"
              >
                <option value="driving">🚗 Driving / School Drop-off</option>
                <option value="transit">🚌 Transit (Trotro & Taxi)</option>
                <option value="walking">🚶 Walking (Local Neighborhood)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#0d176d] hover:bg-[#132087] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Clickable Neighborhood Pills */}
          <div>
            <span className="text-[11px] font-sans uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
              Quick Pick Accra Neighborhoods:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularAreas.map((area) => (
                <button
                  type="button"
                  key={area}
                  onClick={() => {
                    setStartLocation(area);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                    startLocation === area
                      ? 'bg-[#0d176d] text-white border-[#0d176d]'
                      : 'bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#f95716]'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </form>

        {/* Embedded Interactive Map Frame */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#09102b] aspect-16/9 sm:aspect-21/9 shadow-inner relative">
          <iframe
            title="Queensbury Montessori School Location"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'contrast(1.05)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Queensbury+Montessori+School+Santa+Maria+Accra+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
          <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-[#101b42]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow text-xs font-semibold text-[#0d176d] dark:text-amber-300 flex items-center gap-1.5 pointer-events-none">
            <MapPin className="w-3.5 h-3.5 text-[#f95716]" />
            <span>Santa Maria (Auntie Aku Last Stop)</span>
          </div>
        </div>
      </div>

      {/* 3. Direct Admissions Inquiry Form Linked Directly to WhatsApp */}
      <div className="bg-white dark:bg-[#101b42] rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f95716]/10 text-[#f95716] text-[11px] font-sans font-bold uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>DIRECT WHATSAPP INQUIRY</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d176d] dark:text-white mb-2 tracking-tight">
              {language === 'tw' ? 'Mena Yɛn Nkratoɔ Ntɛm Ara' : 'Send an Inquiry to Admissions'}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl leading-relaxed font-light">
              {language === 'tw'
                ? 'Hyehyɛ nkyerɛwee yi. Sɛ wopene so a, ɛbɛbue WhatsApp ama wo de wo din ne asɛmmisa akɔma admissions panyin no ntɛm ara.'
                : 'Have questions about Crèche ratios, Nursery placements, Kindergarten curriculum, tuition fees, or booking a visit? Fill out the details below to open a pre-written WhatsApp message directly to our admissions team.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#09102b] border border-slate-100 dark:border-white/10 shrink-0 text-right">
            <span className="text-[10px] font-sans text-slate-400 uppercase block font-semibold">Official Helpline</span>
            <span className="font-sans font-bold text-sm text-[#0d176d] dark:text-amber-300 block mt-0.5">024 113 3632</span>
            <span className="text-[11px] text-[#25D366] font-semibold block">WhatsApp Direct</span>
          </div>
        </div>

        {submittedMessage ? (
          <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center space-y-4 animate-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-lg">
              <MessageSquare className="w-7 h-7 fill-current" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0d176d] dark:text-white">
              WhatsApp Conversation Opened!
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
              Your inquiry has been formatted and directed to our admissions coordinator at <strong>024 113 3632</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={submittedMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>Click here if WhatsApp didn't open</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmittedMessage(null);
                  setFormData({
                    parentName: '',
                    phone: '',
                    email: '',
                    stage: 'Montessori Nursery (2–4 Years)',
                    message: '',
                  });
                }}
                className="py-3 px-6 rounded-full border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 font-semibold text-xs transition-all cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {language === 'tw' ? 'Wo Din *' : 'Parent / Guardian Name *'}
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
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {language === 'tw' ? 'Email Beaeɛ (Sɛ Wowɔ Bi a)' : 'Email Address (Optional)'}
                </label>
                <input
                  type="email"
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {language === 'tw' ? 'Adesua Gyinapɛn' : 'Stage of Interest'}
                </label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white cursor-pointer"
                >
                  <option value="Crèche & Daycare (0–2 Years)">Crèche & Daycare (0–2 Years)</option>
                  <option value="Montessori Nursery (2–4 Years)">Montessori Nursery (2–4 Years)</option>
                  <option value="Kindergarten (4–6 Years)">Kindergarten (4–6 Years)</option>
                  <option value="General Campus Question / Fees">General Campus Question / Fees</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                {language === 'tw' ? 'Wo Nkratoɔ Anaa Asɛmmisa *' : 'Your Message / Inquiry *'}
              </label>
              <textarea
                rows={4}
                required
                placeholder={
                  language === 'tw'
                    ? 'Kyerɛw nsɛmmisa biara fa sukuu no, adidie, mmofra mfeɛ, anaasɛ nsrahwɛ ho...'
                    : 'Please share your questions regarding enrollment timeline, fees, classroom placement, or booking a walkthrough...'
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09102b] focus:bg-white dark:focus:bg-[#142052] focus:outline-none focus:ring-2 focus:ring-[#f95716] text-sm text-slate-900 dark:text-white resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Opens directly into WhatsApp with your pre-filled inquiry.</span>
              </div>

              <button
                type="submit"
                className="py-4 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{language === 'tw' ? 'MENA WƆ WHATSAPP SO ↗' : 'Send Inquiry via WhatsApp ↗'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
