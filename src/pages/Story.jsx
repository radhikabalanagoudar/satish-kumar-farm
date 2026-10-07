import React from 'react';
import { Sprout, Heart, Clock, ShieldCheck } from 'lucide-react';
import StoryTimeline from '../components/StoryTimeline';
import OwnerSection from '../components/OwnerSection';

export default function Story() {
  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Page Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>A Five-Year Agricultural Chronicle</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Five Years of Growing with Purpose
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            The farm was purchased approximately 5 years ago by D. Satish Kumar and has since been nurtured, developed, and maintained as a true family agricultural venture.
          </p>
        </div>
      </div>

      {/* Core Values Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#FCFAF6] p-6 rounded-2xl border border-[#7C9A78]/25 text-center">
            <Heart className="w-6 h-6 text-[#8F2D3B] mx-auto mb-2" />
            <h4 className="font-serif font-bold text-base text-[#173F35]">Family Stewardship</h4>
            <p className="text-xs text-[#76543A] mt-1">Grounded in joint commitment and long-term care.</p>
          </div>

          <div className="bg-[#FCFAF6] p-6 rounded-2xl border border-[#7C9A78]/25 text-center">
            <Clock className="w-6 h-6 text-[#E7A93B] mx-auto mb-2" />
            <h4 className="font-serif font-bold text-base text-[#173F35]">Agricultural Patience</h4>
            <p className="text-xs text-[#76543A] mt-1">Honoring the seasonal cycles of tree and fruit.</p>
          </div>

          <div className="bg-[#FCFAF6] p-6 rounded-2xl border border-[#7C9A78]/25 text-center">
            <Sprout className="w-6 h-6 text-[#173F35] mx-auto mb-2" />
            <h4 className="font-serif font-bold text-base text-[#173F35]">Soil Biology</h4>
            <p className="text-xs text-[#76543A] mt-1">Rich organic nutrition and sustainable drip irrigation.</p>
          </div>

          <div className="bg-[#FCFAF6] p-6 rounded-2xl border border-[#7C9A78]/25 text-center">
            <ShieldCheck className="w-6 h-6 text-[#7C9A78] mx-auto mb-2" />
            <h4 className="font-serif font-bold text-base text-[#173F35]">Future Value</h4>
            <p className="text-xs text-[#76543A] mt-1">Compounding timber reserves for decades ahead.</p>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-[#FCFAF6] rounded-3xl p-8 sm:p-12 border border-[#7C9A78]/25 shadow-sm space-y-6 text-[#1E2824]/90 text-sm sm:text-base leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#173F35] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            When this parcel of land was first acquired five years ago, the intention was never a commercial monoculture or a hurried commercial turnaround. It was envisioned as a multi-decade family legacy—a farm where biodiversity, soil health, and honest daily labor would build lasting resilience.
          </p>

          <p>
            Over the following seasons, the family mapped natural drainage contours, introduced targeted drip irrigation lines, and planted diverse fruit trees: pomegranate, dragon fruit, mango, lemon, papaya, and heritage Jamun / Nerala Kayi. Beside these seasonal harvests, deliberate groves of timber trees were rooted—silent, patient investments growing value for tomorrow.
          </p>

          <blockquote className="my-6 pl-4 border-l-4 border-[#8F2D3B] font-serif italic text-lg sm:text-xl text-[#173F35]">
            &ldquo;Every harvest has a story, and every story begins with the land.&rdquo;
          </blockquote>

          <p>
            With resident family caretakers living on the grounds and attentive agricultural hands tending every weeding, pruning, and composting cycle, the farm has matured into a thriving ecosystem. We welcome you to follow our progression below.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#7C9A78]">
            Progression from Inception to Horizon
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#173F35] mt-1">
            The Six Developmental Phases
          </h2>
        </div>

        <StoryTimeline />
      </div>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
