// @ts-nocheck
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, RefreshCw, Plus, Trash2, Edit2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour } from '../types';

const Admin: React.FC = () => {
  const { 
    isAuthenticated, 
    login, 
    logout, 
    companyInfo, 
    updateCompanyInfo, 
    tours, 
    updateTour, 
    deleteTour,
    addTour,
    resetData 
  } = useData();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'company' | 'tours'>('company');
  const [editingTour, setEditingTour] = useState<Tour | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  // --- Render Login Screen ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-8 rounded-2xl shadow-2xl max-w-md w-full relative z-10 mx-4"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-safari-sunset text-white rounded-full flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-center mb-6 text-stone-800">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-safari-gold outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-safari-leaf text-white font-bold rounded-lg hover:bg-stone-800 transition-colors"
            >
              Unlock Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- Render Dashboard ---
  return (
    <div className="min-h-screen bg-stone-100 pb-20">
      {/* Admin Navbar */}
      <div className="bg-stone-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold font-serif flex items-center">
             <Edit2 className="w-5 h-5 mr-2 text-safari-gold" /> Admin Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <button onClick={resetData} className="text-sm text-stone-400 hover:text-white flex items-center">
              <RefreshCw className="w-4 h-4 mr-1" /> Reset All
            </button>
            <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-bold flex items-center">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('company')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'company' ? 'bg-safari-sunset text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-stone-200'
            }`}
          >
            Company Details
          </button>
          <button
            onClick={() => setActiveTab('tours')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'tours' ? 'bg-safari-sunset text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-stone-200'
            }`}
          >
            Manage Tours
          </button>
        </div>

        {/* --- Company Info Tab --- */}
        {activeTab === 'company' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow p-8"
          >
            <h2 className="text-2xl font-bold mb-6 border-b pb-4">Edit Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Company Name</label>
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={(e) => updateCompanyInfo({ ...companyInfo, name: e.target.value })}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Slogan / Tagline</label>
                <input
                  type="text"
                  value={companyInfo.slogan}
                  onChange={(e) => updateCompanyInfo({ ...companyInfo, slogan: e.target.value })}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={companyInfo.phone}
                  onChange={(e) => updateCompanyInfo({ ...companyInfo, phone: e.target.value })}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
                <input
                  type="text"
                  value={companyInfo.email}
                  onChange={(e) => updateCompanyInfo({ ...companyInfo, email: e.target.value })}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">WhatsApp Link</label>
                <input
                  type="text"
                  value={companyInfo.social.whatsapp}
                  onChange={(e) => updateCompanyInfo({ 
                    ...companyInfo, 
                    social: { ...companyInfo.social, whatsapp: e.target.value } 
                  })}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Instagram Link</label>
                <input
                  type="text"
                  value={companyInfo.social.instagram}
                  onChange={(e) => updateCompanyInfo({ 
                    ...companyInfo, 
                    social: { ...companyInfo.social, instagram: e.target.value } 
                  })}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
               <div className="flex items-center text-green-600 font-bold bg-green-50 px-4 py-2 rounded">
                 <Save className="w-5 h-5 mr-2" /> Changes save automatically
               </div>
            </div>
          </motion.div>
        )}

        {/* --- Tours Tab --- */}
        {activeTab === 'tours' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
             {/* Add New Tour Button (Placeholder functionality) */}
             <div className="flex justify-end">
                <button 
                  onClick={() => {
                    const newId = `custom-tour-${Date.now()}`;
                    const newTour: Tour = {
                        id: newId,
                        name: "New Adventure",
                        durationDays: 3,
                        priceUsd: 500,
                        priceGbp: 400,
                        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
                        category: "Safari",
                        group: "Road Safari",
                        featured: false,
                        shortDescription: "Description goes here.",
                        fullDescription: "Full description goes here.",
                        highlights: ["Highlight 1"],
                        itinerary: [{ day: 1, title: "Day 1", description: "Details." }]
                    };
                    addTour(newTour);
                    setEditingTour(newTour);
                  }}
                  className="bg-safari-leaf text-white px-6 py-3 rounded-lg font-bold hover:bg-green-900 flex items-center shadow-lg"
                >
                    <Plus className="w-5 h-5 mr-2" /> Add New Tour
                </button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map(tour => (
                    <div key={tour.id} className="bg-white rounded-xl shadow overflow-hidden border border-stone-100 group">
                        <div className="h-40 overflow-hidden relative">
                             <img src={tour.image} className="w-full h-full object-cover" alt={tour.name} />
                             <div className="absolute top-2 right-2 flex space-x-2">
                                <button 
                                    onClick={() => setEditingTour(tour)}
                                    className="bg-white p-2 rounded-full shadow hover:bg-blue-50 text-blue-600"
                                >
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => {
                                        if(window.confirm('Are you sure you want to delete this tour?')) {
                                            deleteTour(tour.id);
                                        }
                                    }}
                                    className="bg-white p-2 rounded-full shadow hover:bg-red-50 text-red-600"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                             </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-1">{tour.name}</h3>
                            <div className="flex justify-between text-sm text-stone-500">
                                <span>{tour.durationDays} Days</span>
                                <div className="text-right">
                                    <div className="text-safari-gold font-bold">${tour.priceUsd}</div>
                                    <div className="text-stone-400 text-xs">£{tour.priceGbp}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </motion.div>
        )}
      </div>

      {/* Edit Tour Modal */}
      <AnimatePresence>
        {editingTour && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                >
                    <div className="p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
                        <h3 className="text-2xl font-bold font-serif">Edit Tour</h3>
                        <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-stone-100 rounded-full">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2 rounded"
                                    value={editingTour.name}
                                    onChange={(e) => setEditingTour({...editingTour, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Price (USD)</label>
                                <input 
                                    type="number" 
                                    className="w-full border p-2 rounded"
                                    value={editingTour.priceUsd}
                                    onChange={(e) => setEditingTour({...editingTour, priceUsd: parseInt(e.target.value) || 0})}
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-bold mb-1">Price (GBP)</label>
                                <input 
                                    type="number" 
                                    className="w-full border p-2 rounded"
                                    value={editingTour.priceGbp}
                                    onChange={(e) => setEditingTour({...editingTour, priceGbp: parseInt(e.target.value) || 0})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Duration (Days)</label>
                                <input 
                                    type="number" 
                                    className="w-full border p-2 rounded"
                                    value={editingTour.durationDays}
                                    onChange={(e) => setEditingTour({...editingTour, durationDays: parseInt(e.target.value) || 0})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Group</label>
                                <select 
                                    className="w-full border p-2 rounded"
                                    value={editingTour.group}
                                    onChange={(e) => setEditingTour({...editingTour, group: e.target.value as any})}
                                >
                                    <option value="Road Safari">Road Safari</option>
                                    <option value="Excursion">Excursion</option>
                                    <option value="Flight Safari">Flight Safari</option>
                                    <option value="Trek">Trek</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Short Description</label>
                            <textarea 
                                className="w-full border p-2 rounded"
                                rows={2}
                                value={editingTour.shortDescription}
                                onChange={(e) => setEditingTour({...editingTour, shortDescription: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Image URL</label>
                            <input 
                                type="text" 
                                className="w-full border p-2 rounded"
                                value={editingTour.image}
                                onChange={(e) => setEditingTour({...editingTour, image: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Full Description</label>
                            <textarea 
                                className="w-full border p-2 rounded"
                                rows={4}
                                value={editingTour.fullDescription}
                                onChange={(e) => setEditingTour({...editingTour, fullDescription: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="p-6 border-t bg-stone-50 flex justify-end space-x-4">
                        <button 
                            onClick={() => setEditingTour(null)}
                            className="px-4 py-2 text-stone-600 font-bold hover:text-stone-900"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={() => {
                                updateTour(editingTour);
                                setEditingTour(null);
                            }}
                            className="px-6 py-2 bg-safari-sunset text-white font-bold rounded shadow hover:bg-orange-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;