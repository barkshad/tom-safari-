
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';
import PageTransition from '../../components/PageTransition';
import EditTrigger from '../../components/EditTrigger';

const About: React.FC = () => {
  const { companyInfo, pageContent } = useData();
  
  return (
    <PageTransition>
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden group">
        <EditTrigger sectionName="About Hero" className="top-24 right-4" />
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0">
            <img src={pageContent.about.hero.image} alt="Nature" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        
        <div className="relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                {pageContent.about.hero.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-stone-300 text-xl md:text-2xl font-light">
                {pageContent.about.hero.subtitle}
            </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 group relative">
        <EditTrigger sectionName="Philosophy" className="top-4 right-4 text-stone-900 border-stone-200" />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="prose prose-lg prose-stone mx-auto">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Our Philosophy</h2>
          <div className="glass-premium border-l-4 border-safari-gold p-8 rounded-r-2xl italic text-xl text-stone-700 mb-10 shadow-sm">
            "{pageContent.about.philosophy.content}"
          </div>

          <motion.div whileHover={{ y: -5 }} className="mt-20 bg-stone-900 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden group">
            <EditTrigger sectionName="Founder Bio" className="top-4 right-4" />
            <img src={pageContent.about.founder.image} alt="Founder" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-safari-gold relative z-10" />
            <div className="text-center md:text-left relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{pageContent.about.founder.title}</h3>
                <h4 className="text-xl text-safari-gold font-serif italic mb-4">{pageContent.about.founder.subtitle}</h4>
                <p className="text-stone-300 mb-6 leading-relaxed text-sm">
                    {pageContent.about.founder.content}
                </p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-safari-sunset text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg">
                    Plan your trip with "Cruse" &rarr;
                </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
};

export default About;