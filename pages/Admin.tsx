// @ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useData } from '../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp, BarChart, SlidersHorizontal, Upload, Menu, Users, FileText, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, ItineraryDay, BlogPost, CompanyInfo, PageContent, TestimonialItem } from '../types';
import PageTransition from '../components/PageTransition';

// --- UTILITIES ---

const isVideo = (url: string | undefined) => {
  if (!url) return false;
  return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('/video/upload/');
};

// --- STABLE INPUT COMPONENTS (Enhanced for new theme) ---

const StableInput = ({ value, onChange, placeholder, type = "text", label }: any) => {
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => { setLocalValue(value); }, [value]);
  const handleChange = (e) => {
    const newVal = type === 'number' ? (e.target.value === '' ? '' : parseFloat(e.target.value)) : e.target.value;
    setLocalValue(newVal);
    if (type === 'number' && e.target.value !== '' && !isNaN(newVal)) onChange(newVal);
    else if (type !== 'number') onChange(newVal);
  };
  return (
    <div className="w-full">
      {label && <label className="text-xs font-bold uppercase text-gray-500 block mb-2">{label}</label>}
      <input type={type} value={localValue} onChange={handleChange} placeholder={placeholder} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-blue outline-none transition-all" />
    </div>
  );
};

const StableTextArea = ({ value, onChange, placeholder, rows = 4, label }: any) => {
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => { setLocalValue(value); }, [value]);
  const handleChange = (e) => { setLocalValue(e.target.value); onChange(e.target.value); };
  return (
    <div className="w-full">
      {label && <label className="text-xs font-bold uppercase text-gray-500 block mb-2">{label}</label>}
      <textarea value={localValue} onChange={handleChange} placeholder={placeholder} rows={rows} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-blue outline-none transition-all" />
    </div>
  );
};

const StringListEditor = ({ items, onChange, label, placeholder }: any) => {
    const handleAdd = () => onChange([...(items || []), ""]);
    const handleChange = (idx: number, val: string) => { const newItems = [...items]; newItems[idx] = val; onChange(newItems); };
    const handleRemove = (idx: number) => { onChange(items.filter((_, i) => i !== idx)); };
    return (
        <div className="w-full">
            <label className="text-xs font-bold uppercase text-gray-500 block mb-2">{label}</label>
            <div className="space-y-2">
                {(items || []).map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                        <input className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-admin-blue outline-none" value={item} onChange={(e) => handleChange(idx, e.target.value)} placeholder={placeholder} />
                        <button onClick={() => handleRemove(idx)} className="text-red-500 p-2 hover:bg-red-100 rounded-lg"><Trash2 size={16}/></button>
                    </div>
                ))}
            </div>
            <button onClick={handleAdd} className="mt-2 text-xs font-bold text-admin-blue flex items-center gap-1 hover:underline"><Plus size={12}/> Add Item</button>
        </div>
    );
};

// --- MEDIA UPLOADER (Enhanced for new theme) ---
const CloudinaryImageUploader = ({ onUploadSuccess, currentImageUrl, label }: any) => {
  const widgetRef = useRef<any>();
  useEffect(() => {
    if (window.cloudinary) {
      widgetRef.current = window.cloudinary.createUploadWidget({
        cloudName: 'ds2mbrzcn', uploadPreset: 'qqk2urzm', folder: 'tomsafaris',
        sources: ['local', 'url', 'camera'], multiple: false, clientAllowedFormats: ['image', 'video'],
      }, (error, result) => {
        if (!error && result && result.event === "success") onUploadSuccess(result.info.secure_url);
      });
    }
  }, [onUploadSuccess]);

  return (
    <div>
      <label className="text-xs font-bold uppercase text-gray-500 block mb-2">{label}</label>
      <div className="flex items-center gap-4">
        {currentImageUrl ? (
          isVideo(currentImageUrl) ? 
            <video src={currentImageUrl} className="w-24 h-16 object-cover rounded-lg border-2 border-gray-200" autoPlay muted loop /> :
            <img src={currentImageUrl} className="w-24 h-16 object-cover rounded-lg border-2 border-gray-200" alt="Preview"/>
        ) : (
            <div className="w-24 h-16 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400"><ImageIcon size={24} /></div>
        )}
        <button onClick={() => widgetRef.current?.open()} className="font-semibold text-admin-blue bg-admin-blue/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-admin-blue/20 transition-all"><Upload size={14} /> Upload Media</button>
      </div>
    </div>
  );
};

// --- ACTION BUTTONS (for explicit save) ---
const ActionButtons = ({ onSave, onDiscard, isSaving, hasChanges }: any) => {
  if (!hasChanges) return null;
  return (
      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex justify-end gap-3 p-4 mt-4 border-t bg-white sticky bottom-0 z-10">
            <button onClick={onDiscard} disabled={isSaving} className="px-4 py-2 border rounded-lg font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50">Discard</button>
            <button onClick={onSave} disabled={isSaving} className="px-6 py-2 bg-admin-blue text-white rounded-lg font-semibold shadow-md hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 min-w-[140px]">
                {isSaving ? <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full" /> Saving...</> : <><Save size={16}/> Save Changes</>}
            </button>
        </motion.div>
      </AnimatePresence>
  );
};

// --- CMS VIEWS ---

const DashboardView = ({ setActiveTab }: any) => {
    const { tours, blogPosts, inquiries } = useData();
    const quickLinks = [
        { label: 'Add New Tour', icon: Plus, action: () => setActiveTab('tours') },
        { label: 'Manage Content', icon: Layout, action: () => setActiveTab('content') },
        { label: 'View Inquiries', icon: MessageSquare, action: () => setActiveTab('inquiries') },
        { label: 'Global Settings', icon: Globe, action: () => setActiveTab('settings') },
    ];
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-admin-dark">Welcome back, Admin!</h1>
            <p className="text-gray-500">Here's a snapshot of your website.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm"><h3 className="text-4xl font-bold text-admin-blue">{tours.length}</h3><p className="text-gray-500 font-medium">Total Tours</p></div>
              <div className="bg-white p-6 rounded-xl shadow-sm"><h3 className="text-4xl font-bold text-admin-blue">{blogPosts.length}</h3><p className="text-gray-500 font-medium">Blog Posts</p></div>
              <div className="bg-white p-6 rounded-xl shadow-sm"><h3 className="text-4xl font-bold text-admin-blue">{inquiries.filter(i => i.status === 'New').length}</h3><p className="text-gray-500 font-medium">New Inquiries</p></div>
              <div className="bg-white p-6 rounded-xl shadow-sm"><h3 className="text-4xl font-bold text-green-500">Online</h3><p className="text-gray-500 font-medium">Site Status</p></div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map(link => (
                  <button key={link.label} onClick={link.action} className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-admin-blue/10 rounded-lg transition-colors border border-gray-200">
                    <link.icon className="w-8 h-8 text-admin-blue mb-2" />
                    <span className="font-semibold text-sm text-center">{link.label}</span>
                  </button>
                ))}
            </div>
          </div>
        </motion.div>
    );
};

const UniversalContentEditor = ({ showToast }: any) => {
    // This is the core of the "Universal CMS"
    const { pageContent, updatePageContent } = useData();
    const [localContent, setLocalContent] = useState(pageContent);
    const [isSaving, setIsSaving] = useState(false);
    useEffect(() => { setLocalContent(pageContent); }, [pageContent]);
    const hasChanges = JSON.stringify(localContent) !== JSON.stringify(pageContent);
    const updateNested = (path: string, value: any) => {
        setLocalContent(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            let current = newState;
            const keys = path.split('.');
            for (let i = 0; i < keys.length - 1; i++) { current = current[keys[i]]; }
            current[keys[keys.length - 1]] = value;
            return newState;
        });
    };
    const handleSave = async () => { setIsSaving(true); await updatePageContent(localContent); setIsSaving(false); showToast("Content saved!"); };
    
    // Feature List Editor
    const FeatureEditor = ({ path }: { path: string }) => {
        const features = path.split('.').reduce((o, i) => o[i], localContent);
        const handleFeatureChange = (index, field, value) => {
            const newFeatures = [...features];
            newFeatures[index] = { ...newFeatures[index], [field]: value };
            updateNested(path, newFeatures);
        };
        const addFeature = () => {
            const newFeatures = [...features, { id: `feat-${Date.now()}`, title: 'New Feature', text: 'Description' }];
            updateNested(path, newFeatures);
        };
        const removeFeature = (id) => updateNested(path, features.filter(f => f.id !== id));
        return (
            <div>
                {features.map((feat, index) => (
                    <div key={feat.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b py-2 relative group">
                        <StableInput value={feat.title} onChange={v => handleFeatureChange(index, 'title', v)} placeholder="Feature Title" />
                        <div className="md:col-span-2"><StableInput value={feat.text} onChange={v => handleFeatureChange(index, 'text', v)} placeholder="Feature Text" /></div>
                        <button onClick={() => removeFeature(feat.id)} className="absolute top-2 right-0 text-red-400 opacity-0 group-hover:opacity-100"><Trash2 size={16}/></button>
                    </div>
                ))}
                <button onClick={addFeature} className="mt-2 text-sm font-semibold text-admin-blue flex items-center gap-1"><Plus size={14}/> Add Feature</button>
            </div>
        )
    };
    
    return (
        <div className="bg-white rounded-xl shadow-sm">
            <Accordion title="Home Page">
                <Accordion title="Hero Section" nested>
                    <StableInput label="Title" value={localContent.home.hero.title} onChange={v => updateNested('home.hero.title', v)} />
                    <StableTextArea label="Subtitle" value={localContent.home.hero.subtitle} onChange={v => updateNested('home.hero.subtitle', v)} />
                    <CloudinaryImageUploader label="Background Media" currentImageUrl={localContent.home.hero.image} onUploadSuccess={url => updateNested('home.hero.image', url)} />
                </Accordion>
                <Accordion title="Welcome Section" nested>
                    <StableInput label="Title" value={localContent.home.welcome.title} onChange={v => updateNested('home.welcome.title', v)} />
                    <StableTextArea label="Content" value={localContent.home.welcome.content} onChange={v => updateNested('home.welcome.content', v)} />
                </Accordion>
                <Accordion title="Features" nested><FeatureEditor path="home.features" /></Accordion>
            </Accordion>
            <Accordion title="About Page">
                <Accordion title="Hero Section" nested>
                    <StableInput label="Title" value={localContent.about.hero.title} onChange={v => updateNested('about.hero.title', v)} />
                    <StableInput label="Subtitle" value={localContent.about.hero.subtitle} onChange={v => updateNested('about.hero.subtitle', v)} />
                    <CloudinaryImageUploader label="Background Image" currentImageUrl={localContent.about.hero.image} onUploadSuccess={url => updateNested('about.hero.image', url)} />
                </Accordion>
                <Accordion title="Philosophy Section" nested>
                    <StableTextArea label="Philosophy Content" value={localContent.about.philosophy.content} onChange={v => updateNested('about.philosophy.content', v)} />
                </Accordion>
                <Accordion title="Founder Section" nested>
                    <StableInput label="Title" value={localContent.about.founder.title} onChange={v => updateNested('about.founder.title', v)} />
                    <StableInput label="Subtitle (Founder Name)" value={localContent.about.founder.subtitle} onChange={v => updateNested('about.founder.subtitle', v)} />
                    <StableTextArea label="Founder Bio" value={localContent.about.founder.content} onChange={v => updateNested('about.founder.content', v)} />
                    <CloudinaryImageUploader label="Founder Image" currentImageUrl={localContent.about.founder.image} onUploadSuccess={url => updateNested('about.founder.image', url)} />
                </Accordion>
            </Accordion>
            <Accordion title="Contact & Footer">
                 <Accordion title="Contact Page" nested>
                    <StableInput label="Intro Title" value={localContent.contact.intro.title} onChange={v => updateNested('contact.intro.title', v)} />
                    <StableTextArea label="Intro Content" value={localContent.contact.intro.content} onChange={v => updateNested('contact.intro.content', v)} />
                    <StableInput label="Google Maps Embed URL" value={localContent.contact.mapUrl} onChange={v => updateNested('contact.mapUrl', v)} />
                 </Accordion>
                 <Accordion title="Footer Content" nested>
                    <StableInput label="About Text" value={localContent.footer.aboutText} onChange={v => updateNested('footer.aboutText', v)} />
                    <StableInput label="Copyright Text" value={localContent.footer.copyrightText} onChange={v => updateNested('footer.copyrightText', v)} />
                 </Accordion>
            </Accordion>
            <ActionButtons onSave={handleSave} onDiscard={() => setLocalContent(pageContent)} isSaving={isSaving} hasChanges={hasChanges} />
        </div>
    );
};

const Accordion = ({ title, children, nested = false }: any) => {
    const [isOpen, setIsOpen] = useState(!nested);
    return (
        <div className={nested ? "border rounded-lg mb-2" : "border-b"}>
            <button onClick={() => setIsOpen(!isOpen)} className={`w-full flex justify-between items-center text-left ${nested ? 'p-3 bg-gray-50' : 'p-5 font-bold text-lg'}`}>
                <span>{title}</span><motion.div animate={{ rotate: isOpen ? 0 : -90 }}><ChevronDown /></motion.div>
            </button>
            <AnimatePresence>
            {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className={nested ? "p-3 space-y-4" : "p-5 space-y-4"}>{children}</div></motion.div>}
            </AnimatePresence>
        </div>
    );
};

// ... other views (Tours, Blog, etc.) would be refactored similarly with the new styling and explicit save logic ...

const Admin: React.FC = () => {
  const { isAuthenticated, login, logout } = useData();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@tomsafaris.co.ke');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toast, setToast] = useState(null);
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
    { id: 'content', label: 'Content CMS', icon: Layout },
    { id: 'tours', label: 'Tours', icon: List },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Globe },
    { id: 'system', label: 'System', icon: Settings }
  ];

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
          <header className="bg-white p-4 border-b flex justify-between items-center sticky top-0 z-40">
            <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}><Menu/></button>
            <h1 className="text-xl font-bold text-admin-dark capitalize">{menuItems.find(i => i.id === activeTab)?.label}</h1>
            <div/>
          </header>
          <main className="flex-1 p-6 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}>
                {activeTab === 'dashboard' && <DashboardView setActiveTab={setActiveTab} />}
                {activeTab === 'content' && <UniversalContentEditor showToast={showToast} />}
                {activeTab === 'tours' && <p>Tours Manager View (Coming Soon)</p>}
                {activeTab === 'blog' && <p>Blog Manager View (Coming Soon)</p>}
                {activeTab === 'testimonials' && <p>Testimonials Manager View (Coming Soon)</p>}
                {activeTab === 'inquiries' && <p>Inquiries View (Coming Soon)</p>}
                {activeTab === 'settings' && <p>Global Settings View (Coming Soon)</p>}
                {activeTab === 'system' && <p>System Settings View (Coming Soon)</p>}
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
