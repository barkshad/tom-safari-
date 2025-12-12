
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
    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-8 py-6 rounded-2xl max-w-md shadow-sm">
       <p className="font-bold text-lg mb-2">🚧 Website Under Maintenance</p>
       <p className="text-stone-600">We are currently polishing the experience. The full website will be ready in <span className="font-bold text-stone-900">2 days</span>.</p>
    </div>
  </div>
);

export default LoadingSpinner;
