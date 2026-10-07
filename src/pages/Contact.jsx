import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sprout } from 'lucide-react';
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
            Whether inquiring about seasonal harvests, supply relationships, or farm visits, we welcome thoughtful agricultural conversations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Farm Contact Details (Respecting strict placeholder requirements) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FCFAF6] rounded-3xl p-8 border border-[#7C9A78]/25 shadow-xs">
              <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#7C9A78]">
                Stewardship & Governance
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#173F35] mt-1 mb-2">
                {FARM_META.ownerName}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#76543A] font-semibold mb-6">
                {FARM_META.ownerTitle}
              </p>

              <div className="space-y-5 pt-4 border-t border-[#7C9A78]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm text-[#76543A] font-medium">
                      {FARM_META.contact.phonePlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm text-[#76543A] font-medium">
                      {FARM_META.contact.emailPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EFE7] text-[#173F35] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#173F35] uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm text-[#76543A] font-medium">
                      {FARM_META.contact.locationPlaceholder}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#E8EFE7] border border-[#7C9A78]/30">
              <h3 className="font-serif text-base font-bold text-[#173F35] mb-1">
                Seasonal Produce Inquiries
              </h3>
              <p className="text-xs text-[#1E2824]/80 leading-relaxed">
                During peak fruit seasons (Mango in summer, Pomegranate in winter, Dragon Fruit during monsoon flushes), please specify your intended supply timeframe in the form.
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
                    <option value="Crop Purchase / Bulk Supply">Crop Purchase / Bulk Supply</option>
                    <option value="Long-term Timber Inquiries">Long-term Timber Inquiries</option>
                    <option value="Supply Chain Partnership">Supply Chain Partnership</option>
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
                    placeholder="Tell us about your requirements or question..."
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

      {/* Small Owner Profile at the end */}
      <OwnerSection />
    </div>
  );
}
