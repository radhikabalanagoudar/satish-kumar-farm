import React, { useState } from 'react';
import { Sprout, Calendar, Users, Trees, Truck } from 'lucide-react';
import SupplyChain from '../components/SupplyChain';
import SeasonalCalendar from '../components/SeasonalCalendar';
import TimberSection from '../components/TimberSection';
import PeopleSection from '../components/PeopleSection';
import OwnerSection from '../components/OwnerSection';

export default function FarmPractices() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Page Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Farm Operations & Care</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Farm Practices & Living Stewardship
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            From soil enrichment to seasonal harvesting and long-term timber investments, discover how our family farm operates day by day.
          </p>

          {/* Practice Section Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              All Practices
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('supply-chain')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                activeTab === 'supply-chain'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Supply Chain</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('seasons')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                activeTab === 'seasons'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Seasonal Calendar</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('timber')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                activeTab === 'timber'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Trees className="w-3.5 h-3.5" />
              <span>Timber Investment</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('people')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                activeTab === 'people'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Farm People</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-12">
        {(activeTab === 'all' || activeTab === 'supply-chain') && (
          <div id="supply-chain">
            <SupplyChain />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'seasons') && (
          <div id="seasons">
            <SeasonalCalendar />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'timber') && (
          <div id="timber">
            <TimberSection />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'people') && (
          <div id="people">
            <PeopleSection />
          </div>
        )}
      </div>

      {/* Owner signature section at the bottom */}
      <OwnerSection />
    </div>
  );
}
