// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp, MapPin, Calendar, FileText, BarChart, SlidersHorizontal, Search, Upload, Menu, Zap, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, ItineraryDay, BlogPost, CompanyInfo, PageContent } from '../types';
import PageTransition from '../components/PageTransition';

// --- UTILITIES ---

const isVideo = (url: string | undefined) => {
  if (!url) return false;
  return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('/video/upload/');
};

// --- STABLE INPUT COMPONENTS ---
// These wrappers prevent focus loss by maintaining local state while typing
// and preventing aggressive parent re-renders from destroying the DOM node.

const StableInput = ({ 
  value, 
  onChange, 
  placeholder, 
  type = "text", 
  className = "",
  label 
}: { value: string | number; onChange: (val: string | number) => void; placeholder?: string; type?: string; className?: string; label?: string }) => {
  const [localValue, setLocalValue] = useState(value);

  // Sync from parent only when parent value significantly changes (avoids loop)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = type === 'number' ? parseFloat(e.target.value) : e.target.value;
    setLocalValue(newVal);
    onChange(newVal);
  };

  return (
    <div className="w-full">
      {label && <label className="text-xs font-bold uppercase text-stone-400 block mb-2">{label}</label>}
      <input
        type={type}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-safari-emerald outline-none transition-shadow ${className}`}
      />
    </div>
  );
};

const StableTextArea = ({ 
  value, 
  onChange, 
  placeholder, 
  rows = 4, 
  className = "",
  label
}: { value: string; onChange: (val: string) => void; placeholder?: string; rows?: number; className?: string; label?: string }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      {label && <label className="text-xs font-bold uppercase text-stone-400 block mb-2">{label}</label>}
      <textarea
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-safari-emerald outline-none transition-shadow ${className}`}
      />
    </div>
  );
};

// --- MEDIA UPLOADER ---

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
        maxImageFileSize: 10000000, 
        maxVideoFileSize: 50000000,
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

const ActionButtons: React.FC<{ onSave: () => void; onDiscard: () => void; isSaving: boolean; hasChanges: boolean; }> = ({ onSave, onDiscard, isSaving, hasChanges }) => {
  if (!hasChanges) return null;
  return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="flex justify-end gap-4 p-4 mt-6 border-t bg-stone-50/70"
        >
            <button onClick={onDiscard} disabled={isSaving} className="px-4 py-2 border rounded-lg font-bold text-stone-600 hover:bg-stone-200 disabled:opacity-50">Discard</button>
            <button onClick={onSave} disabled={isSaving} className="px-6 py-2 bg-safari-leaf text-white rounded-lg font-bold shadow-lg hover:bg-green-800 disabled:opacity-50 flex items-center justify-center gap-2 min-w-[150px]">
                {isSaving ? (
                    <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full" />
                        Saving...
                    </>
                ) : <><Save size={16}/> Save Changes</>}
            </button>
        </motion.div>
      </AnimatePresence>
  );
};

// --- VIEWS ---

const DashboardView = () => {
    const { tours, blogPosts, inquiries, currencyRates } = useData();
    return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{tours.length}</h3><p className="text-stone-500">Total Tours</p></div>
            <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{blogPosts.length}</h3><p className="text-stone-500">Blog Posts</p></div>
            <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{inquiries.filter(i => i.status === 'New').length}</h3><p className="text-stone-500">New Inquiries</p></div>
            <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{Object.keys(currencyRates).length}</h3><p className="text-stone-500">Currencies Loaded</p></div>
          </div>
          <div className="glass-card p-8 rounded-2xl border-2 border-safari-emerald/30">
            <h3 className="text-2xl font-bold text-safari-emerald mb-2 flex items-center gap-2"><CheckCircle size={24}/> CDN Connected & Live</h3>
            <p className="text-stone-600 mb-6 max-w-3xl">
              Your media uploads are powered by Cloudinary CDN. 
            </p>
          </div>
        </div>
    );
};

const GlobalSettingsView = ({ showToast }: { showToast: Function }) => {
    const { companyInfo, updateCompanyInfo } = useData();
    const [localInfo, setLocalInfo] = useState<CompanyInfo>(companyInfo);
    const [isSaving, setIsSaving] = useState(false);
    
    useEffect(() => { setLocalInfo(companyInfo); }, [companyInfo]);

    const hasChanges = JSON.stringify(localInfo) !== JSON.stringify(companyInfo);

    const updateField = (field: string, val: any) => {
        setLocalInfo(prev => ({ ...prev, [field]: val }));
    }
    
    const updateSocial = (field: string, val: any) => {
        setLocalInfo(prev => ({ ...prev, social: { ...prev.social, [field]: val } }));
    }

    const handleSave = async () => {
        setIsSaving(true);
        await updateCompanyInfo(localInfo);
        setIsSaving(false);
        showToast("Global settings saved!");
    };

    return (
        <div className="space-y-6">
            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Company Identity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StableInput label="Website Name" value={localInfo.name} onChange={v => updateField('name', v)} />
                    <StableInput label="Owner Name" value={localInfo.ownerName} onChange={v => updateField('ownerName', v)} />
                    <div className="md:col-span-2">
                        <StableInput label="Slogan / Tagline" value={localInfo.slogan} onChange={v => updateField('slogan', v)} />
                    </div>
                </div>
                <ActionButtons hasChanges={hasChanges} isSaving={isSaving} onSave={handleSave} onDiscard={() => setLocalInfo(companyInfo)} />
            </div>

            <div className="glass-card rounded-3xl overflow-hidden p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Contact & Social</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StableInput label="Phone" value={localInfo.phone} onChange={v => updateField('phone', v)} />
                    <StableInput label="Email" value={localInfo.email} onChange={v => updateField('email', v)} />
                    <StableInput label="Location" value={localInfo.location} onChange={v => updateField('location', v)} />
                    <StableInput label="WhatsApp" value={localInfo.social.whatsapp} onChange={v => updateSocial('whatsapp', v)} />
                    <StableInput label="Instagram" value={localInfo.social.instagram} onChange={v => updateSocial('instagram', v)} />
                    <StableInput label="Facebook" value={localInfo.social.facebook} onChange={v => updateSocial('facebook', v)} />
                </div>
                <ActionButtons hasChanges={hasChanges} isSaving={isSaving} onSave={handleSave} onDiscard={() => setLocalInfo(companyInfo)} />
            </div>
        </div>
    );
};

const PageEditorView = ({ showToast }: { showToast: Function }) => {
    const { pageContent, updatePageContent } = useData();
    const [localContent, setLocalContent] = useState<PageContent>(pageContent);
    const [isSaving, setIsSaving] = useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>('home');

    useEffect(() => { setLocalContent(pageContent); }, [pageContent]);
    
    const hasChanges = JSON.stringify(localContent) !== JSON.stringify(pageContent);
    
    const updateNested = (path: string, value: any) => {
        setLocalContent(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            const keys = path.split('.');
            let current = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
            return newState;
        });
    };

    const handleSave = async () => {
      setIsSaving(true);
      await updatePageContent(localContent);
      setIsSaving(false);
      showToast("Page content saved!");
    };

    return (
        <div className="space-y-4">
            <div className="glass-card rounded-2xl overflow-hidden">
                <button onClick={() => setExpandedSection(expandedSection === 'home' ? null : 'home')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg text-left">
                    <span>Home Page Content</span> {expandedSection === 'home' ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedSection === 'home' && (
                    <div className="p-4 sm:p-6 space-y-6">
                        <StableInput label="Hero Title" value={localContent.home.hero.title} onChange={v => updateNested('home.hero.title', v)} />
                        <StableTextArea label="Hero Subtitle" value={localContent.home.hero.subtitle} onChange={v => updateNested('home.hero.subtitle', v)} />
                        <CloudinaryImageUploader label="Hero Media" currentImageUrl={localContent.home.hero.image} onUploadSuccess={url => updateNested('home.hero.image', url)} />
                        <div className="border-t pt-4">
                            <StableInput label="Welcome Title" value={localContent.home.welcome.title} onChange={v => updateNested('home.welcome.title', v)} />
                            <StableTextArea label="Welcome Content" value={localContent.home.welcome.content} onChange={v => updateNested('home.welcome.content', v)} />
                        </div>
                    </div>
                )}
                <ActionButtons hasChanges={hasChanges} isSaving={isSaving} onSave={handleSave} onDiscard={() => setLocalContent(pageContent)} />
            </div>
            
            <div className="glass-card rounded-2xl overflow-hidden">
                <button onClick={() => setExpandedSection(expandedSection === 'about' ? null : 'about')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg text-left">
                    <span>About Page Content</span> {expandedSection === 'about' ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedSection === 'about' && (
                    <div className="p-4 sm:p-6 space-y-6">
                        <StableTextArea label="Philosophy" value={localContent.about.philosophy.content} onChange={v => updateNested('about.philosophy.content', v)} />
                        <StableInput label="Founder Title" value={localContent.about.founder.title} onChange={v => updateNested('about.founder.title', v)} />
                        <StableTextArea label="Founder Bio" rows={6} value={localContent.about.founder.content} onChange={v => updateNested('about.founder.content', v)} />
                        <CloudinaryImageUploader label="Founder Image" currentImageUrl={localContent.about.founder.image} onUploadSuccess={url => updateNested('about.founder.image', url)} />
                    </div>
                )}
                <ActionButtons hasChanges={hasChanges} isSaving={isSaving} onSave={handleSave} onDiscard={() => setLocalContent(pageContent)} />
            </div>
        </div>
    );
};

const ToursManagerView = ({ showToast }: { showToast: Function }) => {
    const { tours, addTour, updateTour, deleteTour } = useData();
    const [editingTour, setEditingTour] = useState<Tour | null>(null);

    const handleTourChange = (field: string, value: any) => {
        setEditingTour(prev => prev ? ({...prev, [field]: value}) : null);
    };

    const handleItineraryChange = (index: number, field: keyof ItineraryDay, value: string | number) => {
        if (!editingTour) return;
        const newItinerary = [...editingTour.itinerary];
        newItinerary[index] = { ...newItinerary[index], [field]: value };
        setEditingTour(prev => prev ? ({ ...prev, itinerary: newItinerary }) : null);
    };
    
    const addItineraryDay = () => {
        setEditingTour(prev => prev ? ({ ...prev, itinerary: [...prev.itinerary, { day: prev.itinerary.length + 1, title: '', description: '' }] }) : null);
    };

    const removeItineraryDay = (index: number) => {
        if (!editingTour) return;
        const newItinerary = editingTour.itinerary.filter((_, i) => i !== index).map((day, i) => ({ ...day, day: i + 1 }));
        setEditingTour(prev => prev ? ({ ...prev, itinerary: newItinerary }) : null);
    };

    return (
      <div>
          <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Tours</h2>
              <button onClick={() => setEditingTour({ id: `tour-${Date.now()}`, name: 'New Tour', durationDays: 1, priceUsd: 0, priceGbp: 0, image: '', shortDescription: '', fullDescription: '', highlights: [''], itinerary: [{day: 1, title: '', description: ''}], featured: false, category: 'Safari', group: 'Road Safari', gallery: [], keywords: '' })} className="bg-safari-leaf text-white px-4 py-2 rounded-lg flex items-center gap-2"><Plus/> Add Tour</button>
          </div>
          <div className="glass-card rounded-2xl overflow-x-auto">
              <table className="w-full min-w-[600px]">
                  <thead className="bg-stone-100/50 text-xs uppercase font-bold text-stone-500"><tr><th className="p-4 text-left">Tour Name</th><th className="p-4 text-left">Price (USD)</th><th className="p-4 text-left">Category</th><th className="p-4 text-right">Actions</th></tr></thead>
                  <tbody>
                      {tours.map(tour => (
                          <tr key={tour.id} className="border-t">
                              <td className="p-4 font-bold">{tour.name}</td>
                              <td className="p-4">${tour.priceUsd}</td>
                              <td className="p-4">{tour.group}</td>
                              <td className="p-4 text-right flex gap-2 justify-end">
                                  <button onClick={() => setEditingTour(tour)} className="p-2 bg-blue-100 text-blue-600 rounded"><Edit2 size={14}/></button>
                                  <button onClick={() => { if(window.confirm('Delete this tour?')) { deleteTour(tour.id); showToast('Tour deleted'); } }} className="p-2 bg-red-100 text-red-600 rounded"><Trash2 size={14}/></button>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          <AnimatePresence>
            {editingTour && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-[100] backdrop-blur-sm">
                    <motion.div 
                        key="tour-editor-modal"
                        initial={{ scale: 0.9, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        exit={{ scale: 0.9, opacity: 0 }} 
                        className="bg-white rounded-2xl w-full max-w-7xl max-h-[90vh] flex flex-col shadow-2xl"
                    >
                        <div className="p-4 border-b flex justify-between items-center bg-stone-50 rounded-t-2xl sticky top-0 z-10">
                            <h2 className="text-lg font-bold flex items-center gap-2"><Edit2 size={18}/> Edit Tour</h2>
                            <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-stone-200 rounded-full"><X /></button>
                        </div>
                        <div className="p-6 grid grid-cols-1 lg:grid-cols-5 gap-8 overflow-y-auto">
                            <div className="lg:col-span-3 space-y-6">
                                <div className="p-6 rounded-2xl bg-white border">
                                    <h3 className="font-bold text-lg mb-4">Core Details</h3>
                                    <div className="space-y-4">
                                        <StableInput label="Tour Name" value={editingTour.name} onChange={v => handleTourChange('name', v)} />
                                        <StableTextArea label="Short Description" rows={2} value={editingTour.shortDescription} onChange={v => handleTourChange('shortDescription', v)} />
                                        <StableTextArea label="Full Description" rows={6} value={editingTour.fullDescription} onChange={v => handleTourChange('fullDescription', v)} />
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border">
                                    <h3 className="font-bold text-lg mb-4">Itinerary Builder</h3>
                                    <div className="space-y-4">
                                        {editingTour.itinerary.map((day, index) => (
                                            <div key={`day-${index}`} className="p-4 border rounded-lg bg-stone-50/50 relative">
                                                <button onClick={() => removeItineraryDay(index)} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full"><Trash2 size={14} /></button>
                                                <h4 className="font-bold mb-2">Day {day.day}</h4>
                                                <StableInput placeholder="Day Title" value={day.title} onChange={v => handleItineraryChange(index, 'title', v)} className="mb-2 bg-white" />
                                                <StableTextArea placeholder="Activities Description" rows={3} value={day.description} onChange={v => handleItineraryChange(index, 'description', v)} className="bg-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={addItineraryDay} className="mt-4 bg-blue-500 text-white px-4 py-2 text-sm font-bold rounded-lg flex items-center gap-2"><Plus size={16}/> Add Day</button>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-6">
                                <div className="p-6 rounded-2xl bg-white border">
                                     <h3 className="font-bold text-lg mb-4">Settings</h3>
                                     <div className="grid grid-cols-2 gap-4">
                                         <StableInput type="number" label="Price (USD)" value={editingTour.priceUsd} onChange={v => handleTourChange('priceUsd', v)} />
                                         <StableInput type="number" label="Duration (Days)" value={editingTour.durationDays} onChange={v => handleTourChange('durationDays', v)} />
                                         <div className="col-span-2">
                                            <label className="text-xs font-bold uppercase text-stone-400 block mb-2">Category</label>
                                            <select value={editingTour.category} onChange={e => handleTourChange('category', e.target.value)} className="w-full p-3 border rounded-lg bg-white">
                                                <option value="Safari">Safari</option>
                                                <option value="Coastal">Coastal</option>
                                                <option value="Trek">Trek</option>
                                                <option value="Day Trip">Day Trip</option>
                                                <option value="Honeymoon">Honeymoon</option>
                                                <option value="Weekend">Weekend</option>
                                                <option value="International">International</option>
                                            </select>
                                         </div>
                                         <div className="col-span-2">
                                            <label className="text-xs font-bold uppercase text-stone-400 block mb-2">Group</label>
                                            <select value={editingTour.group} onChange={e => handleTourChange('group', e.target.value)} className="w-full p-3 border rounded-lg bg-white">
                                                <option value="Excursion">Excursion</option>
                                                <option value="Road Safari">Road Safari</option>
                                                <option value="Flight Safari">Flight Safari</option>
                                                <option value="Trek">Trek</option>
                                                <option value="Custom">Custom</option>
                                                <option value="Getaway">Getaway</option>
                                                <option value="International">International</option>
                                            </select>
                                         </div>
                                     </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border">
                                     <h3 className="font-bold text-lg mb-4">Media</h3>
                                     <CloudinaryImageUploader label="Cover Media" currentImageUrl={editingTour.image} onUploadSuccess={url => handleTourChange('image', url)} />
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t flex justify-end gap-4 bg-stone-50 rounded-b-2xl sticky bottom-0 z-10">
                            <button onClick={() => setEditingTour(null)} className="px-4 py-2 border rounded-lg hover:bg-stone-200 font-bold text-stone-600">Cancel</button>
                            <button onClick={async () => { 
                                const isNewTour = !tours.some(t => t.id === editingTour.id);
                                if (isNewTour) await addTour(editingTour);
                                else await updateTour(editingTour);
                                setEditingTour(null); 
                                showToast("Tour saved!"); 
                            }} className="px-6 py-2 bg-safari-leaf text-white rounded-lg font-bold shadow-lg flex items-center gap-2"><Save size={18}/> Save Changes</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    );
};

const BlogManagerView = ({ showToast }: { showToast: Function }) => {
    const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useData();
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const generateSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const handlePostChange = (field: string, value: any) => {
        setEditingPost(prev => prev ? ({...prev, [field]: value}) : null);
    };

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Safari Stories</h2>
          <button onClick={() => setEditingPost({ id: `post-${Date.now()}`, slug: '', title: 'New Post', excerpt: '', content: '', category: 'General', date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), image: '' })} className="bg-safari-leaf text-white px-4 py-2 rounded-lg flex items-center gap-2"><Plus/> Add Post</button>
        </div>
        <div className="glass-card rounded-2xl overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-stone-100/50 text-xs uppercase font-bold text-stone-500"><tr><th className="p-4 text-left">Title</th><th className="p-4 text-left">Category</th><th className="p-4 text-right">Actions</th></tr></thead>
            <tbody>
              {(blogPosts || []).map(post => (
                <tr key={post.id} className="border-t">
                  <td className="p-4 font-bold">{post.title}</td>
                  <td className="p-4 text-sm">{post.category}</td>
                  <td className="p-4 text-right flex gap-2 justify-end">
                    <button onClick={() => setEditingPost(post)} className="p-2 bg-blue-100 text-blue-600 rounded"><Edit2 size={14}/></button>
                    <button onClick={() => { if(window.confirm('Delete this post?')) { deleteBlogPost(post.id); showToast('Post deleted'); } }} className="p-2 bg-red-100 text-red-600 rounded"><Trash2 size={14}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatePresence>
            {editingPost && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50 backdrop-blur-sm">
                  <motion.div key="blog-editor" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="p-6 border-b flex justify-between items-center bg-stone-50 rounded-t-2xl">
                          <h2 className="text-xl font-bold">Edit Safari Story</h2>
                          <button onClick={() => setEditingPost(null)} className="p-2 hover:bg-stone-200 rounded-full"><X /></button>
                      </div>
                      <div className="p-6 space-y-6 overflow-y-auto">
                          <CloudinaryImageUploader label="Cover Image" currentImageUrl={editingPost.image} onUploadSuccess={url => handlePostChange('image', url)} />
                          <StableInput label="Title" value={editingPost.title} onChange={v => handlePostChange('title', v)} />
                          <StableInput label="Category" value={editingPost.category} onChange={v => handlePostChange('category', v)} />
                          <StableTextArea label="Excerpt" rows={2} value={editingPost.excerpt} onChange={v => handlePostChange('excerpt', v)} />
                          <StableTextArea label="Content" rows={10} value={editingPost.content} onChange={v => handlePostChange('content', v)} />
                      </div>
                        <div className="p-6 border-t flex justify-end gap-4 bg-stone-50 rounded-b-2xl">
                          <button onClick={() => setEditingPost(null)} className="px-4 py-2 border rounded-lg font-bold">Cancel</button>
                          <button onClick={() => {
                            const postToSave = { ...editingPost, slug: generateSlug(editingPost.title) };
                            const isExistingPost = blogPosts.some(p => p.id === postToSave.id);
                            if (isExistingPost) updateBlogPost(postToSave);
                            else addBlogPost(postToSave);
                            setEditingPost(null);
                            showToast("Post saved!");
                          }} className="px-6 py-2 bg-safari-leaf text-white rounded-lg font-bold">Save Post</button>
                      </div>
                  </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    );
};

// --- MAIN ADMIN COMPONENT ---

const Admin: React.FC = () => {
  const { isAuthenticated, login, logout, saving } = useData();
  const [email, setEmail] = useState('admin@tomsafaris.co.ke');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'global' | 'pages' | 'seo' | 'tours' | 'inquiries' | 'settings' | 'blog'>('dashboard');
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password || '12345').then(success => { 
      if (success) setError('');
      else setError('Invalid credentials.');
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-900 relative p-4">
        <div className="glass-dark p-10 rounded-3xl max-w-md w-full relative z-10 text-center text-white">
            <Lock className="w-12 h-12 text-safari-emerald mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">CMS Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-4 rounded-xl text-center text-stone-900" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-4 rounded-xl text-center text-stone-900" />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" className="w-full py-4 bg-safari-emerald text-stone-900 font-bold rounded-xl">Unlock</button>
            </form>
        </div>
      </div>
    );
  }
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'global', label: 'Global Settings', icon: Globe },
    { id: 'pages', label: 'Pages CMS', icon: Layout },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'seo', label: 'SEO', icon: SlidersHorizontal },
    { id: 'tours', label: 'Tours', icon: List },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row">
        <header className="md:hidden bg-stone-900 text-white p-4 flex justify-between items-center sticky top-0 z-40">
           <div className="font-bold text-lg">Admin Panel</div>
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}><Menu size={24} /></button>
        </header>

        <aside className={`fixed md:relative top-0 left-0 h-full md:h-auto z-50 bg-stone-900 text-stone-300 flex flex-col p-4 w-64 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold text-lg text-white p-4">Admin Panel</div>
            <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}><X/></button>
          </div>
          <nav className="flex-grow space-y-2">
            {menuItems.map(item => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === item.id ? 'bg-safari-emerald text-stone-900 font-bold' : 'hover:bg-stone-800'}`}>
                <item.icon size={18} /><span>{item.label}</span>
              </button>
            ))}
          </nav>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-400 mt-4"><LogOut size={18}/><span>Logout</span></button>
        </aside>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-stone-800 capitalize">{activeTab.replace('-', ' ')}</h1>
          </div>
          
          {/* STABLE CONDITIONAL RENDERING - Fixes remount issues */}
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'global' && <GlobalSettingsView showToast={showToast} />}
          {activeTab === 'pages' && <PageEditorView showToast={showToast} />}
          {activeTab === 'tours' && <ToursManagerView showToast={showToast} />}
          {activeTab === 'blog' && <BlogManagerView showToast={showToast} />}
          {activeTab === 'seo' && <GlobalSettingsView showToast={showToast} />} 
          {activeTab === 'inquiries' && <div className="text-stone-500">Inquiries Module Loading...</div>}
        </main>
        
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