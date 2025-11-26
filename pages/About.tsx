import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
        >
            <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop" alt="Nature" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        
        <div className="relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
            >
                About Us
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-stone-300 text-xl md:text-2xl font-light"
            >
                Experience, Passion, and Authenticity
            </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-stone mx-auto"
        >
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">Our Philosophy</h2>
          <div className="bg-safari-sand/30 border-l-4 border-safari-gold p-8 rounded-r-lg italic text-xl text-stone-700 mb-10">
            "At Tom Safaris and Adventure, we are passionate about creating unforgettable experiences in the heart of nature. With years of expertise in guiding thrilling safaris and outdoor adventures, our dedicated team prioritizes safety, sustainability, and exceptional service."
          </div>

          <p className="mb-8 leading-relaxed text-stone-600">
            Tom Safaris and Adventure Kenya is a Nairobi-based safari and adventure tour operator. We specialize in organizing wildlife safaris, coastal getaways, and adventure tours across Kenya and nearby regions. Our goal is to share the breathtaking beauty of East Africa with the world while ensuring the preservation of these natural wonders for future generations.
          </p>

          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-16 mb-6">What Distinguishes Us</h3>
          <ul className="space-y-6 text-stone-700">
            {[
                { title: "Local Roots", desc: "We are locally owned and operated. Our guides are experts in the terrain, wildlife habits, and local cultures, ensuring you see the best of Kenya." },
                { title: "Curated Tours", desc: "From the vast savannahs of the Maasai Mara to the pristine beaches of Lamu, our itineraries are carefully crafted to maximize your experience." },
                { title: "Service Quality", desc: "We believe in personal attention. From your first inquiry to your flight home, our team is dedicated to your comfort and safety." }
            ].map((item, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-start p-4 bg-stone-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-bold text-safari-sunset min-w-[140px] text-lg mb-2 sm:mb-0">{item.title}</span>
                    <span className="leading-relaxed">{item.desc}</span>
                </li>
            ))}
          </ul>

          <motion.div 
             whileHover={{ y: -5 }}
             className="mt-20 bg-stone-900 text-white p-10 rounded-2xl flex flex-col md:flex-row items-center gap-10 shadow-2xl"
          >
            <img 
                src="https://images.unsplash.com/photo-1544983058-293e50626388?q=80&w=400&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-safari-gold"
            />
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">Meet Our Team</h3>
                <p className="text-stone-300 mb-6 leading-relaxed">
                    Our drivers and guides are professionally trained and certified, with a deep passion for wildlife conservation. They are your companions, storytellers, and protectors in the bush.
                </p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-safari-sunset text-white font-bold rounded hover:bg-orange-600 transition-colors">
                    Plan your trip with us &rarr;
                </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;