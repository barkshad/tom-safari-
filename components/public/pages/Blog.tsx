

// @ts-nocheck
import React from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const { blogPosts } = useData();

  return (
    <PageTransition>
      <div className="min-h-screen bg-safari-sand">
        <div className="bg-stone-900 py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10"
          >
              <h1 className="text-5xl font-serif font-bold text-white text-glow-gold">Safari Stories</h1>
              <p className="text-stone-400 mt-2 text-lg">Tips, news, and inspiration for your next adventure</p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;