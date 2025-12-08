// @ts-nocheck
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Compass, Star } from 'lucide-react';
import { useData } from '../../context/DataContext';
import TourCard from '../../components/TourCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import EditTrigger from '../../components/EditTrigger';
import StructuredData from '../../components/StructuredData';

const Home: React.FC = () => {
  const { tours, companyInfo, pageContent } = useData();
  const featuredTours = tours.filter(t => t.featured).slice(0, 6);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      <StructuredData type="WebSite" data={{ name: companyInfo.name }} />
      <StructuredData type="Organization" data={companyInfo} />
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-safari-sand">
        
        {/* --- CINEMATIC PARALLAX HERO --- */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900 group">
          <EditTrigger sectionName="Hero Section" className="top-24 right-4" />
          <div className="absolute inset-0 z-0">
            <motion.div style={{ scale: scaleImg }} className="w-full h-full">
              <img src={pageContent.home.hero.image} alt="Safari Hero" className="w-full h-full object-cover" loading="eager" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-safari-sky/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <div className="inline-block mb-6">
                   <motion.span whileHover={{ scale: 1.05 }} className="glass-premium px-6 py-2 rounded-full text-white text-sm font-bold tracking-[0.2em] uppercase border border-white/30 backdrop-blur-lg flex items-center gap-2">
                      <Compass className="w-4 h-4 text-safari-sky" /> Discover The Wild
                   </motion.span>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-6 leading-[0.9] drop-shadow-2xl">
                {pageContent.home.hero.title}
              </h1>
              <p className="text-lg md:text-2xl text-stone-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                {pageContent.home.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="px-8 py-4 bg-safari-sunset text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_30px_rgba(192,86,33,0.5)] flex items-center justify-center uppercase tracking-wide">Start Adventure</Link>
                <Link to="/tours" className="glass-premium px-8 py-4 text-white font-bold rounded-full hover:bg-white/20 transition-all shadow-lg flex items-center justify-center uppercase tracking-wide">View All Tours</Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- GLASS FEATURE CARDS --- */}
        <section className="py-24 relative overflow-hidden group">
          <EditTrigger sectionName="Welcome Content" className="top-4 right-4 text-stone-900 border-stone-300" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-4"><Sun className="w-12 h-12 text-safari-gold" /></div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">{pageContent.home.welcome.title}</h2>
              <p className="text-xl text-stone-600 leading-relaxed font-light">{pageContent.home.welcome.content}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {pageContent.home.features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -10 }} className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                  <h3 className="text-2xl font-bold mb-4 text-stone-800">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURED TOURS --- */}
        <section className="py-24 bg-white/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-stone-900">Featured Safaris</h2>
              <p className="text-lg text-stone-600 mt-2">Hand-picked adventures for an unforgettable experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour, idx) => (
                <motion.div key={tour.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </div>
             <div className="text-center mt-16">
                <Link to="/tours" className="inline-block px-8 py-4 bg-safari-leaf text-white font-bold rounded-full hover:bg-stone-800 transition-colors shadow-lg">
                    View All Safaris
                </Link>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIAL --- */}
        <section className="py-40 relative overflow-hidden flex items-center justify-center group">
          <EditTrigger sectionName="Testimonials" className="top-4 right-4" />
          <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000" alt="Background" className="w-full h-full object-cover" loading="lazy"/>
               <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"></div>
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="glass-premium p-12 md:p-16 rounded-[3rem] shadow-2xl border-white/20 relative">
              <blockquote className="text-2xl md:text-4xl italic font-serif font-medium mb-10 leading-relaxed text-stone-800">
                "{pageContent.home.testimonials.content}"
              </blockquote>
              <cite className="font-bold not-italic text-stone-500 block text-lg tracking-wide uppercase">- {pageContent.home.testimonials.author}</cite>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;