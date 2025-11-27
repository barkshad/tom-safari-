// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { useData } from '../context/DataContext';
import { InquiryForm } from '../types';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { companyInfo, tours } = useData();
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
    // Auto-select tour if coming from a tour details page
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
    // Simulation of API call
    console.log('Form Submitted', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
             transition={{ duration: 0.8 }}
             className="space-y-8"
          >
            <div>
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Get in Touch</h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                Whether you have a question about our tours, pricing, accommodation, or just want some travel advice, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-stone-200/50 border border-stone-100 p-8 space-y-8">
              <div className="flex items-start group">
                <div className="bg-safari-sand p-4 rounded-full mr-5 group-hover:bg-safari-gold group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-safari-earth group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Phone</h3>
                  <a href={`tel:${companyInfo.phone}`} className="text-xl text-safari-sunset font-medium hover:underline">{companyInfo.phone}</a>
                  <p className="text-sm text-stone-500 mt-1">Mon-Sun 8am-8pm</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-safari-sand p-4 rounded-full mr-5 group-hover:bg-safari-gold group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6 text-safari-earth group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Email</h3>
                  <a href={`mailto:${companyInfo.email}`} className="text-lg text-stone-600 hover:text-safari-sunset transition-colors">{companyInfo.email}</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-safari-sand p-4 rounded-full mr-5 group-hover:bg-safari-gold group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6 text-safari-earth group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-lg">Location</h3>
                  <p className="text-lg text-stone-600">{companyInfo.location}</p>
                  <a 
                    href="https://maps.app.goo.gl/kGzvoCnVMqoaxL68A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-sm text-safari-sunset hover:underline font-bold"
                  >
                    View on Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 h-80 relative bg-stone-100">
                <iframe 
                    src="https://maps.google.com/maps?q=Titanic%20Plaza%2C%20Kilifi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Titanic Plaza Map"
                ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-8 border-safari-leaf"
          >
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-stone-800 mb-4">Inquiry Received!</h3>
                <p className="text-stone-600 mb-8 text-lg">Thank you for your interest in {companyInfo.name}. Our team has received your details and will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 border-2 border-safari-leaf text-safari-leaf font-bold rounded-full hover:bg-safari-sand transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-stone-800">Booking Inquiry</h2>
                    <p className="text-stone-500">Tell us about your dream trip.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                      placeholder="+254..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="travelers" className="block text-sm font-bold text-stone-700 mb-2">No. of Travelers</label>
                    <input
                      type="number"
                      id="travelers"
                      name="travelers"
                      min="1"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                      value={formData.travelers}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tourId" className="block text-sm font-bold text-stone-700 mb-2">Interested Tour Package</label>
                  <select
                    id="tourId"
                    name="tourId"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                    value={formData.tourId}
                    onChange={handleChange}
                  >
                    <option value="">-- I'm not sure yet / General Inquiry --</option>
                    {tours.map(tour => (
                      <option key={tour.id} value={tour.id}>{tour.name} - {tour.durationDays} Days (${tour.priceUsd})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-stone-700 mb-2">Preferred Travel Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">Special Requests / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your interests, dietary requirements, or any questions you have..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-all"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-safari-leaf text-white font-bold rounded-lg hover:bg-green-900 transition-colors shadow-lg text-lg uppercase tracking-wide"
                >
                  Submit Inquiry
                </motion.button>
                
                <p className="text-xs text-stone-400 text-center mt-4">
                  We respect your privacy. Your details are safe with us.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;