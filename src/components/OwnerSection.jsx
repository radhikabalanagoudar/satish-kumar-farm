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
          <p className="font-serif italic text-sm sm:text-base text-[#173F35]/85 max-w-md mx-auto leading-relaxed mb-6">
            &ldquo;{FARM_META.quote}&rdquo;
          </p>

          {/* Direct Owner Contact Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${FARM_META.contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#173F35] text-[#FAF7F0] text-xs font-semibold tracking-wider hover:bg-[#23584B] transition-all shadow-xs hover:shadow-sm"
              aria-label={`Call ${FARM_META.ownerName} at ${FARM_META.contact.phoneDisplay}`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{FARM_META.contact.phoneDisplay}</span>
            </a>

            <a
              href={FARM_META.contact.defaultWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider hover:bg-[#1EBE5D] transition-all shadow-xs hover:shadow-sm"
              aria-label="Chat on WhatsApp with owner"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.135-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.492-.506-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.124 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.777-.725 2.027-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2 22l4.82-1.5C8.3 21.46 10.1 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.67 0-3.23-.47-4.57-1.29l-.33-.2-2.87.89.9-2.77-.21-.34C4.05 15.11 3.6 13.6 3.6 12c0-4.63 3.77-8.4 8.4-8.4 4.63 0 8.4 3.77 8.4 8.4 0 4.63-3.77 8.4-8.4 8.4z"/>
              </svg>
              <span>WhatsApp Owner</span>
            </a>

            <a
              href={`mailto:${FARM_META.contact.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FCFAF6] border border-[#7C9A78]/40 text-[#173F35] text-xs font-semibold tracking-wider hover:bg-[#E8EFE7] transition-all"
              aria-label={`Email ${FARM_META.ownerName} at ${FARM_META.contact.email}`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>{FARM_META.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
