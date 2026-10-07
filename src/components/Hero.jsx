import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout } from 'lucide-react';
import { FARM_META } from '../data/farmData';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#173F35]">
      {/* Background Image with Dark Vignette Overlay for Readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={FARM_META.heroImage}
          alt="D. Satish Kumar Family Farm lush orchards and agricultural landscape"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Gradients and tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/95 via-[#173F35]/65 to-black/40" />
        <div className="absolute inset-0 bg-[#173F35]/30 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center text-white flex flex-col items-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-white/20 text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-6 shadow-sm">
          <Sprout className="w-3.5 h-3.5 text-[#E7A93B]" />
          <span>A Family Agricultural Venture • Est. ~5 Years Ago</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] max-w-4xl mb-6 drop-shadow-xs">
          Rooted in the Land. <br />
          <span className="italic font-normal text-[#E7A93B]">Growing for Tomorrow.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#F6F1E7]/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          A family-owned farm cultivating fruits, vegetables and long-term agricultural investments with care, patience and purpose.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <Link
            to="/story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35] font-semibold text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our Farm</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/crops"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-xs font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our Crops</span>
          </Link>
        </div>

        {/* Agricultural Journey Pathway Ribbon */}
        <div className="w-full max-w-4xl pt-6 border-t border-white/20 hidden md:block">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#A3BCA0] mb-3 text-center font-medium">
            The Living Journey
          </p>
          <div className="flex items-center justify-between text-xs tracking-wider text-white/80 font-medium">
            {FARM_META.journeyStages.map((stage, idx) => (
              <React.Fragment key={stage}>
                <span className="hover:text-[#E7A93B] transition-colors">{stage}</span>
                {idx < FARM_META.journeyStages.length - 1 && (
                  <span className="text-[#A3BCA0]/60">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gentle bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#F6F1E7] to-transparent pointer-events-none" />
    </section>
  );
}
