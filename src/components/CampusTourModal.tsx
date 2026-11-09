import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranch?: string;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({
  isOpen,
  onClose,
  defaultBranch = 'Santa Maria Campus Prepared Environments',
}) => {
  const { language } = useLanguage();
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState(defaultBranch);
  const [childAge, setChildAge] = useState('Nursery (2–4 Years)');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('9:00 AM – 10:30 AM (Montessori Work Cycle)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*QUEENSBURY MONTESSORI SANTA MARIA CAMPUS TOUR REQUEST*
Parent Name: ${parentName}
Phone Number: ${phone}
Desired Environment: ${branch}
Child Age Group: ${childAge}
Requested Date: ${preferredDate || 'Earliest weekday available'}
Observation Slot: ${preferredSlot}`;

    const encoded = encodeURIComponent(message);
    setTimeout(() => {
      window.open(`https://wa.me/233241133632?text=${encoded}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#060c24] text-slate-800 dark:text-slate-100 rounded-3xl max-w-lg w-full max-h-[92dvh] flex flex-col border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden relative">
        {/* Top Orange Accent */}
        <div className="h-2 bg-[#f95716] w-full shrink-0" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-white/10 flex items-start justify-between bg-slate-50/50 dark:bg-white/5 shrink-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#f95716] font-bold block mb-1">
              {language === 'tw' ? 'SUKUU BEA NSRAHWƐ' : 'CAMPUS WALKTHROUGH'}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0d176d] dark:text-white tracking-tight">
              {language === 'tw' ? 'Siesie Nsrahwɛ Da' : 'Book a Campus Tour'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
              {language === 'tw'
                ? 'Bɛhwɛ mmofra no sukuudan ne nneɛma a wɔasiesie wɔ akwankyerɛ pa mu.'
                : 'Experience real Montessori work cycles in our prepared environments.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4 overflow-y-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#0d176d] dark:text-white">
              {language === 'tw' ? 'Yɛanya Wo Nsrahwɛ Adesrɛ No!' : 'Tour Request Initiated!'}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs mx-auto leading-relaxed">
              {language === 'tw'
                ? 'Yɛreba abɛbue WhatsApp na wo ne yɛn admissions panyin ahyɛ da pɔtee.'
                : 'Opening WhatsApp to confirm your preferred observation appointment with our Campus Tour Director.'}
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-3 bg-[#0d176d] dark:bg-[#1a2894] hover:bg-[#132087] dark:hover:bg-[#2537c7] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5 overflow-y-auto">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {language === 'tw' ? 'Ɔwofoɔ Din *' : 'Parent / Guardian Name *'}
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Emmanuel Asante"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full text-sm p-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'tw' ? 'Frɛ / WhatsApp *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 024 113 3632"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm p-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'tw' ? 'Sukuudan a Wopɛ sɛ Wohwɛ' : 'Environment to Observe'}
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full text-sm p-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] focus:outline-none"
                >
                  <option value="All Campus Prepared Environments">All Environments (Santa Maria)</option>
                  <option value="Crèche Sleep & Daycare Room">Crèche & Daycare (0–2 Years)</option>
                  <option value="Nursery Sensorial Atelier">Nursery Atelier (2–4 Years)</option>
                  <option value="Kindergarten & Math Wing">Kindergarten Wing (4–6 Years)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'tw' ? 'Abofra Gyinapɛn' : 'Child\'s Stage'}
                </label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full text-sm p-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] focus:outline-none"
                >
                  <option value="Crèche (0–2 Years)">Crèche (0–2 Years)</option>
                  <option value="Nursery (2–4 Years)">Nursery (2–4 Years)</option>
                  <option value="Kindergarten (4–6 Years)">Kindergarten (4–6 Years)</option>
                  <option value="Primary (6–12 Years)">Primary (6–12 Years)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'tw' ? 'Da a Wopɛ' : 'Preferred Date'}
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full text-sm p-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {language === 'tw' ? 'Bere a Wopɛ' : 'Preferred Observation Time'}
              </label>
              <select
                value={preferredSlot}
                onChange={(e) => setPreferredSlot(e.target.value)}
                className="w-full text-sm p-3 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl focus:bg-white dark:focus:bg-[#080f30] focus:border-[#f95716] focus:outline-none"
              >
                <option value="9:00 AM – 10:30 AM (Montessori Work Cycle)">
                  9:00 AM – 10:30 AM (Morning Montessori Work Cycle)
                </option>
                <option value="11:00 AM – 12:00 PM (Dining & Practical Life)">
                  11:00 AM – 12:00 PM (Dining & Outdoor Sensory Play)
                </option>
                <option value="2:00 PM – 3:30 PM (Afternoon Creative Atelier)">
                  2:00 PM – 3:30 PM (Afternoon Creative & Co-curricular)
                </option>
              </select>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs text-slate-600 dark:text-slate-300 font-semibold hover:text-slate-900 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#f95716] hover:bg-[#e0480b] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Confirm Tour & Open WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
