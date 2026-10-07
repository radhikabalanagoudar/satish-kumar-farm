import React, { useState } from 'react';
import { Sprout } from 'lucide-react';
import { CROPS_DATA } from '../data/farmData';
import CropCard from '../components/CropCard';
import CropModal from '../components/CropModal';
import TimberSection from '../components/TimberSection';
import OwnerSection from '../components/OwnerSection';

export default function Crops() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [filter, setFilter] = useState('all');

  const fruits = CROPS_DATA.filter((c) => c.category === 'Fruit');
  const vegetables = CROPS_DATA.filter((c) => c.category === 'Vegetable');

  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Header */}
      <div className="py-16 md:py-20 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Farm Harvests & Cultivation</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Our Produce & Living Investments
          </h1>

          <p className="text-base sm:text-lg text-[#F6F1E7]/90 font-light max-w-2xl mx-auto leading-relaxed">
            From nutrient-dense fruits and fresh seasonal vegetables to long-term timber trees, each crop reflects attentive soil management and natural cultivation.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              All Crops
            </button>
            <button
              type="button"
              onClick={() => setFilter('fruits')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                filter === 'fruits'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Fruits ({fruits.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('vegetables')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                filter === 'vegetables'
                  ? 'bg-[#E7A93B] text-[#173F35]'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              Vegetables ({vegetables.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Category 1: Fruits */}
        {(filter === 'all' || filter === 'fruits') && (
          <section aria-labelledby="fruits-heading">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#7C9A78]/25">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8F2D3B] font-bold">
                  Category 01
                </span>
                <h2 id="fruits-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#173F35] flex items-center gap-3">
                  <span>Fresh Fruits</span>
                  <span className="text-xs font-normal text-[#76543A] font-sans px-2.5 py-0.5 rounded-full bg-[#E8EFE7]">
                    6 Cultivations
                  </span>
                </h2>
              </div>
              <p className="text-xs text-[#76543A] hidden sm:block max-w-xs text-right">
                Pomegranate, Dragon Fruit, Mango, Lemon, Papaya, and native Jamun.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {fruits.map((crop) => (
                <CropCard
                  key={crop.id}
                  crop={crop}
                  onClick={() => setSelectedCrop(crop)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Category 2: Vegetables */}
        {(filter === 'all' || filter === 'vegetables') && (
          <section aria-labelledby="vegetables-heading">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#7C9A78]/25">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#76543A] font-bold">
                  Category 02
                </span>
                <h2 id="vegetables-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#173F35] flex items-center gap-3">
                  <span>Farm Vegetables</span>
                  <span className="text-xs font-normal text-[#76543A] font-sans px-2.5 py-0.5 rounded-full bg-[#E8EFE7]">
                    2 Regular Rotations
                  </span>
                </h2>
              </div>
              <p className="text-xs text-[#76543A] hidden sm:block max-w-xs text-right">
                Brinjal / Eggplant and vine-ripened Tomatoes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
              {vegetables.map((crop) => (
                <CropCard
                  key={crop.id}
                  crop={crop}
                  onClick={() => setSelectedCrop(crop)}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Category 3: Timber Trees Section */}
      <div id="timber">
        <TimberSection />
      </div>

      {/* Crop Modal */}
      <CropModal
        crop={selectedCrop}
        onClose={() => setSelectedCrop(null)}
      />

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
