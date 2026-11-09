import React, { useState } from 'react';
import { Brain, MapPin, Video, Calendar, Send, Sparkles, AlertCircle, Play, Upload, CheckCircle2, Loader2, Navigation, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ParentPortalFeatures: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'advisor' | 'maps' | 'animator' | 'notices'>('advisor');

  // 1. Advisor State (gemini-4-argon with high thinking)
  const [childAge, setChildAge] = useState<string>('3 years');
  const [advisorTopic, setAdvisorTopic] = useState<string>('Independence & Tantrums');
  const [advisorQuery, setAdvisorQuery] = useState<string>('My 3-year-old struggles to share toys and gets frustrated when dressing in the morning. How can Montessori methods help at home?');
  const [advisorResponse, setAdvisorResponse] = useState<string | null>(null);
  const [advisorLoading, setAdvisorLoading] = useState<boolean>(false);
  const [advisorError, setAdvisorError] = useState<string | null>(null);

  // 2. Maps Grounding State (gemini-3.8-flash with googleMaps)
  const [userOrigin, setUserOrigin] = useState<string>('Lapaz, Accra');
  const [travelMode, setTravelMode] = useState<string>('driving');
  const [mapsResponse, setMapsResponse] = useState<string | null>(null);
  const [mapsLoading, setMapsLoading] = useState<boolean>(false);
  const [mapsError, setMapsError] = useState<string | null>(null);

  // 3. Animator State (gemini-omni-1.2-flash)
  const [animatorImage, setAnimatorImage] = useState<string>('/src/assets/images/programme_nursery_practical_1793950102981.jpg');
  const [animatorPrompt, setAnimatorPrompt] = useState<string>('A child carefully pours water with gentle ripples, soft morning sunlight, natural slow-motion movement');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [videoData, setVideoData] = useState<string | null>(null);
  const [animatorLoading, setAnimatorLoading] = useState<boolean>(false);
  const [animatorError, setAnimatorError] = useState<string | null>(null);

  // Handlers
  const handleAskAdvisor = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdvisorLoading(true);
    setAdvisorError(null);
    setAdvisorResponse(null);

    try {
      const res = await fetch('/api/pedagogy-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          childAge,
          topic: advisorTopic,
          parentQuery: advisorQuery,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to get pedagogical consultation');
      setAdvisorResponse(data.advice);
    } catch (err: any) {
      setAdvisorError(err.message || 'Consultation service unavailable');
    } finally {
      setAdvisorLoading(false);
    }
  };

  const handleGetMapGuide = async (e: React.FormEvent) => {
    e.preventDefault();
    setMapsLoading(true);
    setMapsError(null);
    setMapsResponse(null);

    try {
      const res = await fetch('/api/commute-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userOrigin,
          travelMode,
          destination: 'Queensbury Montessori School, Santa Maria, Auntie Aku Last Stop, near North Deseret Hospital, Accra, Ghana',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to calculate commute guide');
      setMapsResponse(data.guide);
    } catch (err: any) {
      setMapsError(err.message || 'Commute guidance service unavailable');
    } finally {
      setMapsLoading(false);
    }
  };

  const handleGenerateVideo = async () => {
    setAnimatorLoading(true);
    setAnimatorError(null);
    setVideoData(null);

    try {
      const res = await fetch('/api/animate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: animatorPrompt,
          aspectRatio,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Video animation failed');
      setVideoData(data.videoData);
    } catch (err: any) {
      setAnimatorError(err.message || 'Video generation service currently processing or unavailable');
    } finally {
      setAnimatorLoading(false);
    }
  };

  return (
    <section id="parent-portal" className="py-12 bg-[#fafafc] dark:bg-[#030718] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold mb-2">
            PARENT RESOURCES & COMMUNITY SUITE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0d176d] dark:text-white font-bold tracking-tight leading-tight">
            Parent tools designed to support your child’s journey.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Access our Montessori Pedagogical Advisor, commute directions to our Santa Maria campus grounded in Google Maps, classroom memory animator, and community updates.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#060c24] rounded-2xl max-w-3xl mb-8 border border-slate-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab('advisor')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'advisor'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Brain className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Pedagogical Advisor</span>
          </button>
          <button
            onClick={() => setActiveTab('maps')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'maps'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Maps & Commute (Santa Maria)</span>
          </button>
          <button
            onClick={() => setActiveTab('animator')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'animator'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Video className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Learning Moments</span>
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`flex items-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'notices'
                ? 'bg-[#0d176d] dark:bg-[#f95716] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#f95716] dark:text-white" />
            <span>Parent Notices & PTA</span>
          </button>
        </div>

        {/* Tab 1: Pedagogical Advisor */}
        {activeTab === 'advisor' && (
          <div className="bg-white dark:bg-[#060c24] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                MONTESSORI EXPERT CONSULTATION
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                Consult the Montessori Pedagogical Advisor
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                Ask early-childhood questions regarding toddler development, language transition, emotional regulation, or creating a Montessori home environment in Ghana.
              </p>
            </div>

            <form onSubmit={handleAskAdvisor} className="space-y-4 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                    Child’s Age / Stage
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                  >
                    <option value="14 months (Crèche)">14 months (Crèche)</option>
                    <option value="2.5 years (Nursery Transition)">2.5 years (Nursery Transition)</option>
                    <option value="3 years (Nursery)">3 years (Nursery)</option>
                    <option value="4.5 years (Kindergarten)">4.5 years (Kindergarten)</option>
                    <option value="5 to 6 years (KG2 & Primary Prep)">5 to 6 years (KG2 & Primary Prep)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                    Consultation Focus
                  </label>
                  <select
                    value={advisorTopic}
                    onChange={(e) => setAdvisorTopic(e.target.value)}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                  >
                    <option value="Independence & Self-Regulation">Independence & Self-Regulation</option>
                    <option value="Potty Learning & Self-Care">Potty Learning & Self-Care</option>
                    <option value="Separation Anxiety & School Transition">Separation Anxiety & School Transition</option>
                    <option value="Bilingual Language Acquisition">Bilingual Language Acquisition</option>
                    <option value="Montessori Mathematics at Home">Montessori Mathematics at Home</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                  Your Specific Question or Household Situation
                </label>
                <textarea
                  rows={3}
                  value={advisorQuery}
                  onChange={(e) => setAdvisorQuery(e.target.value)}
                  placeholder="Describe your situation or question..."
                  className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={advisorLoading}
                  className="px-6 py-3 bg-[#0d176d] hover:bg-[#f95716] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 disabled:opacity-50 shadow-md cursor-pointer"
                >
                  {advisorLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Consulting Montessori Advisor...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Request Montessori Consultation</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {advisorError && (
              <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs">
                {advisorError}
              </div>
            )}

            {advisorResponse && (
              <div className="mt-6 p-6 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 animate-in fade-in">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Pedagogical Analysis & Guidance</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed whitespace-pre-wrap">
                  {advisorResponse}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Maps & Commute */}
        {activeTab === 'maps' && (
          <div className="bg-white dark:bg-[#060c24] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                CAMPUS COMMUTE TO SANTA MARIA
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                Plan Your Commute to Queensbury (Santa Maria)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                Get driving directions, traffic landmarks, and arrival guidance to our Santa Maria (Auntie Aku Last Stop) campus near North Deseret Hospital.
              </p>
            </div>

            <form onSubmit={handleGetMapGuide} className="space-y-4 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                    Your Starting Neighborhood (Accra)
                  </label>
                  <input
                    type="text"
                    value={userOrigin}
                    onChange={(e) => setUserOrigin(e.target.value)}
                    placeholder="e.g. Sowutuom, Lapaz, Kwashieman, Ablekuma"
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                    Travel Mode
                  </label>
                  <select
                    value={travelMode}
                    onChange={(e) => setTravelMode(e.target.value)}
                    className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                  >
                    <option value="driving">Driving / School Carpool</option>
                    <option value="transit">Public Transit (Trotro & Taxi)</option>
                    <option value="walking">Walking / Local Neighborhood</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={mapsLoading}
                className="px-6 py-3 bg-[#0d176d] hover:bg-[#f95716] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 disabled:opacity-50 shadow-md cursor-pointer"
              >
                {mapsLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Calculating Commute...</span>
                  </>
                ) : (
                  <>
                    <Navigation className="w-4 h-4" />
                    <span>Get Commute Directions</span>
                  </>
                )}
              </button>
            </form>

            {mapsError && (
              <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 text-xs">
                {mapsError}
              </div>
            )}

            {mapsResponse && (
              <div className="mt-6 p-6 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 animate-in fade-in">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#f95716] font-bold mb-2">
                  <MapPin className="w-4 h-4 text-[#0d176d] dark:text-[#f95716]" />
                  <span>Santa Maria Route Guidance</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed whitespace-pre-wrap">
                  {mapsResponse}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Learning Moments Video Animator */}
        {activeTab === 'animator' && (
          <div className="bg-white dark:bg-[#060c24] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                VISUAL MOMENTS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                Classroom Learning Moments Animator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                Bring Montessori discovery photos to life with gentle cinematic motion, celebrating early childhood milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Selected Reference Photograph
                </label>
                <div className="aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#020617] mb-4">
                  <img
                    src={animatorImage}
                    alt="Montessori learning scene"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                      Animation Prompt
                    </label>
                    <input
                      type="text"
                      value={animatorPrompt}
                      onChange={(e) => setAnimatorPrompt(e.target.value)}
                      className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
                      Aspect Ratio
                    </label>
                    <select
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value as any)}
                      className="w-full text-xs p-3 bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] outline-none"
                    >
                      <option value="16:9">Landscape (16:9)</option>
                      <option value="9:16">Portrait / Mobile (9:16)</option>
                    </select>
                  </div>

                  <button
                    onClick={handleGenerateVideo}
                    disabled={animatorLoading}
                    className="w-full py-3 px-4 bg-[#0d176d] hover:bg-[#f95716] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-md cursor-pointer"
                  >
                    {animatorLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Rendering Video Animation...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Generate Learning Moment Video</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center p-8 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-center">
                {videoData ? (
                  <video
                    src={`data:video/mp4;base64,${videoData}`}
                    controls
                    autoPlay
                    loop
                    className="rounded-xl shadow-xl max-h-[300px]"
                  />
                ) : (
                  <div className="text-center text-slate-500 dark:text-slate-400">
                    <Video className="w-12 h-12 text-[#f95716] mx-auto mb-3 opacity-60" />
                    <h4 className="font-serif text-lg font-bold text-[#0d176d] dark:text-white mb-1">
                      Live Video Playback
                    </h4>
                    <p className="text-xs font-light max-w-xs text-slate-500 dark:text-slate-400">
                      Click the generate button to animate this Montessori learning moment.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Parent Notices & PTA */}
        {activeTab === 'notices' && (
          <div className="bg-white dark:bg-[#060c24] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden animate-in fade-in duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#f95716]" />
            <div className="max-w-2xl mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-1">
                COMMUNITY BULLETIN · SANTA MARIA
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
                Parent-Teacher Association & Term Updates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-light">
                Direct bulletins for current families regarding academic milestones, health notices, and PTA assemblies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-[#0d176d] dark:text-white text-base">
                    Term 3 Uniform & Footwear Guidelines
                  </h4>
                  <span className="text-[11px] font-mono text-[#f95716] uppercase font-bold bg-[#f95716]/10 px-2.5 py-1 rounded-full">
                    Notice 01
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Please ensure children have comfortable, velcro or slip-on indoor shoes that empower them to practice dressing independently each morning in their classroom.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-[#0d176d] dark:text-white text-base">
                    PTA Executive Assembly & Growth Review
                  </h4>
                  <span className="text-[11px] font-mono text-[#0d176d] dark:text-blue-300 uppercase font-bold bg-blue-100 dark:bg-blue-950/60 px-2.5 py-1 rounded-full">
                    Notice 02
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  Our termly parent-faculty gathering will be held on campus Saturday morning. Light refreshments and developmental portfolio reviews provided.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
