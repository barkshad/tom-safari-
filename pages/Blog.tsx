// @ts-nocheck
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Essentials for Your First Kenyan Safari",
    excerpt: "Packing for a safari can be tricky. Here is our guide to the must-have items for a comfortable and exciting adventure in the bush.",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1523393665780-69d6797f1cc5?q=80&w=800&auto=format&fit=crop",
    category: "Travel Tips"
  },
  {
    id: 2,
    title: "The Great Migration: When and Where to Go",
    excerpt: "Witnessing the Great Migration is a bucket-list experience. Learn the best times to visit the Maasai Mara to catch the action.",
    date: "September 05, 2023",
    image: "https://images.unsplash.com/photo-1535940357668-439589d89d6e?q=80&w=800&auto=format&fit=crop",
    category: "Wildlife"
  },
  {
    id: 3,
    title: "Exploring Lamu: A Journey Back in Time",
    excerpt: "Beyond the wildlife, Kenya's coast offers rich history. Discover the magic of Lamu Old Town and its Swahili heritage.",
    date: "August 20, 2023",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop",
    category: "Destinations"
  }
];

const Blog: React.FC = () => {
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
            <h1 className="text-5xl font-serif font-bold text-white">Safari Stories</h1>
            <p className="text-stone-400 mt-2 text-lg">Tips, news, and inspiration for your next adventure</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div 
                key={post.id} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col group border border-white/50"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-stone-500 mb-4 space-x-3">
                    <span className="bg-safari-sky/20 text-stone-700 px-3 py-1 rounded-full font-bold uppercase tracking-wide">{post.category}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 leading-tight group-hover:text-safari-sunset transition-colors">
                  <Link to="#">{post.title}</Link>
                </h3>
                <p className="text-stone-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="border-t border-stone-100 pt-6 mt-auto">
                    <Link to="#" className="text-safari-sunset font-bold text-sm hover:underline uppercase tracking-wide">Read Article</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Blog;