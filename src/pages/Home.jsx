import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Camera,
  Heart
} from 'lucide-react';
import Hero from '../components/Hero';
import CropCard from '../components/CropCard';
import CropModal from '../components/CropModal';
import SupplyChain from '../components/SupplyChain';
import SeasonalCalendar from '../components/SeasonalCalendar';
import TimberSection from '../components/TimberSection';
import PeopleSection from '../components/PeopleSection';
import GallerySection from '../components/GallerySection';
import FutureVision from '../components/FutureVision';
import OwnerSection from '../components/OwnerSection';
import { CROPS_DATA, FARM_META } from '../data/farmData';

export default function Home() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Featured 4 crops on home page
  const featuredCrops = CROPS_DATA.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F6F1E7]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Short Farm Introduction */}
      <section className="py-16 md:py-24 bg-[#FCFAF6] border-b border-[#7C9A78]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#173F35] text-xs uppercase tracking-widest font-semibold">
                <Heart className="w-3.5 h-3.5 text-[#8F2D3B]" />
                <span>Family-Owned & Operated</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35] leading-tight">
                Five Years of Grounded Stewardship
              </h2>

              <p className="text-base sm:text-lg text-[#1E2824]/85 leading-relaxed font-light">
                Purchased approximately five years ago, this land has been shaped into a flourishing family enterprise under the leadership of D. Satish Kumar. We balance high-care fruit orchards and seasonal vegetable rotations with long-term timber plantings.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#7C9A78]/20">
                  <span className="block text-2xl font-serif font-bold text-[#173F35]">
                    ~5 Years
                  </span>
                  <span className="text-xs text-[#76543A] font-medium">
                    Continuous Family Cultivation
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#7C9A78]/20">
                  <span className="block text-2xl font-serif font-bold text-[#8F2D3B]">
                    Multi-Crop
                  </span>
                  <span className="text-xs text-[#76543A] font-medium">
                    Fruits, Vegetables & Timber
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#173F35] hover:text-[#8F2D3B] transition-colors group"
                >
                  <span>Read Our Full Five-Year Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Farm Overview Card */}
            <div className="lg:col-span-6 bg-[#173F35] rounded-3xl p-8 sm:p-10 text-white border border-[#23584B] shadow-lg relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E7A93B] font-bold">
                  The Living Journey
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  From Living Soil to Future Horizons
                </h3>
                <p className="text-sm text-[#F6F1E7]/80 leading-relaxed">
                  Every plant follows a deliberate cycle: nurtured with natural compost, steady drip hydration, and attentive pruning before harvest and supply movement.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#23584B]">
                  {FARM_META.journeyStages.map((stage, idx) => (
                    <div
                      key={stage}
                      className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-[#23584B]/60 text-[#F6F1E7]/90 font-medium"
                    >
                      <span>Stage 0{idx + 1} — {stage}</span>
                      <span className="text-[#E7A93B]">✓</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to="/crops"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#E7A93B] text-[#173F35] text-xs uppercase tracking-wider font-semibold hover:bg-[#F4BD56] transition-colors"
                  >
                    <span>Discover What We Grow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Crops Preview */}
      <section className="py-16 md:py-24 bg-[#F6F1E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7C9A78] mb-2">
                Harvest Highlights
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35]">
                Orchard & Vegetable Cultivation
              </h2>
            </div>
            <Link
              to="/crops"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#173F35] hover:text-[#8F2D3B] transition-colors group"
            >
              <span>View All 8+ Crops & Timber</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCrops.map((crop) => (
              <CropCard
                key={crop.id}
                crop={crop}
                onClick={() => setSelectedCrop(crop)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/crops"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#173F35] hover:bg-[#23584B] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore Complete Crop Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Farm-to-Market Supply Chain Preview */}
      <SupplyChain />

      {/* 5. Seasonal Harvest Preview */}
      <SeasonalCalendar />

      {/* 6. Timber Investment Section */}
      <TimberSection />

      {/* 7. People Behind the Farm */}
      <PeopleSection />

      {/* 8. Farm Gallery Preview */}
      <GallerySection isPreview={true} />

      <div className="bg-[#F6F1E7] pb-16 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
        >
          <Camera className="w-4 h-4" />
          <span>View Complete Farm Gallery Archive</span>
        </Link>
      </div>

      {/* 9. Future Vision Preview */}
      <FutureVision />

      {/* Crop Modal when clicked */}
      <CropModal
        crop={selectedCrop}
        onClose={() => setSelectedCrop(null)}
      />

      {/* 10. Small Owner Profile (At very end before footer) */}
      <OwnerSection />
    </div>
  );
}
