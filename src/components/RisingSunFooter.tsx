import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, ArrowUp, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react';

interface RisingSunFooterProps {
  onNavigate: (page: string) => void;
}

export const RisingSunFooter: React.FC<RisingSunFooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0d176d] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Crest & Brand Statement (4 cols) */}
          <div className="lg:col-span-4">
            {/* School Crest Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-14 rounded-xl bg-gradient-to-b from-[#132087] to-[#070d42] border-2 border-amber-400 p-1.5 flex flex-col items-center justify-between shadow-lg">
                <span className="text-[8px] font-mono font-bold text-amber-300">★★★</span>
                <span className="font-serif text-[12px] font-bold text-white tracking-tight">QM</span>
                <div className="w-5 h-0.5 bg-[#f95716] rounded-full" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  Queensbury Montessori
                </h3>
                <p className="text-xs italic text-white/70">
                  Where Curious Minds Grow into Lifelong Explorers
                </p>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              An authentic early childhood Montessori haven in Santa Maria, Auntie Aku, Accra. Nurturing cognitive autonomy, sensorial exploration, and emotional security from Crèche to Kindergarten.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
              ].map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f95716] hover:text-white flex items-center justify-center transition-all duration-300 text-white/80 cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-4">
              QUICK LINKS
            </span>
            <ul className="space-y-2.5 text-sm text-white/80">
              {[
                { id: 'home', label: 'Home' },
                { id: 'philosophy', label: 'Philosophy' },
                { id: 'about', label: 'About Us' },
                { id: 'programmes', label: 'Programmes' },
                { id: 'facilities', label: 'Facilities' },
                { id: 'admissions', label: 'Admissions' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'news', label: 'News' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#f95716] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Real Location (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-4">
              CAMPUS & CONTACT
            </span>
            <div className="space-y-3.5 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f95716] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-white/85">
                  Santa Maria (Auntie Aku / Last Stop), near North Deseret Hospital, Accra, Ghana
                </p>
              </div>

              <div className="pt-1 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Official Phone:</span>
                  <a href="tel:0505688484" className="font-mono font-semibold text-white hover:text-[#f95716]">
                    050 568 8484
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Admissions WhatsApp:</span>
                  <a href="https://wa.me/233241133632" target="_blank" rel="noopener noreferrer" className="font-mono font-semibold text-emerald-400 hover:text-emerald-300">
                    024 113 3632
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Email:</span>
                  <a href="mailto:info@queensburymontessori.edu.gh" className="hover:text-[#f95716] text-white/90">
                    info@queensburymontessori.edu.gh
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-white/70">
                <Clock className="w-3.5 h-3.5 text-[#f95716] shrink-0" />
                <span>Monday – Friday: 7:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Stay Updated Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold tracking-widest text-[#f95716] uppercase font-mono block mb-4">
              STAY CONNECTED
            </span>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Subscribe to receive term updates, parenting insights, and early childhood developmental milestones.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#f95716] pr-28"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-[#f95716] hover:bg-[#e0480b] text-white font-mono text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4 text-center sm:text-left">
          <p>© 2026 Queensbury Montessori School. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => onNavigate('admissions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Admissions Policy
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Santa Maria Campus Directions
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f95716] text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
