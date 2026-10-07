import React from 'react';
import {
  Sprout,
  Droplets,
  TreePine,
  Route,
  Cpu,
  Compass,
  Sparkles
} from 'lucide-react';
import { FUTURE_PILLARS } from '../data/farmData';

const ICONS = {
  Sprout,
  Droplets,
  TreePine,
  Route,
  Cpu,
  Compass
};

const VISUAL_PROGRESSION = [
  { step: '01', title: 'TODAY', desc: 'Active multi-crop orchards & established soil health' },
  { step: '02', title: 'GROWTH', desc: 'Canopy maturation & ongoing timber compounding' },
  { step: '03', title: 'HARVEST', desc: 'Steady seasonal cycles with consistent grading' },
  { step: '04', title: 'SUPPLY', desc: 'Direct, transparent farm-gate distribution' },
  { step: '05', title: 'FUTURE', desc: 'Enduring family legacy & tech-assisted agriculture' }
];

export default function FutureVision() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#173F35] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E7A93B]" />
            <span>Horizon & Intent</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35] mb-4">
            Growing Today. Building Tomorrow.
          </h2>

          <p className="text-base sm:text-lg text-[#76543A] leading-relaxed">
            Agricultural stewardship does not end at this season’s harvest. We cultivate with deliberate patience, planning decades ahead for our timber reserves, soil biology, and community connections.
          </p>
        </div>

        {/* Lightweight Visual: TODAY → GROWTH → HARVEST → SUPPLY → FUTURE */}
        <div className="bg-[#173F35] rounded-3xl p-6 sm:p-10 text-white mb-16 shadow-lg border border-[#23584B]">
          <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-[#E7A93B] text-center mb-6">
            The Long-Term Trajectory
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VISUAL_PROGRESSION.map((item, idx) => (
              <div
                key={item.title}
                className="relative bg-[#23584B]/60 border border-[#7C9A78]/30 rounded-2xl p-5 flex flex-col justify-between hover:bg-[#23584B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#E7A93B]">
                      {item.step}
                    </span>
                    {idx < VISUAL_PROGRESSION.length - 1 && (
                      <span className="hidden lg:inline text-[#7C9A78]/60 text-xs">→</span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F6F1E7]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon] || Sprout;

            return (
              <div
                key={pillar.title}
                className="bg-[#F6F1E7] rounded-2xl p-6 border border-[#7C9A78]/25 shadow-xs hover:border-[#173F35] hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#173F35] text-[#E7A93B] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F2D3B]">
                    {pillar.subtitle}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#173F35] mt-1 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1E2824]/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
