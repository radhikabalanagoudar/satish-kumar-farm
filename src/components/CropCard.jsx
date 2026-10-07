import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function CropCard({ crop, onClick }) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#7C9A78]/25 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md cursor-pointer flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35]"
    >
      {/* Crop Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#ECE5D8]">
        <ImageWithFallback
          src={crop.image}
          alt={`Fresh ${crop.name} grown on the family farm`}
          aspectRatio="aspect-[4/3]"
          fallbackLabel={crop.name}
          className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs"
            style={{
              backgroundColor: crop.category === 'Fruit' ? '#173F35' : '#76543A'
            }}
          >
            {crop.category}
          </span>
        </div>

        {/* Local Kannada Name Badge */}
        {crop.kannadaName && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F6F1E7]/90 text-[#173F35] shadow-2xs backdrop-blur-xs">
              {crop.kannadaName}
            </span>
          </div>
        )}

        {/* Hover Arrow Icon overlay */}
        <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-[#173F35] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-[#FCFAF6]">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#173F35] tracking-tight group-hover:text-[#8F2D3B] transition-colors duration-200">
            {crop.name}
          </h3>
          <p className="text-xs text-[#76543A] font-medium mt-1 mb-2.5">
            {crop.seasonNote}
          </p>
          <p className="text-xs text-[#1E2824]/80 leading-relaxed">
            {crop.shortDesc}
          </p>
        </div>

        {/* Subtle Bottom Accent Indicator */}
        <div className="mt-4 pt-3 border-t border-[#7C9A78]/15 flex items-center justify-between text-[11px] text-[#7C9A78]">
          <span className="font-medium">Orchard Cultivation</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-[#173F35] font-semibold">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}
