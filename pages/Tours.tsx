import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import TourCard from '../components/TourCard';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Tours: React.FC = () => {
  const { tours } = useData();
  const [destination, setDestination] = useState<string>('All');
  const [durationRange, setDurationRange] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Extract unique destinations (categories in this context, or could be expanded)
  const destinations = ['All', ...Array.from(new Set(tours.map(t => t.category)))];

  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      // Filter by Destination/Category
      if (destination !== 'All' && tour.category !== destination) return false;

      // Filter by Duration
      if (durationRange === '1-3 Days') {
        if (tour.durationDays > 3) return false;
      } else if (durationRange === '4-7 Days') {
        if (tour.durationDays < 4 || tour.durationDays > 7) return false;
      } else if (durationRange === '8+ Days') {
        if (tour.durationDays < 8) return false;
      }

      // Filter by Price
      if (priceRange === 'Under $500') {
        if (tour.priceUsd >= 500) return false;
      } else if (priceRange === '$500 - $1000') {
        if (tour.priceUsd < 500 || tour.priceUsd > 1000) return false;
      } else if (priceRange === 'Over $1000') {
        if (tour.priceUsd <= 1000) return false;
      }

      return true;
    });
  }, [destination, durationRange, priceRange, tours]);

  const clearFilters = () => {
    setDestination('All');
    setDurationRange('All');
    setPriceRange('All');
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="relative bg-stone-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold text-white mb-2">Find Your Safari</h1>
            <p className="text-stone-300 mt-2 text-lg">Filter by destination, duration, or budget</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showMobileFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
             <div className="flex justify-between items-center lg:hidden mb-6">
                 <h2 className="text-xl font-bold">Filters</h2>
                 <button onClick={() => setShowMobileFilters(false)}><X className="w-6 h-6" /></button>
             </div>

             <div className="bg-white lg:p-6 rounded-xl lg:shadow-sm lg:border border-stone-200 space-y-8 sticky top-24">
                
                {/* Destination */}
                <div>
                    <h3 className="font-bold text-stone-800 mb-3 flex items-center">
                        <Filter className="w-4 h-4 mr-2 text-safari-gold" /> Destination / Type
                    </h3>
                    <div className="space-y-2">
                        {destinations.map(dest => (
                            <label key={dest} className="flex items-center space-x-3 cursor-pointer group">
                                <input 
                                    type="radio" 
                                    name="destination" 
                                    checked={destination === dest}
                                    onChange={() => setDestination(dest)}
                                    className="w-4 h-4 text-safari-leaf focus:ring-safari-leaf border-gray-300"
                                />
                                <span className={`text-sm ${destination === dest ? 'text-safari-leaf font-semibold' : 'text-stone-600 group-hover:text-stone-900'}`}>{dest}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Duration */}
                <div>
                    <h3 className="font-bold text-stone-800 mb-3">Duration</h3>
                    <div className="space-y-2">
                        {['All', '1-3 Days', '4-7 Days', '8+ Days'].map(opt => (
                            <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                                <input 
                                    type="radio" 
                                    name="duration" 
                                    checked={durationRange === opt}
                                    onChange={() => setDurationRange(opt)}
                                    className="w-4 h-4 text-safari-leaf focus:ring-safari-leaf border-gray-300"
                                />
                                <span className={`text-sm ${durationRange === opt ? 'text-safari-leaf font-semibold' : 'text-stone-600 group-hover:text-stone-900'}`}>{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div>
                    <h3 className="font-bold text-stone-800 mb-3">Price Range (USD)</h3>
                    <div className="space-y-2">
                        {['All', 'Under $500', '$500 - $1000', 'Over $1000'].map(opt => (
                            <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                                <input 
                                    type="radio" 
                                    name="price" 
                                    checked={priceRange === opt}
                                    onChange={() => setPriceRange(opt)}
                                    className="w-4 h-4 text-safari-leaf focus:ring-safari-leaf border-gray-300"
                                />
                                <span className={`text-sm ${priceRange === opt ? 'text-safari-leaf font-semibold' : 'text-stone-600 group-hover:text-stone-900'}`}>{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={clearFilters}
                    className="w-full py-2 text-sm text-stone-500 hover:text-white border border-stone-200 rounded hover:bg-stone-800 transition-colors"
                >
                    Clear All Filters
                </button>
             </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
             {/* Mobile Filter Toggle */}
             <div className="lg:hidden mb-6">
                 <button 
                    onClick={() => setShowMobileFilters(true)}
                    className="w-full py-3 bg-white border border-stone-300 rounded-lg shadow-sm flex items-center justify-center font-medium text-stone-700"
                 >
                     <SlidersHorizontal className="w-5 h-5 mr-2" /> Filter Tours
                 </button>
             </div>

             <div className="mb-6 text-stone-500 text-sm font-medium">
                 Showing {filteredTours.length} tours
             </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence>
                {filteredTours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
                </AnimatePresence>
            </motion.div>

            {filteredTours.length === 0 && (
            <div className="text-center py-20 bg-white rounded-lg border border-stone-200 border-dashed">
                <p className="text-stone-500 text-lg mb-4">No tours found matching your criteria.</p>
                <button 
                onClick={clearFilters}
                className="text-safari-sunset font-medium hover:underline"
                >
                Reset Filters
                </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;