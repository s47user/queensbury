import React, { useEffect, useState, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  MapPin,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { GalleryPhoto, getNextPhotoIndex, getPrevPhotoIndex } from '../utils/gallery';

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsZoomed(false);
      setImageLoaded(false);
    }
  }, [initialIndex, isOpen]);

  const currentPhoto = photos[currentIndex];

  const handleNext = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => getNextPhotoIndex(prev, photos.length));
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setImageLoaded(false);
    setCurrentIndex((prev) => getPrevPhotoIndex(prev, photos.length));
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="High-resolution photo lightbox"
      className="fixed inset-0 z-50 bg-[#070908]/96 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200 select-none overflow-hidden"
    >
      {/* Lightbox Top Header Bar */}
      <div className="flex items-center justify-between gap-4 py-2 border-b border-white/10 shrink-0">
        {/* Left: Photo Title & Category */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="px-2.5 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-[#10B981] font-sans text-xs uppercase tracking-wider font-semibold shrink-0">
            {currentPhoto.category}
          </span>
          <h2 className="font-serif font-bold text-sm sm:text-base text-white truncate max-w-[200px] sm:max-w-md">
            {currentPhoto.title}
          </h2>
        </div>

        {/* Right: Counter, Zoom & Close Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Index Counter */}
          <span className="text-xs font-sans text-[#94A3B8] px-2 py-1 rounded bg-white/5 border border-white/10">
            {currentIndex + 1} / {photos.length}
          </span>

          {/* Zoom Toggle */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-[#10B981]"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            aria-label={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close Lightbox Button */}
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white bg-[#141B17] hover:bg-[#1E2822] border border-white/15 hover:border-[#10B981]/50 rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-[#10B981]"
            aria-label="Close high-resolution photo viewer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Main Center Image Viewport */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden min-h-0">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-10 p-3 sm:p-4 rounded-full bg-[#0A0E0C]/80 hover:bg-[#10B981] text-white hover:text-[#070908] border border-white/15 hover:border-[#10B981] transition-all shadow-2xl focus-visible:outline-2 focus-visible:outline-[#10B981]"
          aria-label="Previous photograph"
          title="Previous (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Main High-Resolution Photo */}
        <div
          className={`relative max-w-5xl max-h-[62vh] sm:max-h-[68vh] w-full flex items-center justify-center transition-all duration-300 ${
            isZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            onLoad={() => setImageLoaded(true)}
            className={`max-w-full max-h-[62vh] sm:max-h-[68vh] object-contain rounded-xl border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
            }`}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-10 p-3 sm:p-4 rounded-full bg-black/80 hover:bg-[#f95716] text-white border border-white/15 hover:border-[#f95716] transition-all shadow-2xl focus-visible:outline-2 focus-visible:outline-[#f95716] cursor-pointer"
          aria-label="Next photograph"
          title="Next (Right Arrow)"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Lightbox Footer: Educational Caption & Thumbnail Strip */}
      <div className="shrink-0 bg-[#0d176d]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3">
        {/* Description Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-[#f95716] font-sans">{currentPhoto.pillar}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/80">{currentPhoto.age}</span>
              <span className="text-white/30">•</span>
              <span className="text-amber-300 font-medium">Santa Maria Campus</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed font-light max-w-3xl">
              {currentPhoto.description}
            </p>
          </div>

          <a
            href={`https://wa.me/233241133632?text=Hello%20Queensbury%20Montessori,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(
              currentPhoto.title
            )}%20learning%20environment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#f95716] text-white text-xs font-bold hover:bg-orange-600 transition-all self-start md:self-auto shrink-0 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire About This Stage</span>
          </a>
        </div>

        {/* Thumbnail Carousel Strip */}
        <div className="pt-2 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {photos.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setImageLoaded(false);
                setCurrentIndex(idx);
              }}
              className={`relative shrink-0 w-14 h-11 sm:w-16 sm:h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#f95716] ${
                idx === currentIndex
                  ? 'border-[#f95716] scale-105 shadow-[0_0_12px_rgba(249,87,22,0.6)]'
                  : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
              }`}
              aria-label={`View photo ${idx + 1}: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
