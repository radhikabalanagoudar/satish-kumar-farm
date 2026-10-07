import React from 'react';
import SeasonalCalendar from '../components/SeasonalCalendar';
import OwnerSection from '../components/OwnerSection';
import { Calendar, Sun, CloudRain, Wind } from 'lucide-react';

export default function Seasons() {
  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Twelve Months on the Land</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Seasons of the Farm
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            Agricultural life is tuned to nature’s clock. Explore how sunlight, monsoon rains, and cooler winter months guide our cultivation and harvest cycles.
          </p>
        </div>
      </div>

      {/* Main Seasonal Calendar Component */}
      <SeasonalCalendar />

      {/* Seasonal Climate Context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FCFAF6] p-8 rounded-3xl border border-[#7C9A78]/25 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center">
              <Sun className="w-6 h-6 text-[#E7A93B]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#173F35]">
              Summer Radiance
            </h3>
            <p className="text-xs sm:text-sm text-[#1E2824]/80 leading-relaxed">
              High solar exposure drives rapid carbohydrate synthesis for our mangoes and creates peak demand for crisp, refreshing farm lemons. Drip irrigation runs early mornings to prevent moisture loss.
            </p>
          </div>

          <div className="bg-[#FCFAF6] p-8 rounded-3xl border border-[#7C9A78]/25 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center">
              <CloudRain className="w-6 h-6 text-[#7C9A78]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#173F35]">
              Monsoon Vitality
            </h3>
            <p className="text-xs sm:text-sm text-[#1E2824]/80 leading-relaxed">
              Monsoons awaken dragon fruit flower buds and nourish our native Jamun / Nerala Kayi trees. Deep rainfall feeds the timber groves and recharges local aquifers for the upcoming winter.
            </p>
          </div>

          <div className="bg-[#FCFAF6] p-8 rounded-3xl border border-[#7C9A78]/25 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center">
              <Wind className="w-6 h-6 text-[#8F2D3B]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#173F35]">
              Winter Maturation
            </h3>
            <p className="text-xs sm:text-sm text-[#1E2824]/80 leading-relaxed">
              Cool, dry air creates the ideal environment for pomegranate ripening, intensifying their ruby-red seed sweetness. Winter vegetable beds of tomato and brinjal flourish with active harvesting.
            </p>
          </div>
        </div>
      </div>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
