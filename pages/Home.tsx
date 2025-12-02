// @ts-nocheck
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Map, Shield, Cloud, Sun, Compass } from 'lucide-react';
import { useData } from '../context/DataContext';
import TourCard from '../components/TourCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  const { tours, companyInfo, pageContent } = useData();
  const featuredTours = tours.filter(t => t.featured).slice(0, 6);
  const heroRef = useRef(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Text moves slower
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]); // Background zooms
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Text fades out

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-safari-sand">
        
        {/* --- CINEMATIC PARALLAX HERO --- */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <motion.div style={{ scale: scaleImg }} className="w-full h-full">
              <img 
                src={pageContent?.home?.heroImage || "https://share.google/images/2bwfbvx4i34vzVT0v"} 
                alt="Safari Hero" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-safari-sky/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block mb-6">
                   <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="glass-premium px-6 py-2 rounded-full text-white text-sm font-bold tracking-[0.2em] uppercase border border-white/30 backdrop-blur-lg flex items-center gap-2"
                   >
                      <Compass className="w-4 h-4 text-safari-sky" /> Discover The Wild
                   </motion.span>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-6 leading-[0.9] drop-shadow-2xl">
                {pageContent?.home?.heroTitle || companyInfo.slogan}
              </h1>
              <p className="text-lg md:text-2xl text-stone-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                {pageContent?.home?.heroSubtitle || "Experience the thrill of the wild with Kenya's premier safari experts."}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="px-8 py-4 bg-safari-sunset text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_30px_rgba(192,86,33,0.5)] flex items-center justify-center uppercase tracking-wide"
                  >
                    Start Adventure
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/tours" 
                    className="glass-premium px-8 py-4 text-white font-bold rounded-full hover:bg-white/20 transition-all shadow-lg flex items-center justify-center uppercase tracking-wide"
                  >
                    View All Tours
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/50"
          >
            <div className="glass-premium px-2 py-4 rounded-full">
              <div className="w-1 h-2 bg-white rounded-full mx-auto"></div>
            </div>
          </motion.div>
        </section>

        {/* --- GLASS FEATURE CARDS --- */}
        <section className="py-24 relative overflow-hidden">
          {/* Subtle animated background blobs */}
          <div className="absolute top-20 left-0 w-96 h-96 bg-safari-sky/10 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-safari-gold/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="flex justify-center mb-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sun className="w-12 h-12 text-safari-gold" />
                  </motion.div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
                Welcome to <span className="text-gradient-gold">{companyInfo.name}</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed font-light">
                We are a Kilifi-based safari and adventure tour operator dedicated to organizing wildlife, coastal, and adventure tours across Kenya.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Shield, title: "Safety First", text: "Expert guides and well-maintained vehicles for a secure journey." },
                { icon: Map, title: "Local Expertise", text: "We know the hidden gems, wildlife patterns, and cultural nuances." },
                { icon: CheckCircle, title: "Authentic Experiences", text: "Passionate about creating unforgettable memories in nature." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-10 rounded-3xl relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-safari-sky/20 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                  
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 relative z-10 border border-stone-100 group-hover:rotate-6 transition-transform">
                    <feature.icon className="w-8 h-8 text-safari-leaf" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-stone-800">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURED TOURS (Glass List) --- */}
        <section className="py-24 bg-white/50 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex flex-col md:flex-row justify-between items-end mb-16"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                   <Cloud className="w-5 h-5 text-safari-sky" />
                   <span className="text-safari-blue font-bold tracking-widest text-xs uppercase">Unforgettable Journeys</span>
                </div>
                <h2 className="text-5xl font-serif font-bold text-stone-900 mb-3">Featured Adventures</h2>
              </div>
              <Link to="/tours" className="hidden md:flex items-center text-safari-sunset font-bold uppercase tracking-wider hover:translate-x-2 transition-transform">
                View All Tours <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour, idx) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center md:hidden">
              <Link to="/tours" className="glass-premium text-stone-900 px-8 py-4 rounded-full font-bold shadow-lg">
                View All Tours
              </Link>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIAL PARALLAX --- */}
        <section className="py-40 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
               <motion.div 
                 initial={{ scale: 1 }}
                 whileInView={{ scale: 1.1 }}
                 transition={{ duration: 10 }}
                 className="w-full h-full"
               >
                 <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover fixed-bg" />
               </motion.div>
               <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"></div>
          </div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto px-4 text-center relative z-10"
          >
            <div className="glass-premium p-12 md:p-16 rounded-[3rem] shadow-2xl border-white/20 relative">
               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 glass-blue px-6 py-2 rounded-full text-safari-sky font-bold text-sm tracking-widest uppercase">
                  Traveler Stories
               </div>
               
               <div className="flex justify-center mb-8 text-safari-gold space-x-1">
                 {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
               </div>
              <blockquote className="text-2xl md:text-4xl italic font-serif font-medium mb-10 leading-relaxed text-stone-800">
                "We had the most amazing time with {companyInfo.name}. The driver was knowledgeable, the lodges were beautiful, and seeing the lions in Maasai Mara was a dream come true!"
              </blockquote>
              <cite className="font-bold not-italic text-stone-500 block text-lg tracking-wide uppercase">- Sarah J., United Kingdom</cite>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;