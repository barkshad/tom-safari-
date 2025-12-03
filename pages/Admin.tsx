
// @ts-nocheck
import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, CompanyInfo, PageContent } from '../types';
import PageTransition from '../components/PageTransition';

const Admin: React.FC = () => {
  const { 
    isAuthenticated, login, logout, companyInfo, updateCompanyInfo,
    tours, updateTour, deleteTour, addTour,
    inquiries,
    pageContent, updatePageContent,
    changePassword
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
          const MAX_WIDTH = 800; 
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
          resolve(canvas.toDataURL('image/jpeg', 0.7));
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
                        <div className="flex items-center gap-4">
                            <img src={pageContent.home.hero.image} className="w-20 h-12 object-cover rounded" />
                            <label className="cursor-pointer bg-stone-200 px-4 py-2 rounded text-sm font-bold">Change Image <input type="file" className="hidden" onChange={(e) => handlePageImageUpload(e, 'home', 'hero')} /></label>
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
             Admin CMS
           </h1>
           <p className="text-xs text-stone-500 mt-2 pl-11">Tom "Cruse" Madeda</p>
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

        {/* Existing Tour Edit Modal Logic (Simplified for brevity but reusing functionality) */}
        {editingTour && (
             <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md">
                 <div className="glass-premium rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8">
                     <div className="flex justify-between mb-6">
                         <h3 className="text-2xl font-bold">Edit Tour</h3>
                         <button onClick={() => setEditingTour(null)}><X /></button>
                     </div>
                     <div className="space-y-4">
                         <input className="w-full p-4 border rounded-xl" value={editingTour.name} onChange={(e) => setEditingTour({...editingTour, name: e.target.value})} placeholder="Tour Name" />
                         <div className="grid grid-cols-2 gap-4">
                             <input type="number" className="p-4 border rounded-xl" value={editingTour.priceUsd} onChange={(e) => setEditingTour({...editingTour, priceUsd: Number(e.target.value)})} placeholder="Price USD" />
                             <input type="number" className="p-4 border rounded-xl" value={editingTour.durationDays} onChange={(e) => setEditingTour({...editingTour, durationDays: Number(e.target.value)})} placeholder="Duration (Days)" />
                         </div>
                         <textarea className="w-full p-4 border rounded-xl" rows={4} value={editingTour.fullDescription} onChange={(e) => setEditingTour({...editingTour, fullDescription: e.target.value})} placeholder="Full Description"></textarea>
                         
                         {/* Reusing existing Image Upload Logic */}
                         <div className="border-2 border-dashed p-4 rounded-xl text-center">
                             <p className="mb-2">Main Image</p>
                             <input type="file" onChange={async (e) => {
                                 if(e.target.files?.[0]) {
                                     const b64 = await processFile(e.target.files[0]);
                                     setEditingTour({...editingTour, image: b64});
                                 }
                             }} />
                         </div>

                         <div className="flex justify-end gap-4 mt-6">
                             <button onClick={() => { updateTour(editingTour); setEditingTour(null); }} className="px-8 py-3 bg-safari-leaf text-white font-bold rounded-xl">Save Changes</button>
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
