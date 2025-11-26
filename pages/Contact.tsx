import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO, TOURS } from '../constants';
import { InquiryForm } from '../types';

const Contact: React.FC = () => {
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
    // Reset after 3 seconds could be an option, but usually better to show success state
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 py-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-white">Contact Us</h1>
        <p className="text-stone-400 mt-2">We'd love to hear from you</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Get in Touch</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Whether you have a question about our tours, pricing, accommodation, or just want some travel advice, our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-safari-sand p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Phone</h3>
                  <p className="text-stone-600">{COMPANY_INFO.phone}</p>
                  <p className="text-xs text-stone-500">Mon-Fri 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-safari-sand p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Email</h3>
                  <p className="text-stone-600">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-safari-sand p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Office</h3>
                  <p className="text-stone-600">{COMPANY_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Simulated Map Placeholder */}
            <div className="mt-8 h-64 bg-stone-200 rounded-xl overflow-hidden relative flex items-center justify-center">
              <div className="text-stone-400 font-bold flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-2" />
                <span>Google Map Embed Placeholder</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Message Sent!</h3>
                <p className="text-stone-600">Thank you for your inquiry. One of our safari experts will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-safari-sunset underline hover:text-orange-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-stone-800">Send an Inquiry</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="travelers" className="block text-sm font-medium text-stone-700 mb-1">No. of Travelers</label>
                    <input
                      type="number"
                      id="travelers"
                      name="travelers"
                      min="1"
                      className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow"
                      value={formData.travelers}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tourId" className="block text-sm font-medium text-stone-700 mb-1">Interested Tour</label>
                  <select
                    id="tourId"
                    name="tourId"
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow bg-white"
                    value={formData.tourId}
                    onChange={handleChange}
                  >
                    <option value="">-- General Inquiry --</option>
                    {TOURS.map(tour => (
                      <option key={tour.id} value={tour.id}>{tour.name} ({tour.durationDays} Days)</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-1">Preferred Travel Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Special Requests / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:ring-2 focus:ring-safari-gold focus:border-transparent outline-none transition-shadow"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-safari-leaf text-white font-bold rounded hover:bg-green-900 transition-colors shadow-md"
                >
                  Submit Inquiry
                </button>
                
                <p className="text-xs text-stone-400 text-center mt-4">
                  Your information is kept private. We do not spam.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
