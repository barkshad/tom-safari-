import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-safari-leaf text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {tour.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 group-hover:text-safari-sunset transition-colors">
          {tour.name}
        </h3>
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-grow">
          {tour.shortDescription}
        </p>
        
        <div className="flex items-center justify-between text-sm text-stone-500 border-t border-stone-100 pt-4 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-safari-gold" />
            <span>{tour.durationDays} Days</span>
          </div>
          <div className="flex items-center font-semibold text-stone-800">
            <DollarSign className="w-4 h-4 text-safari-gold" />
            <span>{tour.priceUsd.toLocaleString()}</span>
            <span className="text-xs text-stone-400 font-normal ml-1">/ person</span>
          </div>
        </div>

        <Link 
          to={`/tours/${tour.id}`}
          className="block w-full text-center py-2 bg-stone-100 hover:bg-safari-earth hover:text-white text-stone-800 font-medium rounded transition-colors"
        >
          View Itinerary
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
