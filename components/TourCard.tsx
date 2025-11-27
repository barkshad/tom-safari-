// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Tour } from '../types';
import { motion } from 'framer-motion';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-stone-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={tour.image} 
          alt={tour.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-safari-leaf text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {tour.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 group-hover:text-safari-sunset transition-colors">
          {tour.name}
        </h3>
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
          {tour.shortDescription}
        </p>
        
        <div className="flex items-center justify-between text-sm text-stone-500 border-t border-stone-100 pt-4 mb-4">
          <div className="flex items-center bg-stone-50 px-2 py-1 rounded">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-safari-gold" />
            <span>{tour.durationDays} Days</span>
          </div>
          <div className="flex items-center font-bold text-stone-800">
            <DollarSign className="w-3.5 h-3.5 text-safari-gold" />
            <span>{tour.priceUsd.toLocaleString()}</span>
          </div>
        </div>

        <Link 
          to={`/tours/${tour.id}`}
          className="relative w-full text-center py-3 bg-stone-900 text-white font-medium rounded overflow-hidden group/btn"
        >
          <span className="relative z-10 flex items-center justify-center">
            View Details & Book
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
          </span>
          <div className="absolute inset-0 bg-safari-sunset transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
      </div>
    </motion.div>
  );
};

export default TourCard;