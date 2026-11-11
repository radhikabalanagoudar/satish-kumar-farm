import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, Tag, MapPin } from 'lucide-react';
import { FARM_META } from '../data/farmData';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/story' },
  { name: 'Our Crops', path: '/crops' },
  { name: 'Farm Produce & Prices', path: '/prices', highlight: true },
  { name: 'Farm Practices', path: '/practices' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Find Our Farm', path: '/find-our-farm' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F1E7]/95 backdrop-blur-sm text-[#173F35] shadow-sm border-b border-[#7C9A78]/25 py-2.5'
          : isHome
          ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-4 sm:py-5'
          : 'bg-[#F6F1E7] text-[#173F35] border-b border-[#7C9A78]/20 py-3.5 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A78] rounded-lg"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isScrolled || !isHome
                  ? 'bg-[#173F35] text-[#F6F1E7]'
                  : 'bg-white/20 backdrop-blur-xs text-white group-hover:bg-white/30'
              }`}
            >
              <Sprout className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wider transition-colors duration-200 ${
                  isScrolled || !isHome ? 'text-[#173F35]' : 'text-white'
                }`}
              >
                {FARM_META.ownerName.toUpperCase()}
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.25em] font-medium uppercase ${
                  isScrolled || !isHome ? 'text-[#7C9A78]' : 'text-[#E7A93B]'
                }`}
              >
                {FARM_META.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-0 xl:gap-0">
    
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-wider font-semibold px-2 py-1.5 xl:px-2.5 xl:py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? isScrolled || !isHome
                        ? 'bg-[#173F35] text-white shadow-2xs'
                        : 'bg-white text-[#173F35] shadow-2xs'
                      : link.highlight
                      ? isScrolled || !isHome
                        ? 'text-[#8F2D3B] hover:bg-[#8F2D3B]/10 font-bold'
                        : 'text-[#E7A93B] hover:bg-white/15 font-bold'
                      : isScrolled || !isHome
                      ? 'text-[#173F35]/85 hover:text-[#173F35] hover:bg-[#7C9A78]/15'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/prices"
              onClick={() => setMobileMenuOpen(false)}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 shadow-2xs ${
                isScrolled || !isHome
                  ? 'bg-[#8F2D3B] hover:bg-[#AA394A] text-white'
                  : 'bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35]'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Prices</span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A78] cursor-pointer ${
                isScrolled || !isHome
                  ? 'text-[#173F35] hover:bg-[#7C9A78]/20'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F1E7] border-b border-[#7C9A78]/30 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#173F35] text-white'
                      : link.highlight
                      ? 'text-[#8F2D3B] font-bold bg-[#8F2D3B]/5 hover:bg-[#8F2D3B]/10'
                      : 'text-[#173F35] hover:bg-[#7C9A78]/15'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name === 'Farm Produce & Prices' && <Tag className="w-4 h-4 text-[#8F2D3B]" />}
                    {link.name === 'Find Our Farm' && <MapPin className="w-4 h-4 text-[#173F35]" />}
                    <span>{link.name}</span>
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#E7A93B]" />}
                </Link>
              );
            })}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <Link
                to="/prices"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 bg-[#8F2D3B] text-white font-semibold rounded-lg text-xs tracking-wider uppercase shadow-xs hover:bg-[#AA394A] transition-colors"
              >
                Farm Prices
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 bg-[#173F35] text-white font-semibold rounded-lg text-xs tracking-wider uppercase shadow-xs hover:bg-[#23584B] transition-colors"
              >
                Contact Farm
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
