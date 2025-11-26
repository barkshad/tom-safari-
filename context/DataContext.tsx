import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, CompanyInfo } from '../types';
import { TOURS, COMPANY_INFO } from '../constants';

interface DataContextType {
  companyInfo: CompanyInfo;
  tours: Tour[];
  updateCompanyInfo: (info: CompanyInfo) => void;
  updateTour: (updatedTour: Tour) => void;
  addTour: (newTour: Tour) => void;
  deleteTour: (id: string) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
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
    localStorage.setItem('isAdmin', String(isAuthenticated));
  }, [isAuthenticated]);

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

  const login = (password: string) => {
    if (password === '12345') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const resetData = () => {
    setCompanyInfo(COMPANY_INFO);
    setTours(TOURS);
    localStorage.removeItem('companyInfo');
    localStorage.removeItem('tours');
    window.location.reload();
  };

  return (
    <DataContext.Provider value={{
      companyInfo,
      tours,
      updateCompanyInfo,
      updateTour,
      addTour,
      deleteTour,
      isAuthenticated,
      login,
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