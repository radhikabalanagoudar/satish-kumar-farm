import React, { useState } from 'react';
import { Calendar, Sun, Sparkles, AlertCircle } from 'lucide-react';
import { SEASONS_DATA } from '../data/farmData';

export default function SeasonalCalendar() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(4); // Default to May (Peak Summer)

  const activeMonth = SEASONS_DATA[selectedMonthIndex];

  return (
    <section className="py-16 md:py-24 bg-[#FCFAF6] border-y border-[#7C9A78]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#173F35] text-xs uppercase tracking-widest font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Annual Agricultural Cycle</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35] mb-4">
            Seasons of the Farm
          </h2>

          <p className="text-base sm:text-lg text-[#76543A] leading-relaxed">
            Farming follows the subtle rhythms of sunlight, monsoons, and soil temperature. Explore how our orchards evolve through the twelve months of the year.
          </p>

          <p className="mt-3 text-xs text-[#7C9A78] italic font-serif">
            * Typical seasonal activity. Harvest timing can vary depending on weather and cultivation conditions.
          </p>
        </div>

        {/* 12-Month Selector Strip */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 mb-10">
          {SEASONS_DATA.map((item, idx) => {
            const isSelected = selectedMonthIndex === idx;

            return (
              <button
                key={item.month}
                type="button"
                onClick={() => setSelectedMonthIndex(idx)}
                onMouseEnter={() => setSelectedMonthIndex(idx)}
                className={`py-3 px-2 rounded-xl text-center border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] ${
                  isSelected
                    ? 'bg-[#173F35] text-white border-[#173F35] shadow-md -translate-y-1'
                    : 'bg-[#F6F1E7] text-[#173F35] border-[#7C9A78]/20 hover:bg-[#E8EFE7]'
                }`}
              >
                <span className={`block text-xs font-mono font-bold tracking-wider ${isSelected ? 'text-[#E7A93B]' : 'text-[#76543A]'}`}>
                  {item.month}
                </span>
                <span className="block text-[11px] font-semibold truncate mt-0.5">
                  {item.name.slice(0, 3)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Month Detail Card */}
        <div className="bg-[#F6F1E7] rounded-3xl border border-[#7C9A78]/30 p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#7C9A78]/20 gap-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#7C9A78] font-bold">
                Month {String(selectedMonthIndex + 1).padStart(2, '0')} of 12
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#173F35]">
                {activeMonth.name} — <span className="italic font-normal text-[#8F2D3B]">{activeMonth.season}</span>
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeMonth.focusCrops.map((crop) => (
                <span
                  key={crop}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#173F35] text-white tracking-wide shadow-2xs"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* General Farm Activities */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-[#76543A] flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#E7A93B]" />
                <span>General Farm & Orchard Activities</span>
              </h4>
              <p className="text-sm sm:text-base text-[#1E2824]/90 leading-relaxed bg-[#FCFAF6] p-4 rounded-xl border border-[#7C9A78]/15">
                {activeMonth.activities}
              </p>
            </div>

            {/* Harvest Activity where applicable */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-semibold tracking-wider text-[#8F2D3B] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8F2D3B]" />
                <span>Harvest & Yield Rhythm</span>
              </h4>
              <p className="text-sm sm:text-base text-[#1E2824]/90 leading-relaxed bg-[#FCFAF6] p-4 rounded-xl border border-[#7C9A78]/15">
                {activeMonth.harvestStatus}
              </p>
            </div>
          </div>

          {/* Environmental Disclaimer Note */}
          <div className="mt-6 pt-4 border-t border-[#7C9A78]/20 flex items-start gap-2.5 text-xs text-[#76543A]">
            <AlertCircle className="w-4 h-4 text-[#7C9A78] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Harvest windows reflect typical regional weather patterns. Drip schedules and pruning timings adjust naturally with seasonal rainfall and temperature fluctuations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
