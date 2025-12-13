
// @ts-nocheck
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PlayCircle, Volume2, VolumeX } from 'lucide-react';
import { BlogPost } from '../types';
import { motion } from 'framer-motion';
import { getOptimizedMedia, getPoster } from '../utils/media';

interface BlogCardProps {
  post: BlogPost;
}

const isVideo = (url: string) => url?.match(/\.(mp4|webm|ogg|mov)$/i) || url?.includes('/video/upload/');

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation();
    const newState = !isMuted;
    setIsMuted(newState);
    if (videoRef.current) {
        videoRef.current.muted = newState;
    }
  };

  const handleMouseEnter = () => {
      if (videoRef.current) {
          videoRef.current.play().catch(() => {});
      }
  };

  const handleMouseLeave = () => {
      if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0; // Reset
      }
  };

  const mediaUrl = isVideo(post.image) ? getOptimizedMedia(post.image, 'video', 600) : getOptimizedMedia(post.image, 'image', 600);
  const posterUrl = isVideo(post.image) ? getPoster(post.image) : '';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="group relative h-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ y: -15, rotateX: 5, rotateY: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="glass-card h-full rounded-3xl overflow-hidden flex flex-col relative z-10 border-2 border-transparent group-hover:border-safari-emerald/30"
      >
        <div className="relative h-64 overflow-hidden bg-stone-900">
          <Link 
            to={`/blog/${post.slug}`} 
            className="block w-full h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isVideo(post.image) ? (
               <video 
                 ref={videoRef}
                 src={mediaUrl}
                 poster={posterUrl}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 muted={isMuted}
                 loop 
                 playsInline
                 preload="none"
               />
            ) : (
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={mediaUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
            )}
          </Link>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {isVideo(post.image) && (
            <div className="absolute top-4 right-4 flex gap-2 z-20">
                <button 
                    onClick={toggleMute}
                    className="bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-safari-emerald transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative">
          <div className="flex items-center text-xs text-stone-500 mb-4 space-x-3">
              <span className="bg-safari-sky/20 text-stone-700 px-3 py-1 rounded-full font-bold uppercase tracking-wide">{post.category}</span>
              <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 leading-tight group-hover:text-safari-sunset transition-colors">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-stone-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed font-sans font-light">
            {post.excerpt}
          </p>
          <div className="border-t border-stone-100 pt-6 mt-auto">
              <Link to={`/blog/${post.slug}`} className="text-safari-sunset font-bold text-sm hover:underline uppercase tracking-wide">Read Article</Link>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 bg-safari-emerald/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 translate-y-4"></div>
    </motion.div>
  );
};

export default BlogCard;
