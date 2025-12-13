
// @ts-nocheck
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, PlayCircle, MapPin } from 'lucide-react';
import { Tour } from '../types';
import { useData } from '../context/DataContext';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TourCardProps {
  tour: Tour;
}

const isVideo = (url: string) => url?.match(/\.(mp4|webm|ogg|mov)$/i) || url?.includes('/video/upload/');

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { convertPrice } = useData();
  const price = convertPrice(tour.priceUsd);

  // --- 3D TILT LOGIC ---
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the tilt (Stiffness = tension, Damping = friction)
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position (-0.5 to 0.5) to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  
  // Subtle glow movement based on tilt
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["-20%", "20%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["-20%", "20%"]);

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

  // --- HAPTIC FEEDBACK ---
  const triggerHaptic = (intensity = 'light') => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        // pattern for light feedback vs stronger interaction
        navigator.vibrate(intensity === 'light' ? 10 : 20);
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1 } 
      }}
      whileHover={{ 
        y: -10, 
        transition: { type: "spring", stiffness: 300, damping: 20 } 
      }}
      viewport={{ once: true, margin: "-10%" }}
      onViewportEnter={() => triggerHaptic('light')} // Vibrate on scroll enter
      className="group relative h-full cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => triggerHaptic('light')}
      onTouchStart={() => triggerHaptic('light')}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="glass-card h-full rounded-[2rem] overflow-hidden flex flex-col relative z-10 border-2 border-transparent group-hover:border-safari-emerald/30 bg-white/80 backdrop-blur-xl shadow-xl transition-shadow duration-300"
      >
        {/* Shimmer Effect Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-[2rem]">
             <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200%] h-full" />
        </div>

        {/* Image Container with Depth */}
        <div className="relative h-64 overflow-hidden bg-stone-900" style={{ transform: "translateZ(20px)" }}>
          {isVideo(tour.image) ? (
             <video 
                src={tour.image} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
          )}
          
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Featured & Video Badges */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-20" style={{ transform: "translateZ(40px)" }}>
             {tour.featured && (
                <div className="glass-dark px-3 py-1 rounded-full flex items-center gap-1 text-white shadow-lg backdrop-blur-md border border-white/10">
                   <Star className="w-3 h-3 text-safari-gold fill-safari-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-wider">Featured</span>
                </div>
             )}
             {isVideo(tour.image) && (
                <div className="glass-dark p-2 rounded-full text-white backdrop-blur-md">
                    <PlayCircle size={16} />
                </div>
             )}
          </div>
          
          {/* Starting Location Badge - Reinforcing Kilifi Start */}
          <div className="absolute bottom-4 left-4 z-20" style={{ transform: "translateZ(30px)" }}>
             <div className="flex items-center gap-1 text-white/90 text-xs font-medium bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">
                 <MapPin size={12} className="text-safari-emerald" />
                 <span>Starts from Kilifi</span>
             </div>
          </div>
        </div>
        
        <div className="p-7 flex flex-col flex-grow relative bg-white/40 backdrop-blur-lg">
          <div className="mb-3" style={{ transform: "translateZ(30px)" }}>
             <h3 className="text-xl font-serif font-bold text-stone-800 group-hover:text-safari-emerald transition-colors leading-tight">
               {tour.name}
             </h3>
          </div>
          
          <p className="text-stone-600 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed font-sans font-medium" style={{ transform: "translateZ(20px)" }}>
            {tour.shortDescription}
          </p>
          
          <div className="flex items-end justify-between mt-auto pt-4 border-t border-stone-100/50" style={{ transform: "translateZ(25px)" }}>
             <div>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1 block">Starting From</span>
                <span className="text-2xl font-bold text-stone-800 tracking-tight">{tour.priceUsd > 0 ? price.formatted : 'Inquire'}</span>
             </div>

             <Link to={`/tours/${tour.id}`}>
               <motion.div 
                 className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:bg-safari-emerald group-hover:scale-110 group-hover:shadow-safari-emerald/50"
                 whileTap={{ scale: 0.9 }}
               >
                 <ArrowRight className="w-5 h-5" />
               </motion.div>
             </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Dynamic Glow Effect behind card */}
      <motion.div 
        style={{ 
            x: glowX,
            y: glowY,
            opacity: useTransform(mouseY, [-0.5, 0.5], [0.2, 0.4])
        }}
        className="absolute inset-4 bg-safari-emerald/40 rounded-[2rem] blur-3xl -z-10 transition-opacity duration-500 group-hover:opacity-60"
      ></motion.div>
    </motion.div>
  );
};

export default TourCard;
