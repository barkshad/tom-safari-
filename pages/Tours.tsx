import React, { useState, useMemo } from 'react';
import { TOURS } from '../constants';
import TourCard from '../components/TourCard';
import { Filter } from 'lucide-react';

const Tours: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('price-asc');

  const categories = ['All', ...Array.from(new Set(TOURS.map(t => t.category)))];

  const filteredTours = useMemo(() => {
    let result = TOURS;

    if (filterCategory !== 'All') {
      result = result.filter(t => t.category === filterCategory);
    }

    // Creating a new array to avoid mutating the original constant
    return [...result].sort((a, b) => {
      if (sortOrder === 'price-asc') return a.priceUsd - b.priceUsd;
      if (sortOrder === 'price-desc') return b.priceUsd - a.priceUsd;
      if (sortOrder === 'duration-asc') return a.durationDays - b.durationDays;
      if (sortOrder === 'duration-desc') return b.durationDays - a.durationDays;
      return 0;
    });
  }, [filterCategory, sortOrder]);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 py-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-white">Our Safari Packages</h1>
        <p className="text-stone-400 mt-2">Explore our carefully curated adventures</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Category Filter */}
          <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-stone-400 flex-shrink-0" />
            <span className="font-medium text-stone-700 mr-2">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                  filterCategory === cat
                    ? 'bg-safari-earth text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <span className="font-medium text-stone-700 text-sm">Sort by:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-stone-100 border-none text-sm rounded px-3 py-2 text-stone-700 focus:ring-2 focus:ring-safari-gold"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration-asc">Duration: Shortest</option>
              <option value="duration-desc">Duration: Longest</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">No tours found matching your criteria.</p>
            <button 
              onClick={() => setFilterCategory('All')}
              className="mt-4 text-safari-sunset hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
