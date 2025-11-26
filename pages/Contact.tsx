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
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-white">Contact Us</h1>
        <p className="text-stone-400 mt-2">Start planning your Kenyan adventure today</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">Get in Touch</h2>
                <p className="text-stone-600 leading-relaxed">
                Whether you have a question about our tours, pricing, accommodation, or just want some travel advice, our team is ready to answer all your questions.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 space-y-6">
              <div className="flex items-start">
                <div className="bg-safari-sand p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Phone</h3>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg text-safari-sunset font-medium hover:underline">{COMPANY_INFO.phone}</a>
                  <p className="text-xs text-stone-500 mt-1">Mon-Sun 8am-8pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-safari-sand p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Email</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-stone-600 hover:text-safari-sunset">{COMPANY_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-safari-sand p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-safari-earth" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Location</h3>
                  <p className="text-stone-600">{COMPANY_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-stone-200 h-80">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.30296942958!2d36.70730722883313!3d-1.3028617833621437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1652174523991!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nairobi Map"
                ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-safari-leaf">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">Inquiry Received!</h3>
                <p className="text-stone-600 mb-6">Thank you for your interest in Tom Safaris. Our team has received your details and will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 border border-safari-leaf text-safari-leaf font-medium rounded hover:bg-safari-sand"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-stone-800">Booking Inquiry</h2>
                    <p className="text-stone-500 text-sm">Tell us about your dream trip.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                      placeholder="+254..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="travelers" className="block text-sm font-bold text-stone-700 mb-1">No. of Travelers</label>
                    <input
                      type="number"
                      id="travelers"
                      name="travelers"
                      min="1"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                      value={formData.travelers}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tourId" className="block text-sm font-bold text-stone-700 mb-1">Interested Tour Package</label>
                  <select
                    id="tourId"
                    name="tourId"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                    value={formData.tourId}
                    onChange={handleChange}
                  >
                    <option value="">-- I'm not sure yet / General Inquiry --</option>
                    {TOURS.map(tour => (
                      <option key={tour.id} value={tour.id}>{tour.name} - {tour.durationDays} Days (${tour.priceUsd})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-stone-700 mb-1">Preferred Travel Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-1">Special Requests / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your interests, dietary requirements, or any questions you have..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:ring-2 focus:ring-safari-leaf focus:border-transparent outline-none transition-shadow"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-safari-leaf text-white font-bold rounded hover:bg-green-900 transition-colors shadow-md text-lg"
                >
                  Submit Inquiry
                </button>
                
                <p className="text-xs text-stone-400 text-center mt-4">
                  We respect your privacy. Your details are safe with us.
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