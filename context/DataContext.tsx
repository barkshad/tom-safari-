// FIX: Augment the global AIStudio interface to include `get` and `set` methods for mock cloud storage,
// and add `cloudinary` to the Window interface to type the image uploader service.
declare global {
  interface Window {
    // FIX: Removed re-declaration of 'aistudio' on the Window interface to resolve a TypeScript error about conflicting modifiers.
    // The property is likely already declared in the global scope, so we only need to augment the existing interfaces.
    cloudinary: any;
  }
  interface AIStudio {
    get: (key: string) => Promise<any>;
    set: (key: string, value: any) => Promise<void>;
  }
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, CompanyInfo, Inquiry, InquiryForm, PageContent, CurrencyConfig } from '../types';
import { TOURS, COMPANY_INFO, DEFAULT_PAGE_CONTENT, SUPPORTED_CURRENCIES } from '../constants';

// A mock for the platform's cloud storage.
// In a real environment, this would be provided by the host.
const FAKE_CLOUD_STORAGE = 'FAKE_CLOUD_STORAGE_TOM_SAFARIS';
if (typeof window !== 'undefined' && (!window.aistudio || typeof window.aistudio.get !== 'function' || typeof window.aistudio.set !== 'function')) {
  // FIX: If the aistudio object is missing or incomplete (doesn't have the required functions),
  // this creates a mock that uses localStorage. This prevents the "window.aistudio.get is not a function"
  // error that occurs when the hosting environment provides an empty or partial aistudio object.
  (window as any).aistudio = {
    get: (key) => Promise.resolve(JSON.parse(localStorage.getItem(key) || 'null')),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, JSON.stringify(value))),
  };
}

interface CloudData {
  companyInfo: CompanyInfo;
  tours: Tour[];
  pageContent: PageContent;
}

interface DataContextType {
  companyInfo: CompanyInfo;
  tours: Tour[];
  inquiries: Inquiry[];
  pageContent: PageContent;
  updateCompanyInfo: (info: CompanyInfo) => void;
  updateTour: (updatedTour: Tour) => void;
  addTour: (newTour: Tour) => void;
  deleteTour: (id: string) => void;
  addInquiry: (form: InquiryForm) => void;
  updatePageContent: (content: PageContent) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  changePassword: (newPassword: string) => void;
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

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [data, setData] = useState<CloudData>({
    companyInfo: COMPANY_INFO,
    tours: TOURS,
    pageContent: DEFAULT_PAGE_CONTENT
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [adminPassword, setAdminPassword] = useState<string>(() => localStorage.getItem('adminPassword') || '12345');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem('isAdmin') === 'true');

  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyConfig>(() => {
    const savedCode = localStorage.getItem('selectedCurrencyCode');
    return SUPPORTED_CURRENCIES.find(c => c.code === savedCode) || SUPPORTED_CURRENCIES[0];
  });

  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>({ USD: 1 });
  
  const saveDataToCloud = async (newData: CloudData) => {
    setSaving(true);
    try {
      await window.aistudio.set(FAKE_CLOUD_STORAGE, newData);
    } catch (e) {
      console.error("Failed to save data to cloud", e);
    } finally {
      setTimeout(() => setSaving(false), 500);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const cloudData = await window.aistudio.get(FAKE_CLOUD_STORAGE);
        const localInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        setInquiries(localInquiries);

        if (cloudData && typeof cloudData === 'object') {
          const mergedPageContent = {
            ...DEFAULT_PAGE_CONTENT, ...cloudData.pageContent,
            home: { ...DEFAULT_PAGE_CONTENT.home, ...cloudData.pageContent?.home },
            about: { ...DEFAULT_PAGE_CONTENT.about, ...cloudData.pageContent?.about },
            contact: { ...DEFAULT_PAGE_CONTENT.contact, ...cloudData.pageContent?.contact },
            footer: { ...DEFAULT_PAGE_CONTENT.footer, ...cloudData.pageContent?.footer },
            seo: { ...DEFAULT_PAGE_CONTENT.seo, ...cloudData.pageContent?.seo },
          };
          setData({
            companyInfo: cloudData.companyInfo || COMPANY_INFO,
            tours: cloudData.tours || TOURS,
            pageContent: mergedPageContent
          });
        }
      } catch (e) {
        console.error("Failed to load cloud data, falling back to defaults.", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

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

  useEffect(() => { localStorage.setItem('isAdmin', String(isAuthenticated)); }, [isAuthenticated]);
  useEffect(() => { localStorage.setItem('adminPassword', adminPassword); }, [adminPassword]);
  useEffect(() => { localStorage.setItem('inquiries', JSON.stringify(inquiries)); }, [inquiries]);

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
    const newData = { ...data, companyInfo: info };
    setData(newData);
    saveDataToCloud(newData);
  };

  const updateTour = (updatedTour: Tour) => {
    const newTours = data.tours.map(t => t.id === updatedTour.id ? updatedTour : t);
    const newData = { ...data, tours: newTours };
    setData(newData);
    saveDataToCloud(newData);
  };
  
  const addTour = (newTour: Tour) => {
    const newTours = [...data.tours, newTour];
    const newData = { ...data, tours: newTours };
    setData(newData);
    saveDataToCloud(newData);
  };
  
  const deleteTour = (id: string) => {
    const newTours = data.tours.filter(t => t.id !== id);
    const newData = { ...data, tours: newTours };
    setData(newData);
    saveDataToCloud(newData);
  };
  
  const updatePageContent = (content: PageContent) => {
    const newData = { ...data, pageContent: content };
    setData(newData);
    saveDataToCloud(newData);
  };

  const addInquiry = (form: InquiryForm) => {
    const tour = data.tours.find(t => t.id === form.tourId);
    const newInquiry: Inquiry = {
      ...form,
      id: `inq-${Date.now()}`,
      tourName: tour ? tour.name : undefined,
      status: 'New',
      submittedAt: new Date().toISOString()
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const login = (password: string) => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  
  const resetData = async () => {
    if(window.confirm("Delete ALL custom content from the cloud and reset to factory defaults? This is irreversible.")) {
      const defaultData = { companyInfo: COMPANY_INFO, tours: TOURS, pageContent: DEFAULT_PAGE_CONTENT };
      setData(defaultData);
      setSaving(true);
      await window.aistudio.set(FAKE_CLOUD_STORAGE, defaultData);
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <DataContext.Provider value={{
      companyInfo: data.companyInfo,
      tours: data.tours,
      pageContent: data.pageContent,
      inquiries,
      updateCompanyInfo,
      updateTour,
      addTour,
      deleteTour,
      addInquiry,
      updatePageContent,
      isAuthenticated,
      login,
      changePassword: setAdminPassword,
      logout: () => setIsAuthenticated(false),
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
