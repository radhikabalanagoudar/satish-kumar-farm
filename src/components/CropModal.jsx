import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';

export default function CropModal({ crop, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!crop) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="crop-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#7C9A78]/30 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Crop Details"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/10] bg-[#ECE5D8] overflow-hidden">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs">
              {crop.category}
            </span>
            <h3 id="crop-modal-title" className="font-serif text-2xl font-bold mt-1 text-white">
              {crop.name} {crop.kannadaName && <span className="text-lg font-light italic text-[#E7A93B]">({crop.kannadaName})</span>}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#7C9A78] mb-1">
              Cultivation & Care
            </h4>
            <p className="text-sm text-[#1E2824]/90 leading-relaxed">
              {crop.fullDesc}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#E8EFE7] border border-[#7C9A78]/25 flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#173F35] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#173F35]">Seasonal Rhythm</p>
              <p className="text-xs text-[#76543A] leading-relaxed mt-0.5">
                {crop.seasonNote}
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#173F35] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#23584B] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
