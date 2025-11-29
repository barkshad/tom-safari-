// @ts-nocheck
import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, RefreshCw, Plus, Trash2, Edit2, X, MessageSquare, Layout, Settings, Home, List, Upload, Image as ImageIcon, Loader, CheckCircle, AlertCircle } from 'lucide-react';
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
  
  // State for image validation and uploading
  const [imageError, setImageError] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  // Toast Notification State
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

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
    showToast("Password updated successfully!", "success");
  };

  const handleHeroImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val && !val.startsWith('http') && !val.startsWith('data:image')) {
        setImageError('URL must start with http/https or be a base64 image');
    } else {
        setImageError('');
    }
    updatePageContent({ ...pageContent, home: { ...pageContent.home, heroImage: val } });
  };

  // --- IMAGE COMPRESSION LOGIC ---
  const processFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800; // Resize to max width 800px to save space
          
          let width = img.width;
          let height = img.height;

          // Only downscale if the image is larger than MAX_WIDTH
          if (width > MAX_WIDTH) {
            height = height * (MAX_WIDTH / width);
            width = MAX_WIDTH;
          }
          
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Compress to JPEG at 70% quality
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(dataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && editingTour) {
      setUploading(true);
      try {
        const base64 = await processFile(e.target.files[0]);
        setEditingTour({ ...editingTour, image: base64 });
        showToast("Main image uploaded & compressed!");
      } catch (err) {
        showToast("Failed to upload image", "error");
        console.error(err);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && editingTour) {
      setUploading(true);
      const newImages: string[] = [];
      try {
        for (let i = 0; i < e.target.files.length; i++) {
          const base64 = await processFile(e.target.files[i]);
          newImages.push(base64);
        }
        const currentGallery = editingTour.gallery || [];
        setEditingTour({ ...editingTour, gallery: [...currentGallery, ...newImages] });
        showToast(`${newImages.length} images added to gallery!`);
      } catch (err) {
        showToast("Failed to upload gallery images", "error");
      } finally {
        setUploading(false);
      }
    }
  };

  const removeGalleryImage = (indexToRemove: number) => {
    if (editingTour && editingTour.gallery) {
      const updatedGallery = editingTour.gallery.filter((_, idx) => idx !== indexToRemove);
      setEditingTour({ ...editingTour, gallery: updatedGallery });
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
    <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row font-sans">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-[70] px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2 text-white font-bold ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
          >
            {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

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
                                        <th className="p-4">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100 text-sm">
                                    {inquiries.map(inq => (
                                        <tr key={inq.id} className="hover:bg-stone-50">
                                            <td className="p-4 whitespace-nowrap text-stone-500">
                                                {new Date(inq.submittedAt).toLocaleDateString()}
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
                        gallery: [],
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
                    showToast("New tour drafted!");
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
                                            showToast("Tour deleted", "error");
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
                                </div>
                            </div>
                            <div className="mt-2 text-xs bg-stone-100 inline-block px-2 py-1 rounded text-stone-600">
                                {tour.group}
                            </div>
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
                            <label className="block text-sm font-bold text-stone-700 mb-2">Highlight Image URL</label>
                            <input 
                                type="text" 
                                className={`w-full p-3 border rounded focus:ring-2 focus:ring-safari-gold ${imageError ? 'border-red-500 focus:ring-red-500' : ''}`}
                                value={pageContent.home.heroImage}
                                onChange={handleHeroImageChange}
                                placeholder="https://..."
                            />
                            {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
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
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-2">Danger Zone</h3>
                <button 
                    onClick={() => {
                        if(window.confirm("Are you sure? All your changes will be lost.")) {
                            resetData();
                            showToast("All data reset to defaults", "error");
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

      {/* --- EDIT TOUR MODAL --- */}
      <AnimatePresence>
        {editingTour && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                >
                    {/* Header */}
                    <div className="p-6 border-b sticky top-0 bg-white z-20 flex justify-between items-center shadow-sm">
                        <h3 className="text-2xl font-bold font-serif text-stone-800">Edit Tour</h3>
                        <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                            <X className="w-6 h-6 text-stone-500" />
                        </button>
                    </div>
                    
                    <div className="p-6 space-y-8 flex-grow">
                        {/* 1. Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className="block text-sm font-bold mb-2 text-stone-700">Tour Name</label>
                                <input 
                                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-safari-leaf" 
                                    value={editingTour.name} 
                                    onChange={(e) => setEditingTour({...editingTour, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-stone-700">Category & Group</label>
                                <div className="flex gap-2">
                                    <select 
                                        className="w-1/2 p-3 border border-stone-300 rounded-lg"
                                        value={editingTour.category}
                                        onChange={(e) => setEditingTour({...editingTour, category: e.target.value as any})}
                                    >
                                        <option>Safari</option>
                                        <option>Coastal</option>
                                        <option>Trek</option>
                                        <option>Day Trip</option>
                                    </select>
                                    <select 
                                        className="w-1/2 p-3 border border-stone-300 rounded-lg"
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
                            </div>
                        </div>

                        {/* 2. Photo Management (Mobile Friendly) */}
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                             <h4 className="font-bold text-lg mb-4 text-stone-800 flex items-center">
                                <ImageIcon className="w-5 h-5 mr-2" /> Photo Management
                             </h4>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Main Image Upload */}
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-stone-700">Main Cover Image</label>
                                    <div className="relative h-48 bg-stone-200 rounded-lg overflow-hidden border-2 border-dashed border-stone-400 hover:border-safari-sunset transition-colors group">
                                        <img src={editingTour.image} alt="Cover" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                onClick={() => fileInputRef.current?.click()}
                                                className="bg-white text-stone-900 px-4 py-2 rounded-full font-bold flex items-center shadow-lg"
                                            >
                                                <Upload className="w-4 h-4 mr-2" /> Change Photo
                                            </button>
                                        </div>
                                        <input 
                                            type="file" 
                                            ref={fileInputRef} 
                                            onChange={handleMainImageUpload} 
                                            className="hidden" 
                                            accept="image/*"
                                        />
                                    </div>
                                    <p className="text-xs text-stone-500 mt-2">Tap to upload from device. Auto-compressed.</p>
                                </div>

                                {/* Gallery Upload */}
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-stone-700">Gallery Images (Multiple)</label>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {editingTour.gallery && editingTour.gallery.map((img, idx) => (
                                            <div key={idx} className="w-20 h-20 relative rounded overflow-hidden shadow-sm group">
                                                <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                                                <button 
                                                    onClick={() => removeGalleryImage(idx)}
                                                    className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                        <button 
                                            onClick={() => galleryInputRef.current?.click()}
                                            className="w-20 h-20 bg-stone-200 rounded flex flex-col items-center justify-center text-stone-500 hover:bg-stone-300 transition-colors border-2 border-dashed border-stone-400"
                                        >
                                            <Plus className="w-6 h-6" />
                                            <span className="text-[10px] font-bold uppercase mt-1">Add</span>
                                        </button>
                                    </div>
                                    <input 
                                        type="file" 
                                        ref={galleryInputRef} 
                                        onChange={handleGalleryUpload} 
                                        className="hidden" 
                                        accept="image/*" 
                                        multiple 
                                    />
                                    <p className="text-xs text-stone-500">Add 3-6 photos for best results.</p>
                                </div>
                             </div>
                             
                             {uploading && (
                                 <div className="mt-4 flex items-center text-safari-sunset font-bold animate-pulse">
                                     <Loader className="w-4 h-4 mr-2 animate-spin" /> Compressing & Uploading...
                                 </div>
                             )}
                        </div>

                        {/* 3. Pricing & Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                        </div>

                        {/* 4. Text Content */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">Short Description (Card)</label>
                                <input 
                                    className="w-full p-3 border rounded" 
                                    value={editingTour.shortDescription} 
                                    onChange={(e) => setEditingTour({...editingTour, shortDescription: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Full Itinerary / Description</label>
                                <textarea 
                                    className="w-full p-3 border rounded h-32" 
                                    value={editingTour.fullDescription} 
                                    onChange={(e) => setEditingTour({...editingTour, fullDescription: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t sticky bottom-0 bg-stone-50 z-20 flex justify-between items-center">
                         <div className="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                checked={editingTour.featured} 
                                onChange={(e) => setEditingTour({...editingTour, featured: e.target.checked})}
                                id="featured-check"
                                className="w-5 h-5 text-safari-leaf rounded focus:ring-safari-leaf"
                            />
                            <label htmlFor="featured-check" className="font-bold text-stone-700">Feature on Homepage</label>
                        </div>
                        <div className="flex space-x-3">
                            <button 
                                onClick={() => setEditingTour(null)}
                                className="px-6 py-3 border border-stone-300 rounded-lg hover:bg-white font-medium"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={() => {
                                    updateTour(editingTour);
                                    setEditingTour(null);
                                    showToast("Tour updated successfully!");
                                }}
                                className="px-8 py-3 bg-safari-leaf text-white font-bold rounded-lg hover:bg-green-900 shadow-lg flex items-center"
                            >
                                <Save className="w-5 h-5 mr-2" /> Save Changes
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;