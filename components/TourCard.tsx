// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, ArrowRight, PoundSterling, Sun } from 'lucide-react';
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
      className="group bg-safari-sand rounded-xl shadow-sm hover:shadow-2xl hover:shadow-safari-sky/10 transition-all duration-300 overflow-hidden border border-stone-200 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={tour.image} 
          alt={tour.name} 
          className="w-full h-full object-cover"
        />
        {/* Blue Accent Tag */}
        <div className="absolute top-4 right-4 bg-safari-sky/90 backdrop-blur-sm text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-white/20">
          {tour.group === 'Road Safari' ? `${tour.durationDays} Day${tour.durationDays > 1 ? 's' : ''}` : tour.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative">
        {/* Subtle sun icon background */}
        <Sun className="absolute -top-4 -right-4 w-24 h-24 text-safari-gold/5 rotate-45" />

        <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 group-hover:text-safari-sunset transition-colors">
          {tour.name}
        </h3>
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed font-light">
          {tour.shortDescription}
        </p>
        
        <div className="flex flex-col space-y-2 mb-6 bg-white p-3 rounded-lg border border-stone-100 shadow-inner">
           <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-safari-leaf uppercase tracking-wide">USD</span>
              <div className="flex items-center font-bold text-stone-800">
                <DollarSign className="w-3.5 h-3.5 text-safari-gold" />
                <span>{tour.priceUsd > 0 ? tour.priceUsd.toLocaleString() : 'Inquire'}</span>
              </div>
           </div>
           {tour.priceGbp > 0 && (
             <div className="flex items-center justify-between border-t border-stone-100 pt-2">
                <span className="text-xs font-bold text-safari-blue uppercase tracking-wide">GBP</span>
                <div className="flex items-center font-bold text-stone-600">
                  <PoundSterling className="w-3.5 h-3.5 text-safari-sky" />
                  <span>{tour.priceGbp.toLocaleString()}</span>
                </div>
             </div>
           )}
        </div>

        <Link 
          to={`/tours/${tour.id}`}
          className="relative w-full text-center py-3 bg-stone-900 text-white font-medium rounded overflow-hidden group/btn"
        >
          <span className="relative z-10 flex items-center justify-center">
            View Details & Book
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all text-safari-sky" />
          </span>
          {/* Blue Hover Effect */}
          <div className="absolute inset-0 bg-safari-leaf transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
      </div>
    </motion.div>
  );
};

export default TourCard;