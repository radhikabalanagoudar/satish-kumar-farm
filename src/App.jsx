import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

import Home from './pages/Home';
import Story from './pages/Story';
import Crops from './pages/Crops';
import SupplyChainPage from './pages/SupplyChain';
import Seasons from './pages/Seasons';
import People from './pages/People';
import Gallery from './pages/Gallery';
import Future from './pages/Future';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F6F1E7] text-[#1E2824]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/supply-chain" element={<SupplyChainPage />} />
              <Route path="/seasons" element={<Seasons />} />
              <Route path="/people" element={<People />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/future" element={<Future />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home to guarantee no broken routes or 404s */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
