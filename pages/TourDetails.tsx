
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Clock, CheckCircle, ArrowLeft, Camera, XCircle, MapPin } from 'lucide-react';
import { Tour } from '../types';
import { motion } from 'framer-motion';

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tours } = useData();
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    const foundTour = tours.find(t => t.id === id);
    if (foundTour) {
      setTour(foundTour);
    }
  }, [id, tours]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-800">Tour not found</h2>
          <Link to="/tours" className="text-safari-sunset mt-4 inline-block hover:underline">Return to Tours</Link>
        </div>
      </div>
    );
  }

  // Smart Gallery Logic 
  // 1. Check if the tour has manually uploaded gallery images (from Admin)
  // 2. If not, fallback to smart category images
  const getDisplayImages = () => {
    if (tour.gallery && tour.gallery.length > 0) {
      return tour.gallery;
    }

    // Fallback logic
    switch(tour.category) {
      case 'Coastal':
      case 'Day Trip': 
        return [
           "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=800&auto=format&fit=crop", 
           "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=800&auto=format&fit=crop", 
           "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop", 
           "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop"  
        ];
      case 'Trek':
        return [
            "https://images.unsplash.com/photo-1650635477319-798a77f7962e?q=80&w=800&auto=format&fit=crop", 
            "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800&auto=format&fit=crop", 
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" 
        ];
      default: 
        return [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop", 
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop", 
            "https://images.unsplash.com/photo-1534449733088-02456488a032?q=80&w=800&auto=format&fit=crop", 
            "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=800&auto=format&fit=crop"  
        ];
    }
  };

  const galleryImages = getDisplayImages();

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      
      {/* Header Image */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full"
        >
            <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        
        <div className="absolute top-24 left-0 w-full p-4 md:p-12">
            <Link to="/tours" className="text-white/80 hover:text-white flex items-center mb-6 text-sm font-medium transition-colors w-fit bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tours
            </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center space-x-2 text-safari-gold mb-2 font-bold tracking-wider uppercase text-sm">
                    <MapPin className="w-4 h-4" /> <span>{tour.category} Safari</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 leading-tight max-w-4xl">{tour.name}</h1>
                <div className="flex flex-wrap gap-8 text-white text-base">
                <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <Clock className="w-5 h-5 mr-3 text-safari-gold" />
                    <span className="font-medium">{tour.durationDays} Days / {Math.max(1, tour.durationDays - 1)} Nights</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <span className="text-safari-gold font-bold text-2xl mr-2">${tour.priceUsd}</span>
                    <span className="opacity-80 mt-1 text-sm">per person</span>
                </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-stone-100"
            >
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Experience Overview</h2>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg font-light">{tour.fullDescription}</p>
              
              <h3 className="font-bold text-stone-800 mb-6 text-lg uppercase tracking-wide">Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center bg-stone-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-safari-leaf mr-4 flex-shrink-0" />
                    <span className="text-stone-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Itinerary */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-stone-100"
            >
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-10">Day-by-Day Itinerary</h2>
              <div className="space-y-12 relative border-l-2 border-stone-200 ml-5 pl-10">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative group">
                    <span className="absolute -left-[54px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-safari-earth text-white font-bold border-4 border-white shadow-sm group-hover:scale-110 transition-transform">
                      {day.day}
                    </span>
                    <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-safari-sunset transition-colors">Day {day.day}: {day.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Photo Gallery */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-stone-100"
            >
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-8 flex items-center">
                    <Camera className="w-6 h-6 mr-3 text-safari-gold" /> Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-xl overflow-hidden cursor-pointer group">
                            <img 
                                src={img} 
                                alt={`Gallery ${idx}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                        </div>
                    ))}
                    {galleryImages.length === 0 && (
                        <p className="col-span-4 text-center text-stone-500 italic py-8">No gallery images available.</p>
                    )}
                </div>
            </motion.div>

          </div>

          {/* Floating Booking Widget */}
          <div className="lg:col-span-1">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl shadow-xl p-8 sticky top-28 border border-white/40"
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-2 font-serif">Ready to book?</h3>
              <p className="text-stone-600 mb-8 text-sm">
                Secure your spot for the <span className="font-semibold text-safari-earth">{tour.name}</span> today.
              </p>
              
              <Link 
                to={`/contact?tour=${tour.id}`} 
                className="block w-full text-center py-4 bg-safari-sunset text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 mb-8 uppercase tracking-wide transform hover:-translate-y-1"
              >
                Inquire Now
              </Link>
              
              <div className="space-y-6">
                <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                    <h4 className="font-bold text-stone-800 mb-3 text-sm flex items-center uppercase tracking-wide"><CheckCircle className="w-4 h-4 mr-2 text-green-600" /> What's Included</h4>
                    <ul className="text-sm text-stone-600 space-y-2">
                    {['Transport in Safari Vehicle', 'Full board accommodation', 'All Park Entrance Fees', 'Professional English speaking guide', 'Game drives as per itinerary'].map(item => (
                        <li key={item} className="flex items-start"><span className="mr-2 text-green-500">•</span> {item}</li>
                    ))}
                    </ul>
                </div>

                <div className="bg-white/50 p-4 rounded-xl border border-white/60">
                    <h4 className="font-bold text-stone-800 mb-3 text-sm flex items-center uppercase tracking-wide"><XCircle className="w-4 h-4 mr-2 text-red-500" /> What's Excluded</h4>
                    <ul className="text-sm text-stone-600 space-y-2">
                    {['International Flights', 'Tips & Gratuities', 'Personal Insurance', 'Alcoholic drinks'].map(item => (
                        <li key={item} className="flex items-start"><span className="mr-2 text-red-400">•</span> {item}</li>
                    ))}
                    </ul>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetails;