
// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Map, Shield } from 'lucide-react';
import { useData } from '../context/DataContext';
import TourCard from '../components/TourCard';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { tours, companyInfo, pageContent } = useData();
  // Show up to 6 featured tours as per design brief
  const featuredTours = tours.filter(t => t.featured).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.15 }}
            transition={{ 
              duration: 25, 
              ease: "linear", 
              repeat: Infinity, 
              repeatType: "mirror" 
            }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1493963246502-1e779e577cc4?q=80&w=2000&auto=format&fit=crop" 
              alt="Safari Landscape" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Layered gradients for text legibility and mood */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom "cinematic" easing
          >
            <h1 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 leading-tight drop-shadow-2xl">
              {pageContent?.home?.heroTitle || companyInfo.slogan}
            </h1>
            <p className="text-lg md:text-2xl text-stone-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
              {pageContent?.home?.heroSubtitle || "Experience the thrill of the wild with Kenya's premier safari experts."}
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-safari-sunset text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/40 flex items-center justify-center uppercase tracking-wide border-2 border-transparent"
                >
                  Book Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/tours" 
                  className="glass px-8 py-4 text-white font-bold rounded-full hover:bg-white/20 transition-all shadow-lg flex items-center justify-center uppercase tracking-wide border-2 border-white/30 backdrop-blur-sm"
                >
                  View All Tours
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-serif font-bold text-stone-900 mb-4">
              Welcome to {companyInfo.name}
            </motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-safari-gold mx-auto mb-8"></motion.div>
            <motion.p variants={itemVariants} className="text-xl text-stone-600 leading-relaxed font-light">
              We are a Kilifi-based safari and adventure tour operator dedicated to organizing wildlife, coastal, and adventure tours across Kenya. Our mission is to combine safety, professionalism, and authentic African adventure to create memories that last a lifetime.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          >
            {[
              { icon: Shield, title: "Safety First", text: "Our dedicated team prioritizes safety with expert guides and well-maintained vehicles for a secure journey." },
              { icon: Map, title: "Local Expertise", text: "With years of expertise, we know the hidden gems, wildlife patterns, and cultural nuances of Kenya." },
              { icon: CheckCircle, title: "Authentic Experiences", text: "We are passionate about creating unforgettable experiences in the heart of nature." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-safari-leaf/10 text-safari-leaf rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-3">Featured Adventures</h2>
              <p className="text-stone-600 text-lg">Our most popular safari packages picked just for you.</p>
            </div>
            <Link to="/tours" className="hidden md:flex items-center text-safari-sunset font-bold uppercase tracking-wider hover:text-orange-800 mt-4 md:mt-0 group transition-colors">
              View All Tours <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Link to="/tours" className="inline-block px-8 py-3 bg-safari-earth text-white rounded font-medium hover:bg-stone-800 transition-colors">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Testimonial Placeholder */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-safari-leaf/80 mix-blend-multiply"></div>
        </div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl font-serif font-bold mb-12 text-white">Why Travelers Choose Us</h2>
          
          <div className="glass text-stone-900 p-12 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20">
             <div className="flex justify-center mb-6 text-safari-gold">
               {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-3xl">★</span>)}
             </div>
            <blockquote className="text-2xl italic font-serif font-light mb-8 leading-relaxed">
              "We had the most amazing time with {companyInfo.name}. The driver was knowledgeable, the lodges were beautiful, and seeing the lions in Maasai Mara was a dream come true!"
            </blockquote>
            <cite className="font-bold not-italic text-safari-sunset block text-lg tracking-wide uppercase">- Sarah J., United Kingdom</cite>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
