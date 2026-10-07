import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ArrowUp } from 'lucide-react';
import { FARM_META } from '../data/farmData';

const FOOTER_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/story' },
  { name: 'Crops', path: '/crops' },
  { name: 'Supply Chain', path: '/supply-chain' },
  { name: 'Seasons', path: '/seasons' },
  { name: 'Our People', path: '/people' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Future', path: '/future' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#173F35] text-[#F6F1E7] border-t border-[#23584B] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7C9A78]/20 flex items-center justify-center text-[#E7A93B]">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
                  {FARM_META.ownerName}
                </h3>
                <p className="text-xs tracking-[0.25em] uppercase text-[#7C9A78] font-medium">
                  {FARM_META.subtitle}
                </p>
              </div>
            </div>

            <p className="font-serif italic text-lg text-[#F6F1E7]/90 max-w-sm">
              &ldquo;{FARM_META.tagline}&rdquo;
            </p>

            <p className="text-sm text-[#F6F1E7]/70 leading-relaxed max-w-md">
              A family agricultural initiative established approximately five years ago. Cultivating high-quality fruits, seasonal vegetables, and long-term timber investments through patience and respectful stewardship.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E7A93B]">
              Farm Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-[#F6F1E7]/80 hover:text-white hover:underline underline-offset-4 transition-colors py-1 inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Agricultural Philosophy & Journey */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E7A93B]">
              The Agricultural Journey
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {FARM_META.journeyStages.map((stage, idx) => (
                <span
                  key={stage}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-[#23584B]/60 text-[#F6F1E7]/90 border border-[#7C9A78]/30 font-medium tracking-wider"
                >
                  {stage}
                  {idx < FARM_META.journeyStages.length - 1 && ' →'}
                </span>
              ))}
            </div>
            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#7C9A78] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#23584B]/80 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F1E7]/60 gap-4">
          <p>© 2026 D. Satish Kumar. All Rights Reserved.</p>
          <p className="text-center sm:text-right font-serif italic">
            Family Agricultural Business & Supply Chain
          </p>
        </div>
      </div>
    </footer>
  );
}
