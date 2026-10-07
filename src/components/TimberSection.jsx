import React, { useState } from 'react';
import { TreePine, ArrowRight, ShieldCheck, Clock, Hammer } from 'lucide-react';
import { TIMBER_DATA } from '../data/farmData';

export default function TimberSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#173F35] text-[#F6F1E7] relative overflow-hidden">
      {/* Decorative background subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#23584B]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#76543A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23584B] border border-[#7C9A78]/30 text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <TreePine className="w-3.5 h-3.5" />
            <span>Long-Term Agricultural Investment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {TIMBER_DATA.title}
          </h2>

          <p className="text-base sm:text-lg text-[#F6F1E7]/85 font-light leading-relaxed">
            {TIMBER_DATA.description}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[#7C9A78] italic font-serif">
            {TIMBER_DATA.philosophy}
          </p>
        </div>

        {/* Visual Progression Pipeline */}
        <div className="mb-12">
          {/* Desktop & Tablet Progress Bar */}
          <div className="hidden lg:grid grid-cols-5 gap-3 mb-8">
            {TIMBER_DATA.stages.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeStage === idx
                    ? 'bg-[#23584B] border-[#E7A93B] shadow-md -translate-y-1'
                    : 'bg-[#173F35]/80 border-[#23584B] hover:bg-[#205548]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${activeStage === idx ? 'text-[#E7A93B]' : 'text-[#7C9A78]'}`}>
                    {stage.step}
                  </span>
                  {idx < TIMBER_DATA.stages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#7C9A78]/50" />
                  )}
                </div>
                <h4 className="font-serif text-base font-bold text-white mb-1">
                  {stage.name}
                </h4>
                <p className="text-[11px] text-[#F6F1E7]/70 line-clamp-2 leading-relaxed">
                  {stage.description}
                </p>
              </button>
            ))}
          </div>

          {/* Active Stage Highlight Card */}
          <div className="bg-[#0F2D25] rounded-3xl border border-[#23584B] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Stage Image */}
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] overflow-hidden">
              <img
                src={TIMBER_DATA.stages[activeStage].image}
                alt={`${TIMBER_DATA.stages[activeStage].name} - Long-term timber development`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D25] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-xs uppercase font-mono text-[#E7A93B] font-semibold border border-white/10">
                  Stage {TIMBER_DATA.stages[activeStage].step} of 05
                </span>
              </div>
            </div>

            {/* Stage Info */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7C9A78] mb-2">
                  Agricultural Maturation Cycle
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  {TIMBER_DATA.stages[activeStage].name}
                </h3>
                <p className="text-sm sm:text-base text-[#F6F1E7]/80 leading-relaxed mb-6">
                  {TIMBER_DATA.stages[activeStage].description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#23584B]">
                  <div className="flex items-center gap-3 text-xs text-[#F6F1E7]/90">
                    <Clock className="w-4 h-4 text-[#E7A93B] flex-shrink-0" />
                    <span>Patient multi-year agricultural timeline</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#F6F1E7]/90">
                    <ShieldCheck className="w-4 h-4 text-[#7C9A78] flex-shrink-0" />
                    <span>Natural wealth preservation & farm biodiversity</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#F6F1E7]/90">
                    <Hammer className="w-4 h-4 text-[#E7A93B] flex-shrink-0" />
                    <span>Future raw material for enduring hardwood furniture</span>
                  </div>
                </div>
              </div>

              {/* Navigation buttons for mobile/tablet */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#23584B]">
                <button
                  type="button"
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : TIMBER_DATA.stages.length - 1))}
                  className="px-4 py-2 rounded-full bg-[#173F35] text-xs text-[#F6F1E7] hover:bg-[#23584B] transition-colors cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <div className="flex gap-1.5">
                  {TIMBER_DATA.stages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to stage ${i + 1}`}
                      onClick={() => setActiveStage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        activeStage === i ? 'bg-[#E7A93B]' : 'bg-[#23584B]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStage((prev) => (prev < TIMBER_DATA.stages.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full bg-[#E7A93B] text-xs text-[#173F35] font-semibold hover:bg-[#F4BD56] transition-colors cursor-pointer"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
