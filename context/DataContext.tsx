

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, CompanyInfo, Inquiry, InquiryForm, PageContent, CurrencyConfig, BlogPost } from '../types';
import { TOURS, COMPANY_INFO, DEFAULT_PAGE_CONTENT, SUPPORTED_CURRENCIES, SAMPLE_BLOG_POSTS } from '../constants';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword, User } from 'firebase/auth';

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
  updateCompanyInfo: (info: CompanyInfo) => void;
  updateTour: (updatedTour: Tour) => void;
  addTour: (newTour: Tour) => void;
  deleteTour: (id: string) => void;
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  addInquiry: (form: InquiryForm) => void;
  updatePageContent: (content: PageContent) => void;
  isAuthenticated: boolean;
  login: (password: string) => Promise<boolean>;
  changePassword: (newPassword: string) => Promise<boolean>;
  logout: () => void;
  resetData: () => void;
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
          const mergedPageContent = {
            ...DEFAULT_PAGE_CONTENT, ...cloudData.pageContent,
            home: { ...DEFAULT_PAGE_CONTENT.home, ...cloudData.pageContent?.home },
            about: { ...DEFAULT_PAGE_CONTENT.about, ...cloudData.pageContent?.about },
            contact: { ...DEFAULT_PAGE_CONTENT.contact, ...cloudData.pageContent?.contact },
            footer: { ...DEFAULT_PAGE_CONTENT.footer, ...cloudData.pageContent?.footer },
            seo: { ...DEFAULT_PAGE_CONTENT.seo, ...cloudData.pageContent?.seo },
          };
          
          const mergedCompanyInfo = {
            ...COMPANY_INFO,
            ...cloudData.companyInfo,
          };

          setData({
            companyInfo: mergedCompanyInfo,
            tours: cloudData.tours && cloudData.tours.length > 0 ? cloudData.tours : TOURS,
            pageContent: mergedPageContent,
            blogPosts: cloudData.blogPosts && cloudData.blogPosts.length > 0 ? cloudData.blogPosts : SAMPLE_BLOG_POSTS,
          });
        } else {
           console.log("No live data in Firestore. Using default content. Admin can seed data from the settings panel.");
        }
      } catch (e) {
        console.error("Failed to load public cloud data, falling back to defaults.", e);
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
              fetchedInquiries.push(doc.data() as Inquiry);
          });
          setInquiries(fetchedInquiries);
        } catch(e) {
          console.error("Failed to load inquiries. Check Firestore rules.", e);
        }
      } else {
        setInquiries([]);
      }
    };
    loadInquiries();
  }, [isAuthenticated]);


  const fetchRates = async () => {
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await response.json();
      if (data && data.rates) {
        setCurrencyRates(data.rates);
        localStorage.setItem('currencyRates', JSON.stringify({ rates: data.rates, timestamp: Date.now() }));
      }
    } catch (error) { console.error("Failed to fetch rates:", error); }
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

  const updateCompanyInfo = (info: CompanyInfo) => {
    setData(prevData => {
        const newData = { ...prevData, companyInfo: info };
        saveData(newData);
        return newData;
    });
  };

  const updateTour = (updatedTour: Tour) => {
    setData(prevData => {
        const newTours = prevData.tours.map(t => t.id === updatedTour.id ? updatedTour : t);
        const newData = { ...prevData, tours: newTours };
        saveData(newData);
        return newData;
    });
  };
  
  const addTour = (newTour: Tour) => {
    setData(prevData => {
        const newTours = [...prevData.tours, newTour];
        const newData = { ...prevData, tours: newTours };
        saveData(newData);
        return newData;
    });
  };
  
  const deleteTour = (id: string) => {
    setData(prevData => {
        const newTours = prevData.tours.filter(t => t.id !== id);
        const newData = { ...prevData, tours: newTours };
        saveData(newData);
        return newData;
    });
  };
  
  const updatePageContent = (content: PageContent) => {
    setData(prevData => {
        const newData = { ...prevData, pageContent: content };
        saveData(newData);
        return newData;
    });
  };

  const addBlogPost = (post: BlogPost) => {
    setData(prevData => {
        const newPosts = [...prevData.blogPosts, post];
        const newData = { ...prevData, blogPosts: newPosts };
        saveData(newData);
        return newData;
    });
  };

  const updateBlogPost = (post: BlogPost) => {
    setData(prevData => {
        const newPosts = prevData.blogPosts.map(p => p.id === post.id ? post : p);
        const newData = { ...prevData, blogPosts: newPosts };
        saveData(newData);
        return newData;
    });
  };

  const deleteBlogPost = (id: string) => {
    setData(prevData => {
        const newPosts = prevData.blogPosts.filter(p => p.id !== id);
        const newData = { ...prevData, blogPosts: newPosts };
        saveData(newData);
        return newData;
    });
  };

  const addInquiry = async (form: InquiryForm) => {
    const tour = data.tours.find(t => t.id === form.tourId);
    const newInquiry: Inquiry = {
      ...form,
      id: `inq-${Date.now()}`,
      tourName: tour ? tour.name : undefined,
      status: 'New',
      submittedAt: new Date().toISOString()
    };
    await addDoc(collection(db, "inquiries"), newInquiry);
    if (isAuthenticated) {
        setInquiries(prev => [newInquiry, ...prev]);
    }
  };

  const login = async (password: string) => {
    const email = 'admin@tomsafaris.co.ke';
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error("Firebase login failed:", error);
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
      setData(defaultData);
      await saveData(defaultData);
      window.location.reload();
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
      updatePageContent,
      isAuthenticated,
      login,
      changePassword,
      logout: () => signOut(auth),
      resetData,
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