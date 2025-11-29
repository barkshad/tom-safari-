// @ts-nocheck
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, RefreshCw, Plus, Trash2, Edit2, X, MessageSquare, Layout, Settings, Home, List, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, Inquiry, PageContent } from '../types';

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
    inquiries,
    pageContent,
    updatePageContent,
    changePassword,
    resetData 
  } = useData();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'tours' | 'inquiries' | 'content' | 'settings'>('dashboard');
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [newPassword, setNewPassword] = useState('');
  
  // State for image validation
  const [imageError, setImageError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleUpdatePassword = () => {
    if (newPassword.length < 5) {
      alert("Password must be at least 5 characters");
      return;
    }
    changePassword(newPassword);
    setNewPassword('');
    alert("Password updated successfully!");
  };

  const handleHeroImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val && !val.startsWith('http')) {
        setImageError('URL must start with http or https');
    } else {
        setImageError('');
    }
    updatePageContent({ ...pageContent, home: { ...pageContent.home, heroImage: val } });
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
    <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-stone-900 text-white flex-shrink-0">
        <div className="p-6 border-b border-stone-700">
           <h1 className="text-xl font-bold font-serif flex items-center">
             <Edit2 className="w-5 h-5 mr-2 text-safari-gold" /> Admin Panel
           </h1>
        </div>
        <nav className="p-4 space-y-2">
            {[
                { id: 'dashboard', label: 'Dashboard', icon: Home },
                { id: 'tours', label: 'Tours', icon: List },
                { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
                { id: 'content', label: 'Page Content', icon: Layout },
                { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id ? 'bg-safari-sunset text-white' : 'text-stone-400 hover:bg-stone-800 hover:text-white'}`}
                >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                </button>
            ))}
        </nav>
        <div className="p-4 mt-auto border-t border-stone-800">
            <button onClick={logout} className="w-full flex items-center justify-center space-x-2 bg-red-900/50 hover:bg-red-900 text-red-200 py-2 rounded transition-colors">
                <LogOut className="w-4 h-4" /> <span>Logout</span>
            </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto h-screen p-4 md:p-8">
        
        {/* Top Bar (Mobile mostly) */}
        <div className="flex justify-between items-center mb-8 md:hidden">
            <h2 className="text-2xl font-bold text-stone-800 capitalize">{activeTab}</h2>
        </div>

        {/* --- DASHBOARD TAB --- */}
        {activeTab === 'dashboard' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-stone-500 font-medium">Total Tours</p>
                                <h3 className="text-4xl font-bold text-stone-900">{tours.length}</h3>
                            </div>
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                <List className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-stone-500 font-medium">Total Inquiries</p>
                                <h3 className="text-4xl font-bold text-stone-900">{inquiries.length}</h3>
                            </div>
                            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-stone-500 font-medium">Featured Tours</p>
                                <h3 className="text-4xl font-bold text-stone-900">{tours.filter(t => t.featured).length}</h3>
                            </div>
                            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg">
                                <Layout className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="p-6 border-b border-stone-100">
                        <h3 className="font-bold text-lg">Recent Inquiries</h3>
                    </div>
                    {inquiries.length === 0 ? (
                        <div className="p-8 text-center text-stone-500">No inquiries yet.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-stone-50 text-stone-500 text-sm">
                                    <tr>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Email</th>
                                        <th className="p-4">Tour</th>
                                        <th className="p-4">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    {inquiries.slice(0, 5).map(inq => (
                                        <tr key={inq.id}>
                                            <td className="p-4 font-medium">{inq.name}</td>
                                            <td className="p-4 text-stone-600">{inq.email}</td>
                                            <td className="p-4 text-stone-600">{inq.tourName || 'General'}</td>
                                            <td className="p-4 text-stone-500 text-sm">{new Date(inq.submittedAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </motion.div>
        )}

        {/* --- INQUIRIES TAB --- */}
        {activeTab === 'inquiries' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Booking Inquiries</h2>
                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    {inquiries.length === 0 ? (
                        <div className="p-12 text-center text-stone-500">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>No inquiries received yet.</p>
                        </div>
                    ) : (
                         <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-stone-50 text-stone-500 text-sm uppercase tracking-wider font-bold">
                                    <tr>
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Client</th>
                                        <th className="p-4">Contact</th>
                                        <th className="p-4">Interest</th>
                                        <th className="p-4">Travel Date</th>
                                        <th className="p-4">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100 text-sm">
                                    {inquiries.map(inq => (
                                        <tr key={inq.id} className="hover:bg-stone-50">
                                            <td className="p-4 whitespace-nowrap text-stone-500">
                                                {new Date(inq.submittedAt).toLocaleDateString()}
                                                <div className="text-xs">{new Date(inq.submittedAt).toLocaleTimeString()}</div>
                                            </td>
                                            <td className="p-4 font-medium text-stone-800">
                                                {inq.name}
                                                <div className="text-xs text-stone-500">{inq.travelers} Travelers</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-blue-600">{inq.email}</div>
                                                <div className="text-stone-500">{inq.phone}</div>
                                            </td>
                                            <td className="p-4 font-medium text-safari-leaf">
                                                {inq.tourName || 'General Inquiry'}
                                            </td>
                                            <td className="p-4">{inq.date}</td>
                                            <td className="p-4 max-w-xs truncate text-stone-500" title={inq.message}>
                                                {inq.message}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </motion.div>
        )}

        {/* --- TOURS TAB --- */}
        {activeTab === 'tours' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-serif font-bold text-stone-800">Manage Tours</h2>
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
                        shortDescription: "Short description.",
                        fullDescription: "Full description.",
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
                    <div key={tour.id} className="bg-white rounded-xl shadow overflow-hidden border border-stone-100 group relative">
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
                            <h3 className="font-bold text-lg mb-1 truncate">{tour.name}</h3>
                            <div className="flex justify-between text-sm text-stone-500">
                                <span>{tour.durationDays} Days</span>
                                <div className="text-right">
                                    <div className="text-safari-gold font-bold">${tour.priceUsd}</div>
                                    <div className="text-stone-400 text-xs">£{tour.priceGbp}</div>
                                </div>
                            </div>
                            <div className="mt-2 text-xs bg-stone-100 inline-block px-2 py-1 rounded text-stone-600">
                                {tour.group}
                            </div>
                            {tour.featured && (
                                <div className="mt-2 ml-2 text-xs bg-yellow-100 inline-block px-2 py-1 rounded text-yellow-700 font-bold">
                                    Featured
                                </div>
                            )}
                        </div>
                    </div>
                ))}
             </div>
          </motion.div>
        )}

        {/* --- CONTENT TAB --- */}
        {activeTab === 'content' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Page Content Editor</h2>
                
                <div className="bg-white rounded-xl shadow p-8 mb-6">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 text-safari-sunset">Home Page Hero</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Hero Title</label>
                            <input 
                                type="text" 
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                                value={pageContent.home.heroTitle}
                                onChange={(e) => updatePageContent({ ...pageContent, home: { ...pageContent.home, heroTitle: e.target.value } })}
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Hero Subtitle</label>
                            <input 
                                type="text" 
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold"
                                value={pageContent.home.heroSubtitle}
                                onChange={(e) => updatePageContent({ ...pageContent, home: { ...pageContent.home, heroSubtitle: e.target.value } })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Highlight Image URL</label>
                            <input 
                                type="text" 
                                className={`w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold ${imageError ? 'border-red-500 focus:ring-red-500' : ''}`}
                                value={pageContent.home.heroImage}
                                onChange={handleHeroImageChange}
                                placeholder="https://..."
                            />
                            {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
                            <p className="text-xs text-stone-500 mt-1">Paste a direct link to an image (Unsplash, Google Drive direct link, etc).</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-8">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2 text-safari-sunset">About Page</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Our Philosophy Text</label>
                            <textarea 
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold h-32"
                                value={pageContent.about.philosophy}
                                onChange={(e) => updatePageContent({ ...pageContent, about: { ...pageContent.about, philosophy: e.target.value } })}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end text-green-600 font-bold bg-green-50 p-2 rounded w-fit ml-auto">
                    <Save className="w-5 h-5 mr-2" /> Changes autosave
                </div>
            </motion.div>
        )}

        {/* --- SETTINGS TAB --- */}
        {activeTab === 'settings' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Settings</h2>

            <div className="bg-white rounded-xl shadow p-8 mb-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Company Information</h3>
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
                        <label className="block text-sm font-bold text-stone-700 mb-2">Slogan</label>
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
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-8 mb-6">
                 <h3 className="text-xl font-bold mb-4 border-b pb-2 text-red-600">Admin Security</h3>
                 <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-grow w-full">
                        <label className="block text-sm font-bold text-stone-700 mb-2">New Admin Password</label>
                        <input 
                            type="password"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-red-500"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        onClick={handleUpdatePassword}
                        className="bg-red-600 text-white font-bold py-3 px-6 rounded hover:bg-red-700 w-full md:w-auto"
                    >
                        Update Password
                    </button>
                 </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-2">Danger Zone</h3>
                <p className="text-sm text-red-600 mb-4">Resetting data will revert all text, tours, and company info to the default state. Inquiries will be kept.</p>
                <button 
                    onClick={() => {
                        if(window.confirm("Are you sure? All your changes will be lost.")) {
                            resetData();
                        }
                    }} 
                    className="text-red-600 border border-red-200 bg-white hover:bg-red-100 px-4 py-2 rounded text-sm font-bold flex items-center"
                >
                    <RefreshCw className="w-4 h-4 mr-2" /> Reset Website Data
                </button>
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
                    
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Tour Name</label>
                            <input 
                                className="w-full p-3 border rounded" 
                                value={editingTour.name} 
                                onChange={(e) => setEditingTour({...editingTour, name: e.target.value})}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">Price USD</label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 border rounded" 
                                    value={editingTour.priceUsd} 
                                    onChange={(e) => setEditingTour({...editingTour, priceUsd: Number(e.target.value)})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Price GBP</label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 border rounded" 
                                    value={editingTour.priceGbp} 
                                    onChange={(e) => setEditingTour({...editingTour, priceGbp: Number(e.target.value)})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Duration (Days)</label>
                                <input 
                                    type="number" 
                                    className="w-full p-3 border rounded" 
                                    value={editingTour.durationDays} 
                                    onChange={(e) => setEditingTour({...editingTour, durationDays: Number(e.target.value)})}
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-bold mb-1">Category</label>
                                <select 
                                    className="w-full p-3 border rounded"
                                    value={editingTour.category}
                                    onChange={(e) => setEditingTour({...editingTour, category: e.target.value as any})}
                                >
                                    <option>Safari</option>
                                    <option>Coastal</option>
                                    <option>Trek</option>
                                    <option>Day Trip</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Group (Section)</label>
                            <select 
                                className="w-full p-3 border rounded"
                                value={editingTour.group}
                                onChange={(e) => setEditingTour({...editingTour, group: e.target.value as any})}
                            >
                                <option value="Excursion">Excursion</option>
                                <option value="Road Safari">Road Safari</option>
                                <option value="Flight Safari">Flight Safari</option>
                                <option value="Trek">Trek</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">Image URL</label>
                            <input 
                                className="w-full p-3 border rounded" 
                                value={editingTour.image} 
                                onChange={(e) => setEditingTour({...editingTour, image: e.target.value})}
                            />
                        </div>

                         <div>
                            <label className="block text-sm font-bold mb-1">Short Description</label>
                            <input 
                                className="w-full p-3 border rounded" 
                                value={editingTour.shortDescription} 
                                onChange={(e) => setEditingTour({...editingTour, shortDescription: e.target.value})}
                            />
                        </div>

                         <div>
                            <label className="block text-sm font-bold mb-1">Full Description</label>
                            <textarea 
                                className="w-full p-3 border rounded h-24" 
                                value={editingTour.fullDescription} 
                                onChange={(e) => setEditingTour({...editingTour, fullDescription: e.target.value})}
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                checked={editingTour.featured} 
                                onChange={(e) => setEditingTour({...editingTour, featured: e.target.checked})}
                                id="featured-check"
                            />
                            <label htmlFor="featured-check" className="font-bold">Featured on Homepage?</label>
                        </div>
                    </div>

                    <div className="p-6 border-t sticky bottom-0 bg-white z-10 flex justify-end space-x-3">
                        <button 
                            onClick={() => setEditingTour(null)}
                            className="px-6 py-2 border rounded hover:bg-stone-50"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={() => {
                                updateTour(editingTour);
                                setEditingTour(null);
                            }}
                            className="px-6 py-2 bg-safari-leaf text-white font-bold rounded hover:bg-green-900"
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