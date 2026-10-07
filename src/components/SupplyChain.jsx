import React, { useState } from 'react';
import {
  Landmark,
  Sprout,
  HeartHandshake,
  Sun,
  PackageCheck,
  Boxes,
  Truck,
  Store,
  ShieldCheck
} from 'lucide-react';
import { SUPPLY_CHAIN_STAGES } from '../data/farmData';

const ICONS_MAP = {
  Landmark: Landmark,
  Sprout: Sprout,
  HeartHandshake: HeartHandshake,
  Sun: Sun,
  PackageCheck: PackageCheck,
  Boxes: Boxes,
  Truck: Truck,
  Store: Store
};

export default function SupplyChain() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = SUPPLY_CHAIN_STAGES[activeStageIndex];
  const ActiveIcon = ICONS_MAP[activeStage.icon] || Sprout;

  return (
    <section className="py-16 md:py-24 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7C9A78] mb-3">
            Agricultural Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35] mb-4">
            Farm-to-Market Supply Chain
          </h2>
          <p className="text-base sm:text-lg text-[#76543A] leading-relaxed">
            From the grounded soil of our family orchards to the customer, every stage is managed with intention, respect, and careful handling.
          </p>
        </div>

        {/* 8-Stage Progress Navigation (Responsive Horizontal / Stepper) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {SUPPLY_CHAIN_STAGES.map((stage, idx) => {
            const Icon = ICONS_MAP[stage.icon] || Sprout;
            const isCurrent = activeStageIndex === idx;
            const isCompleted = idx < activeStageIndex;

            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] ${
                  isCurrent
                    ? 'bg-[#173F35] text-white border-[#173F35] shadow-md -translate-y-1'
                    : isCompleted
                    ? 'bg-[#E8EFE7] text-[#173F35] border-[#7C9A78]/30 hover:border-[#173F35]'
                    : 'bg-[#FCFAF6] text-[#76543A] border-[#7C9A78]/20 hover:bg-[#E8EFE7]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 ${
                    isCurrent
                      ? 'bg-[#E7A93B] text-[#173F35]'
                      : 'bg-[#7C9A78]/20 text-[#173F35]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-mono font-bold mb-0.5 ${isCurrent ? 'text-[#E7A93B]' : 'text-[#7C9A78]'}`}>
                  {stage.number}
                </span>
                <span className="text-xs font-bold tracking-tight line-clamp-1">
                  {stage.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="bg-[#FCFAF6] rounded-3xl border border-[#7C9A78]/25 p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#7C9A78]/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#173F35] text-[#E7A93B] flex items-center justify-center shadow-md">
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7C9A78]">
                  Stage {activeStage.number} of 08
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173F35]">
                  {activeStage.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : SUPPLY_CHAIN_STAGES.length - 1))}
                className="px-4 py-2 rounded-full border border-[#7C9A78]/30 text-xs font-medium text-[#173F35] hover:bg-[#E8EFE7] transition-colors cursor-pointer"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveStageIndex((prev) => (prev < SUPPLY_CHAIN_STAGES.length - 1 ? prev + 1 : 0))}
                className="px-5 py-2 rounded-full bg-[#173F35] text-white text-xs font-medium hover:bg-[#23584B] transition-colors cursor-pointer shadow-xs"
              >
                Next Stage
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-[#8F2D3B]">
                &ldquo;{activeStage.headline}&rdquo;
              </h4>
              <p className="text-sm sm:text-base text-[#1E2824]/85 leading-relaxed">
                {activeStage.details}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#76543A] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#7C9A78]" />
                <span>Managed with family commitment and verified quality controls.</span>
              </div>
            </div>

            {/* Subtle SVG badge */}
            <div className="md:col-span-5 bg-[#E8EFE7] rounded-2xl p-6 border border-[#7C9A78]/25 text-center">
              <div className="relative inline-flex items-center justify-center p-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <ActiveIcon className="w-10 h-10 text-[#173F35] transition-transform duration-300 hover:scale-110" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#7C9A78]/40 animate-ping opacity-25" />
              </div>
              <p className="font-serif text-sm font-semibold text-[#173F35] mt-3">
                Continuous Stewardship
              </p>
              <p className="text-xs text-[#76543A] mt-1 max-w-xs mx-auto">
                No third-party logistics assumptions; strictly focused on clean handling and dependable farm-to-supply movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
