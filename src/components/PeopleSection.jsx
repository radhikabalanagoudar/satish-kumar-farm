import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';
import { PEOPLE_DATA } from '../data/farmData';

export default function PeopleSection() {
  return (
    <section className="py-16 md:py-24 bg-[#E8EFE7]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF6] border border-[#7C9A78]/30 text-[#173F35] text-xs uppercase tracking-widest font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-[#173F35]" />
            <span>Farm Stewardship & Hands</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#173F35] mb-4">
            The People Behind Every Harvest
          </h2>

          <p className="text-base sm:text-lg text-[#76543A] leading-relaxed">
            Farming is not an automated algorithm—it is sustained by living hands, watchful eyes, and daily patience. Meet the dedicated individuals who care for our soil and crops.
          </p>
        </div>

        {/* 3 Dedicated Profiles / Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PEOPLE_DATA.map((person, idx) => (
            <div
              key={person.role}
              className="bg-[#FCFAF6] rounded-2xl overflow-hidden border border-[#7C9A78]/25 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3] bg-[#ECE5D8] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.role}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#173F35] text-white">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F2D3B]">
                    {person.role}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#173F35] mt-1 mb-3">
                    {person.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E2824]/80 leading-relaxed mb-6">
                    {person.description}
                  </p>

                  {/* Core Responsibilities */}
                  <div className="space-y-2 border-t border-[#7C9A78]/20 pt-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#76543A]">
                      Key Responsibilities
                    </p>
                    <ul className="space-y-1.5">
                      {person.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2 text-xs text-[#1E2824]/85 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7C9A78] flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom footer badge */}
              <div className="px-6 py-3 bg-[#E8EFE7]/60 border-t border-[#7C9A78]/15 text-[11px] text-[#173F35] font-medium flex items-center justify-between">
                <span>Authentic Family Agriculture</span>
                <span className="w-2 h-2 rounded-full bg-[#7C9A78]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
