import React from 'react';
import FutureVision from '../components/FutureVision';
import OwnerSection from '../components/OwnerSection';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Future() {
  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Horizon & Intent</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Future Vision
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            Cultivating today with disciplined patience, while laying the foundations for decades of sustainable timber compounding, soil health, and direct market access.
          </p>
        </div>
      </div>

      {/* Main Future Vision Component */}
      <FutureVision />

      {/* Family Farm Invitation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-[#173F35] rounded-3xl p-8 sm:p-12 text-white border border-[#23584B] shadow-lg space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Partnering with Purpose
          </h3>
          <p className="text-sm sm:text-base text-[#F6F1E7]/85 max-w-xl mx-auto leading-relaxed">
            Interested in learning more about our future harvest schedules, seasonal supply commitments, or long-term agricultural investments?
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35] text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Connect with D. Satish Kumar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
