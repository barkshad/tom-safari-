// @ts-nocheck
import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft, Calendar, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const isVideo = (url: string) => url?.match(/\.(mp4|webm|ogg|mov)$/i) || url?.includes('/video/upload/');

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blogPosts } = useData();
  const post = blogPosts.find(p => p.slug === slug);
  const [isMuted, setIsMuted] = useState(true);

  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-stone-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="px-6 py-3 bg-safari-leaf text-white font-bold rounded-full">
          Back to Safari Stories
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-safari-sand min-h-screen pb-20">
        <div className="relative h-[70vh] overflow-hidden bg-stone-900 group">
          <motion.div 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
          >
              {isVideo(post.image) ? (
                 <video 
                    src={post.image} 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted={isMuted}
                    loop 
                    playsInline
                 />
              ) : (
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
              )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-safari-sand via-transparent to-black/40"></div>
          
          <div className="absolute top-28 left-4 md:left-12 z-20">
              <Link to="/blog" className="glass-nav px-4 py-2 rounded-full text-white text-sm font-bold flex items-center hover:bg-white/20 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Link>
          </div>

          {isVideo(post.image) && (
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-8 right-8 z-30 bg-black/50 backdrop-blur-md p-3 rounded-full text-white hover:bg-safari-emerald hover:text-stone-900 transition-all border border-white/10"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          )}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-30">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 sm:p-12 md:p-16 rounded-[2rem] shadow-2xl"
          >
            <div className="text-center mb-12">
              <span className="bg-safari-sky/20 text-stone-700 px-4 py-2 rounded-full font-bold uppercase tracking-wide text-sm">{post.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-6 mb-4">{post.title}</h1>
              <div className="flex items-center justify-center text-stone-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
            
            <div className="prose prose-lg prose-stone max-w-none text-stone-800 font-sans font-light leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
              {post.content}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;