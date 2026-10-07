import React, { useEffect, useRef } from 'react';
import { Sprout } from 'lucide-react';
import { STORY_MILESTONES } from '../data/farmData';

export default function StoryTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = containerRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => items?.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-8">
      {/* Central Stem Line */}
      <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-[#7C9A78]/30 sm:-translate-x-1/2" />

      <div className="space-y-12">
        {STORY_MILESTONES.map((milestone, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={milestone.phase}
              className="timeline-item opacity-0 translate-y-6 transition-all duration-500 ease-out relative flex flex-col sm:flex-row items-start"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#173F35] text-[#E7A93B] border-4 border-[#F6F1E7] flex items-center justify-center z-10 shadow-xs">
                <Sprout className="w-3.5 h-3.5" />
              </div>

              {/* Card Container Left or Right */}
              <div
                className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                  isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto'
                }`}
              >
                <div className="bg-[#FCFAF6] rounded-2xl p-6 border border-[#7C9A78]/25 shadow-xs hover:border-[#173F35] transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#E8EFE7] text-[#173F35]">
                      {milestone.year}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#8F2D3B]">
                      {milestone.phase}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#173F35] mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1E2824]/85 leading-relaxed mb-3">
                    {milestone.description}
                  </p>

                  <p className="text-xs text-[#76543A] italic font-serif">
                    {milestone.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
