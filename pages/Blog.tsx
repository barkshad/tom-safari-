// @ts-nocheck
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Essentials for Your First Kenyan Safari",
    excerpt: "Packing for a safari can be tricky. Here is our guide to the must-have items for a comfortable and exciting adventure in the bush.",
    date: "October 12, 2023",
    author: "Tom Safaris Team",
    image: "https://images.unsplash.com/photo-1523393665780-69d6797f1cc5?q=80&w=800&auto=format&fit=crop",
    category: "Travel Tips"
  },
  {
    id: 2,
    title: "The Great Migration: When and Where to Go",
    excerpt: "Witnessing the Great Migration is a bucket-list experience. Learn the best times to visit the Maasai Mara to catch the action.",
    date: "September 05, 2023",
    author: "Sarah K.",
    image: "https://images.unsplash.com/photo-1535940357668-439589d89d6e?q=80&w=800&auto=format&fit=crop",
    category: "Wildlife"
  },
  {
    id: 3,
    title: "Exploring Lamu: A Journey Back in Time",
    excerpt: "Beyond the wildlife, Kenya's coast offers rich history. Discover the magic of Lamu Old Town and its Swahili heritage.",
    date: "August 20, 2023",
    author: "Tom Safaris Team",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop",
    category: "Destinations"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
            <h1 className="text-5xl font-serif font-bold text-white">Safari Stories</h1>
            <p className="text-stone-400 mt-2 text-lg">Tips, news, and inspiration for your next adventure</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div 
                key={post.id} 
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-stone-500 mb-4 space-x-3">
                    <span className="bg-safari-sand text-safari-earth px-2 py-1 rounded font-bold uppercase tracking-wide">{post.category}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 leading-tight group-hover:text-safari-sunset transition-colors">
                  <Link to="#">{post.title}</Link>
                </h3>
                <p className="text-stone-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="border-t border-stone-100 pt-6 mt-auto">
                    <Link to="#" className="text-safari-sunset font-bold text-sm hover:underline uppercase tracking-wide">Read Full Article &rarr;</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center space-x-2">
            <button className="px-4 py-2 border border-stone-300 rounded bg-white text-stone-600 hover:bg-stone-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-2 bg-safari-earth text-white rounded hover:bg-stone-800">1</button>
            <button className="px-4 py-2 border border-stone-300 rounded bg-white text-stone-600 hover:bg-stone-50">2</button>
            <button className="px-4 py-2 border border-stone-300 rounded bg-white text-stone-600 hover:bg-stone-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;