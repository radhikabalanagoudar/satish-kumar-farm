import React from 'react';
import { FARM_META } from '../data/farmData';

/**
 * OwnerSection
 * Small, elegant section placed at the very end of pages immediately before the footer.
 * Acts as a personal signature from D. Satish Kumar.
 * Strictly uses the authentic uploaded photograph and appears only in this designated section.
 */
export default function OwnerSection() {
  return (
    <section
      aria-label="Meet the Owner"
      className="py-12 md:py-16 bg-[#F6F1E7] border-t border-[#7C9A78]/20 transition-opacity duration-500"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle Section Label */}
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#7C9A78] mb-6">
          Meet the Owner
        </p>

        {/* Small Rounded/Circular Portrait with subtle border & soft shadow */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4 group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#7C9A78]/40 ring-4 ring-[#FAF7F0] shadow-md bg-[#E8EFE7]">
              <img
                src={FARM_META.ownerPhoto}
                alt={`${FARM_META.ownerName}, owner of the family farm`}
                loading="lazy"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-[#173F35] text-[#FAF7F0] font-serif text-xl font-bold">
                      DSK
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Owner Name & Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173F35] tracking-wide mb-1">
            {FARM_META.ownerName}
          </h3>
          <p className="text-xs uppercase tracking-widest font-medium text-[#76543A] mb-3">
            {FARM_META.ownerTitle}
          </p>

          {/* Signature Quote */}
          <p className="font-serif italic text-sm sm:text-base text-[#173F35]/85 max-w-md mx-auto leading-relaxed">
            &ldquo;{FARM_META.quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
