import React from 'react';
import GallerySection from '../components/GallerySection';
import OwnerSection from '../components/OwnerSection';
import { Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Farm Life in Pictures</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Visual Farm Gallery
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            A window into our orchards, seasonal fruit varieties, soil preparations, irrigation lines, and the quiet beauty of our timber trees.
          </p>
        </div>
      </div>

      {/* Main Responsive Gallery */}
      <GallerySection isPreview={false} />

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
