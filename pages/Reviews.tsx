
// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import PageTransition from '../components/PageTransition';
import { Quote, Star, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Reviews: React.FC = () => {
  const { pageContent } = useData();
  const testimonials = pageContent.home.testimonials || [];

  return (
    <PageTransition>
      <div className="min-h-screen bg-safari-sand">
        {/* Header */}
        <div className="bg-stone-900 py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/90"></div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 px-4"
          >
            <h1 className="text-5xl font-serif font-bold text-white text-glow-gold">Guestbook</h1>
            <p className="text-stone-400 mt-4 text-lg max-w-2xl mx-auto">
              Memories made in the wild. Read what our adventurers have to say about their journeys with Tom 'Cruse' Madeda.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-3xl relative flex flex-col"
                >
                  <Quote className="w-10 h-10 text-safari-gold/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-safari-gold fill-safari-gold" />
                    ))}
                  </div>
                  <p className="text-stone-600 leading-relaxed italic mb-6 flex-grow font-serif">
                    "{review.content}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-stone-100">
                    <p className="font-bold text-stone-800 text-lg">{review.author}</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Verified Traveler</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-stone-500">
              <p>No reviews yet. Be the first to share your experience!</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="glass-card bg-safari-emerald/5 border border-safari-emerald/20 p-12 rounded-[3rem] max-w-3xl mx-auto relative overflow-hidden">
               <div className="relative z-10">
                  <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Traveled with us recently?</h2>
                  <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                    We'd love to hear about your experience. Your feedback helps us create even better adventures.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-safari-earth text-white font-bold rounded-full hover:bg-stone-800 transition-all shadow-lg"
                  >
                    <Send className="w-4 h-4" /> Send us a Review
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Reviews;
