// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { Lock, Save, LogOut, Globe, Layout, Settings, Home, List, MessageSquare, Image as ImageIcon, ChevronRight, CheckCircle, AlertCircle, Plus, Edit2, Trash2, X, ChevronDown, ChevronUp, MapPin, Calendar, FileText, BarChart, SlidersHorizontal, Search, Upload, Menu, Zap, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tour, ItineraryDay, BlogPost } from '../../types';
import PageTransition from '../../components/PageTransition';

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

// --- Sub-components (Views) ---

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
              Your media uploads are powered by Cloudinary CDN. You can now upload **Videos** and **Images** directly.
            </p>
          </div>
        </div>
    );
};

const GlobalSettingsView = () => {
    const { companyInfo, updateCompanyInfo } = useData();
    return (
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
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Zap size={20}/> Animation Effects</h3>
              <div className="flex items-center justify-between">
                <p className="text-stone-600">Enable physics-based animations across the website.</p>
                <button
                  onClick={() => updateCompanyInfo({...companyInfo, animationsEnabled: !companyInfo.animationsEnabled})}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                    companyInfo.animationsEnabled ? 'bg-safari-emerald' : 'bg-stone-300'
                  }`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                      companyInfo.animationsEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
        </div>
    );
};

const PageEditorView = () => {
    const { pageContent, updatePageContent } = useData();
    const [expandedSection, setExpandedSection] = useState<string | null>('home');

    return (
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
                            <CloudinaryImageUploader
                                label="Hero Background Media (Image or Video)"
                                currentImageUrl={pageContent.home.hero.image}
                                onUploadSuccess={(url) => {
                                    const newContent = JSON.parse(JSON.stringify(pageContent));
                                    newContent.home.hero.image = url;
                                    updatePageContent(newContent);
                                }}
                            />
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
                            <CloudinaryImageUploader
                                label="Founder Photo"
                                currentImageUrl={pageContent.about.founder.image}
                                onUploadSuccess={(url) => {
                                    const newContent = JSON.parse(JSON.stringify(pageContent));
                                    newContent.about.founder.image = url;
                                    updatePageContent(newContent);
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const SEOEditorView = () => {
    const { pageContent, updatePageContent } = useData();
    return (
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
};

const BlogManagerView = ({ showToast }: { showToast: (msg: string, type?: 'success' | 'error') => void }) => {
    const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useData();
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const generateSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Safari Stories</h2>
          <button onClick={() => setEditingPost({ id: `post-${Date.now()}`, slug: '', title: 'New Post', excerpt: '', content: '', category: 'General', date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), image: '' })} className="bg-safari-leaf text-white px-4 py-2 rounded-lg flex items-center gap-2"><Plus/> Add Post</button>
        </div>
        <div className="glass-card rounded-2xl overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-stone-100/50 text-xs uppercase font-bold text-stone-500"><tr><th className="p-4 text-left">Title</th><th className="p-4 text-left">Category</th><th className="p-4 text-left">Date</th><th className="p-4 text-right">Actions</th></tr></thead>
            <tbody>
              {(blogPosts || []).map(post => (
                <tr key={post.id} className="border-t">
                  <td className="p-4 font-bold">{post.title}</td>
                  <td className="p-4"><span className="bg-stone-100 px-2 py-1 rounded text-xs uppercase font-bold text-stone-500">{post.category}</span></td>
                  <td className="p-4 text-sm text-stone-500">{post.date}</td>
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
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="p-6 border-b flex justify-between items-center bg-stone-50 rounded-t-2xl">
                          <h2 className="text-xl font-bold">Edit Safari Story</h2>
                          <button onClick={() => setEditingPost(null)} className="p-2 hover:bg-stone-200 rounded-full"><X /></button>
                      </div>
                      <div className="p-6 space-y-6 overflow-y-auto">
                          <CloudinaryImageUploader label="Cover Image" currentImageUrl={editingPost.image} onUploadSuccess={(url) => setEditingPost({...editingPost, image: url})} />
                          <div><label className="text-xs font-bold uppercase text-stone-400">Title</label><input className="w-full p-3 border rounded" value={editingPost.title} onChange={(e) => setEditingPost({...editingPost, title: e.target.value})} /></div>
                          <div><label className="text-xs font-bold uppercase text-stone-400">Category</label><input className="w-full p-3 border rounded" value={editingPost.category} onChange={(e) => setEditingPost({...editingPost, category: e.target.value})} /></div>
                          <div><label className="text-xs font-bold uppercase text-stone-400">Excerpt (Short Summary)</label><textarea rows={2} className="w-full p-3 border rounded" value={editingPost.excerpt} onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})} /></div>
                          <div><label className="text-xs font-bold uppercase text-stone-400">Full Content</label><textarea rows={10} className="w-full p-3 border rounded font-sans" value={editingPost.content} onChange={(e) => setEditingPost({...editingPost, content: e.target.value})} placeholder="Write your article here..." /></div>
                      </div>
                        <div className="p-6 border-t flex justify-end gap-4 bg-stone-50 rounded-b-2xl">
                          <button onClick={() => setEditingPost(null)} className="px-4 py-2 border rounded-lg font-bold">Cancel</button>
                          <button onClick={() => {
                            const postToSave = { ...editingPost, slug: generateSlug(editingPost.title) };
                            const isExistingPost = blogPosts.some(p => p.id === postToSave.id);
                            
                            if (isExistingPost) {
                              updateBlogPost(postToSave);
                            } else {
                              addBlogPost(postToSave);
                            }

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

const ToursManagerView = ({ showToast }: { showToast: (msg: string, type?: 'success' | 'error') => void }) => {
    const { tours, addTour, updateTour, deleteTour } = useData();
    const [editingTour, setEditingTour] = useState<Tour | null>(null);

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
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-7xl max-h-[90vh] flex flex-col shadow-2xl">
                        <div className="p-4 sm:p-6 border-b flex justify-between items-center bg-stone-50 rounded-t-2xl sticky top-0">
                            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2"><Edit2 size={18}/> Edit Tour: {editingTour.name}</h2>
                            <button onClick={() => setEditingTour(null)} className="p-2 hover:bg-stone-200 rounded-full"><X /></button>
                        </div>
                        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-5 gap-8 overflow-y-auto">
                            {/* Column 1: Core Details & Itinerary */}
                            <div className="lg:col-span-3 space-y-6">
                                <div className="p-6 rounded-2xl bg-white border">
                                    <h3 className="font-bold text-lg mb-4">Core Details</h3>
                                    <div className="space-y-4">
                                        <div><label className="text-xs font-bold uppercase text-stone-400">Tour Name</label><input type="text" value={editingTour.name} onChange={e => handleTourChange('name', e.target.value)} className="w-full p-3 border rounded-lg" /></div>
                                        <div><label className="text-xs font-bold uppercase text-stone-400">Short Description</label><textarea rows={3} value={editingTour.shortDescription} onChange={e => handleTourChange('shortDescription', e.target.value)} className="w-full p-3 border rounded-lg" /></div>
                                        <div><label className="text-xs font-bold uppercase text-stone-400">Full Description</label><textarea rows={6} value={editingTour.fullDescription} onChange={e => handleTourChange('fullDescription', e.target.value)} className="w-full p-3 border rounded-lg" /></div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border">
                                    <h3 className="font-bold text-lg mb-4">Itinerary Builder</h3>
                                    <div className="space-y-4">
                                        {editingTour.itinerary.map((day, index) => (
                                            <div key={index} className="p-4 border rounded-lg bg-stone-50/50 relative">
                                                <button onClick={() => removeItineraryDay(index)} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-100 rounded-full"><Trash2 size={14} /></button>
                                                <h4 className="font-bold mb-2">Day {day.day}</h4>
                                                <input type="text" placeholder="Day Title" value={day.title} onChange={e => handleItineraryChange(index, 'title', e.target.value)} className="w-full p-2 border rounded-md mb-2" />
                                                <textarea rows={3} placeholder="Day Description" value={day.description} onChange={e => handleItineraryChange(index, 'description', e.target.value)} className="w-full p-2 border rounded-md" />
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={addItineraryDay} className="mt-4 bg-blue-500 text-white px-4 py-2 text-sm font-bold rounded-lg flex items-center gap-2"><Plus size={16}/> Add Day</button>
                                </div>
                            </div>

                            {/* Column 2: Media & Settings */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="p-6 rounded-2xl bg-white border">
                                     <h3 className="font-bold text-lg mb-4">Settings</h3>
                                     <div className="grid grid-cols-2 gap-4">
                                         <div><label className="text-xs font-bold uppercase text-stone-400">Price (USD)</label><input type="number" value={editingTour.priceUsd} onChange={e => handleTourChange('priceUsd', Number(e.target.value))} className="w-full p-3 border rounded-lg" /></div>
                                         <div><label className="text-xs font-bold uppercase text-stone-400">Duration (Days)</label><input type="number" value={editingTour.durationDays} onChange={e => handleTourChange('durationDays', Number(e.target.value))} className="w-full p-3 border rounded-lg" /></div>
                                         <div><label className="text-xs font-bold uppercase text-stone-400">Category</label>
                                            <select value={editingTour.category} onChange={e => handleTourChange('category', e.target.value)} className="w-full p-3 border rounded-lg bg-white"><option>Safari</option><option>Coastal</option><option>Trek</option><option>Day Trip</option></select>
                                         </div>
                                         <div><label className="text-xs font-bold uppercase text-stone-400">Group</label>
                                            <select value={editingTour.group} onChange={e => handleTourChange('group', e.target.value)} className="w-full p-3 border rounded-lg bg-white"><option>Excursion</option><option>Road Safari</option><option>Flight Safari</option><option>Trek</option><option>Custom</option></select>
                                         </div>
                                         <div className="col-span-2 flex items-center justify-between p-3 border rounded-lg">
                                            <label className="font-bold text-sm">Featured Tour?</label>
                                            <button onClick={() => handleTourChange('featured', !editingTour.featured)} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${editingTour.featured ? 'bg-safari-emerald' : 'bg-stone-300'}`}>
                                              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${editingTour.featured ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                         </div>
                                     </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border">
                                     <h3 className="font-bold text-lg mb-4">Media</h3>
                                     <CloudinaryImageUploader label="Cover Media (Image/Video)" currentImageUrl={editingTour.image} onUploadSuccess={(url) => handleTourChange('image', url)} />
                                     <div>
                                         <h4 className="font-bold text-sm mb-2">Image/Video Gallery</h4>
                                         <div className="grid grid-cols-3 gap-2 mb-2">
                                             {(editingTour.gallery || []).map((img, index) => (
                                                 <div key={index} className="relative group">
                                                     {isVideo(img) ? (
                                                       <video src={img} className="w-full h-20 object-cover rounded" />
                                                     ) : (
                                                       <img src={img} className="w-full h-20 object-cover rounded" />
                                                     )}
                                                     <button onClick={() => removeGalleryImage(index)} className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={12}/></button>
                                                 </div>
                                             ))}
                                         </div>
                                         <CloudinaryImageUploader label="Add to gallery" onUploadSuccess={handleGalleryUpload} />
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 border-t flex justify-end gap-4 bg-stone-50 rounded-b-2xl sticky bottom-0">
                            <button onClick={() => setEditingTour(null)} className="px-4 py-2 border rounded-lg hover:bg-stone-200 font-bold text-stone-600">Cancel</button>
                            <button onClick={() => { editingTour.id.startsWith('tour-') ? addTour(editingTour) : updateTour(editingTour); setEditingTour(null); showToast("Tour saved and is now live!"); }} className="px-6 py-2 bg-safari-leaf text-white rounded-lg font-bold shadow-lg hover:bg-green-800 transition-all flex items-center gap-2"><Save size={18}/> Save Changes</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    );
};

const InquiriesManagerView = () => {
    const { inquiries } = useData();
    return (
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
};

const SystemSettingsView = ({ showToast }: { showToast: (msg: string, type?: 'success' | 'error') => void }) => {
    const { changePassword, resetData } = useData();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = () => {
        if (newPassword && newPassword === confirmPassword) {
          changePassword(newPassword).then(success => {
            if(success) {
              showToast("Password updated successfully!");
              setNewPassword('');
              setConfirmPassword('');
            } else {
              showToast("Password change failed. You may need to log in again.", "error");
            }
          });
        } else {
          showToast("Passwords do not match.", "error");
        }
    };

    return (
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
};


const Admin: React.FC = () => {
  const { isAuthenticated, login, logout, saving } = useData();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@tomsafaris.co.ke');
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
      else setError('Invalid credentials. Please try again.');
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-900 relative p-4">
        <div className="glass-dark p-10 rounded-3xl max-w-md w-full relative z-10 text-center text-white">
            <Lock className="w-12 h-12 text-safari-emerald mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">CMS Login</h2>
            <p className="text-stone-400 mb-6">Tom Safaris & Adventures</p>
            <form onSubmit={handleLogin} className="space-y-4">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin Email" className="w-full p-4 rounded-xl text-center font-bold text-stone-900" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (default: 12345)" className="w-full p-4 rounded-xl text-center font-bold text-stone-900" />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" className="w-full py-4 bg-safari-emerald text-stone-900 font-bold rounded-xl">Unlock</button>
            </form>
        </div>
      </div>
    );
  }
  
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart },
    { id: 'global', label: 'Global Settings', icon: Globe },
    { id: 'pages', label: 'Pages CMS', icon: Layout },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'seo', label: 'SEO', icon: SlidersHorizontal },
    { id: 'tours', label: 'Tours', icon: List },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'System', icon: Settings }
  ];

  const activeTabName = sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard';
  
  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'global': return <GlobalSettingsView />;
      case 'pages': return <PageEditorView />;
      case 'seo': return <SEOEditorView />;
      case 'tours': return <ToursManagerView showToast={showToast} />;
      case 'inquiries': return <InquiriesManagerView />;
      case 'settings': return <SystemSettingsView showToast={showToast} />;
      case 'blog': return <BlogManagerView showToast={showToast} />;
      default: return null;
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row">
        <header className="md:hidden bg-stone-900 text-white p-4 flex justify-between items-center sticky top-0 z-40">
           <div className="font-bold text-lg">Admin Panel</div>
           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
             <Menu size={24} />
           </button>
        </header>

        <aside className={`fixed md:relative top-0 left-0 h-full md:h-auto z-50 bg-stone-900 text-stone-300 flex flex-col p-4 w-64 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold text-lg text-white p-4">Admin Panel<span className="block text-xs text-safari-gold">Cruse Experiences</span></div>
            <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}><X/></button>
          </div>
          <nav className="flex-grow space-y-2">
            {sidebarItems.map(item => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === item.id ? 'bg-safari-emerald text-stone-900 font-bold' : 'hover:bg-stone-800'}`}>
                <item.icon size={18} /><span>{item.label}</span>
              </button>
            ))}
          </nav>
          <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors mt-4"><LogOut size={18}/><span>Logout</span></button>
        </aside>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <h1 className="text-3xl font-bold text-stone-800">{activeTabName}</h1>
              <SaveStatus saving={saving} />
          </div>
          {renderContent()}
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