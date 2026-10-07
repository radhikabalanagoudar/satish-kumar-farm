import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/farmData';

const CATEGORIES = ['All', 'Fruits', 'Vegetables', 'Timber & Trees', 'Farm Landscape', 'Farm Life'];

export default function GallerySection({ isPreview = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayItems = isPreview ? filteredItems.slice(0, 6) : filteredItems;

  return (
    <section className="py-16 md:py-24 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#173F35] text-xs uppercase tracking-widest font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Farm Archive</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35] mb-4">
            Farm Gallery
          </h2>

          <p className="text-base sm:text-lg text-[#76543A] leading-relaxed">
            Moments from our orchards, soil cultivation, fruit canopies, and ongoing timber growth across five years of farming.
          </p>
        </div>

        {/* Filter Tabs (when not preview) */}
        {!isPreview && (
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#173F35] text-white shadow-xs'
                    : 'bg-[#FCFAF6] text-[#76543A] border border-[#7C9A78]/25 hover:bg-[#E8EFE7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Responsive CSS Grid (Masonry feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalItem(item);
                }
              }}
              className="group relative rounded-2xl overflow-hidden bg-[#ECE5D8] aspect-[4/3] border border-[#7C9A78]/25 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35]"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E7A93B] block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold leading-snug">
                  {item.title}
                </h4>
              </div>

              {/* Top-Right zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightweight Lightbox Modal */}
        {activeModalItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeModalItem.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#173F35] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.alt}
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-5 sm:p-6 bg-[#173F35] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#23584B]">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#E7A93B]">
                    {activeModalItem.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                    {activeModalItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="self-start sm:self-auto px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-xs uppercase font-medium tracking-wider text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
