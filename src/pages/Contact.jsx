import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sprout, Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { FARM_META } from '../data/farmData';
import OwnerSection from '../components/OwnerSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Crop Purchase / Bulk Supply',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide an enquiry message';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F6F1E7]">
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-[#173F35] text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-widest font-semibold mb-4">
            <Sprout className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Relationships</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Connect with the Farm
          </h1>
          <p className="text-base sm:text-lg text-[#F6F1E7]/85 font-light leading-relaxed">
            Interested in fresh produce directly from our farm? Contact the owner directly, visit us at our farm location, or send an enquiry note below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Farm Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FCFAF6] rounded-3xl p-8 border border-[#7C9A78]/25 shadow-xs">
              <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#7C9A78]">
                Stewardship & Governance
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#173F35] mt-1 mb-1">
                {FARM_META.ownerName}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#76543A] font-semibold mb-6">
                {FARM_META.ownerTitle}
              </p>

              <div className="space-y-5 pt-4 border-t border-[#7C9A78]/20">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      Phone Number
                    </p>
                    <a
                      href={`tel:${FARM_META.contact.phone}`}
                      className="text-base text-[#173F35] hover:text-[#8F2D3B] font-semibold transition-colors inline-block mt-0.5"
                    >
                      {FARM_META.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <div className="mt-1">
                      <a
                        href={FARM_META.contact.defaultWhatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors shadow-2xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${FARM_META.contact.email}`}
                      className="text-sm text-[#173F35] hover:text-[#8F2D3B] font-medium transition-colors inline-block mt-0.5 break-all"
                    >
                      {FARM_META.contact.email}
                    </a>
                  </div>
                </div>

                {/* Farm Location Coordinates */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      Farm Coordinates
                    </p>
                    <p className="text-sm text-[#76543A] font-mono mt-0.5">
                      {FARM_META.contact.location.coordinatesDisplay}
                    </p>
                    <a
                      href="#find-our-farm"
                      className="text-xs font-semibold text-[#173F35] hover:text-[#8F2D3B] underline underline-offset-2 mt-1 inline-block"
                    >
                      View Map & Directions ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Farm Collection Notice */}
            <div className="p-6 rounded-2xl bg-[#E8EFE7] border border-[#7C9A78]/30">
              <h3 className="font-serif text-base font-bold text-[#173F35] mb-2 flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#7C9A78]" />
                <span>Farm-Gate Collection Only</span>
              </h3>
              <p className="text-xs text-[#1E2824]/85 leading-relaxed">
                {FARM_META.contact.salesPolicyNotice}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#FCFAF6] rounded-3xl p-8 sm:p-10 border border-[#7C9A78]/25 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#173F35] text-[#E7A93B] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#173F35]">
                  Thank you. Your enquiry has been received.
                </h3>
                <p className="text-sm text-[#76543A] max-w-md mx-auto leading-relaxed">
                  We have noted your details and will review your message with the family farm team.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        purpose: 'Crop Purchase / Bulk Supply',
                        message: ''
                      });
                    }}
                    className="px-6 py-2 rounded-full border border-[#173F35] text-xs uppercase tracking-wider font-semibold text-[#173F35] hover:bg-[#173F35] hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#173F35] mb-1">
                    Send an Agricultural Enquiry
                  </h3>
                  <p className="text-xs text-[#76543A]">
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#173F35] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#1E2824] focus:outline-none transition-colors ${
                      errors.name ? 'border-[#8F2D3B] ring-1 ring-[#8F2D3B]' : 'border-[#7C9A78]/30 focus:border-[#173F35]'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#8F2D3B] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#173F35] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#1E2824] focus:outline-none transition-colors ${
                        errors.email ? 'border-[#8F2D3B] ring-1 ring-[#8F2D3B]' : 'border-[#7C9A78]/30 focus:border-[#173F35]'
                      }`}
                      placeholder="name@domain.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#8F2D3B] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#173F35] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#7C9A78]/30 text-sm text-[#1E2824] focus:outline-none focus:border-[#173F35] transition-colors"
                      placeholder="Optional contact number"
                    />
                  </div>
                </div>

                {/* Purpose */}
                <div>
                  <label htmlFor="purpose" className="block text-xs font-bold uppercase tracking-wider text-[#173F35] mb-1.5">
                    Purpose of Enquiry
                  </label>
                  <select
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#7C9A78]/30 text-sm text-[#1E2824] focus:outline-none focus:border-[#173F35] transition-colors cursor-pointer"
                  >
                    <option value="Crop Purchase / Bulk Supply">Crop Purchase / Direct Farm Produce</option>
                    <option value="Direct Farm Visit">Direct Farm Visit</option>
                    <option value="Long-term Timber Inquiries">Long-term Timber Inquiries</option>
                    <option value="General Agricultural Conversation">General Agricultural Conversation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#173F35] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#1E2824] focus:outline-none transition-colors ${
                      errors.message ? 'border-[#8F2D3B] ring-1 ring-[#8F2D3B]' : 'border-[#7C9A78]/30 focus:border-[#173F35]'
                    }`}
                    placeholder="Tell us about the crops you are interested in or questions about harvest availability..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#8F2D3B] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#173F35] hover:bg-[#23584B] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. DEDICATED GOOGLE MAPS – FIND OUR FARM SECTION */}
      <section id="find-our-farm" aria-label="Find Our Farm" className="py-16 md:py-20 bg-[#FCFAF6] border-t border-[#7C9A78]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#7C9A78]">
              Direct Farm Gate Location
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173F35] mt-1 mb-3">
              Find Our Farm
            </h2>
            <p className="text-sm sm:text-base text-[#1E2824]/80 leading-relaxed font-light">
              Visit our family farm to select and collect fresh produce directly from the land. Use the map and directions below to navigate directly to the farm.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-[#7C9A78]/30 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Map Information Panel */}
              <div className="lg:col-span-5 p-8 sm:p-10 bg-[#173F35] text-white flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#23584B] text-[#E7A93B] text-xs uppercase tracking-wider font-semibold mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Farm Coordinates</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Satish Kumar Family Farm
                  </h3>

                  <p className="text-sm text-[#F6F1E7]/80 leading-relaxed mb-6">
                    Fresh produce is available for collection directly at the farm gate. Please contact us in advance to verify seasonal availability and harvest timing before your visit.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-white/15">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#A3BCA0] font-semibold">
                        GPS Coordinates
                      </p>
                      <p className="text-lg font-mono font-bold text-[#E7A93B] mt-0.5">
                        {FARM_META.contact.location.coordinatesDisplay}
                      </p>
                      <p className="text-xs text-white/70 font-mono mt-0.5">
                        Lat: {FARM_META.contact.location.latitude}, Lng: {FARM_META.contact.location.longitude}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#A3BCA0] font-semibold">
                        Sales Policy
                      </p>
                      <p className="text-xs text-[#F6F1E7]/85 mt-1 leading-relaxed">
                        Farm-gate collection only. Home delivery and shipping are not available.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Directions & Navigation Buttons */}
                <div className="space-y-3 pt-6 border-t border-white/15">
                  <a
                    href={FARM_META.contact.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E7A93B] hover:bg-[#F4BD56] text-[#173F35] font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a
                    href={FARM_META.contact.location.sharedMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/25 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Shared Map Location</span>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] bg-[#E8EFE7]">
                <iframe
                  title="Google Maps - Satish Kumar Family Farm Location"
                  src={FARM_META.contact.location.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
