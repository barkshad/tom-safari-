// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, ArrowRight, Sun, Star } from 'lucide-react';
import { Tour } from '../types';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { convertPrice, selectedCurrency } = useData();
  const price = convertPrice(tour.priceUsd);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full"
    >
      <div className="glass-card h-full rounded-2xl overflow-hidden flex flex-col relative z-10">
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={tour.image} 
            alt={tour.name} 
            className="w-full h-full object-cover"
          />
          
          {/* Glass Overlay Gradient at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Floating Glass Badges */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
             {tour.featured && (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="glass-premium px-3 py-1 rounded-full flex items-center gap-1 border-safari-gold/50"
                >
                   <Star className="w-3 h-3 text-safari-gold fill-safari-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-wider text-stone-800">Featured</span>
                </motion.div>
             )}
             <motion.div 
                className="glass-blue text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md"
             >
               {tour.group === 'Road Safari' ? `${tour.durationDays} Day${tour.durationDays > 1 ? 's' : ''}` : tour.category}
             </motion.div>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative">
          <div className="absolute -top-10 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-white/50 backdrop-blur-sm">
             <div className="text-center leading-none">
                <span className="block text-[10px] text-stone-400 font-bold uppercase">{selectedCurrency.code}</span>
                <span className="block text-lg font-black text-safari-leaf">{tour.priceUsd > 0 ? price.symbol : ''}</span>
             </div>
          </div>

          <div className="mb-2">
             <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-safari-sunset transition-colors leading-tight">
               {tour.name}
             </h3>
          </div>
          
          <p className="text-stone-600 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed font-light">
            {tour.shortDescription}
          </p>
          
          <div className="flex items-end justify-between mt-auto">
             <div className="flex flex-col">
                <span className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">Price Per Person</span>
                <span className="text-2xl font-bold text-stone-800">{tour.priceUsd > 0 ? price.formatted : 'Inquire'}</span>
             </div>

             <Link to={`/tours/${tour.id}`}>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-12 h-12 bg-safari-leaf rounded-full flex items-center justify-center text-white shadow-lg shadow-safari-leaf/30 hover:bg-stone-800 transition-colors"
               >
                 <ArrowRight className="w-5 h-5" />
               </motion.button>
             </Link>
          </div>
        </div>
      </div>
      
      {/* Glow Effect behind card */}
      <div className="absolute inset-0 bg-safari-sky/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 translate-y-4"></div>
    </motion.div>
  );
};

export default TourCard;