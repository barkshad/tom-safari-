// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp, MapPin, Calendar, FileText, BarChart, SlidersHorizontal, Search, Upload, Menu, Download, Zap, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, CompanyInfo, PageContent, ItineraryDay } from '../../types';
import PageTransition from '../../components/PageTransition';

const Admin: React.FC = () => {
  const { 
    isAuthenticated, login, logout, companyInfo, updateCompanyInfo,
    tours, updateTour, deleteTour, addTour,
    inquiries,
    pageContent, updatePageContent,
    changePassword, resetData,
    saving,
    selectedCurrency, availableCurrencies, convertPrice, refreshRates, currencyRates
  } = useData();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'global' | 'pages' | 'seo' | 'tours' | 'inquiries' | 'settings'>('dashboard');
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  
  const [expandedSection, setExpandedSection] = useState<string | null>('home');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cloudinaryWidgetRef = useRef<any>(null);
  const uploadCallbackRef = useRef<((url: string) => void) | null>(null);

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Only use toggle on mobile
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Cloudinary Widget
  useEffect(() => {
    if (typeof window !== 'undefined' && window.cloudinary) {
      cloudinaryWidgetRef.current = window.cloudinary.createUploadWidget({
        cloudName: 'ds2mbrzcn',
        uploadPreset: 'qqk2urzm',
        folder: 'tomsafaris/gallery',
        sources: ['local', 'url'],
        multiple: false,
      }, (error, result) => {
        if (!error && result && result.event === 'success') {
          if (uploadCallbackRef.current) {
            uploadCallbackRef.current(result.info.secure_url);
          }
        }
      });
    }
  }, []);

  const openCloudinaryWidget = (onSuccess: (url: string) => void) => {
    uploadCallbackRef.current = onSuccess;
    if (cloudinaryWidgetRef.current) {
      cloudinaryWidgetRef.current.open();
    } else {
      showToast('Uploader not ready. Please refresh.', 'error');
    }
  };
  
  const handleManualUrl = (updateFn: (url: string) => void) => {
    const url = prompt("Enter the full image URL:");
    if (url) {
        try {
            new URL(url); // Basic validation
            updateFn(url);
            showToast("Image URL updated!");
        } catch (e) {
            showToast("Invalid URL provided.", "error");
        }
    }
  };


  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) setError('');
    else setError('Invalid password');
  };

  const handlePasswordChange = () => {
    if (newPassword && newPassword === confirmPassword) {
      changePassword(newPassword);
      showToast("Password updated successfully!");
      setNewPassword('');
      setConfirmPassword('');
    } else {
      showToast("Passwords do not match.", "error");
    }
  };

  const handlePageImageUpload = (section: keyof PageContent, subSection: string) => {
    openCloudinaryWidget((secureUrl) => {
      const newContent = JSON.parse(JSON.stringify(pageContent));
      if (newContent[section] && newContent[section][subSection]) {
        newContent[section][subSection].image = secureUrl;
        updatePageContent(newContent);
        showToast("Image updated!");
      }
    });
  };

  const handleTourImageUpload = (type: 'main' | 'gallery') => {
    if (!editingTour) return;
    openCloudinaryWidget((secureUrl) => {
      if (type === 'main') {
        setEditingTour(prev => prev ? { ...prev, image: secureUrl } : null);
      } else {
        setEditingTour(prev => prev ? { ...prev, gallery: [...(prev.gallery || []), secureUrl] } : null);
      }
      showToast('Image uploaded successfully!');
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-900 relative p-4">
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
  
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'global', label: 'Global Settings', icon: Globe },
    { id: 'pages', label: 'Pages CMS', icon: Layout },
    { id: 'seo', label: 'SEO', icon: SlidersHorizontal },
    { id: 'tours', label: 'Tours', icon: List },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'System', icon: Settings }
  ];

  const SaveStatus = () => (
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

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <DashboardContent />;
      case 'global': return <GlobalSettings />;
      case 'pages': return <PageEditor />;
      case 'seo': return <SEOEditor />;
      case 'tours': return <ToursManager />;
      case 'inquiries': return <InquiriesManager />;
      case 'settings': return <SystemSettings />;
      default: return null;
    }
  };

  const DashboardContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{tours.length}</h3><p className="text-stone-500">Total Tours</p></div>
        <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{inquiries.filter(i => i.status === 'New').length}</h3><p className="text-stone-500">New Inquiries</p></div>
        <div className="glass-card p-6 rounded-2xl"><h3 className="text-4xl font-bold">{Object.keys(currencyRates).length}</h3><p className="text-stone-500">Currencies Loaded</p></div>
      </div>
      <div className="glass-card p-8 rounded-2xl border-2 border-safari-leaf/30">
        <h3 className="text-2xl font-bold text-safari-leaf mb-2 flex items-center gap-2"><CheckCircle size={24}/> Content is Live!</h3>
        <p className="text-stone-600 mb-6 max-w-3xl">
          All changes you make are saved to the cloud automatically. Your updates will be visible to users worldwide in real-time. There is no "publish" step.
        </p>
      </div>
    </div>
  );

  const GlobalSettings = () => (
    <div className="space-y-6">
        <div className="glass-card p-6 md:p-8 rounded-3xl">
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
        <div className="glass-card p-6 md:p-8 rounded-3xl">
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
                 <div><label className="text-xs font-bold uppercase text-stone-400">Instagram Link</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.social.instagram} onChange={(e) => updateCompanyInfo({...companyInfo, social: {...companyInfo.social, instagram: e.target.value}})} /></div>
                 <div><label className="text-xs font-bold uppercase text-stone-400">Facebook Link</label>
                <input className="w-full p-3 border rounded-lg" value={companyInfo.social.facebook} onChange={(e) => updateCompanyInfo({...companyInfo, social: {...companyInfo.social, facebook: e.target.value}})} /></div>
            </div>
        </div>
    </div>
  );

  const PageEditor = () => (
    <div className="space-y-4">
        <div className="glass-card rounded-2xl overflow-hidden">
            <button onClick={() => setExpandedSection(expandedSection === 'home' ? null : 'home')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg text-left">
                <span>Home Page Content</span> {expandedSection === 'home' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'home' && (
                <div className="p-4 sm:p-6 space-y-6">
                    <div className="space-y-4 border-b pb-6">
                        <h4 className="font-bold text-safari-sunset">Hero Section</h4>
                        <input className="w-full p-3 border rounded" placeholder="Hero Title" value={pageContent.home.hero.title} onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, hero: {...pageContent.home.hero, title: e.target.value}}})} />
                        <textarea className="w-full p-3 border rounded" placeholder="Hero Subtitle" value={pageContent.home.hero.subtitle} onChange={(e) => updatePageContent({...pageContent, home: {...pageContent.home, hero: {...pageContent.home.hero, subtitle: e.target.value}}})} />
                         <div className="flex items-center gap-4">
                            {pageContent.home.hero.image && <img src={pageContent.home.hero.image} className="w-24 h-16 object-cover rounded-lg border" alt="Hero Preview"/>}
                            <div>
                                 <label className="text-xs font-bold uppercase text-stone-400 block mb-2">Hero Image</label>
                                 <div className="flex gap-2">
                                     <button onClick={() => handlePageImageUpload('home', 'hero')} className="cursor-pointer bg-stone-200 px-4 py-2 rounded text-sm font-bold inline-flex items-center gap-2 hover:bg-stone-300">
                                         <Upload size={14} /> Upload
                                     </button>
                                     <button onClick={() => handleManualUrl(url => { const newContent = JSON.parse(JSON.stringify(pageContent)); newContent.home.hero.image = url; updatePageContent(newContent); })} className="cursor-pointer bg-stone-200 px-4 py-2 rounded text-sm font-bold inline-flex items-center gap-2 hover:bg-stone-300">
                                         <LinkIcon size={14} /> Paste URL
                                     </button>
                                 </div>
                            </div>
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
        <div className="glass-card rounded-2xl overflow-hidden">
            <button onClick={() => setExpandedSection(expandedSection === 'about' ? null : 'about')} className="w-full p-6 flex justify-between items-center bg-stone-100/50 hover:bg-stone-200/50 font-bold text-lg text-left">
                <span>About Page Content</span> {expandedSection === 'about' ? <ChevronUp /> : <ChevronDown />}
            </button>
            {expandedSection === 'about' && (
                <div className="p-4 sm:p-6 space-y-6">
                     <div className="space-y-4 border-b pb-6">
                        <h4 className="font-bold text-safari-sunset">Philosophy</h4>
                        <textarea rows={4} className="w-full p-3 border rounded" value={pageContent.about.philosophy.content} onChange={(e) => updatePageContent({...pageContent, about: {...pageContent.about, philosophy: {...pageContent.about.philosophy, content: e.target.value}}})} />
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-safari-sunset">Founder Bio (Cruse)</h4>
                        <input className="w-full p-3 border rounded" value={pageContent.about.founder.title} onChange={(e) => updatePageContent({...pageContent, about: {...pageContent.about, founder: {...pageContent.about.founder, title: e.target.value}}})} />
                        <textarea rows={6} className="w-full p-3 border rounded" value={pageContent.about.founder.content} onChange={(e) => updatePageContent({...pageContent, about: {...pageContent.about, founder: {...pageContent.about.founder, content: e.target.value}}})} />
                        <div className="flex items-center gap-4">
                            {pageContent.about.founder.image && <img src={pageContent.about.founder.image} className="w-20 h-20 object-cover rounded-full border" alt="Founder Preview" />}
                             <div>
                                <label className="text-xs font-bold uppercase text-stone-400 block mb-2">Founder Photo</label>
                                <div className="flex gap-2">
                                    <button onClick={() => handlePageImageUpload('about', 'founder')} className="cursor-pointer bg-stone-200 px-4 py-2 rounded text-sm font-bold inline-flex items-center gap-2 hover:bg-stone-300">
                                        <Upload size={14} /> Upload
                                    </button>
                                    <button onClick={() => handleManualUrl(url => { const newContent = JSON.parse(JSON.stringify(pageContent)); newContent.about.founder.image = url; updatePageContent(newContent); })} className="cursor-pointer bg-stone-200 px-4 py-2 rounded text-sm font-bold inline-flex items-center gap-2 hover:bg-stone-300">
                                        <LinkIcon size={14} /> Paste URL
                                    </button>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );

  const SEOEditor = () => (
      <div className="glass-card p-6 md:p-8 rounded-3xl space-y-8">
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

  const ToursManager = () => (
    <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold">Manage Tours</h2>
            <button onClick={() => setEditingTour({ id: `tour-${Date.now()}`, name: 'New Tour', durationDays: 1, priceUsd: 0, priceGbp: 0, image: '', shortDescription: '', fullDescription: '', highlights: [], itinerary: [], featured: false, category: 'Safari', group: 'Road Safari', gallery: [], keywords: '' })} className="bg-safari-leaf text-white px-4 py-2 rounded-lg flex items-center gap-2"><Plus/> Add Tour</button>
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
    </div>
  );
  
  const InquiriesManager = () => (
      <div>
        <h2 className="text-2xl font-bold mb-6">Inquiries</h2>
        <div className="glass-card rounded-2xl overflow-x-auto">
            <table className="w-full min-w-[600px]">
                <thead className="bg-stone-100/50 text-xs uppercase font-bold text-stone-500"><tr><th className="p-4 text-left">Date</th><th className="p-4 text-left">Name</th><th className="p-4 text-left">Tour</th><th className="p-4 text-left">Status</th></tr></thead>
                <tbody>
                    {inquiries.map(inq => (
                        <tr key={inq.id} className="border-t">
                            <td className="p-4 text-sm">{new Date(inq.submittedAt).toLocaleDateString()}</td>
                            <td className="p-4 font-bold">{inq.name}</td>
                            <td className="p-4">{inq.tourName || 'General'}</td>
                            <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-bold ${inq.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-stone-100 text-stone-600'}`}>{inq.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
  );

  const SystemSettings = () => (
    <div className="space-y-6">
        <div className="glass-card p-6 md:p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Security</h3>
            <div className="space-y-4 max-w-sm">
                <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full p-3 border rounded-lg" />
                <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full p-3 border rounded-lg" />
                <button onClick={handlePasswordChange} className="bg-safari-leaf text-white px-6 py-3 rounded-lg font-bold">Change Password</button>
            </div>
        </div>
        <div className="glass-card p-6 md:p-8 rounded-3xl border-2 border-red-500/20">
            <h3 className="text-2xl font-bold mb-2 text-red-700">Danger Zone</h3>
            <p className="text-sm text-stone-500 mb-6">This action is irreversible and will delete all your custom content from the cloud.</p>
            <button onClick={resetData} className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-bold">Reset Website Data</button>
        </div>
    </div>
  );
  
  const activeTabName = sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard';

  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row">
        {/* Mobile Header */}
        <header className="md:hidden bg-stone-900 text-white p-4 flex justify-between items-center sticky top-0 z-40">
           <div className="font-bold text-lg">Admin Panel</div>
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
             <Menu size={24} />
           </button>
        </header>

        {/* Sidebar */}
        <aside className={`fixed md:relative top-0 left-0 h-full md:h-auto z-50 bg-stone-900 text-stone-300 flex flex-col p-4 w-64 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold text-lg text-white p-4">Admin Panel<span className="block text-xs text-safari-gold">Tom "Cruse"</span></div>
            <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}><X/></button>
          </div>
          <nav className="flex-grow space-y-2">
            {sidebarItems.map(item => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === item.id ? 'bg-safari-gold text-stone-900 font-bold' : 'hover:bg-stone-800'}`}>
                <item.icon size={18} /><span>{item.label}</span>
              </button>
            ))}
          </nav>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors mt-4"><LogOut size={18}/><span>Logout</span></button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <h1 className="text-3xl font-bold text-stone-800">{activeTabName}</h1>
              <SaveStatus />
          </div>
          {renderContent()}
        </main>

        {/* Tour Edit Modal */}
        <AnimatePresence>
            {editingTour && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50 backdrop-blur-sm">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl max-h-[90vh] flex flex-col">
                        <div className="p-4 sm:p-6 border-b flex justify-between items-center bg-stone-50 rounded-t-2xl">
                            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2"><Edit2 size={18}/> Edit Tour: {editingTour.name}</h2>
                            <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-stone-200 rounded-full"><X /></button>
                        </div>
                        <div className="p-4 sm:p-6 space-y-8 overflow-y-auto">
                           
                           {/* SECTION 1: BASIC INFO */}
                           <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase text-safari-earth border-b pb-2">Basic Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div><label className="text-xs font-bold uppercase text-stone-400">Tour Name</label><input value={editingTour.name} onChange={e => setEditingTour({...editingTour, name: e.target.value})} className="w-full p-2 border rounded" /></div>
                                    <div><label className="text-xs font-bold uppercase text-stone-400">Duration (Days)</label><input type="number" value={editingTour.durationDays} onChange={e => setEditingTour({...editingTour, durationDays: Number(e.target.value)})} className="w-full p-2 border rounded" /></div>
                                    <div><label className="text-xs font-bold uppercase text-stone-400">Category</label>
                                        <select value={editingTour.category} onChange={e => setEditingTour({...editingTour, category: e.target.value})} className="w-full p-2 border rounded">
                                            <option value="Safari">Safari</option><option value="Coastal">Coastal</option><option value="Trek">Trek</option><option value="Day Trip">Day Trip</option>
                                        </select>
                                    </div>
                                    <div><label className="text-xs font-bold uppercase text-stone-400">Group</label>
                                        <select value={editingTour.group} onChange={e => setEditingTour({...editingTour, group: e.target.value})} className="w-full p-2 border rounded">
                                            <option value="Road Safari">Road Safari</option><option value="Flight Safari">Flight Safari</option><option value="Excursion">Excursion</option><option value="Trek">Trek</option><option value="Custom">Custom</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={editingTour.featured} onChange={e => setEditingTour({...editingTour, featured: e.target.checked})} className="w-5 h-5 text-safari-leaf" />
                                    <label className="font-bold">Mark as Featured Tour</label>
                                </div>
                           </div>

                           {/* SECTION 2: DESCRIPTIONS */}
                           <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase text-safari-earth border-b pb-2">Descriptions & SEO</h4>
                                <div><label className="text-xs font-bold uppercase text-stone-400">Short Description (Card)</label><textarea rows={2} value={editingTour.shortDescription} onChange={e => setEditingTour({...editingTour, shortDescription: e.target.value})} className="w-full p-2 border rounded" /></div>
                                <div><label className="text-xs font-bold uppercase text-stone-400">Full Description (Page)</label><textarea rows={4} value={editingTour.fullDescription} onChange={e => setEditingTour({...editingTour, fullDescription: e.target.value})} className="w-full p-2 border rounded" /></div>
                                <div><label className="text-xs font-bold uppercase text-stone-400">Highlights (Comma Separated)</label><input value={editingTour.highlights.join(', ')} onChange={e => setEditingTour({...editingTour, highlights: e.target.value.split(',').map(s=>s.trim())})} className="w-full p-2 border rounded" placeholder="e.g. Lions, Beach, Sunset" /></div>
                                <div><label className="text-xs font-bold uppercase text-stone-400">Keywords (Comma Separated)</label><input value={editingTour.keywords} onChange={e => setEditingTour({...editingTour, keywords: e.target.value})} className="w-full p-2 border rounded" placeholder="e.g. tsavo east safari, salt lick" /></div>
                           </div>

                           {/* SECTION 3: PRICING */}
                           <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase text-safari-earth border-b pb-2">Pricing</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div><label className="text-xs font-bold uppercase text-stone-400">Price (USD)</label><input type="number" value={editingTour.priceUsd} onChange={e => setEditingTour({...editingTour, priceUsd: Number(e.target.value)})} className="w-full p-2 border rounded" /></div>
                                    <div><label className="text-xs font-bold uppercase text-stone-400">Price (GBP) - Auto Calculated</label><input type="number" value={Math.ceil(editingTour.priceUsd * (currencyRates['GBP'] || 0.79))} disabled className="w-full p-2 border rounded bg-stone-100" /></div>
                                </div>
                           </div>

                           {/* SECTION 4: IMAGES */}
                           <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase text-safari-earth border-b pb-2">Media</h4>
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                    <div className="w-32 h-32 bg-stone-100 rounded-lg overflow-hidden border flex-shrink-0">
                                        {editingTour.image ? <img src={editingTour.image} className="w-full h-full object-cover" /> : <div className="flex items-center justify-center h-full text-stone-300"><ImageIcon/></div>}
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase text-stone-400 block mb-2">Main Cover Image</label>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleTourImageUpload('main')} className="cursor-pointer bg-safari-sky text-white px-4 py-2 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-blue-600 transition-colors">
                                                <Upload size={16}/> Upload
                                            </button>
                                            <button onClick={() => handleManualUrl(url => setEditingTour(prev => prev ? { ...prev, image: url } : null))} className="cursor-pointer bg-stone-200 px-4 py-2 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-stone-300 transition-colors">
                                                <LinkIcon size={16}/> Paste URL
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-xs font-bold uppercase text-stone-400 block mb-2">Gallery Images</label>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-2">
                                        {editingTour.gallery && editingTour.gallery.map((img, idx) => (
                                            <div key={idx} className="relative w-20 h-20 rounded overflow-hidden group">
                                                <img src={img} className="w-full h-full object-cover" />
                                                <button onClick={() => { const newG = [...editingTour.gallery]; newG.splice(idx, 1); setEditingTour({...editingTour, gallery: newG}) }} className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center"><Trash2 size={16}/></button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleTourImageUpload('gallery')} className="cursor-pointer bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-stone-300 transition-colors">
                                            <Plus size={16}/> Add via Upload
                                        </button>
                                        <button onClick={() => handleManualUrl(url => setEditingTour(prev => prev ? { ...prev, gallery: [...(prev.gallery || []), url] } : null))} className="cursor-pointer bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-stone-300 transition-colors">
                                            <LinkIcon size={16}/> Add via URL
                                        </button>
                                    </div>
                                </div>
                           </div>

                           {/* SECTION 5: ITINERARY */}
                           <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase text-safari-earth border-b pb-2">Itinerary Builder</h4>
                                <div className="space-y-4 max-h-[40vh] overflow-y-auto p-1">
                                    {editingTour.itinerary && editingTour.itinerary.length > 0 ? (
                                        editingTour.itinerary.map((day, index) => (
                                            <div key={index} className="bg-stone-50 p-4 rounded-xl border border-stone-200 relative">
                                                <div className="flex justify-between items-start gap-4">
                                                    <div className="flex-grow space-y-3">
                                                         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                            <span className="font-black text-safari-leaf text-lg bg-white px-3 py-1 rounded-lg border flex-shrink-0">Day {day.day}</span>
                                                            <div className="w-full">
                                                                <label className="text-xs font-bold text-stone-400 block">Title</label>
                                                                <input placeholder="e.g., Arrival in Tsavo East" value={day.title} onChange={e => { const newItinerary = [...editingTour.itinerary]; newItinerary[index].title = e.target.value; setEditingTour({...editingTour, itinerary: newItinerary}); }} className="p-2 border rounded w-full" />
                                                            </div>
                                                        </div>
                                                         <div>
                                                            <label className="text-xs font-bold text-stone-400 block">Description</label>
                                                            <textarea placeholder="Describe the day's activities..." value={day.description} rows={3} onChange={e => { const newItinerary = [...editingTour.itinerary]; newItinerary[index].description = e.target.value; setEditingTour({...editingTour, itinerary: newItinerary}); }} className="p-2 border rounded w-full text-sm" />
                                                        </div>
                                                    </div>
                                                     <button onClick={() => { const newItinerary = editingTour.itinerary.filter((_, i) => i !== index); setEditingTour({...editingTour, itinerary: newItinerary}); }} className="text-red-500 hover:bg-red-100 p-2 rounded-full absolute top-2 right-2"><Trash2 size={16}/></button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-6 text-stone-500 bg-stone-100 rounded-lg">
                                            <p>No itinerary days yet. Add one to get started!</p>
                                        </div>
                                    )}
                                </div>
                                <button onClick={() => { const newDay = { day: editingTour.itinerary.length + 1, title: '', description: '' }; setEditingTour({...editingTour, itinerary: [...editingTour.itinerary, newDay]}); }} className="mt-2 text-sm bg-safari-leaf text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-green-800 transition-colors">
                                    <Plus size={16}/> Add Day
                                </button>
                           </div>
                        </div>
                        <div className="p-4 sm:p-6 border-t flex justify-end gap-4 bg-stone-50 rounded-b-2xl">
                            <button onClick={() => setEditingTour(null)} className="px-4 py-2 border rounded-lg hover:bg-stone-200 font-bold text-stone-600">Cancel</button>
                            <button onClick={() => { editingTour.id.startsWith('tour-') ? addTour(editingTour) : updateTour(editingTour); setEditingTour(null); showToast("Tour saved and is now live!"); }} className="px-6 py-2 bg-safari-leaf text-white rounded-lg font-bold shadow-lg hover:bg-green-800 transition-all flex items-center gap-2"><Save size={18}/> Save Changes</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
        
        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className={`fixed top-5 right-5 p-4 rounded-lg text-white font-bold flex items-center gap-3 ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} shadow-2xl z-50`}>
              {toast.type === 'success' ? <CheckCircle /> : <AlertCircle />} {toast.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Admin;
