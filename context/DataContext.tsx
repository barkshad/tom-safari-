
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, CompanyInfo, Inquiry, InquiryForm, PageContent, CurrencyConfig } from '../types';
import { TOURS, COMPANY_INFO, DEFAULT_PAGE_CONTENT, SUPPORTED_CURRENCIES } from '../constants';

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
  
  selectedCurrency: CurrencyConfig;
  setCurrency: (code: string) => void;
  currencyRates: Record<string, number>;
  refreshRates: () => Promise<void>;
  convertPrice: (priceInUsd: number) => { amount: number, formatted: string, symbol: string };
  availableCurrencies: CurrencyConfig[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem('companyInfo');
      return saved ? JSON.parse(saved) : COMPANY_INFO;
    } catch {
      return COMPANY_INFO;
    }
  });

  const [tours, setTours] = useState<Tour[]>(() => {
    try {
      const saved = localStorage.getItem('tours');
      return saved ? JSON.parse(saved) : TOURS;
    } catch {
      return TOURS;
    }
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Deep merge default content to ensure new fields (SEO, Footer) exist even if localStorage has old data
  const [pageContent, setPageContent] = useState<PageContent>(() => {
    try {
      const saved = localStorage.getItem('pageContent');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with default to ensure structure exists
        return {
          ...DEFAULT_PAGE_CONTENT,
          ...parsed,
          home: { ...DEFAULT_PAGE_CONTENT.home, ...parsed.home },
          about: { ...DEFAULT_PAGE_CONTENT.about, ...parsed.about },
          contact: { ...DEFAULT_PAGE_CONTENT.contact, ...parsed.contact },
          footer: { ...DEFAULT_PAGE_CONTENT.footer, ...parsed.footer },
          seo: { ...DEFAULT_PAGE_CONTENT.seo, ...parsed.seo },
        };
      }
      return DEFAULT_PAGE_CONTENT;
    } catch {
      return DEFAULT_PAGE_CONTENT;
    }
  });

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('adminPassword') || '12345';
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyConfig>(() => {
    const savedCode = localStorage.getItem('selectedCurrencyCode');
    return SUPPORTED_CURRENCIES.find(c => c.code === savedCode) || SUPPORTED_CURRENCIES[0];
  });

  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>({ USD: 1 });

  const fetchRates = async () => {
    try {
      const response = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await response.json();
      if (data && data.rates) {
        setCurrencyRates(data.rates);
        localStorage.setItem('currencyRates', JSON.stringify({
          rates: data.rates,
          timestamp: Date.now()
        }));
      }
    } catch (error) {
      console.error("Failed to fetch rates:", error);
    }
  };

  useEffect(() => {
    const savedRates = localStorage.getItem('currencyRates');
    if (savedRates) {
      try {
        const parsed = JSON.parse(savedRates);
        const twelveHours = 12 * 60 * 60 * 1000;
        if (Date.now() - parsed.timestamp < twelveHours) {
          setCurrencyRates(parsed.rates);
        } else {
          fetchRates();
        }
      } catch {
        fetchRates();
      }
    } else {
      fetchRates();
    }
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
    let formatted = '';
    try {
       formatted = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: selectedCurrency.code,
         minimumFractionDigits: 0,
         maximumFractionDigits: 0,
       }).format(amount);
    } catch (e) {
       formatted = `${selectedCurrency.symbol}${amount.toLocaleString()}`;
    }
    return { amount, formatted, symbol: selectedCurrency.symbol };
  };

  const refreshRates = async () => { await fetchRates(); };

  const saveToStorage = (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e: any) {
      if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        alert("⚠️ Storage Limit Reached!\n\nPlease delete some gallery photos to make space.");
      }
    }
  };

  useEffect(() => { saveToStorage('companyInfo', companyInfo); }, [companyInfo]);
  useEffect(() => { saveToStorage('tours', tours); }, [tours]);
  useEffect(() => { saveToStorage('inquiries', inquiries); }, [inquiries]);
  useEffect(() => { saveToStorage('pageContent', pageContent); }, [pageContent]);
  useEffect(() => { localStorage.setItem('isAdmin', String(isAuthenticated)); }, [isAuthenticated]);
  useEffect(() => { localStorage.setItem('adminPassword', adminPassword); }, [adminPassword]);

  const updateCompanyInfo = (info: CompanyInfo) => setCompanyInfo(info);
  const updateTour = (updatedTour: Tour) => setTours(prev => prev.map(t => t.id === updatedTour.id ? updatedTour : t));
  const addTour = (newTour: Tour) => setTours(prev => [...prev, newTour]);
  const deleteTour = (id: string) => setTours(prev => prev.filter(t => t.id !== id));
  
  const addInquiry = (form: InquiryForm) => {
    const tour = tours.find(t => t.id === form.tourId);
    const newInquiry: Inquiry = {
      ...form,
      id: `inq-${Date.now()}`,
      tourName: tour ? tour.name : undefined,
      status: 'New',
      submittedAt: new Date().toISOString()
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const updatePageContent = (content: PageContent) => {
    setPageContent(content);
  };

  const login = (password: string) => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const changePassword = (newPassword: string) => setAdminPassword(newPassword);
  const logout = () => setIsAuthenticated(false);

  const resetData = () => {
    if(window.confirm("Delete ALL custom data and reset to factory defaults?")) {
      setCompanyInfo(COMPANY_INFO);
      setTours(TOURS);
      setPageContent(DEFAULT_PAGE_CONTENT);
      setAdminPassword('12345');
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <DataContext.Provider value={{
      companyInfo,
      tours,
      inquiries,
      pageContent,
      updateCompanyInfo,
      updateTour,
      addTour,
      deleteTour,
      addInquiry,
      updatePageContent,
      isAuthenticated,
      login,
      changePassword,
      logout,
      resetData,
      selectedCurrency,
      setCurrency,
      currencyRates,
      refreshRates,
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
