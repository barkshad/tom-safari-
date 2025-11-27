// @ts-nocheck
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import TourCard from '../components/TourCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Map, Sun, Plane, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tours: React.FC = () => {
  const { tours } = useData();

  // Group tours logic
  const excursions = tours.filter(t => t.group === 'Excursion');
  const roadSafaris = tours.filter(t => t.group === 'Road Safari');
  const flightSafaris = tours.filter(t => t.group === 'Flight Safari');
  const treks = tours.filter(t => t.group === 'Trek');

  // Road Safari Sub-groups
  const road1Day = roadSafaris.filter(t => t.durationDays === 1);
  const road1Night = roadSafaris.filter(t => t.durationDays === 2);
  const road2Night = roadSafaris.filter(t => t.durationDays === 3);
  const road3Night = roadSafaris.filter(t => t.durationDays === 4); // 3 nights is 4 days
  const road5Night = roadSafaris.filter(t => t.durationDays === 6);
  const road6Night = roadSafaris.filter(t => t.durationDays >= 7);

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="relative bg-stone-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold text-white mb-2">Safaris & Tours</h1>
            <p className="text-stone-300 mt-2 text-lg">Explore our comprehensive list of adventures</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* --- SECTION 1: EXCURSIONS --- */}
        <section className="bg-white rounded-2xl shadow-xl border-t-8 border-safari-sunset mb-12 overflow-hidden">
            <div className="p-8 border-b border-stone-100 flex items-center">
                <Sun className="w-8 h-8 text-safari-sunset mr-4" />
                <h2 className="text-3xl font-serif font-bold text-stone-900">Excursions from Mombasa</h2>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-stone-50 text-stone-600 uppercase text-sm font-bold">
                        <tr>
                            <th className="p-4 border-b border-stone-200">Tour Name</th>
                            <th className="p-4 border-b border-stone-200">Duration</th>
                            <th className="p-4 border-b border-stone-200">Price (USD)</th>
                            <th className="p-4 border-b border-stone-200">Price (GBP)</th>
                            <th className="p-4 border-b border-stone-200 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-sm md:text-base">
                        {excursions.map(tour => (
                            <tr key={tour.id} className="hover:bg-stone-50 transition-colors">
                                <td className="p-4 font-medium text-stone-800">
                                    <div className="flex items-center">
                                        <img src={tour.image} className="w-12 h-12 rounded-lg object-cover mr-4 hidden md:block" alt={tour.name} />
                                        {tour.name}
                                    </div>
                                </td>
                                <td className="p-4 text-stone-600">{tour.durationDays === 0.5 ? '½ Day' : '1 Day'}</td>
                                <td className="p-4 font-bold text-safari-leaf">${tour.priceUsd > 0 ? tour.priceUsd : 'Inquire'}</td>
                                <td className="p-4 font-bold text-stone-500">£{tour.priceGbp > 0 ? tour.priceGbp : 'Inquire'}</td>
                                <td className="p-4 text-right">
                                    <Link to={`/tours/${tour.id}`} className="text-safari-sunset font-bold hover:underline text-sm">View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* --- SECTION 2: ROAD SAFARIS --- */}
        <section className="mb-12">
            <div className="flex items-center mb-8">
                <Map className="w-8 h-8 text-safari-earth mr-4" />
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

        {/* --- SECTION 3: FLIGHT SAFARIS --- */}
        <section className="mb-12 bg-stone-100 p-8 rounded-2xl border border-stone-200">
            <div className="flex items-center mb-8">
                <Plane className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-serif font-bold text-stone-900">Flight Safaris</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flightSafaris.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </section>

        {/* --- SECTION 4: TAILOR MADE --- */}
        <section className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Tailor-Made Safaris</h2>
                <p className="text-stone-300 max-w-2xl mx-auto mb-8 text-lg">
                    Don't see exactly what you're looking for? We specialize in creating custom itineraries for couples, families, photographers, and corporate groups.
                </p>
                <Link to="/contact" className="inline-block px-8 py-3 bg-safari-gold text-stone-900 font-bold rounded-full hover:bg-white transition-colors">
                    Request Custom Quote
                </Link>
            </div>
        </section>

      </div>
    </div>
  );
};

// Sub-component for expandable safari sections
const SafariSection: React.FC<{ title: string, tours: any[] }> = ({ title, tours }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (tours.length === 0) return null;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
            >
                <h3 className="text-xl font-bold text-stone-800">{title}</h3>
                {isOpen ? <ChevronUp className="w-5 h-5 text-stone-500" /> : <ChevronDown className="w-5 h-5 text-stone-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tours.map(tour => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Tours;