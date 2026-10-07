import React from 'react';
import PeopleSection from '../components/PeopleSection';
import OwnerSection from '../components/OwnerSection';
import { Users, Heart } from 'lucide-react';

export default function People() {
  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Human Touch in Agriculture</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            The People of the Farm
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            Every ripe fruit in a crate and every thriving tree on our acreage is the outcome of patient human stewardship, daily care, and generational farming wisdom.
          </p>
        </div>
      </div>

      {/* Main People Section */}
      <PeopleSection />

      {/* Culture of Respect */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#FCFAF6] rounded-3xl p-8 sm:p-12 border border-[#7C9A78]/25 shadow-xs text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#173F35]/10 text-[#173F35] flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6 text-[#8F2D3B]" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#173F35]">
            A Community Rooted in Trust
          </h3>
          <p className="text-sm sm:text-base text-[#1E2824]/85 max-w-2xl mx-auto leading-relaxed">
            We believe agricultural quality starts with respecting the hands that till the soil. From our resident caretakers who call the farm home to the seasonal hands who assist during harvest rushes, every contributor is treated with dignity, fair compensation, and shared pride in what we grow.
          </p>
        </div>
      </div>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
