import React from 'react';
import {
  MessageCircle,
  Navigation,
  AlertTriangle,
  Info,
  CheckCircle2,
  Tag,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { CROPS_DATA, FARM_META } from '../data/farmData';
import OwnerSection from '../components/OwnerSection';
import ImageWithFallback from '../components/ImageWithFallback';

export default function FarmPrices() {
  const fruits = CROPS_DATA.filter((crop) => crop.category === 'Fruit');
  const vegetables = CROPS_DATA.filter((crop) => crop.category === 'Vegetable');

  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* 1. Header Section */}
      <section className="py-12 md:py-16 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Tag className="w-3.5 h-3.5" />
            <span>Direct Farm-Gate Rates</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Farm Produce & Prices
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Authentic produce harvested fresh from the fields of D. Satish Kumar Family Farm. Purchase directly at the farm gate with complete pricing transparency.
          </p>

          {/* Two Prominent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={FARM_META.contact.defaultWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact for Latest Price</span>
            </a>

            <a
              href={FARM_META.contact.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35] font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Direct Farm Sales Collection-Only Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-[#FCFAF6] border-2 border-[#173F35]/20 rounded-2xl p-5 sm:p-6 shadow-md flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#173F35]" />
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#8F2D3B]">
                Direct Farm Sales Notice
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#173F35] text-[10px] font-semibold text-[#E7A93B] uppercase">
                Collection Only
              </span>
            </div>
            <p className="text-sm sm:text-base font-serif font-bold text-[#173F35] mt-0.5">
              {FARM_META.contact.salesPolicyNotice}
            </p>
            <p className="text-xs text-[#76543A] mt-1">
              Please contact the farm in advance to check harvest schedule before driving over.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <a
              href={FARM_META.contact.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173F35] hover:text-[#8F2D3B] underline underline-offset-4"
            >
              <MapPin className="w-3.5 h-3.5 text-[#173F35]" />
              <span>Farm Gate GPS Directions →</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Mandatory Price Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-[#FFF8E7] border border-[#E7A93B]/40 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#8F2D3B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#76543A] leading-relaxed">
            <span className="font-bold text-[#173F35] mr-1">Price Disclaimer:</span>
            {FARM_META.contact.priceDisclaimer}
          </div>
        </div>
      </section>

      {/* 4. Eight Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Category: Fresh Orchard Fruits */}
        <section aria-labelledby="orchard-fruits-heading">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#7C9A78]/25">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F2D3B] font-bold">
                Category 01
              </span>
              <h2 id="orchard-fruits-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#173F35] flex items-center gap-3">
                <span>Fresh Orchard Fruits</span>
                <span className="text-xs font-normal text-[#76543A] font-sans px-2.5 py-0.5 rounded-full bg-[#E8EFE7]">
                  6 Varieties
                </span>
              </h2>
            </div>
            <p className="text-xs text-[#76543A] hidden sm:block max-w-xs text-right">
              Harvested fresh at optimum maturity directly from our trees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {fruits.map((crop) => (
              <ProductPriceCard key={crop.id} crop={crop} />
            ))}
          </div>
        </section>

        {/* Category: Farm Vegetables */}
        <section aria-labelledby="farm-vegetables-heading">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#7C9A78]/25">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#76543A] font-bold">
                Category 02
              </span>
              <h2 id="farm-vegetables-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#173F35] flex items-center gap-3">
                <span>Seasonal Vegetables</span>
                <span className="text-xs font-normal text-[#76543A] font-sans px-2.5 py-0.5 rounded-full bg-[#E8EFE7]">
                  2 Varieties
                </span>
              </h2>
            </div>
            <p className="text-xs text-[#76543A] hidden sm:block max-w-xs text-right">
              Freshly picked from raised mulch beds on harvest mornings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            {vegetables.map((crop) => (
              <ProductPriceCard key={crop.id} crop={crop} />
            ))}
          </div>
        </section>

        {/* Collection & Purchasing Information Guide */}
        <section className="bg-[#FCFAF6] rounded-3xl p-8 border border-[#7C9A78]/30 shadow-xs">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173F35] mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#7C9A78]" />
            <span>How to Purchase Directly from Our Farm</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#173F35] text-[#E7A93B] font-serif font-bold text-sm flex items-center justify-center">
                1
              </div>
              <h4 className="font-serif font-bold text-base text-[#173F35]">
                Enquire Ahead
              </h4>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                Send a quick WhatsApp message to confirm what crops are ripe and being picked today.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#173F35] text-[#E7A93B] font-serif font-bold text-sm flex items-center justify-center">
                2
              </div>
              <h4 className="font-serif font-bold text-base text-[#173F35]">
                Get Directions
              </h4>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                Use Google Maps GPS navigation to drive straight to our farm gate destination.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#173F35] text-[#E7A93B] font-serif font-bold text-sm flex items-center justify-center">
                3
              </div>
              <h4 className="font-serif font-bold text-base text-[#173F35]">
                Direct Gate Collection
              </h4>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                Select your produce at direct farm rates. Cash / digital payment accepted at collection.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}

/**
 * ProductPriceCard Component
 * Strictly satisfies layout:
 * 1. PRODUCT PHOTOGRAPH (original photograph from originalcrops ABOVE the price)
 * 2. Product Name & Kannada name
 * 3. Price (bold & prominent)
 * 4. Pricing information / seasonal note
 * 5. Enquire Now button (pre-filled WhatsApp message)
 */
function ProductPriceCard({ crop }) {
  // Determine badge styling based on price type
  const getBadgeStyle = (type) => {
    switch (type) {
      case 'fixed':
        return 'bg-[#173F35] text-[#FAF7F0] border-[#173F35]';
      case 'tree':
        return 'bg-[#4A235A] text-white border-[#4A235A]';
      case 'variable':
      default:
        return 'bg-[#76543A] text-white border-[#76543A]';
    }
  };

  return (
    <div className="bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#7C9A78]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      {/* 1. PRODUCT PHOTOGRAPH - Original photograph placed strictly ABOVE the price */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8EFE7]">
        <ImageWithFallback
          src={crop.originalCropPhoto || crop.image}
          alt={`Original photograph of ${crop.name} at Satish Kumar Family Farm`}
          aspectRatio="aspect-[4/3]"
          fallbackLabel={crop.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#173F35]/90 text-white backdrop-blur-xs shadow-xs">
            {crop.category}
          </span>
        </div>

        {/* Kannada Name Badge */}
        {crop.kannadaName && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F6F1E7]/95 text-[#173F35] shadow-2xs backdrop-blur-xs">
              {crop.kannadaName}
            </span>
          </div>
        )}

        {/* Original Farm Photo Indicator */}
        <div className="absolute bottom-2.5 left-3 z-10">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider uppercase bg-black/60 text-[#E7A93B] backdrop-blur-xs flex items-center gap-1">
            <CheckCircle2 className="w-2.5 h-2.5" />
            <span>Farm Original Photo</span>
          </span>
        </div>
      </div>

      {/* 2. Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-[#FCFAF6]">
        <div>
          {/* Product Name */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173F35] group-hover:text-[#8F2D3B] transition-colors">
              {crop.name}
            </h3>
          </div>

          {/* Price (Prominently displayed) */}
          <div className="mt-2 mb-3 pt-3 border-t border-[#7C9A78]/20 flex flex-wrap items-baseline gap-2">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#173F35] tracking-tight">
              {crop.priceAmount}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#76543A]">
              / {crop.priceUnit}
            </span>
          </div>

          {/* Pricing Label Badge */}
          <div className="mb-3">
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border ${getBadgeStyle(crop.priceType)}`}>
              {crop.priceLabel}
            </span>
          </div>

          {/* Pricing Information / Seasonal Note */}
          <div className="bg-[#F6F1E7] rounded-xl p-3 border border-[#7C9A78]/20 mb-4">
            <p className="text-xs font-semibold text-[#173F35] mb-1">
              Pricing Note:
            </p>
            <p className="text-xs text-[#1E2824]/85 leading-relaxed">
              {crop.pricingDescription}
            </p>
          </div>

          {/* Short cultivation note */}
          <p className="text-xs text-[#76543A] leading-relaxed mb-4">
            {crop.shortDesc}
          </p>
        </div>

        {/* 5. Enquire Now Button */}
        <div className="pt-2">
          <a
            href={crop.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#173F35] hover:bg-[#23584B] text-white text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group-hover:bg-[#25D366] group-hover:text-white"
            aria-label={`Enquire on WhatsApp about ${crop.name} price and availability`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
