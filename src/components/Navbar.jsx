import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { FARM_META } from '../data/farmData';

const NAV_LINKS = [
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
          ? 'bg-[#F6F1E7]/95 backdrop-blur-sm text-[#173F35] shadow-sm border-b border-[#7C9A78]/25 py-3'
          : isHome
          ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
          : 'bg-[#F6F1E7] text-[#173F35] border-b border-[#7C9A78]/20 py-4 shadow-2xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A78] rounded-lg"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isScrolled || !isHome
                  ? 'bg-[#173F35] text-[#F6F1E7]'
                  : 'bg-white/20 backdrop-blur-xs text-white group-hover:bg-white/30'
              }`}
            >
              <Sprout className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-xl font-bold tracking-wider transition-colors duration-200 ${
                  isScrolled || !isHome ? 'text-[#173F35]' : 'text-white'
                }`}
              >
                {FARM_META.ownerName.toUpperCase()}
              </span>
              <span
                className={`text-[10px] tracking-[0.25em] font-medium uppercase ${
                  isScrolled || !isHome ? 'text-[#7C9A78]' : 'text-[#E7A93B]'
                }`}
              >
                {FARM_META.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-wider font-semibold px-3 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? isScrolled || !isHome
                        ? 'bg-[#173F35] text-white shadow-2xs'
                        : 'bg-white text-[#173F35] shadow-2xs'
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
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`hidden sm:inline-flex items-center px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 shadow-2xs ${
                isScrolled || !isHome
                  ? 'bg-[#8F2D3B] hover:bg-[#AA394A] text-white'
                  : 'bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35]'
              }`}
            >
              Enquire
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C9A78] cursor-pointer ${
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
        <div className="xl:hidden bg-[#F6F1E7] border-b border-[#7C9A78]/30 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
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
                      : 'text-[#173F35] hover:bg-[#7C9A78]/15'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#E7A93B]" />}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 bg-[#8F2D3B] text-white font-semibold rounded-lg text-sm tracking-wider uppercase shadow-xs hover:bg-[#AA394A] transition-colors"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
