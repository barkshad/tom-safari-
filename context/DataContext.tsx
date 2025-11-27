
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, CompanyInfo, Inquiry, InquiryForm, PageContent } from '../types';
import { TOURS, COMPANY_INFO, DEFAULT_PAGE_CONTENT } from '../constants';

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
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from LocalStorage or fall back to Constants
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    const saved = localStorage.getItem('companyInfo');
    return saved ? JSON.parse(saved) : COMPANY_INFO;
  });

  const [tours, setTours] = useState<Tour[]>(() => {
    const saved = localStorage.getItem('tours');
    return saved ? JSON.parse(saved) : TOURS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  const [pageContent, setPageContent] = useState<PageContent>(() => {
    const saved = localStorage.getItem('pageContent');
    return saved ? JSON.parse(saved) : DEFAULT_PAGE_CONTENT;
  });

  const [adminPassword, setAdminPassword] = useState<string>(() => {
    const saved = localStorage.getItem('adminPassword');
    return saved || '12345';
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
  }, [companyInfo]);

  useEffect(() => {
    localStorage.setItem('tours', JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('pageContent', JSON.stringify(pageContent));
  }, [pageContent]);

  useEffect(() => {
    localStorage.setItem('isAdmin', String(isAuthenticated));
  }, [isAuthenticated]);
  
  useEffect(() => {
    localStorage.setItem('adminPassword', adminPassword);
  }, [adminPassword]);

  const updateCompanyInfo = (info: CompanyInfo) => {
    setCompanyInfo(info);
  };

  const updateTour = (updatedTour: Tour) => {
    setTours(prev => prev.map(t => t.id === updatedTour.id ? updatedTour : t));
  };

  const addTour = (newTour: Tour) => {
    setTours(prev => [...prev, newTour]);
  };

  const deleteTour = (id: string) => {
    setTours(prev => prev.filter(t => t.id !== id));
  };

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

  const changePassword = (newPassword: string) => {
    setAdminPassword(newPassword);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const resetData = () => {
    setCompanyInfo(COMPANY_INFO);
    setTours(TOURS);
    setPageContent(DEFAULT_PAGE_CONTENT);
    setAdminPassword('12345');
    // Keep inquiries but clear other data
    localStorage.removeItem('companyInfo');
    localStorage.removeItem('tours');
    localStorage.removeItem('pageContent');
    localStorage.removeItem('adminPassword');
    window.location.reload();
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
      resetData
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
