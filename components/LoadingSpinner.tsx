
// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-safari-sand px-4 text-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-16 h-16 border-4 border-safari-earth border-t-safari-gold rounded-full mb-8"
    />
    <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">Tom Safaris</h1>
    <p className="text-stone-600 font-medium animate-pulse">Preparing your adventure...</p>
  </div>
);

export default LoadingSpinner;
