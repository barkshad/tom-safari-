// @ts-nocheck
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import TourCard from '../../components/TourCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Map, Sun, Plane, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const Tours: React.FC = () => {
  const { tours, convertPrice, selectedCurrency } = useData();

  // Group tours logic
  const excursions = tours.filter(t => t.group === 'Excursion');
  const roadSafaris = tours.filter(t => t.group === 'Road Safari');
  const flightSafaris = tours.filter(t => t.group === 'Flight Safari');
  const treks = tours.filter(t => t.group === 'Trek');

  const road1Day = roadSafaris.filter(t => t.durationDays === 1);
  const road1Night = roadSafaris.filter(t => t.durationDays === 2);
  const road2Night = roadSafaris.filter(t => t.durationDays === 3);
  const road3Night = roadSafaris.filter(t => t.durationDays === 4);
  const road5Night = roadSafaris.filter(t => t.durationDays === 6);
  const road6Night = roadSafaris.filter(t => t.durationDays >= 7);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* --- EXCURSIONS --- */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl shadow-xl mb-12 overflow-hidden"
        >
            <div className="p-8 border-b border-stone-200/50 flex items-center bg-white/50">
                <Sun className="w-8 h-8 text-safari-sunset mr-4" />
                <h2 className="text-3xl font-serif font-bold text-stone-900">Excursions from Mombasa</h2>
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
                                    <td className="p-6 text-stone-600 font-medium hidden sm:table-cell">{tour.durationDays === 0.5 ? '½ Day' : '1 Day'}</td>
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

        {/* --- ROAD SAFARIS --- */}
        <section className="mb-12">
            <div className="flex items-center mb-8">
                <div className="bg-safari-earth p-3 rounded-xl text-white mr-4 shadow-lg">
                    <Map className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-stone-900">Road Safaris</h2>
            </div>

            <div className="space-y-6">
                <SafariSection title="1-Day Road Safaris" tours={road1Day} />
                <SafariSection title="1-Night Road Safaris" tours={road1Night} />
                <SafariSection title="2-Night Road Safaris" tours={road2Night} />
                <SafariSection title="3-Night Road Safaris" tours={road3Night} />
                <SafariSection title="5-Night Extended Safaris" tours={road5Night} />
                <SafariSection title="6-Night Extended Safaris & Treks" tours={[...road6Night, ...treks]} />
            </div>
        </section>

        {/* --- FLIGHT SAFARIS --- */}
        <section className="mb-12 glass-card p-10 rounded-3xl">
            <div className="flex items-center mb-8">
                <div className="bg-blue-500 p-3 rounded-xl text-white mr-4 shadow-lg shadow-blue-200">
                     <Plane className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-stone-900">Flight Safaris</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {flightSafaris.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </section>
        
        {/* --- TAILOR MADE --- */}
        <section className="glass-dark rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-64 h-64 bg-safari-emerald/10 rounded-full blur-[100px]"></div>
             <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-4">Tailor-Made Safaris</h2>
                <p className="text-stone-300 max-w-2xl mx-auto mb-8 text-lg font-light">
                    Custom itineraries for couples, families, and groups.
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
    if (tours.length === 0) return null;

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
}

export default Tours;