import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOURS } from '../constants';
import { Calendar, Clock, CheckCircle, ArrowLeft, Camera, XCircle } from 'lucide-react';
import { Tour } from '../types';

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    const foundTour = TOURS.find(t => t.id === id);
    if (foundTour) {
      setTour(foundTour);
    }
  }, [id]);

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

  // Placeholder images for gallery (since we don't have multiple real images per tour in constants)
  const galleryImages = [
    tour.image,
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1074/800/600",
    "https://picsum.photos/id/1039/800/600"
  ];

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      
      {/* Header Image */}
      <div className="relative h-[60vh]">
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pb-16">
          <div className="max-w-7xl mx-auto">
             <Link to="/tours" className="text-white/80 hover:text-white flex items-center mb-6 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tours
             </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">{tour.name}</h1>
            <div className="flex flex-wrap gap-8 text-white text-base">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3 text-safari-gold" />
                <span className="font-medium">{tour.durationDays} Days / {tour.durationDays - 1} Nights</span>
              </div>
              <div className="flex items-center">
                <span className="text-safari-gold font-bold text-3xl mr-2">${tour.priceUsd}</span>
                <span className="opacity-80 mt-1">per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4 border-b pb-2 border-stone-100">Tour Overview</h2>
              <p className="text-stone-600 leading-relaxed mb-8 text-lg">{tour.fullDescription}</p>
              
              <h3 className="font-bold text-stone-800 mb-4 text-lg">Highlights & Destinations</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start bg-stone-50 p-3 rounded">
                    <CheckCircle className="w-5 h-5 text-safari-leaf mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-8 border-b pb-2 border-stone-100">Itinerary</h2>
              <div className="space-y-10 relative border-l-2 border-stone-200 ml-4 pl-10">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    <span className="absolute -left-[53px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-safari-earth text-white font-bold border-4 border-white shadow-sm">
                      {day.day}
                    </span>
                    <h3 className="text-lg font-bold text-stone-800 mb-2">Day {day.day}: {day.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-stone-100">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center">
                    <Camera className="w-6 h-6 mr-3 text-safari-gold" /> Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-lg overflow-hidden group">
                            <img 
                                src={img} 
                                alt={`Gallery ${idx}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                        </div>
                    ))}
                </div>
            </div>

          </div>

          {/* Sidebar Booking Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border-t-4 border-safari-sunset">
              <h3 className="text-xl font-bold text-stone-800 mb-2">Book This Tour</h3>
              <p className="text-stone-500 mb-6 text-sm">
                Secure your spot for the <span className="font-semibold text-safari-earth">{tour.name}</span>.
              </p>
              
              <Link 
                to={`/contact?tour=${tour.id}`} 
                className="block w-full text-center py-4 bg-safari-sunset text-white font-bold rounded hover:bg-orange-700 transition-colors mb-6 shadow-md uppercase tracking-wide"
              >
                Inquire Now
              </Link>
              
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 mb-6">
                 <h4 className="font-bold text-stone-800 mb-3 text-sm flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" /> What's Included</h4>
                 <ul className="text-sm text-stone-600 space-y-2">
                   <li>• Transport in Safari Vehicle</li>
                   <li>• Full board accommodation</li>
                   <li>• All Park Entrance Fees</li>
                   <li>• Professional English speaking guide</li>
                   <li>• Game drives as per itinerary</li>
                 </ul>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
                 <h4 className="font-bold text-stone-800 mb-3 text-sm flex items-center"><XCircle className="w-4 h-4 mr-2 text-red-500" /> What's Excluded</h4>
                 <ul className="text-sm text-stone-600 space-y-2">
                   <li>• International Flights</li>
                   <li>• Tips & Gratuities</li>
                   <li>• Personal Insurance</li>
                   <li>• Alcoholic drinks</li>
                 </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetails;