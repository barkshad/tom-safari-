// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { ArrowLeft, CloudSun, CheckCircle } from 'lucide-react';
import { Tour } from '../../types';
import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import StructuredData from '../../components/StructuredData';
import EditTrigger from '../../components/EditTrigger';

const TourDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tours, convertPrice } = useData();
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    const foundTour = tours.find(t => t.id === id);
    if (foundTour) {
      setTour(foundTour);
    }
  }, [id, tours]);

  if (!tour) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  const price = convertPrice(tour.priceUsd);
  
  const getDisplayImages = () => {
    if (tour.gallery && tour.gallery.length > 0) return tour.gallery;
    if(tour.image) return [tour.image];
    return []; 
  };
  
  const isVideo = (url: string) => url?.match(/\.(mp4|webm|ogg|mov)$/i) || url?.includes('/video/upload/');

  const galleryImages = getDisplayImages();

  return (
    <PageTransition>
      <StructuredData type="TouristAttraction" data={tour} />
      <div className="bg-safari-sand min-h-screen pb-20">
        
        <div className="relative h-[80vh] overflow-hidden">
          <EditTrigger sectionName={`Tour: ${tour.name}`} className="top-24 right-4" />
          <motion.div 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
          >
              {isVideo(tour.image) ? (
                 <video src={tour.image} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              ) : (
                 <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" loading="eager"/>
              )}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-safari-sand via-transparent to-black/30"></div>
          
          <div className="absolute top-28 left-4 md:left-12 z-20">
              <Link to="/tours" className="glass-nav px-4 py-2 rounded-full text-white text-sm font-bold flex items-center hover:bg-white/20 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tours
              </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 z-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
              >
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 leading-none drop-shadow-2xl">{tour.name}</h1>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div className="lg:col-span-2 space-y-10">
              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 sm:p-8 md:p-12 rounded-[2rem]"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Experience Overview</h2>
                <p className="text-stone-600 leading-relaxed mb-10 text-lg font-light">{tour.fullDescription}</p>
                
                <div className="flex flex-wrap gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <span key={index} className="px-4 py-2 rounded-lg bg-safari-emerald/10 text-stone-700 font-bold text-sm border border-safari-emerald/20">
                      ✨ {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>

              {tour.itinerary && tour.itinerary.length > 0 && (
                <motion.div 
                    className="glass-card p-6 sm:p-8 md:p-12 rounded-[2rem]"
                >
                  <h2 className="text-3xl font-serif font-bold text-stone-800 mb-10">Itinerary</h2>
                  <div className="space-y-12 border-l-2 border-safari-emerald/30 ml-4 pl-6 sm:pl-10">
                    {tour.itinerary.map((day, idx) => (
                      <motion.div 
                          key={day.day} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative"
                      >
                        <span className="absolute -left-[37px] sm:-left-[53px] top-0 w-8 h-8 rounded-full bg-safari-leaf text-white flex items-center justify-center font-bold text-sm ring-4 ring-safari-sand">
                          {day.day}
                        </span>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">Day {day.day}: {day.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{day.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
               {galleryImages.length > 0 && (
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {galleryImages.map((img, idx) => (
                          <motion.div 
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="aspect-square rounded-2xl overflow-hidden shadow-md"
                          >
                              {isVideo(img) ? (
                                  <video src={img} className="w-full h-full object-cover" controls />
                              ) : (
                                  <img src={img} className="w-full h-full object-cover" loading="lazy" />
                              )}
                          </motion.div>
                      ))}
                  </div>
               )}

            </div>

            <div className="lg:col-span-1">
              <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card rounded-[2rem] p-6 sm:p-8 sticky top-28 shadow-2xl"
              >
                <div className="flex justify-between items-end mb-6 border-b border-stone-200 pb-6">
                    <div>
                        <p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Total Price</p>
                        <h3 className="text-4xl font-black text-stone-800">{price.formatted}</h3>
                    </div>
                    <span className="text-stone-500 font-medium mb-1">/ person</span>
                </div>
                
                <Link 
                  to={`/contact?tour=${tour.id}`} 
                  className="block w-full text-center py-5 bg-safari-emerald text-stone-900 font-bold rounded-xl hover:bg-safari-leaf hover:text-white transition-all shadow-lg hover:shadow-xl mb-6 text-lg"
                >
                  Request Booking
                </Link>
                
                <div className="space-y-4 text-sm text-stone-600">
                   <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" /> Free Cancellation (24h)</div>
                   <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" /> Instant Confirmation</div>
                   <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" /> Best Price Guarantee</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TourDetails;