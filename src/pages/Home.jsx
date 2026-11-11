import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Camera,
  Heart,
  Tag,
  MapPin,
  Navigation,
  MessageCircle,
  Sprout
} from 'lucide-react';
import Hero from '../components/Hero';
import CropModal from '../components/CropModal';
import SupplyChain from '../components/SupplyChain';
import SeasonalCalendar from '../components/SeasonalCalendar';
import TimberSection from '../components/TimberSection';
import PeopleSection from '../components/PeopleSection';
import GallerySection from '../components/GallerySection';
import FutureVision from '../components/FutureVision';
import OwnerSection from '../components/OwnerSection';
import ImageWithFallback from '../components/ImageWithFallback';
import { CROPS_DATA, FARM_META } from '../data/farmData';

export default function Home() {
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Featured 4 crops for home preview
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
                  From Living Soil to Direct Farm Gate
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

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/crops"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#E7A93B] text-[#173F35] text-xs uppercase tracking-wider font-semibold hover:bg-[#F4BD56] transition-colors"
                  >
                    <span>Explore Crops</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/prices"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white/15 text-white text-xs uppercase tracking-wider font-semibold hover:bg-white/25 transition-colors border border-white/25"
                  >
                    <span>View Prices</span>
                    <Tag className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CROPS & DIRECT PRICES PREVIEW (Original Photographs Above Prices) */}
      <section className="py-16 md:py-24 bg-[#F6F1E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE7] text-[#173F35] text-xs uppercase tracking-widest font-semibold mb-2">
                <Tag className="w-3.5 h-3.5 text-[#8F2D3B]" />
                <span>Harvest & Direct Prices</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35]">
                Farm Produce & Direct Rates
              </h2>
            </div>
            <Link
              to="/prices"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#173F35] hover:text-[#8F2D3B] transition-colors group"
            >
              <span>View All 8 Produce Prices & Notes</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Cards showing Original Photographs directly ABOVE Prices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCrops.map((crop) => (
              <div
                key={crop.id}
                className="bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#7C9A78]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Original Photograph ABOVE Price */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8EFE7]">
                  <ImageWithFallback
                    src={crop.originalCropPhoto || crop.image}
                    alt={`Original photograph of ${crop.name} at Satish Kumar Family Farm`}
                    aspectRatio="aspect-[4/3]"
                    fallbackLabel={crop.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider bg-[#173F35]/90 text-white backdrop-blur-xs">
                      {crop.category}
                    </span>
                  </div>
                  {crop.kannadaName && (
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-[#F6F1E7]/95 text-[#173F35]">
                        {crop.kannadaName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#173F35]">
                      {crop.name}
                    </h3>

                    {/* Price */}
                    <div className="mt-2 mb-2 pt-2 border-t border-[#7C9A78]/20 flex items-baseline gap-1.5">
                      <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#173F35]">
                        {crop.priceAmount}
                      </span>
                      <span className="text-[11px] text-[#76543A] uppercase font-semibold">
                        / {crop.priceUnit}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#76543A] line-clamp-2 leading-relaxed mb-3">
                      {crop.pricingDescription}
                    </p>
                  </div>

                  <a
                    href={crop.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#173F35] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#25D366] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Enquire Price</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/prices"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#173F35] hover:bg-[#23584B] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-all duration-200"
            >
              <span>Explore Complete Farm Produce & Prices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/crops"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
            >
              <Sprout className="w-4 h-4" />
              <span>Full Crops Catalogue</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FIND OUR FARM CALLOUT SECTION */}
      <section className="py-16 md:py-20 bg-[#FCFAF6] border-y border-[#7C9A78]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#173F35] rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-wider font-semibold mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Direct Farm Gate Location</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                    Find Our Farm
                  </h2>

                  <p className="text-base text-[#F6F1E7]/85 leading-relaxed mb-6 font-light">
                    Visit Satish Kumar Family Farm to select and collect fresh produce directly from our orchards. We offer direct farm-gate collection.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-white/15">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#A3BCA0] font-semibold">
                        GPS Coordinates
                      </p>
                      <p className="text-lg font-mono font-bold text-[#E7A93B] mt-0.5">
                        {FARM_META.contact.location.coordinatesDisplay}
                      </p>
                      <p className="text-xs text-white/70 font-mono">
                        Latitude: {FARM_META.contact.location.latitude} • Longitude: {FARM_META.contact.location.longitude}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs text-[#F6F1E7]/90 leading-relaxed">
                      <span className="font-bold text-[#E7A93B] block mb-0.5">Notice:</span>
                      {FARM_META.contact.salesPolicyNotice}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={FARM_META.contact.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35] font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <Link
                    to="/contact#find-our-farm"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/25 transition-all"
                  >
                    <span>View Map Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Embedded Interactive Map Preview */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] bg-[#E8EFE7]">
                <iframe
                  title="Google Maps Location - Satish Kumar Family Farm"
                  src={FARM_META.contact.location.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[320px] sm:min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Farm-to-Market Supply Chain Preview */}
      <SupplyChain />

      {/* 6. Seasonal Harvest Preview */}
      <SeasonalCalendar />

      {/* 7. Timber Investment Section */}
      <TimberSection />

      {/* 8. People Behind the Farm */}
      <PeopleSection />

      {/* 9. Farm Gallery Preview */}
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

      {/* 10. Future Vision Preview */}
      <FutureVision />

      {/* Crop Modal when clicked */}
      <CropModal
        crop={selectedCrop}
        onClose={() => setSelectedCrop(null)}
      />

      {/* 11. Small Owner Profile (At very end before footer) */}
      <OwnerSection />
    </div>
  );
}
