import React from 'react';
import SupplyChain from '../components/SupplyChain';
import OwnerSection from '../components/OwnerSection';
import { ShieldCheck, Truck, Clock, RefreshCw } from 'lucide-react';

export default function SupplyChainPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Truck className="w-3.5 h-3.5" />
            <span>Integrity from Soil to Table</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Supply Chain Philosophy
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            Trace the continuous pathway: from living earth, daily stewardship, and harvest grading, to prompt supply movement connecting directly with markets.
          </p>
        </div>
      </div>

      {/* Main Interactive Supply Chain Component */}
      <SupplyChain isFullPage={true} />

      {/* Guiding Principles Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#FCFAF6] rounded-3xl p-8 sm:p-12 border border-[#7C9A78]/25 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#173F35]">
              Core Supply Chain Principles
            </h3>
            <p className="text-xs sm:text-sm text-[#76543A] mt-1">
              Dependable agriculture without exaggeration or unnecessary middlemen layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#E8EFE7] border border-[#7C9A78]/25 space-y-2">
              <Clock className="w-6 h-6 text-[#173F35]" />
              <h4 className="font-serif font-bold text-base text-[#173F35]">
                Freshness Timing
              </h4>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                Produce is picked at peak physiological ripeness and crated for rapid dispatch, minimizing post-harvest shelf loss.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#E8EFE7] border border-[#7C9A78]/25 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#8F2D3B]" />
              <h4 className="font-serif font-bold text-base text-[#173F35]">
                Gentle Handling
              </h4>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                Individual manual inspection avoids fruit bruising, skin tears, or rapid decay during transport movement.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#E8EFE7] border border-[#7C9A78]/25 space-y-2">
              <RefreshCw className="w-6 h-6 text-[#E7A93B]" />
              <h4 className="font-serif font-bold text-base text-[#173F35]">
                Direct Traceability
              </h4>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                Direct origin link ensures every buyer knows the harvest originated from D. Satish Kumar’s family farm orchards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
