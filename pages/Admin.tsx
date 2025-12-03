
// @ts-nocheck
import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, CompanyInfo, PageContent, ItineraryDay } from '../types';
import PageTransition from '../components/PageTransition';

const Admin: React.FC = () => {
  const { 
    isAuthenticated, login, logout, companyInfo, updateCompanyInfo,
    tours, updateTour, deleteTour, addTour,
    inquiries,
    pageContent, updatePageContent,
    changePassword,
    selectedCurrency, availableCurrencies, convertPrice
  } = useData();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'global' | 'pages' | 'seo' | 'tours' | 'inquiries' | 'settings'>('dashboard');
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  // Accordion state for Pages CMS
  const [expandedSection, setExpandedSection] = useState<string | null>('home');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) setError('');
    else setError('Invalid password');
  };

  const processFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 600; // Optimized for storage
          let width = img.width;
          let height = img.height;
          if (width > MAX_WIDTH) {
            height = height * (MAX_WIDTH / width);
            width = MAX_WIDTH;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.6)); // 60% quality
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  // Generic Image Upload Handler for Page Content
  const handlePageImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: string, subSection: string) => {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      try {
        const base64 = await processFile(e.target.files[0]);
        // Update deeply nested state dynamically
        const newContent = { ...pageContent };
        // @ts-ignore
        newContent[section][subSection].image = base64;
        updatePageContent(newContent);
        showToast("Image updated!");
      } catch (err) {
        showToast("Upload failed", "error");
      } finally {
        setUploading(false);
      }
    }
  };

  const handleTourGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && editingTour) {
          const files = Array.from(e.target.files);
          setUploading(true);
          try {
              const processedImages = await Promise.all(files.map(f => processFile(f)));
              setEditingTour({
                  ...editingTour,
                  gallery: [...(editingTour.gallery || []), ...processedImages]
              });
              showToast(`${files.length} photos added to gallery`);
          } catch (err) {
              showToast("Gallery upload failed", "error");
          } finally {
              setUploading(false);
          }
      }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-900 relative">
        <div className="glass-premium p-10 rounded-3xl max-w-md w-full relative z-10 text-center">
            <Lock className="w-12 h-12 text-safari-sky mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">CMS Login</h2>
            <p className="text-stone-500 mb-6">Tom "Cruse" Madeda</p>
            <form onSubmit={handleLogin} className="space-y-4">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-4 rounded-xl text-center font-bold" />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="w-full py-4 bg-safari-leaf text-white font-bold rounded-xl">Unlock</button>
            </form>
        </div>
      </div>
    );
  }

  // --- CMS TAB CONTENT COMPONENTS ---

  const GlobalSettings = () => (
    <div className="space-y-6">
        <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Company Identity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="text-xs font-bold uppercase text-stone-400">Website Name</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.name} onChange={(e) => updateCompanyInfo({...companyInfo, name: e.target.value})} /></div>
                <div><label className="text-xs font-bold uppercase text-stone-400">Owner Name</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.ownerName} onChange={(e) => updateCompanyInfo({...companyInfo, ownerName: e.target.value})} /></div>
                <div className="md:col-span-2"><label className="text-xs font-bold uppercase text-stone-400">Slogan / Tagline</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.slogan} onChange={(e) => updateCompanyInfo({...companyInfo, slogan: e.target.value})} /></div>
            </div>
        </div>
        <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Contact & Social</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="text-xs font-bold uppercase text-stone-400">Phone</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.phone} onChange={(e) => updateCompanyInfo({...companyInfo, phone: e.target.value})} /></div>
                <div><label className="text-xs font-bold uppercase text-stone-400">Email</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.email} onChange={(e) => updateCompanyInfo({...companyInfo, email: e.target.value})} /></div>
                <div><label className="text-xs font-bold uppercase text-stone-400">Location</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.location} onChange={(e) => updateCompanyInfo({...companyInfo, location: e.target.value})} /></div>
                <div><label className="text-xs font-bold uppercase text-stone-400">WhatsApp Link</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.social.whatsapp} onChange={(e) => updateCompanyInfo({...companyInfo, social: {...companyInfo.social, whatsapp: e.target.value}})} /></div>
            </div>
        </div>
    </div>
  );

  const PageEditor = () => (
    <div className="space-y-4">
        {/* Home Page Section */}
        <div className="glass-card rounded-2xl overflow-hidden">
            <button onClick={() => setExpandedSection(expandedSection === 'home' ? null : 'home')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg">
                <span>Home Page Content</span> {expandedSection === 'home' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'home' && (
                <div className="p-6 space-y-6">
                    <div className="space-y-4 border-b pb-6">
                        <h4 className="font-bold text-safari-sunset">Hero Section</h4>
                        <input className="w-full p-3 border rounded" placeholder="Hero Title" value={pageContent.home.hero.title} onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, hero: {...pageContent.home.hero, title: e.target.value}}})} />
                        <textarea className="w-full p-3 border rounded" placeholder="Hero Subtitle" value={pageContent.home.hero.subtitle} onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, hero: {...pageContent.home.hero, subtitle: e.target.value}}})} />
                        
                        {/* Highlight Image URL Input */}
                        <div>
                            <label className="text-xs font-bold uppercase text-stone-400">Hero Image URL</label>
                            <input 
                                className="w-full p-3 border rounded" 
                                placeholder="https://example.com/image.jpg" 
                                value={pageContent.home.hero.image} 
                                onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, hero: {...pageContent.home.hero, image: e.target.value}}})} 
                            />
                            {!pageContent.home.hero.image.startsWith('http') && pageContent.home.hero.image.length > 0 && (
                                <p className="text-red-500 text-xs mt-1">URL must start with http or https</p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-safari-sunset">Welcome Section</h4>
                        <input className="w-full p-3 border rounded" value={pageContent.home.welcome.title} onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, welcome: {...pageContent.home.welcome, title: e.target.value}}})} />
                        <textarea rows={4} className="w-full p-3 border rounded" value={pageContent.home.welcome.content} onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, welcome: {...pageContent.home.welcome, content: e.target.value}}})} />
                    </div>
                </div>
            )}
        </div>

        {/* About Page Section */}
        <div className="glass-card rounded-2xl overflow-hidden">
            <button onClick={() => setExpandedSection(expandedSection === 'about' ? null : 'about')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg">
                <span>About Page Content</span> {expandedSection === 'about' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'about' && (
                <div className="p-6 space-y-6">
                     <div className="space-y-4 border-b pb-6">
                        <h4 className="font-bold text-safari-sunset">Philosophy</h4>
                        <textarea rows={4} className="w-full p-3 border rounded" value={pageContent.about.philosophy.content} onChange={(e) => updatePageContent({...pageContent, about: {...pageContent.about, philosophy: {...pageContent.about.philosophy, content: e.target.value}}})} />
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-safari-sunset">Founder Bio (Cruse)</h4>
                        <input className="w-full p-3 border rounded" value={pageContent.about.founder.title} onChange={(e) => updatePageContent({...pageContent, about: {...pageContent.about, founder: {...pageContent.about.founder, title: e.target.value}}})} />
                        <textarea rows={6} className="w-full p-3 border rounded" value={pageContent.about.founder.content} onChange={(e) => updatePageContent({...pageContent, about: {...pageContent.about, founder: {...pageContent.about.founder, content: e.target.value}}})} />
                        <div className="flex items-center gap-4">
                            <img src={pageContent.about.founder.image} className="w-20 h-20 object-cover rounded-full" />
                            <label className="cursor-pointer bg-stone-200 px-4 py-2 rounded text-sm font-bold">Change Founder Photo <input type="file" className="hidden" onChange={(e) => handlePageImageUpload(e, 'about', 'founder')} /></label>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Contact & Footer Section */}
        <div className="glass-card rounded-2xl overflow-hidden">
             <button onClick={() => setExpandedSection(expandedSection === 'contact' ? null : 'contact')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg">
                <span>Contact & Footer</span> {expandedSection === 'contact' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'contact' && (
                <div className="p-6 space-y-6">
                    <div className="space-y-4 border-b pb-6">
                         <h4 className="font-bold text-safari-sunset">Contact Page</h4>
                         <textarea className="w-full p-3 border rounded" placeholder="Intro Text" value={pageContent.contact.intro.content} onChange={(e) => updatePageContent({...pageContent, contact: {...pageContent.contact, intro: {...pageContent.contact.intro, content: e.target.value}}})} />
                         <label className="text-xs font-bold uppercase text-stone-400">Map Embed URL</label>
                         <input className="w-full p-3 border rounded" value={pageContent.contact.mapUrl} onChange={(e) => updatePageContent({...pageContent, contact: {...pageContent.contact, mapUrl: e.target.value}})} />
                    </div>
                    <div className="space-y-4">
                         <h4 className="font-bold text-safari-sunset">Footer</h4>
                         <textarea className="w-full p-3 border rounded" placeholder="Footer About Text" value={pageContent.footer.aboutText} onChange={(e) => updatePageContent({...pageContent, footer: {...pageContent.footer, aboutText: e.target.value}})} />
                         <input className="w-full p-3 border rounded" placeholder="Copyright Text" value={pageContent.footer.copyrightText} onChange={(e) => updatePageContent({...pageContent, footer: {...pageContent.footer, copyrightText: e.target.value}})} />
                    </div>
                </div>
            )}
        </div>
    </div>
  );

  const SEOEditor = () => (
      <div className="glass-card p-8 rounded-3xl space-y-8">
          <h3 className="text-2xl font-bold">SEO & Metadata</h3>
          {['home', 'about', 'tours', 'contact', 'blog'].map((page) => (
              <div key={page} className="border p-4 rounded-xl space-y-3">
                  <h4 className="font-bold uppercase text-safari-sunset">{page} Page</h4>
                  <div className="grid grid-cols-1 gap-4">
                      <input className="w-full p-3 border rounded" placeholder="Meta Title" value={pageContent.seo[page]?.title} onChange={(e) => updatePageContent({...pageContent, seo: {...pageContent.seo, [page]: {...pageContent.seo[page], title: e.target.value}}})} />
                      <textarea className="w-full p-3 border rounded" placeholder="Meta Description" value={pageContent.seo[page]?.description} onChange={(e) => updatePageContent({...pageContent, seo: {...pageContent.seo, [page]: {...pageContent.seo[page], description: e.target.value}}})} />
                  </div>
              </div>
          ))}
      </div>
  );

  return (
    <PageTransition>
    <div className="min-h-screen bg-safari-sand flex flex-col md:flex-row font-sans text-stone-800">
      
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: -50, x: '-50%' }} animate={{ opacity: 1, y: 20, x: '-50%' }} exit={{ opacity: 0, y: -50, x: '-50%' }} className={`fixed top-0 left-1/2 z-[100] px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 text-white font-bold backdrop-blur-md ${toast.type === 'success' ? 'bg-green-600/90' : 'bg-red-600/90'}`}>
            {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className="w-full md:w-72 glass-premium md:h-screen sticky top-0 flex-shrink-0 z-40 border-r border-white/50 flex flex-col">
        <div className="p-8 border-b border-stone-200/50">
           <h1 className="text-xl font-bold font-serif flex items-center text-stone-800">
             <div className="w-8 h-8 bg-safari-sunset rounded-lg flex items-center justify-center text-white mr-3">T</div>
             Admin – Tom (Cruse)
           </h1>
           <p className="text-xs text-stone-500 mt-2 pl-11">CMS Panel</p>
        </div>
        <nav className="p-4 space-y-2 flex-grow overflow-y-auto">
            {[
                { id: 'dashboard', label: 'Dashboard', icon: Home },
                { id: 'global', label: 'Global Settings', icon: Globe },
                { id: 'pages', label: 'Pages & Content', icon: Layout },
                { id: 'seo', label: 'SEO Manager', icon: Globe },
                { id: 'tours', label: 'Tours', icon: List },
                { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
                { id: 'settings', label: 'System', icon: Settings },
            ].map((item) => (
                <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={`w-full flex items-center space-x-3 px-6 py-4 rounded-xl transition-all ${activeTab === item.id ? 'bg-safari-leaf text-white shadow-lg' : 'text-stone-500 hover:bg-white/50'}`}>
                    <item.icon className="w-5 h-5" /> <span className="font-medium">{item.label}</span>
                </button>
            ))}
        </nav>
        <div className="p-6 border-t"><button onClick={logout} className="w-full flex items-center justify-center space-x-2 bg-red-50 text-red-600 py-3 rounded-xl font-bold"><LogOut className="w-4 h-4" /> <span>Logout</span></button></div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 md:p-10 overflow-y-auto">
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8 capitalize">{activeTab}</h2>

        {activeTab === 'dashboard' && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-8 rounded-3xl">
                    <p className="text-stone-400 font-bold text-xs uppercase">Total Tours</p>
                    <h3 className="text-5xl font-black text-stone-800 mt-2">{tours.length}</h3>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                    <p className="text-stone-400 font-bold text-xs uppercase">Inquiries</p>
                    <h3 className="text-5xl font-black text-stone-800 mt-2">{inquiries.length}</h3>
                </div>
             </div>
        )}

        {activeTab === 'global' && <GlobalSettings />}
        {activeTab === 'pages' && <PageEditor />}
        {activeTab === 'seo' && <SEOEditor />}
        
        {activeTab === 'tours' && (
             <div className="space-y-6">
                <button onClick={() => {
                     const newTour: Tour = { id: `tour-${Date.now()}`, name: "New Tour", durationDays: 3, priceUsd: 500, priceGbp: 0, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", category: "Safari", group: "Road Safari", featured: false, shortDescription: "Short desc", fullDescription: "Full desc", highlights: [], itinerary: [], gallery: [] };
                     addTour(newTour); setEditingTour(newTour);
                }} className="bg-stone-900 text-white px-6 py-3 rounded-full font-bold flex items-center"><Plus className="mr-2" /> Add Tour</button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tours.map(tour => (
                        <div key={tour.id} className="glass-card p-4 rounded-2xl flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <img src={tour.image} className="w-16 h-16 rounded-lg object-cover" />
                                <div><h4 className="font-bold">{tour.name}</h4><p className="text-xs text-stone-500">${tour.priceUsd}</p></div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setEditingTour(tour)} className="p-2 bg-stone-100 rounded-full"><Edit2 className="w-4 h-4" /></button>
                                <button onClick={() => deleteTour(tour.id)} className="p-2 bg-red-100 text-red-600 rounded-full"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        )}

        {/* --- TOUR EDIT MODAL --- */}
        {editingTour && (
             <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md">
                 <div className="glass-premium rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 border border-white/20 shadow-2xl">
                     <div className="flex justify-between items-center mb-8 border-b pb-4">
                         <h3 className="text-3xl font-bold font-serif">Edit Tour</h3>
                         <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-red-50 text-stone-500 hover:text-red-500 rounded-full transition-colors"><X className="w-6 h-6" /></button>
                     </div>
                     
                     <div className="space-y-8">
                         {/* Basic Info */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className="text-xs font-bold uppercase text-stone-400 mb-2 block">Tour Name</label>
                                <input className="w-full p-4 border rounded-xl font-bold text-lg" value={editingTour.name} onChange={(e) => setEditingTour({...editingTour, name: e.target.value})} placeholder="Tour Name" />
                             </div>
                             <div>
                                <label className="text-xs font-bold uppercase text-stone-400 mb-2 block">Category</label>
                                <select className="w-full p-4 border rounded-xl" value={editingTour.group} onChange={(e) => setEditingTour({...editingTour, group: e.target.value as any})}>
                                    <option value="Road Safari">Road Safari</option>
                                    <option value="Flight Safari">Flight Safari</option>
                                    <option value="Excursion">Excursion</option>
                                    <option value="Trek">Trek</option>
                                </select>
                             </div>
                         </div>

                         {/* Pricing & Specs */}
                         <div className="glass-card p-6 rounded-2xl bg-safari-sky/5 border border-safari-sky/10">
                             <h4 className="font-bold text-safari-blue mb-4 flex items-center"><Settings className="w-4 h-4 mr-2" /> Pricing & Specs</h4>
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                 <div>
                                     <label className="text-xs font-bold uppercase text-stone-400 mb-1 block">Price (USD)</label>
                                     <input type="number" className="w-full p-3 border rounded-xl" value={editingTour.priceUsd} 
                                        onChange={(e) => {
                                           const usd = Number(e.target.value);
                                           // Auto-calculate GBP
                                           const rate = useData().currencyRates['GBP'] || 0.79;
                                           const gbp = Math.ceil(usd * rate);
                                           setEditingTour({...editingTour, priceUsd: usd, priceGbp: gbp});
                                        }} 
                                     />
                                 </div>
                                 <div className="relative">
                                     <label className="text-xs font-bold uppercase text-stone-400 mb-1 block">Price (GBP)</label>
                                     <input type="number" readOnly className="w-full p-3 border rounded-xl bg-stone-100 text-stone-500" value={editingTour.priceGbp} />
                                     <div className="absolute right-2 top-8 text-xs text-stone-400 flex items-center">
                                         Auto <CheckCircle className="w-3 h-3 ml-1 text-green-500" />
                                     </div>
                                 </div>
                                 <div>
                                     <label className="text-xs font-bold uppercase text-stone-400 mb-1 block">Duration (Days)</label>
                                     <input type="number" className="w-full p-3 border rounded-xl" value={editingTour.durationDays} onChange={(e) => setEditingTour({...editingTour, durationDays: Number(e.target.value)})} />
                                 </div>
                                 <div className="flex items-center pt-6">
                                    <label className="flex items-center cursor-pointer space-x-3">
                                        <input type="checkbox" className="w-5 h-5 accent-safari-gold" checked={editingTour.featured} onChange={(e) => setEditingTour({...editingTour, featured: e.target.checked})} />
                                        <span className="font-bold text-sm">Featured?</span>
                                    </label>
                                 </div>
                             </div>
                             
                             <div className="mt-4 overflow-x-auto">
                                 <p className="text-xs font-bold uppercase text-stone-400 mb-2">Live Conversions</p>
                                 <div className="flex gap-4">
                                     {availableCurrencies.slice(0, 6).map(curr => {
                                         const p = convertPrice(editingTour.priceUsd);
                                         // Mock conversion for display in admin since convertPrice uses selectedCurrency
                                         // In a real app we'd expose a conversion helper for any currency
                                         return (
                                             <div key={curr.code} className="bg-white px-3 py-1 rounded border text-xs whitespace-nowrap">
                                                 {curr.flag} {curr.code}: {Math.ceil(editingTour.priceUsd * (useData().currencyRates[curr.code] || 1))}
                                             </div>
                                         )
                                     })}
                                 </div>
                             </div>
                         </div>

                         {/* Descriptions */}
                         <div className="space-y-4">
                             <div>
                                 <label className="text-xs font-bold uppercase text-stone-400 mb-2 block">Short Description</label>
                                 <input className="w-full p-4 border rounded-xl" value={editingTour.shortDescription} onChange={(e) => setEditingTour({...editingTour, shortDescription: e.target.value})} placeholder="Brief summary for card..." />
                             </div>
                             <div>
                                 <label className="text-xs font-bold uppercase text-stone-400 mb-2 block">Full Overview</label>
                                 <textarea className="w-full p-4 border rounded-xl h-32" value={editingTour.fullDescription} onChange={(e) => setEditingTour({...editingTour, fullDescription: e.target.value})} placeholder="Detailed overview..." />
                             </div>
                         </div>

                         {/* ITINERARY BUILDER */}
                         <div className="border-t pt-8">
                             <div className="flex justify-between items-center mb-6">
                                 <h4 className="text-xl font-bold text-safari-earth flex items-center"><List className="w-5 h-5 mr-2" /> Itinerary Builder</h4>
                                 <span className="text-xs bg-stone-100 px-3 py-1 rounded-full text-stone-500">{editingTour.itinerary.length} Days Configured</span>
                             </div>
                             
                             <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-100">
                                {editingTour.itinerary.sort((a,b) => a.day - b.day).map((day, index) => (
                                  <div key={index} className="glass-card bg-white p-5 rounded-xl border border-stone-200 shadow-sm relative group hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-center mb-3">
                                       <span className="font-black bg-safari-leaf text-white w-20 py-1 rounded-full flex items-center justify-center text-xs uppercase tracking-wider">Day {day.day}</span>
                                       <button onClick={() => {
                                          const newItinerary = editingTour.itinerary.filter((_, i) => i !== index);
                                          // Re-index days optionally? For now keeping original Day number unless manual change
                                          setEditingTour({...editingTour, itinerary: newItinerary});
                                       }} className="text-stone-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"><Trash2 size={16} /></button>
                                    </div>
                                    <div className="space-y-3">
                                        <input 
                                          className="w-full p-3 border rounded-lg font-bold text-stone-800 focus:ring-2 focus:ring-safari-leaf outline-none" 
                                          placeholder="Day Title (e.g., Arrival in Nairobi)" 
                                          value={day.title} 
                                          onChange={(e) => {
                                             const newItinerary = [...editingTour.itinerary];
                                             newItinerary[index].title = e.target.value;
                                             setEditingTour({...editingTour, itinerary: newItinerary});
                                          }}
                                        />
                                        <textarea 
                                          className="w-full p-3 border rounded-lg text-sm text-stone-600 focus:ring-2 focus:ring-safari-leaf outline-none" 
                                          rows={3} 
                                          placeholder="Detailed activities for the day..."
                                          value={day.description}
                                          onChange={(e) => {
                                             const newItinerary = [...editingTour.itinerary];
                                             newItinerary[index].description = e.target.value;
                                             setEditingTour({...editingTour, itinerary: newItinerary});
                                          }}
                                        />
                                    </div>
                                  </div>
                                ))}
                                
                                <button 
                                  onClick={() => {
                                    const nextDay = editingTour.itinerary.length > 0 ? Math.max(...editingTour.itinerary.map(d => d.day)) + 1 : 1;
                                    setEditingTour({
                                      ...editingTour, 
                                      itinerary: [...editingTour.itinerary, { day: nextDay, title: "", description: "" }]
                                    });
                                  }}
                                  className="w-full py-4 border-2 border-dashed border-stone-300 text-stone-500 font-bold rounded-xl hover:bg-white hover:border-safari-leaf hover:text-safari-leaf transition-all flex items-center justify-center gap-2 group"
                                >
                                  <div className="bg-stone-200 group-hover:bg-safari-leaf group-hover:text-white rounded-full p-1 transition-colors"><Plus size={16} /></div> 
                                  Add Day {editingTour.itinerary.length > 0 ? Math.max(...editingTour.itinerary.map(d => d.day)) + 1 : 1}
                                </button>
                              </div>
                         </div>
                         
                         {/* Images */}
                         <div className="border-t pt-8">
                             <h4 className="text-xl font-bold text-safari-earth mb-4 flex items-center"><ImageIcon className="w-5 h-5 mr-2" /> Media Gallery</h4>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 {/* Main Image */}
                                 <div>
                                     <p className="font-bold text-xs uppercase text-stone-400 mb-2">Main Cover Image</p>
                                     <div className="relative group rounded-xl overflow-hidden aspect-video bg-stone-100 border-2 border-dashed border-stone-300 flex items-center justify-center">
                                         {editingTour.image ? (
                                             <>
                                                <img src={editingTour.image} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                    <label className="cursor-pointer bg-white text-stone-900 px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform">
                                                        Replace
                                                        <input type="file" className="hidden" onChange={async (e) => {
                                                            if(e.target.files?.[0]) {
                                                                const b64 = await processFile(e.target.files[0]);
                                                                setEditingTour({...editingTour, image: b64});
                                                            }
                                                        }} />
                                                    </label>
                                                </div>
                                             </>
                                         ) : (
                                            <label className="cursor-pointer flex flex-col items-center text-stone-400 hover:text-safari-leaf">
                                                <Plus className="w-8 h-8 mb-2" />
                                                <span className="text-sm font-bold">Upload Cover</span>
                                                <input type="file" className="hidden" onChange={async (e) => {
                                                    if(e.target.files?.[0]) {
                                                        const b64 = await processFile(e.target.files[0]);
                                                        setEditingTour({...editingTour, image: b64});
                                                    }
                                                }} />
                                            </label>
                                         )}
                                     </div>
                                 </div>

                                 {/* Gallery Grid */}
                                 <div>
                                     <div className="flex justify-between items-center mb-2">
                                        <p className="font-bold text-xs uppercase text-stone-400">Photo Gallery</p>
                                        <label className="cursor-pointer text-safari-leaf text-xs font-bold uppercase hover:underline flex items-center">
                                            <Plus className="w-3 h-3 mr-1" /> Add Photos
                                            <input type="file" multiple className="hidden" onChange={handleTourGalleryUpload} />
                                        </label>
                                     </div>
                                     <div className="grid grid-cols-3 gap-2">
                                         {editingTour.gallery && editingTour.gallery.map((img, idx) => (
                                             <div key={idx} className="aspect-square rounded-lg overflow-hidden relative group">
                                                 <img src={img} className="w-full h-full object-cover" />
                                                 <button 
                                                    onClick={() => {
                                                        const newGallery = editingTour.gallery?.filter((_, i) => i !== idx);
                                                        setEditingTour({...editingTour, gallery: newGallery});
                                                    }}
                                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                 >
                                                     <X size={12} />
                                                 </button>
                                             </div>
                                         ))}
                                         {(!editingTour.gallery || editingTour.gallery.length === 0) && (
                                             <div className="col-span-3 text-center py-8 text-stone-400 text-xs italic bg-stone-50 rounded-lg">
                                                 No gallery photos yet.
                                             </div>
                                         )}
                                     </div>
                                 </div>
                             </div>
                         </div>

                         <div className="sticky bottom-0 bg-white/80 backdrop-blur-md p-4 border-t flex justify-end gap-4 rounded-b-3xl">
                             <button onClick={() => setEditingTour(null)} className="px-6 py-3 text-stone-500 font-bold hover:bg-stone-100 rounded-xl transition-colors">Cancel</button>
                             <button onClick={() => { updateTour(editingTour); setEditingTour(null); showToast("Tour Saved Successfully!") }} className="px-8 py-3 bg-safari-leaf text-white font-bold rounded-xl shadow-lg hover:bg-green-700 transition-colors flex items-center">
                                 <Save className="w-4 h-4 mr-2" /> Save Changes
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
        )}

      </div>
    </div>
    </PageTransition>
  );
};

export default Admin;
