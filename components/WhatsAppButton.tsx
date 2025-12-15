
// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { WhatsAppIcon } from './SocialIcons';

const WhatsAppButton: React.FC = () => {
  const { companyInfo } = useData();

  if (!companyInfo.social.whatsapp) return null;

  return (
    <motion.a
      href={companyInfo.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-[#25D366]/50 transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute left-full ml-4 bg-white text-stone-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-left">
        Chat with Cruse
      </span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
    </motion.a>
  );
};

export default WhatsAppButton;
