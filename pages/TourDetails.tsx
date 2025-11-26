import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOURS } from '../constants';
import { Calendar, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
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

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      
      {/* Header Image */}
      <div className="relative h-[50vh]">
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
          <div className="max-w-7xl mx-auto">
             <Link to="/tours" className="text-white/80 hover:text-white flex items-center mb-4 text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tours
             </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{tour.name}</h1>
            <div className="flex flex-wrap gap-6 text-white text-sm md:text-base">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-safari-gold" />
                {tour.durationDays} Days / {tour.durationDays - 1} Nights
              </div>
              <div className="flex items-center">
                <span className="text-safari-gold font-bold text-xl mr-1">${tour.priceUsd}</span>
                <span className="opacity-80">per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">Tour Overview</h2>
              <p className="text-stone-600 leading-relaxed mb-6">{tour.fullDescription}</p>
              
              <h3 className="font-bold text-stone-800 mb-3">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-safari-leaf mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Daily Itinerary</h2>
              <div className="space-y-8 relative border-l-2 border-stone-200 ml-3 pl-8">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    <span className="absolute -left-[41px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-safari-sunset text-white text-xs font-bold">
                      {day.day}
                    </span>
                    <h3 className="text-lg font-bold text-stone-800 mb-2">{day.title}</h3>
                    <p className="text-stone-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Booking Widget */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border border-safari-sand">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Book this Adventure</h3>
              <p className="text-sm text-stone-500 mb-6">
                Interested in this tour? Fill out the details below and we will get back to you with availability and a formal quote.
              </p>
              
              <Link 
                to={`/contact?tour=${tour.id}`} 
                className="block w-full text-center py-3 bg-safari-sunset text-white font-bold rounded hover:bg-orange-700 transition-colors mb-4"
              >
                Inquire Now
              </Link>
              
              <div className="text-xs text-stone-500 text-center">
                <p>No payment required yet.</p>
                <p>We usually respond within 24 hours.</p>
              </div>

              <hr className="my-6 border-stone-100" />
              
              <h4 className="font-bold text-stone-800 mb-2 text-sm">Includes</h4>
              <ul className="text-sm text-stone-600 space-y-1 mb-4">
                <li>• Transport in Safari Van/Landcruiser</li>
                <li>• Accommodation as per itinerary</li>
                <li>• Meals on Full Board</li>
                <li>• Park Entrance Fees</li>
              </ul>
              <h4 className="font-bold text-stone-800 mb-2 text-sm">Excludes</h4>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• International Flights</li>
                <li>• Tips & Gratuities</li>
                <li>• Personal Insurance</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetails;
