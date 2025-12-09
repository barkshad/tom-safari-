// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
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
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="group relative h-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ y: -15, rotateX: 5, rotateY: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="glass-card h-full rounded-3xl overflow-hidden flex flex-col relative z-10 border-2 border-transparent group-hover:border-safari-emerald/30"
      >
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={tour.image} 
            alt={tour.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
             {tour.featured && (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="glass-dark px-3 py-1 rounded-full flex items-center gap-1 text-white"
                >
                   <Star className="w-3 h-3 text-safari-gold fill-safari-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-wider">Featured</span>
                </motion.div>
             )}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative">
          <div className="mb-2">
             <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-safari-sunset transition-colors leading-tight">
               {tour.name}
             </h3>
          </div>
          
          <p className="text-stone-600 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed font-sans font-light">
            {tour.shortDescription}
          </p>
          
          <div className="flex items-end justify-between mt-auto">
             <div>
                <span className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1">From</span>
                <span className="text-2xl font-bold text-stone-800">{tour.priceUsd > 0 ? price.formatted : 'Inquire'}</span>
             </div>

             <Link to={`/tours/${tour.id}`}>
               <motion.div 
                 whileHover={{ scale: 1.1, backgroundColor: '#00c49a' }}
                 whileTap={{ scale: 0.95 }}
                 className="w-12 h-12 bg-safari-leaf rounded-full flex items-center justify-center text-white shadow-lg shadow-safari-leaf/30 transition-colors"
               >
                 <ArrowRight className="w-5 h-5" />
               </motion.div>
             </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Glow Effect behind card */}
      <div className="absolute inset-0 bg-safari-emerald/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 translate-y-4"></div>
    </motion.div>
  );
};

export default TourCard;