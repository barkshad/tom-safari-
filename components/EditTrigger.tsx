
// @ts-nocheck
import React from 'react';
import { Edit2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface EditTriggerProps {
  sectionName: string; // e.g., "Home Hero", "Contact Map"
  className?: string;
}

const EditTrigger: React.FC<EditTriggerProps> = ({ sectionName, className = "" }) => {
  const { isAuthenticated } = useData();

  if (!isAuthenticated) return null;

  return (
    <Link to="/admin">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`absolute z-50 p-2 bg-safari-sunset text-white rounded-full shadow-lg cursor-pointer flex items-center gap-2 border border-white/50 backdrop-blur-md opacity-75 hover:opacity-100 transition-opacity ${className}`}
        title={`Edit ${sectionName}`}
      >
        <Edit2 className="w-3 h-3" />
        <span className="text-[10px] font-bold uppercase hidden md:inline">Edit</span>
      </motion.div>
    </Link>
  );
};

export default EditTrigger;
