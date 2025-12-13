
// @ts-nocheck
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import TourCard from '../components/TourCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Map, Sun, Plane, Heart, Coffee, Globe, Compass, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Tours: React.FC = () => {
  const { tours, convertPrice, selectedCurrency } = useData();
  const [filter, setFilter] = useState('all');

  // Filter out hidden (draft) tours first
  const visibleTours = tours.filter(t => !t.hidden);

  // Filter Logic based on UI selection
  const filteredTours = visibleTours.filter(t => {
      if (filter === 'all') return true;
      if (filter === 'safari') return t.category === 'Safari' && t.group !== 'Excursion';
      if (filter === 'excursion') return t.group === 'Excursion' || t.category === 'Day Trip';
      if (filter === 'honeymoon') return t.category === 'Honeymoon';
      if (filter === 'weekend') return t.category === 'Weekend';
      if (filter === 'international') return t.category === 'International';
      return true;
  });

  // Segregate for "All" view
  const excursions = visibleTours.filter(t => t.group === 'Excursion' && t.category !== 'International');
  const roadSafaris = visibleTours.filter(t => t.group === 'Road Safari');
  const flightSafaris = visibleTours.filter(t => t.group === 'Flight Safari');
  const treks = visibleTours.filter(t => t.group === 'Trek');
  const honeymoons = visibleTours.filter(t => t.category === 'Honeymoon');
  const weekender = visibleTours.filter(t => t.category === 'Weekend');
  const international = visibleTours.filter(t => t.category === 'International');

  // Road Safari Breakdown
  const road1Day = roadSafaris.filter(t => t.durationDays === 1);
  const roadShort = roadSafaris.filter(t => t.durationDays > 1 && t.durationDays <= 3);
  const roadLong = roadSafaris.filter(t => t.durationDays > 3);

  const categories = [
    { id: 'all', label: 'All Tours', icon: Grid },
    { id: 'safari', label: 'Bush Safaris', icon: Map },
    { id: 'honeymoon', label: 'Honeymoon', icon: Heart },
    { id: 'weekend', label: 'Weekend', icon: Coffee },
    { id: 'international', label: 'International', icon: Globe },
    { id: 'excursion', label: 'Day Trips', icon: Sun },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-safari-sand pb-20">
      <div className="relative bg-stone-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold text-white mb-2 text-glow-gold">Safaris & Tours</h1>
            <p className="text-stone-300 mt-2 text-lg">Explore our comprehensive list of adventures</p>
        </div>
      </div>

      {/* STICKY FILTER BAR */}
      <div className="sticky top-0 z-30 bg-safari-sand/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto no-scrollbar">
              <div className="flex space-x-2 md:justify-center min-w-max">
                  {categories.map(cat => (
                      <button
                          key={cat.id}
                          onClick={() => setFilter(cat.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                              filter === cat.id 
                                  ? 'bg-safari-emerald text-white shadow-lg scale-105' 
                                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                          }`}
                      >
                          <cat.icon size={16} />
                          <span>{cat.label}</span>
                      </button>
                  ))}
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">
        
        {/* VIEW: ALL (Structured) */}
        {filter === 'all' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                
                {/* Excursions Table */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-3xl shadow-xl mb-12 overflow-hidden"
                >
                    <div className="p-8 border-b border-stone-200/50 flex items-center bg-white/50">
                        <Sun className="w-8 h-8 text-safari-sunset mr-4" />
                        <h2 className="text-3xl font-serif font-bold text-stone-900">Excursions & Leisure</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-safari-sand/50 text-stone-500 uppercase text-xs font-bold tracking-wider">
                                <tr>
                                    <th className="p-6">Tour Name</th>
                                    <th className="p-6 hidden sm:table-cell">Duration</th>
                                    <th className="p-6">Price ({selectedCurrency.code})</th>
                                    <th className="p-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 text-sm md:text-base">
                                {excursions.map(tour => {
                                    const price = convertPrice(tour.priceUsd);
                                    return (
                                        <tr key={tour.id} className="hover:bg-white/60 transition-colors">
                                            <td className="p-6 font-bold text-stone-800">{tour.name}</td>
                                            <td className="p-6 text-stone-600 font-medium hidden sm:table-cell">
                                                {tour.durationDays === 0.5 ? '½ Day' : `${tour.durationDays} Day${tour.durationDays > 1 ? 's' : ''}`}
                                            </td>
                                            <td className="p-6 font-bold text-safari-leaf">
                                                {tour.priceUsd > 0 ? price.formatted : 'Inquire'}
                                            </td>
                                            <td className="p-6 text-right">
                                                <Link to={`/tours/${tour.id}`} className="text-safari-emerald font-bold hover:underline text-sm uppercase tracking-wide">View</Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Road Safaris */}
                <section className="mb-12">
                    <div className="flex items-center mb-8">
                        <div className="bg-safari-earth p-3 rounded-xl text-white mr-4 shadow-lg"><Map className="w-6 h-6" /></div>
                        <h2 className="text-3xl font-serif font-bold text-stone-900">Bush & Road Safaris</h2>
                    </div>
                    <div className="space-y-6">
                        <SafariSection title="Day Trip Safaris" tours={road1Day} />
                        <SafariSection title="Short Safaris (2-3 Days)" tours={roadShort} />
                        <SafariSection title="Extended Safaris (4+ Days)" tours={roadLong} />
                        <SafariSection title="Flight Packages" tours={flightSafaris} />
                        <SafariSection title="Trekking & Hikes" tours={treks} />
                    </div>
                </section>

                {/* Special Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {honeymoons.length > 0 && (
                        <div className="glass-card p-8 rounded-3xl bg-pink-50/50 border-pink-100">
                            <div className="flex items-center mb-6">
                                <Heart className="w-6 h-6 text-pink-500 mr-3" />
                                <h2 className="text-2xl font-serif font-bold text-stone-900">Honeymoon</h2>
                            </div>
                            <div className="space-y-4">
                                {honeymoons.map(t => <TourListCard key={t.id} tour={t} />)}
                            </div>
                        </div>
                    )}
                    {weekender.length > 0 && (
                        <div className="glass-card p-8 rounded-3xl bg-orange-50/50 border-orange-100">
                            <div className="flex items-center mb-6">
                                <Coffee className="w-6 h-6 text-orange-500 mr-3" />
                                <h2 className="text-2xl font-serif font-bold text-stone-900">Weekend Getaways</h2>
                            </div>
                            <div className="space-y-4">
                                {weekender.map(t => <TourListCard key={t.id} tour={t} />)}
                            </div>
                        </div>
                    )}
                </div>

                {international.length > 0 && (
                    <section className="mb-12 glass-dark p-10 rounded-3xl">
                        <div className="flex items-center mb-8 text-white">
                            <Globe className="w-6 h-6 text-blue-400 mr-4" />
                            <h2 className="text-3xl font-serif font-bold">International Travel</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {international.map(tour => <TourCard key={tour.id} tour={tour} />)}
                        </div>
                    </section>
                )}
            </motion.div>
        )}

        {/* VIEW: FILTERED GRID */}
        {filter !== 'all' && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredTours.length > 0 ? (
                    filteredTours.map(tour => <TourCard key={tour.id} tour={tour} />)
                ) : (
                    <div className="col-span-full text-center py-20 text-stone-500">
                        <p className="text-xl">No tours found in this category yet.</p>
                        <button onClick={() => setFilter('all')} className="mt-4 text-safari-emerald font-bold hover:underline">View all tours</button>
                    </div>
                )}
            </motion.div>
        )}
        
        {/* TAILOR MADE CTA */}
        <section className="mt-20 glass-card bg-safari-emerald/10 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl border border-safari-emerald/20">
             <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-4 text-stone-900">Tailor-Made Safaris</h2>
                <p className="text-stone-600 max-w-2xl mx-auto mb-8 text-lg">
                    Didn't find what you're looking for? We create custom itineraries for couples, families, and groups.
                </p>
                <Link to="/contact" className="inline-block px-10 py-4 bg-safari-emerald text-stone-900 font-bold rounded-full hover:bg-white transition-all shadow-lg hover:scale-105">
                    Request Custom Quote
                </Link>
            </div>
        </section>

      </div>
    </div>
    </PageTransition>
  );
};

const SafariSection: React.FC<{ title: string, tours: any[] }> = ({ title, tours }) => {
    const [isOpen, setIsOpen] = useState(true);
    if (!tours || tours.length === 0) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden"
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white/40 hover:bg-white/60 transition-colors text-left"
            >
                <h3 className="text-xl font-bold text-stone-800">{title}</h3>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                  <ChevronDown className="w-5 h-5 text-stone-500" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="overflow-hidden"
                    >
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tours.map(tour => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const TourListCard: React.FC<{ tour: any }> = ({ tour }) => {
    const { convertPrice } = useData();
    const price = convertPrice(tour.priceUsd);
    
    return (
        <Link to={`/tours/${tour.id}`} className="flex items-center bg-white p-3 rounded-xl hover:shadow-md transition-shadow">
            <img src={tour.image} className="w-20 h-20 rounded-lg object-cover mr-4" alt={tour.name} />
            <div className="flex-grow">
                <h4 className="font-bold text-stone-800">{tour.name}</h4>
                <p className="text-xs text-stone-500">{tour.durationDays} Days</p>
            </div>
            <div className="text-right">
                <span className="block font-bold text-safari-emerald">{price.formatted}</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">View</span>
            </div>
        </Link>
    )
}

export default Tours;
