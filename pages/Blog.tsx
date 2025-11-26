import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="bg-stone-900 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-white">Safari Stories</h1>
        <p className="text-stone-400 mt-2">Tips, news, and inspiration for your next adventure</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-stone-500 mb-3 space-x-3">
                    <span className="bg-safari-sand text-safari-earth px-2 py-1 rounded font-medium">{post.category}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 leading-tight">
                  <Link to="#" className="hover:text-safari-sunset transition-colors">{post.title}</Link>
                </h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="border-t border-stone-100 pt-4 mt-auto">
                    <Link to="#" className="text-safari-sunset font-bold text-sm hover:underline">Read Full Article &rarr;</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-12 flex justify-center space-x-2">
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