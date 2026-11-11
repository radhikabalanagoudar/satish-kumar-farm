import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Tag, Navigation, Phone } from 'lucide-react';
import { FARM_META } from '../data/farmData';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#173F35]">
      {/* Background Image with Dark Vignette Overlay for Readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={FARM_META.heroImage}
          alt="D. Satish Kumar Family Farm lush orchards and agricultural landscape"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Gradients and tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/95 via-[#173F35]/70 to-black/45" />
        <div className="absolute inset-0 bg-[#173F35]/25 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center text-white flex flex-col items-center">
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

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#F6F1E7]/90 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          A family-owned farm growing a variety of fruits, vegetables and timber trees, with a focus on cultivation, quality and direct farm sales.
        </p>

        {/* 4 Clear Calls to Action */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl mb-12">
          {/* 1. Explore Our Crops */}
          <Link
            to="/crops"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-xs font-semibold text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
          >
            <Sprout className="w-4 h-4 text-[#E7A93B]" />
            <span>Explore Our Crops</span>
          </Link>

          {/* 2. View Farm Prices */}
          <Link
            to="/prices"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#8F2D3B] hover:bg-[#AA394A] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <Tag className="w-4 h-4" />
            <span>View Farm Prices</span>
          </Link>

          {/* 3. Contact the Farm */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Contact the Farm</span>
          </Link>

          {/* 4. Get Directions */}
          <a
            href={FARM_META.contact.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#173F35] hover:bg-[#23584B] text-white border border-[#7C9A78]/50 font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#E7A93B]" />
            <span>Get Directions</span>
          </a>
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
