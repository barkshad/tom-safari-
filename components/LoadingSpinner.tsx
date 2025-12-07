// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-safari-sand">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-16 h-16 border-4 border-safari-earth border-t-safari-gold rounded-full"
    />
  </div>
);

export default LoadingSpinner;
