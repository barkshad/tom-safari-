// @ts-nocheck
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, PlayCircle } from 'lucide-react';
import { Tour } from '../types';
import { useData } from '../context/DataContext';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TourCardProps {
  tour: Tour;
}

const isVideo = (url: string) => url?.match(/\.(mp4|webm|ogg|mov)$/i) || url?.includes('/video/upload/');

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { convertPrice, selectedCurrency } = useData();
  const price = convertPrice(tour.priceUsd);

  // References and Motion Values for 3D Tilt Effect
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt (Stiffness = tension, Damping = friction)
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position (-0.5 to 0.5) to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Calculate percentage from center (-0.5 to 0.5)
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to center on leave
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="group relative h-full"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="glass-card h-full rounded-3xl overflow-hidden flex flex-col relative z-10 border-2 border-transparent group-hover:border-safari-emerald/30 bg-white/60 backdrop-blur-xl"
      >
        {/* Image Container with Depth */}
        <div className="relative h-64 overflow-hidden bg-stone-900" style={{ transform: "translateZ(0px)" }}>
          {isVideo(tour.image) ? (
             <video 
                src={tour.image} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                muted 
                loop 
                playsInline 
                onMouseOver={event => event.currentTarget.play()} 
                onMouseOut={event => event.currentTarget.pause()} 
             />
          ) : (
             <motion.img 
                src={tour.image} 
                alt={tour.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
          )}
          
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-20" style={{ transform: "translateZ(20px)" }}>
             {tour.featured && (
                <div 
                  className="glass-dark px-3 py-1 rounded-full flex items-center gap-1 text-white shadow-lg backdrop-blur-md"
                >
                   <Star className="w-3 h-3 text-safari-gold fill-safari-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-wider">Featured</span>
                </div>
             )}
             {isVideo(tour.image) && (
                <div className="glass-dark p-1.5 rounded-full text-white backdrop-blur-md">
                    <PlayCircle size={14} />
                </div>
             )}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative bg-white/40 backdrop-blur-md">
          <div className="mb-2" style={{ transform: "translateZ(20px)" }}>
             <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-safari-sunset transition-colors leading-tight">
               {tour.name}
             </h3>
          </div>
          
          <p className="text-stone-600 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed font-sans font-light" style={{ transform: "translateZ(10px)" }}>
            {tour.shortDescription}
          </p>
          
          <div className="flex items-end justify-between mt-auto" style={{ transform: "translateZ(15px)" }}>
             <div>
                <span className="text-xs text-stone-400 uppercase tracking-widest font-bold mb-1 block">From</span>
                <span className="text-2xl font-bold text-stone-800">{tour.priceUsd > 0 ? price.formatted : 'Inquire'}</span>
             </div>

             <Link to={`/tours/${tour.id}`}>
               <motion.div 
                 className="w-12 h-12 bg-safari-leaf rounded-full flex items-center justify-center text-white shadow-lg shadow-safari-leaf/30 transition-all duration-300 group-hover:bg-safari-emerald group-hover:scale-110 group-hover:shadow-safari-emerald/50"
                 whileTap={{ scale: 0.9 }}
               >
                 <ArrowRight className="w-5 h-5" />
               </motion.div>
             </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Dynamic Glow Effect behind card that moves with tilt */}
      <motion.div 
        style={{ 
            rotateX, 
            rotateY,
        }}
        className="absolute inset-0 bg-safari-emerald/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 translate-y-6 scale-95"
      ></motion.div>
    </motion.div>
  );
};

export default TourCard;