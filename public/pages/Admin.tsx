
// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp, MapPin, Calendar, FileText, BarChart, SlidersHorizontal, Search, Upload, Menu, Zap, PlayCircle, Compass, Users, EyeOff, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, ItineraryDay, BlogPost, CompanyInfo, PageContent, TestimonialItem } from '../types';
import PageTransition from '../components/PageTransition';

// Helper to check for video
const isVideo = (url: string | undefined) => {
  if (!url) return false;
  return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('/video/upload/');
};

// Reverting to Cloudinary Widget for reliable CDN uploads
const CloudinaryImageUploader: React.FC<{
  onUploadSuccess: (url: string) => void;
  currentImageUrl?: string;
  label: string;
}> = ({ onUploadSuccess, currentImageUrl, label }) => {
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();

  useEffect(() => {
    if (window.cloudinary) {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: 'ds2mbrzcn',
        uploadPreset: 'qqk2urzm',
        folder: 'tomsafaris',
        sources: ['local', 'url', 'camera'],
        multiple: false,
        clientAllowedFormats: ['image', 'video'],
        maxImageFileSize: 10000000, // 10MB
        maxVideoFileSize: 50000000, // 50MB
        styles: {
            palette: {
                window: "#FFFFFF",
                windowBorder: "#90A0B3",
                tabIcon: "#00C49A",
                menuIcons: "#5A5463",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#00C49A",
                action: "#FF620C",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#E4EBF1"
            },
        }
      }, function(error: any, result: any) {
        if (!error && result && result.event === "success") {
          onUploadSuccess(result.info.secure_url);
        }
      });
    }
  }, [onUploadSuccess]);

  const openWidget = () => {
    if (widgetRef.current) {
        widgetRef.current.open();
    } else {
        alert("Cloudinary widget not loaded. Please refresh the page.");
    }
  };

  return (
    <div className="mb-4">
      <label className="text-xs font-bold uppercase text-stone-400 block mb-2">{label}</label>
      <div className="flex items-center gap-4">
        {currentImageUrl ? (
          isVideo(currentImageUrl) ? (
            <video src={currentImageUrl} className="w-24 h-16 object-cover rounded-lg border border-stone-200" autoPlay muted loop />
          ) : (
            <img src={currentImageUrl} className="w-24 h-16 object-cover rounded-lg border border-stone-200" alt="Preview"/>
          )
        ) : (
            <div className="w-24 h-16 bg-stone-100 rounded-lg border border-stone-200 flex items-center justify-center text-stone-400">
                <ImageIcon size={20} />
            </div>
        )}
        <div className="flex-grow">
          <button onClick={openWidget} className="cursor-pointer bg-safari-emerald/10 text-safari-emerald border border-safari-emerald/20 px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 hover:bg-safari-emerald hover:text-white transition-all">
            <Upload size={14} /> Upload Media
          </button>
        </div>
      </div>
    </div>
  );
};

const SaveStatus = ({ saving }: { saving: boolean }) => (
  <div className="flex items-center gap-2 text-sm font-bold transition-colors">
    {saving ? (
      <>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-4 h-4 border-2 border-stone-400 border-t-safari-gold rounded-full"
        />
        <span className="text-stone-500">Saving...</span>
      </>
    ) : (
      <>
        <CheckCircle size={16} className="text-green-500" />
        <span className="text-stone-500">All changes saved</span>
      </>
    )}
  </div>
);

// --- STABLE INPUT COMPONENTS (KEYBOARD FIX) ---
const StableInput = ({ value, onChange, placeholder, type = "text", label, className }: any) => {
  const [localValue, setLocalValue] = useState(value || "");
  
  useEffect(() => { 
      setLocalValue(value || ""); 
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleBlur = () => {
    const finalValue = type === 'number' ? (localValue === '' ? '' : parseFloat(localValue)) : localValue;
    if (value !== finalValue) {
        onChange(finalValue);
    }
  };

  return (
    <div className={className || "w-full"}>
      {label && <label className="text-xs font-bold uppercase text-stone-500 block mb-2">{label}</label>}
      <input 
        type={type} 
        value={localValue} 
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder} 
        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-admin-blue outline-none transition-all text-stone-800" 
      />
    </div>
  );
};

const StableTextArea = ({ value, onChange, placeholder, rows = 4, label, className }: any) => {
  const [localValue, setLocalValue] = useState(value || "");
  
  useEffect(() => { 
      setLocalValue(value || ""); 
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
  };

  const handleBlur = () => {
      if (value !== localValue) {
          onChange(localValue);
      }
  };

  return (
    <div className={className || "w-full"}>
      {label && <label className="text-xs font-bold uppercase text-stone-500 block mb-2">{label}</label>}
      <textarea 
        value={localValue} 
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder} 
        rows={rows} 
        className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-admin-blue outline-none transition-all text-stone-800" 
      />
    </div>
  );
};

// --- ACTION BUTTONS ---
const ActionButtons = ({ onSave, onDiscard, isSaving, hasChanges }: any) => {
  if (!hasChanges) return null;
  return (
      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex justify-end gap-3 p-4 mt-6 border-t bg-white sticky bottom-0 z-20 shadow-inner rounded-b-xl">
            <button onClick={onDiscard} disabled={isSaving} className="px-4 py-2 border rounded-lg font-semibold text-stone-600 hover:bg-stone-100 disabled:opacity-50">Discard Changes</button>
            <button onClick={onSave} disabled={isSaving} className="px-6 py-2 bg-admin-blue text-white rounded-lg font-semibold shadow-md hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 min-w-[140px]">
                {isSaving ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full" /> Saving...</> : <><Save size={16}/> Save Changes</>}
            </button>
        </motion.div>
      </AnimatePresence>
  );
};

const Accordion = ({ title, children, nested = false }: any) => {
    const [isOpen, setIsOpen] = useState(!nested);
    return (
        <div className={nested ? "border rounded-lg mb-4 bg-white" : "border-b last:border-0"}>
            <button onClick={() => setIsOpen(!isOpen)} className={`w-full flex justify-between items-center text-left ${nested ? 'p-3 bg-stone-50 hover:bg-stone-100 rounded-t-lg' : 'p-5 font-bold text-lg hover:bg-stone-50'} transition-colors`}>
                <span className={nested ? "font-semibold text-stone-700" : "text-stone-800"}>{title}</span>
                <motion.div animate={{ rotate: isOpen ? 0 : -90 }} className="text-stone-400"><ChevronDown /></motion.div>
            </button>
            <AnimatePresence>
            {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className={nested ? "p-4 space-y-4" : "p-6 space-y-6"}>{children}</div></motion.div>}
            </AnimatePresence>
        </div>
    );
};

// --- FEATURE EDITOR ---
const FeatureEditor = ({ features, onUpdate }: { features: any[], onUpdate: (f: any[]) => void }) => {
    const handleFeatureChange = (index: number, field: string, value: any) => {
        const newFeatures = [...features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        onUpdate(newFeatures);
    };
    const addFeature = () => {
        onUpdate([...features, { id: `feat-${Date.now()}`, title: 'New Feature', text: 'Description' }]);
    };
    const removeFeature = (index: number) => {
        onUpdate(features.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4">
            {features.map((feat, index) => (
                <div key={feat.id || index} className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 border rounded-lg bg-stone-50 relative group items-start">
                    <div className="md:col-span-4">
                        <StableInput value={feat.title} onChange={(v: string) => handleFeatureChange(index, 'title', v)} placeholder="Title" />
                    </div>
                    <div className="md:col-span-7">
                        <StableInput value={feat.text} onChange={(v: string) => handleFeatureChange(index, 'text', v)} placeholder="Description" />
                    </div>
                    <div className="md:col-span-1 flex justify-end mt-2">
                        <button onClick={() => removeFeature(index)} className="text-red-400 hover:text-red-600 p-2"><Trash2 size={18}/></button>
                    </div>
                </div>
            ))}
            <button onClick={addFeature} className="mt-2 text-sm font-bold text-admin-blue flex items-center gap-1 hover:underline"><Plus size={14}/> Add Feature</button>
        </div>
    )
};

// --- CMS VIEWS ---

const DashboardView = ({ setActiveTab }: any) => {
    const { tours, blogPosts, inquiries, currencyRates } = useData();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-stone-800">Dashboard</h1>
            <p className="text-stone-500">Overview of your safari platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100"><h3 className="text-4xl font-bold text-admin-blue">{tours.length}</h3><p className="text-stone-500 font-medium">Total Tours</p></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100"><h3 className="text-4xl font-bold text-admin-blue">{blogPosts.length}</h3><p className="text-stone-500 font-medium">Blog Posts</p></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100"><h3 className="text-4xl font-bold text-admin-blue">{inquiries.filter(i => i.status === 'New').length}</h3><p className="text-stone-500 font-medium">New Inquiries</p></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100"><h3 className="text-4xl font-bold text-green-500">{Object.keys(currencyRates).length > 0 ? 'Active' : 'Loading'}</h3><p className="text-stone-500 font-medium">Currency Feed</p></div>
          </div>
        </motion.div>
    );
};

// ... (PageEditorView, TestimonialsManagerView, GlobalSettingsView, SEOEditorView, SystemSettingsView code remains same as before) ...

const ToursManagerView = ({ showToast }: { showToast: (msg: string, type?: 'success' | 'error') => void }) => {
    const { tours, addTour, updateTour, deleteTour } = useData();
    const [editingTour, setEditingTour] = useState<Tour | null>(null);

    // Using StableInput completely bypasses the re-rendering focus issue
    // because the input state is maintained locally inside StableInput
    const handleTourChange = (field: string, value: any) => {
        if (!editingTour) return;
        setEditingTour(prev => ({...prev, [field]: value}));
    };

    const handleItineraryChange = (index: number, field: keyof ItineraryDay, value: string | number) => {
        if (!editingTour) return;
        const newItinerary = [...editingTour.itinerary];
        newItinerary[index] = { ...newItinerary[index], [field]: value };
        setEditingTour(prev => ({ ...prev, itinerary: newItinerary }));
    };
    
    const addItineraryDay = () => {
        if (!editingTour) return;
        const newDay: ItineraryDay = { day: editingTour.itinerary.length + 1, title: '', description: '' };
        setEditingTour(prev => ({ ...prev, itinerary: [...prev.itinerary, newDay] }));
    };

    const removeItineraryDay = (index: number) => {
        if (!editingTour) return;
        const newItinerary = editingTour.itinerary.filter((_, i) => i !== index).map((day, i) => ({ ...day, day: i + 1 }));
        setEditingTour(prev => ({ ...prev, itinerary: newItinerary }));
    };

    const handleGalleryUpload = (url: string) => {
        if (!editingTour) return;
        const newGallery = [...(editingTour.gallery || []), url];
        setEditingTour(prev => ({ ...prev, gallery: newGallery }));
    };

    const removeGalleryImage = (index: number) => {
        if (!editingTour) return;
        const newGallery = editingTour.gallery?.filter((_, i) => i !== index);
        setEditingTour(prev => ({ ...prev, gallery: newGallery }));
    };

    return (
      <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-stone-800">Manage Tours</h2>
              <button onClick={() => setEditingTour({ id: `tour-${Date.now()}`, name: 'New Tour', durationDays: 1, priceUsd: 0, priceGbp: 0, image: '', shortDescription: '', fullDescription: '', highlights: [''], itinerary: [{day: 1, title: '', description: ''}], featured: false, hidden: false, category: 'Safari', group: 'Road Safari', gallery: [], keywords: '', inclusions: [], exclusions: [] })} className="bg-admin-blue text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-sm hover:bg-opacity-90"><Plus size={18}/> Add Tour</button>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-x-auto border border-stone-100">
              <table className="w-full min-w-[600px]">
                  <thead className="bg-stone-50 text-xs uppercase font-bold text-stone-500"><tr><th className="p-4 text-left">Tour Name</th><th className="p-4 text-left">Price (USD)</th><th className="p-4 text-left">Category</th><th className="p-4 text-right">Actions</th></tr></thead>
                  <tbody>
                      {tours.map(tour => (
                          <tr key={tour.id} className="border-t hover:bg-stone-50">
                              <td className="p-4 font-bold text-stone-800 flex items-center gap-2">
                                {tour.hidden && <span className="bg-stone-200 text-stone-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border border-stone-300">Draft</span>}
                                {tour.name}
                              </td>
                              <td className="p-4 font-medium text-green-600">${tour.priceUsd}</td>
                              <td className="p-4"><span className="bg-stone-100 px-2 py-1 rounded text-xs text-stone-600 font-bold">{tour.group}</span></td>
                              <td className="p-4 text-right flex gap-2 justify-end">
                                  <button onClick={() => setEditingTour(tour)} className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"><Edit2 size={16}/></button>
                                  <button onClick={() => { if(window.confirm('Delete this tour?')) { deleteTour(tour.id); showToast('Tour deleted'); } }} className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-100"><Trash2 size={16}/></button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          <AnimatePresence>
            {editingTour && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-[100] backdrop-blur-sm">
                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-7xl max-h-[90vh] flex flex-col shadow-2xl">
                        <div className="p-4 sm:p-6 border-b flex justify-between items-center bg-stone-50 rounded-t-2xl sticky top-0">
                            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-admin-dark"><Edit2 size={18}/> {editingTour.id.startsWith('tour-') ? 'Create New Tour' : 'Edit Tour'}</h2>
                            <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-stone-200 rounded-full transition-colors"><X size={20}/></button>
                        </div>
                        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-5 gap-8 overflow-y-auto bg-stone-50/50">
                            <div className="lg:col-span-3 space-y-6">
                                <div className="p-6 rounded-2xl bg-white border shadow-sm">
                                    <h3 className="font-bold text-lg mb-4 text-admin-blue">Core Details</h3>
                                    <div className="space-y-4">
                                        <StableInput label="Tour Name" value={editingTour.name} onChange={(v: string) => handleTourChange('name', v)} />
                                        <StableTextArea label="Short Description (Card)" value={editingTour.shortDescription} onChange={(v: string) => handleTourChange('shortDescription', v)} rows={2} />
                                        <StableTextArea label="Full Description (Page)" value={editingTour.fullDescription} onChange={(v: string) => handleTourChange('fullDescription', v)} rows={6} />
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border shadow-sm">
                                    <h3 className="font-bold text-lg mb-4 text-admin-blue">Itinerary Builder</h3>
                                    <div className="space-y-4">
                                        {editingTour.itinerary.map((day, index) => (
                                            <div key={index} className="p-4 border rounded-lg bg-stone-50 relative group">
                                                <button onClick={() => removeItineraryDay(index)} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
                                                <h4 className="font-bold mb-2 text-sm uppercase text-stone-500">Day {day.day}</h4>
                                                <StableInput placeholder="Day Title (e.g., Arrival)" value={day.title} onChange={(v: string) => handleItineraryChange(index, 'title', v)} />
                                                <div className="mt-2">
                                                    <StableTextArea placeholder="Description" value={day.description} onChange={(v: string) => handleItineraryChange(index, 'description', v)} rows={3} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={addItineraryDay} className="mt-4 bg-stone-100 text-admin-blue border border-admin-blue/20 px-4 py-2 text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-admin-blue hover:text-white transition-all"><Plus size={16}/> Add Day</button>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-6">
                                <div className="p-6 rounded-2xl bg-white border shadow-sm">
                                     <h3 className="font-bold text-lg mb-4 text-admin-blue">Settings & Pricing</h3>
                                     <div className="grid grid-cols-2 gap-4">
                                         <StableInput type="number" label="Price (USD)" value={editingTour.priceUsd} onChange={(v: number) => handleTourChange('priceUsd', v)} />
                                         <StableInput type="number" label="Duration (Days)" value={editingTour.durationDays} onChange={(v: number) => handleTourChange('durationDays', v)} />
                                         <div className="col-span-2">
                                            <label className="text-xs font-bold uppercase text-stone-500 block mb-2">Category</label>
                                            <select value={editingTour.category} onChange={e => handleTourChange('category', e.target.value)} className="w-full p-3 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-admin-blue"><option>Safari</option><option>Coastal</option><option>Trek</option><option>Day Trip</option><option>Honeymoon</option><option>International</option><option>Weekend</option></select>
                                         </div>
                                         <div className="col-span-2">
                                            <label className="text-xs font-bold uppercase text-stone-500 block mb-2">Group Type</label>
                                            <select value={editingTour.group} onChange={e => handleTourChange('group', e.target.value)} className="w-full p-3 border rounded-lg bg-white outline-none focus:ring-2 focus:ring-admin-blue"><option>Excursion</option><option>Road Safari</option><option>Flight Safari</option><option>Trek</option><option>Custom</option><option>International</option><option>Getaway</option></select>
                                         </div>
                                         
                                         {/* Featured Toggle */}
                                         <div className="col-span-2 flex items-center justify-between p-3 border rounded-lg bg-yellow-50 border-yellow-100">
                                            <label className="font-bold text-sm text-yellow-800">Featured Tour?</label>
                                            <button onClick={() => handleTourChange('featured', !editingTour.featured)} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${editingTour.featured ? 'bg-green-500' : 'bg-stone-300'}`}>
                                              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${editingTour.featured ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                         </div>

                                         {/* Hidden/Draft Toggle */}
                                         <div className="col-span-2 flex items-center justify-between p-3 border rounded-lg bg-stone-100 border-stone-200">
                                            <label className="font-bold text-sm text-stone-700 flex items-center gap-2"><EyeOff size={16}/> Hide from Website (Draft)</label>
                                            <button onClick={() => handleTourChange('hidden', !editingTour.hidden)} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${editingTour.hidden ? 'bg-admin-blue' : 'bg-stone-300'}`}>
                                              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${editingTour.hidden ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                         </div>
                                     </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border shadow-sm">
                                     <h3 className="font-bold text-lg mb-4 text-admin-blue">Media</h3>
                                     <CloudinaryImageUploader label="Cover Media" currentImageUrl={editingTour.image} onUploadSuccess={(url: string) => handleTourChange('image', url)} />
                                     <div className="mt-4">
                                         <h4 className="font-bold text-xs uppercase text-stone-500 mb-2">Gallery</h4>
                                         <div className="grid grid-cols-3 gap-2 mb-2">
                                             {(editingTour.gallery || []).map((img, index) => (
                                                 <div key={index} className="relative group rounded-lg overflow-hidden border">
                                                     {isVideo(img) ? (
                                                       <video src={img} className="w-full h-20 object-cover" />
                                                     ) : (
                                                       <img src={img} className="w-full h-20 object-cover" />
                                                     )}
                                                     <button onClick={() => removeGalleryImage(index)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={12}/></button>
                                                 </div>
                                             ))}
                                         </div>
                                         <CloudinaryImageUploader label="Add to Gallery" onUploadSuccess={handleGalleryUpload} />
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 border-t flex justify-end gap-4 bg-white rounded-b-2xl sticky bottom-0 z-10">
                            <button onClick={() => setEditingTour(null)} className="px-4 py-2 border rounded-lg hover:bg-stone-100 font-bold text-stone-600">Cancel</button>
                            <button onClick={() => { editingTour.id.startsWith('tour-') ? addTour(editingTour) : updateTour(editingTour); setEditingTour(null); showToast("Tour saved successfully!"); }} className="px-6 py-2 bg-admin-blue text-white rounded-lg font-bold shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2"><Save size={18}/> Save Tour</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    );
};

// ... (InquiriesView, Admin, export default Admin) ...
const InquiriesView = () => {
    const { inquiries, updateInquiry } = useData();
    const [filter, setFilter] = useState('All');

    const filteredInquiries = inquiries.filter(i => filter === 'All' || i.status === filter);

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                <h2 className="font-bold text-lg">Inquiries Inbox</h2>
                <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 border rounded-lg text-sm">
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="p-4">Date</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Tour</th>
                            <th className="p-4">Contact</th>
                            <th className="p-4">Message</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y text-sm">
                        {filteredInquiries.map(inq => (
                            <tr key={inq.id} className="hover:bg-gray-50">
                                <td className="p-4 whitespace-nowrap text-gray-500">{new Date(inq.submittedAt).toLocaleDateString()}</td>
                                <td className="p-4 font-bold">{inq.name}</td>
                                <td className="p-4 text-admin-blue font-medium">{inq.tourName || 'General'}</td>
                                <td className="p-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">{inq.email}</span>
                                        <span className="text-xs">{inq.phone}</span>
                                    </div>
                                </td>
                                <td className="p-4 max-w-xs truncate text-gray-600" title={inq.message}>{inq.message}</td>
                                <td className="p-4">
                                    <select 
                                        value={inq.status} 
                                        onChange={(e) => updateInquiry(inq.id, e.target.value)}
                                        className={`p-1 rounded text-xs font-bold border-none outline-none cursor-pointer ${inq.status === 'New' ? 'bg-blue-100 text-blue-700' : inq.status === 'Closed' ? 'bg-gray-200 text-gray-600' : 'bg-yellow-100 text-yellow-700'}`}
                                    >
                                        <option value="New">New</option>
                                        <option value="In Progress">Working</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                        {filteredInquiries.length === 0 && <tr><td colSpan={6} className="p-8 text-center text-gray-500">No inquiries found.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Admin: React.FC = () => {
  const { isAuthenticated, login, logout } = useData();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@tomsafaris.co.ke');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password || '12345');
    if (!success) setError('Invalid credentials. Please try again.'); else setError('');
  };

  if (!isAuthenticated) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-admin-dark font-admin p-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm p-8 bg-admin-light rounded-xl shadow-2xl text-center">
                <Compass className="w-12 h-12 text-admin-blue mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-1 text-admin-dark">Admin Panel</h1>
                <p className="text-gray-500 mb-6">Tom Safaris CMS</p>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg text-center" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg text-center" />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="w-full py-3 bg-admin-blue text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all">Login</button>
                </form>
            </motion.div>
        </div>
    );
  }
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'pages', label: 'Pages CMS', icon: Layout },
    { id: 'tours', label: 'Tours', icon: List },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'seo', label: 'SEO', icon: SlidersHorizontal },
    { id: 'settings', label: 'Global Settings', icon: Globe },
    { id: 'system', label: 'System', icon: Settings }
  ];

  const activeLabel = menuItems.find(i => i.id === activeTab)?.label;

  return (
    <PageTransition>
      <div className="min-h-screen bg-admin-bg font-admin flex">
        {/* Sidebar */}
        <aside className={`fixed md:relative top-0 left-0 h-full z-50 bg-admin-blue text-white flex flex-col w-64 p-4 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="font-bold text-xl text-center py-4 mb-6 border-b border-white/20">Tom Safaris</div>
          <nav className="flex-grow space-y-2">
            {menuItems.map(item => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all text-sm font-semibold ${activeTab === item.id ? 'bg-admin-gold text-admin-dark' : 'hover:bg-white/10'}`}>
                <item.icon size={18} /><span>{item.label}</span>
              </button>
            ))}
          </nav>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/10 text-sm font-semibold mt-4"><LogOut size={18}/><span>Logout</span></button>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white p-4 border-b flex justify-between items-center sticky top-0 z-40 shadow-sm">
            <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}><Menu/></button>
            <h1 className="text-xl font-bold text-admin-dark capitalize">{activeLabel}</h1>
            <div/>
          </header>
          <main className="flex-1 p-6 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} />}
                {activeTab === 'pages' && <PageEditorView showToast={showToast} />}
                {activeTab === 'tours' && <ToursManagerView showToast={showToast} />}
                {activeTab === 'blog' && <BlogManagerView showToast={showToast} />}
                {activeTab === 'testimonials' && <TestimonialsManagerView showToast={showToast} />}
                {activeTab === 'inquiries' && <InquiriesView />}
                {activeTab === 'seo' && <SEOEditorView showToast={showToast} />}
                {activeTab === 'settings' && <GlobalSettingsView showToast={showToast} />}
                {activeTab === 'system' && <SystemSettingsView showToast={showToast} />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className={`fixed top-5 right-5 p-4 rounded-lg text-white font-bold flex items-center gap-3 ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} shadow-2xl z-[200]`}>
              {toast.type === 'success' ? <CheckCircle /> : <AlertCircle />} {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Admin;
