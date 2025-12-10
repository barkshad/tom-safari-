// @ts-nocheck
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Compass, Star } from 'lucide-react';
import { useData } from '../../context/DataContext';
import TourCard from '../../components/TourCard';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import EditTrigger from '../../components/EditTrigger';
import StructuredData from '../../components/StructuredData';

const Home: React.FC = () => {
  const { tours, companyInfo, pageContent } = useData();
  const featuredTours = tours.filter(t => t.featured).slice(0, 6);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x * 30); // Multiplier for parallax intensity
    mouseY.set(y * 30);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  const parallaxTextX = useTransform(mouseX, (v) => v * 0.5);
  const parallaxTextY = useTransform(mouseY, (v) => v * 0.5);
  const parallaxBgX = useTransform(mouseX, (v) => -v * 1);
  const parallaxBgY = useTransform(mouseY, (v) => -v * 1);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      },
    },
  };
  
  const isVideo = (url) => url?.match(/\.(mp4|webm|ogg|mov)$/i) || url?.includes('/video/upload/');

  return (
    <PageTransition>
      <StructuredData type="WebSite" data={{ name: companyInfo.name }} />
      <StructuredData type="Organization" data={companyInfo} />
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-safari-sand">
        
        {/* --- CINEMATIC PARALLAX HERO --- */}
        <section 
          ref={heroRef} 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900"
          style={{ perspective: '1000px' }}
        >
          <EditTrigger sectionName="Hero Section" className="top-24 right-4" />
          
          <motion.div 
            style={{ x: parallaxBgX, y: parallaxBgY, scale: scaleImg, transition: { type: 'spring', stiffness: 100, damping: 20 } }} 
            className="absolute inset-[-5%]"
          >
            {isVideo(pageContent.home.hero.image) ? (
                <video 
                    src={pageContent.home.hero.image} 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                />
            ) : (
                <img src={pageContent.home.hero.image} alt="Safari Hero" className="w-full h-full object-cover" loading="eager" />
            )}
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
          
          <motion.div 
            style={{ x: parallaxTextX, y: parallaxTextY, transition: { type: 'spring', stiffness: 100, damping: 20 } }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white mb-6 leading-[0.9] drop-shadow-2xl text-glow-gold flex flex-wrap justify-center"
              >
                {pageContent.home.hero.title.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-4 md:mr-6">
                    {word.split("").map((char, charIndex) => (
                      <motion.span key={charIndex} variants={letter} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>
              <p className="text-lg md:text-2xl text-stone-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                {pageContent.home.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="px-8 py-4 bg-safari-emerald text-stone-900 font-bold rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(0,196,154,0.5)] flex items-center justify-center uppercase tracking-wide">Start Adventure</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/tours" className="glass-nav px-8 py-4 text-white font-bold rounded-full hover:bg-white/20 transition-all shadow-lg flex items-center justify-center uppercase tracking-wide">View All Tours</Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- GLASS FEATURE CARDS --- */}
        <section className="py-24 relative overflow-hidden">
          <EditTrigger sectionName="Welcome Content" className="top-4 right-4 text-stone-900 border-stone-300" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sun className="w-12 h-12 text-safari-gold" />
                </motion.div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">{pageContent.home.welcome.title}</h2>
              <p className="text-xl text-stone-600 leading-relaxed font-sans font-light">{pageContent.home.welcome.content}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {pageContent.home.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50, scale: 0.95 }} 
                  whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: idx * 0.15, type: 'spring' }} 
                  className="glass-card p-10 rounded-3xl"
                >
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
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
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
        <section className="py-40 relative overflow-hidden flex items-center justify-center">
          <EditTrigger sectionName="Testimonials" className="top-4 right-4" />
          <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000" alt="Background" className="w-full h-full object-cover" loading="lazy"/>
               <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }} 
            whileInView={{ opacity: 1, scale: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="max-w-4xl mx-auto px-4 text-center relative z-10"
          >
            <div className="glass-dark p-12 md:p-16 rounded-[3rem] shadow-2xl relative">
              <blockquote className="text-2xl md:text-4xl italic font-serif font-medium mb-10 leading-relaxed text-stone-200">
                "{pageContent.home.testimonials.content}"
              </blockquote>
              <cite className="font-bold not-italic text-stone-400 block text-lg tracking-wide uppercase">- {pageContent.home.testimonials.author}</cite>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;