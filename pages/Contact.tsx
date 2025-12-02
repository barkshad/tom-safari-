// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { useData } from '../context/DataContext';
import { InquiryForm } from '../types';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  const { companyInfo, tours, addInquiry } = useData();
  const location = useLocation();
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    tourId: '',
    date: '',
    travelers: 2,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tourId = params.get('tour');
    if (tourId) {
      setFormData(prev => ({ ...prev, tourId }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry(formData);
    setSubmitted(true);
  };

  return (
    <PageTransition>
    <div className="min-h-screen bg-safari-sand">
      <div className="bg-stone-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
        >
            <h1 className="text-5xl font-serif font-bold text-white">Contact Us</h1>
            <p className="text-stone-400 mt-2 text-lg">Start planning your Kenyan adventure today</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-8"
          >
            <div>
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Get in Touch</h2>
                <p className="text-stone-600 leading-relaxed text-lg font-light">
                  Our team is ready to answer all your questions about tours, pricing, and accommodation.
                </p>
            </div>

            <div className="glass-premium p-8 space-y-8 rounded-3xl">
              <div className="flex items-start group">
                <div className="bg-white p-4 rounded-full mr-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Phone</h3>
                  <a href={`tel:${companyInfo.phone}`} className="text-xl text-safari-sunset font-medium hover:underline">{companyInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white p-4 rounded-full mr-5 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Email</h3>
                  <a href={`mailto:${companyInfo.email}`} className="text-lg text-stone-600 hover:text-safari-sunset transition-colors">{companyInfo.email}</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white p-4 rounded-full mr-5 shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Location</h3>
                  <p className="text-lg text-stone-600">{companyInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-white/40 h-80 relative group">
                <iframe 
                    src="https://maps.google.com/maps?q=Titanic%20Plaza%2C%20Kilifi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/yc1JeKD9pwbvb9WM6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-white text-stone-900 px-5 py-3 rounded-full shadow-xl font-bold flex items-center hover:scale-105 transition-transform"
                >
                   <MapPin className="w-4 h-4 mr-2 text-safari-sunset" /> View Larger Map
                </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="glass-card p-10 rounded-[2rem] border-t-8 border-safari-leaf"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-12 h-12" />
                </motion.div>
                <h3 className="text-3xl font-bold text-stone-800 mb-4">Received!</h3>
                <p className="text-stone-600 mb-8">We will contact you within 24 hours.</p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({...formData, message: ''}); }}
                  className="px-8 py-3 border-2 border-safari-leaf text-safari-leaf font-bold rounded-full hover:bg-safari-leaf hover:text-white transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-stone-800">Booking Inquiry</h2>
                    <p className="text-stone-500">Tell us about your dream trip.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Full Name</label>
                    <input
                      type="text" name="name" required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-safari-leaf outline-none"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Email</label>
                    <input
                      type="email" name="email" required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-safari-leaf outline-none"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Phone</label>
                    <input
                      type="tel" name="phone"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-safari-leaf outline-none"
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Travelers</label>
                    <input
                      type="number" name="travelers" min="1"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-safari-leaf outline-none"
                      value={formData.travelers} onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Interested Tour</label>
                  <select
                    name="tourId"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-safari-leaf outline-none"
                    value={formData.tourId} onChange={handleChange}
                  >
                    <option value="">-- General Inquiry --</option>
                    {tours.map(tour => (
                      <option key={tour.id} value={tour.id}>{tour.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Message</label>
                  <textarea
                    name="message" rows={4}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-safari-leaf outline-none"
                    value={formData.message} onChange={handleChange}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-safari-leaf text-white font-bold rounded-xl hover:bg-green-900 transition-colors shadow-lg text-lg uppercase tracking-wide"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;