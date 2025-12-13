
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, CompanyInfo, Inquiry, InquiryForm, PageContent, CurrencyConfig, BlogPost, TestimonialItem } from '../types';
import { TOURS, COMPANY_INFO, DEFAULT_PAGE_CONTENT, SUPPORTED_CURRENCIES, SAMPLE_BLOG_POSTS } from '../constants';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, collection, addDoc, getDocs, query, orderBy, enableNetwork, disableNetwork, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updatePassword, User } from 'firebase/auth';

interface CloudData {
  companyInfo: CompanyInfo;
  tours: Tour[];
  pageContent: PageContent;
  blogPosts: BlogPost[];
}

interface DataContextType {
  companyInfo: CompanyInfo;
  tours: Tour[];
  blogPosts: BlogPost[];
  inquiries: Inquiry[];
  pageContent: PageContent;
  updateCompanyInfo: (info: CompanyInfo) => Promise<void>;
  updateTour: (updatedTour: Tour) => Promise<void>;
  addTour: (newTour: Tour) => Promise<void>;
  deleteTour: (id: string) => Promise<void>;
  addBlogPost: (post: BlogPost) => Promise<void>;
  updateBlogPost: (post: BlogPost) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;
  addInquiry: (form: InquiryForm) => Promise<void>;
  updateInquiry: (id: string, status: 'New' | 'In Progress' | 'Closed') => Promise<void>;
  updatePageContent: (content: PageContent) => Promise<void>;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  changePassword: (newPassword: string) => Promise<boolean>;
  logout: () => void;
  resetData: () => Promise<void>;
  syncLocalTours: () => Promise<void>;
  localToursCount: number;
  loading: boolean;
  saving: boolean;
  
  selectedCurrency: CurrencyConfig;
  setCurrency: (code: string) => void;
  currencyRates: Record<string, number>;
  refreshRates: () => Promise<void>;
  convertPrice: (priceInUsd: number) => { amount: number, formatted: string, symbol: string };
  availableCurrencies: CurrencyConfig[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DB_COLLECTION = 'website_content';
const DB_DOC_ID = 'live_data';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [data, setData] = useState<CloudData>({
    companyInfo: COMPANY_INFO,
    tours: TOURS,
    pageContent: DEFAULT_PAGE_CONTENT,
    blogPosts: SAMPLE_BLOG_POSTS,
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyConfig>(() => {
    const savedCode = localStorage.getItem('selectedCurrencyCode');
    return SUPPORTED_CURRENCIES.find(c => c.code === savedCode) || SUPPORTED_CURRENCIES[0];
  });

  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>({ USD: 1 });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);
  
  const saveData = async (newData: CloudData) => {
    if (!auth.currentUser) {
        console.warn("Save attempted while not authenticated. Aborting.");
        return;
    }
    setSaving(true);
    try {
      await setDoc(doc(db, DB_COLLECTION, DB_DOC_ID), newData, { merge: true });
    } catch (e) {
      console.error("Failed to save data to cloud", e);
    } finally {
      setTimeout(() => setSaving(false), 500);
    }
  };

  // Load public data on initial load
  useEffect(() => {
    const loadPublicData = async () => {
      setLoading(true);
      const docRef = doc(db, DB_COLLECTION, DB_DOC_ID);
      try {
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const cloudData = docSnap.data() as CloudData;
          
          // Deep merge page content to prevent new fields from being wiped out
          const mergedPageContent = {
            ...DEFAULT_PAGE_CONTENT, ...cloudData.pageContent,
            home: { ...DEFAULT_PAGE_CONTENT.home, ...cloudData.pageContent?.home },
            about: { ...DEFAULT_PAGE_CONTENT.about, ...cloudData.pageContent?.about },
            contact: { ...DEFAULT_PAGE_CONTENT.contact, ...cloudData.pageContent?.contact },
            footer: { ...DEFAULT_PAGE_CONTENT.footer, ...cloudData.pageContent?.footer },
            seo: { ...DEFAULT_PAGE_CONTENT.seo, ...cloudData.pageContent?.seo },
          };
          
          const mergedCompanyInfo = { ...COMPANY_INFO, ...cloudData.companyInfo };

          setData({
            companyInfo: mergedCompanyInfo,
            tours: cloudData.tours && cloudData.tours.length > 0 ? cloudData.tours : TOURS,
            pageContent: mergedPageContent,
            blogPosts: cloudData.blogPosts && cloudData.blogPosts.length > 0 ? cloudData.blogPosts : SAMPLE_BLOG_POSTS,
          });
        } else {
           console.log("No live data found in Firestore. Using local defaults.");
        }
      } catch (e: any) {
        if (e.code === 'unavailable' || e.message?.includes('offline')) {
           console.log("Firestore offline/unreachable. Using local data.");
        } else {
           console.error("Failed to load cloud data:", e);
        }
      } finally {
        setLoading(false);
      }
    };
    loadPublicData();
  }, []);

  // Load admin-only data (inquiries) when authenticated
  useEffect(() => {
    const loadInquiries = async () => {
      if (isAuthenticated) {
        try {
          const q = query(collection(db, "inquiries"), orderBy("submittedAt", "desc"));
          const querySnapshot = await getDocs(q);
          const fetchedInquiries: Inquiry[] = [];
          querySnapshot.forEach((doc) => {
              fetchedInquiries.push({ ...doc.data(), id: doc.id } as Inquiry);
          });
          setInquiries(fetchedInquiries);
        } catch(e) {
          console.error("Failed to load inquiries.", e);
        }
      } else {
        setInquiries([]);
      }
    };
    loadInquiries();
  }, [isAuthenticated]);


  const fetchRates = async () => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
        return;
    }
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data && data.rates) {
        setCurrencyRates(data.rates);
        localStorage.setItem('currencyRates', JSON.stringify({ rates: data.rates, timestamp: Date.now() }));
      }
    } catch (error) { 
        // Silent failure for rates
        console.debug("Currency rates could not be fetched:", error); 
    }
  };

  useEffect(() => {
    const savedRates = localStorage.getItem('currencyRates');
    if (savedRates) {
      try {
        const parsed = JSON.parse(savedRates);
        const twelveHours = 12 * 60 * 60 * 1000;
        if (Date.now() - parsed.timestamp < twelveHours) setCurrencyRates(parsed.rates);
        else fetchRates();
      } catch { fetchRates(); }
    } else { fetchRates(); }
  }, []);

  const setCurrency = (code: string) => {
    const currency = SUPPORTED_CURRENCIES.find(c => c.code === code);
    if (currency) {
      setSelectedCurrency(currency);
      localStorage.setItem('selectedCurrencyCode', code);
    }
  };

  const convertPrice = (priceInUsd: number) => {
    const rate = currencyRates[selectedCurrency.code] || 1;
    const amount = Math.ceil(priceInUsd * rate);
    let formatted;
    try {
       formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: selectedCurrency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
    } catch (e) {
       formatted = `${selectedCurrency.symbol}${amount.toLocaleString()}`;
    }
    return { amount, formatted, symbol: selectedCurrency.symbol };
  };

  const updateCompanyInfo = async (info: CompanyInfo) => {
    const newData = { ...data, companyInfo: info };
    await saveData(newData);
    setData(newData);
  };

  const updateTour = async (updatedTour: Tour) => {
    const newTours = data.tours.map(t => t.id === updatedTour.id ? updatedTour : t);
    const newData = { ...data, tours: newTours };
    await saveData(newData);
    setData(newData);
  };
  
  const addTour = async (newTour: Tour) => {
    const newTours = [...data.tours, newTour];
    const newData = { ...data, tours: newTours };
    await saveData(newData);
    setData(newData);
  };
  
  const deleteTour = async (id: string) => {
    const newTours = data.tours.filter(t => t.id !== id);
    const newData = { ...data, tours: newTours };
    await saveData(newData);
    setData(newData);
  };
  
  const updatePageContent = async (content: PageContent) => {
    const newData = { ...data, pageContent: content };
    await saveData(newData);
    setData(newData);
  };

  const addBlogPost = async (post: BlogPost) => {
    const newPosts = [...data.blogPosts, post];
    const newData = { ...data, blogPosts: newPosts };
    await saveData(newData);
    setData(newData);
  };

  const updateBlogPost = async (post: BlogPost) => {
    const newPosts = data.blogPosts.map(p => p.id === post.id ? post : p);
    const newData = { ...data, blogPosts: newPosts };
    await saveData(newData);
    setData(newData);
  };

  const deleteBlogPost = async (id: string) => {
    const newPosts = data.blogPosts.filter(p => p.id !== id);
    const newData = { ...data, blogPosts: newPosts };
    await saveData(newData);
    setData(newData);
  };

  const addInquiry = async (form: InquiryForm) => {
    try {
      const tour = data.tours.find(t => t.id === form.tourId);
      const newInquiry: Inquiry = {
        ...form,
        id: `inq-${Date.now()}`,
        tourName: tour ? tour.name : undefined,
        status: 'New',
        submittedAt: new Date().toISOString()
      };
      const docRef = await addDoc(collection(db, "inquiries"), newInquiry);
      if (isAuthenticated) {
          setInquiries(prev => [{...newInquiry, id: docRef.id}, ...prev]);
      }
    } catch (e) {
      console.error("Failed to submit inquiry:", e);
      alert("Note: Inquiry could not be saved (Offline mode). Please contact us directly.");
    }
  };

  const updateInquiry = async (id: string, status: 'New' | 'In Progress' | 'Closed') => {
      try {
          const inquiryRef = doc(db, "inquiries", id);
          await updateDoc(inquiryRef, { status });
          setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
      } catch (e) {
          console.error("Error updating inquiry", e);
      }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error: any) {
      console.error("Firebase login failed:", error);
      if (
        (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') && 
        email === 'admin@tomsafaris.co.ke'
      ) {
        try {
           console.log("Attempting to create admin user...");
           await createUserWithEmailAndPassword(auth, email, password);
           return true;
        } catch (createError: any) {
           console.error("Failed to create admin user:", createError);
           return false;
        }
      }
      return false;
    }
  };

  const changePassword = async (newPassword: string) => {
    if (auth.currentUser) {
      try {
        await updatePassword(auth.currentUser, newPassword);
        return true;
      } catch (error) {
        console.error("Firebase password change failed:", error);
        return false;
      }
    }
    return false;
  };
  
  const resetData = async () => {
    if(window.confirm("Delete ALL custom content from the cloud and reset to factory defaults? This is irreversible.")) {
      const defaultData = { 
          companyInfo: COMPANY_INFO, 
          tours: TOURS, 
          pageContent: DEFAULT_PAGE_CONTENT,
          blogPosts: SAMPLE_BLOG_POSTS
      };
      await saveData(defaultData);
      setData(defaultData);
      window.location.reload();
    }
  };

  // Sync local constant tours to cloud, merging with existing ones instead of replacing
  const syncLocalTours = async () => {
    if(window.confirm(`This will merge local tours from code into your database. Existing cloud tours will NOT be replaced. New local tours will be added. Continue?`)) {
        const existingIds = new Set(data.tours.map(t => t.id));
        const newLocalTours = TOURS.filter(t => !existingIds.has(t.id));

        if (newLocalTours.length === 0) {
            alert("No new local tours found. Database is already up to date with local code.");
            return;
        }

        const mergedTours = [...data.tours, ...newLocalTours];
        const newData = { ...data, tours: mergedTours };
        
        await saveData(newData);
        setData(newData);
        alert(`Successfully added ${newLocalTours.length} new tours from local code.`);
    }
  };

  return (
    <DataContext.Provider value={{
      companyInfo: data.companyInfo,
      tours: data.tours,
      blogPosts: data.blogPosts,
      pageContent: data.pageContent,
      inquiries,
      updateCompanyInfo,
      updateTour,
      addTour,
      deleteTour,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      addInquiry,
      updateInquiry,
      updatePageContent,
      isAuthenticated,
      login,
      changePassword,
      logout: () => signOut(auth),
      resetData,
      syncLocalTours,
      localToursCount: TOURS.length,
      loading,
      saving,
      selectedCurrency,
      setCurrency,
      currencyRates,
      refreshRates: fetchRates,
      convertPrice,
      availableCurrencies: SUPPORTED_CURRENCIES
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
