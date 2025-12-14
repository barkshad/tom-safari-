
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map, Compass, Home } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/90"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-lg"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="mb-8 inline-block"
          >
            <Compass size={80} className="text-safari-gold" />
          </motion.div>
          
          <h1 className="text-8xl font-serif font-black text-white mb-2 text-glow-gold">404</h1>
          <h2 className="text-2xl font-bold text-stone-300 mb-6 uppercase tracking-widest">Off The Map</h2>
          
          <p className="text-lg text-stone-400 mb-10 leading-relaxed">
            It seems you've ventured a bit too far into the bush. The page you are looking for has either moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="px-8 py-3 bg-safari-emerald text-stone-900 font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2">
              <Home size={18} /> Return Home
            </Link>
            <Link to="/tours" className="px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2">
              <Map size={18} /> Find a Tour
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
