
// @ts-nocheck
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useData } from '../context/DataContext';
import LoadingSpinner from './LoadingSpinner';
import { AlertTriangle } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { loading } = useData();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Maintenance Sticky Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-yellow-950 px-4 py-3 z-[100] text-center font-bold shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3 border-t-2 border-yellow-500">
         <AlertTriangle size={20} className="hidden sm:block" />
         <span className="text-sm md:text-base">🚧 Website Under Maintenance: We are adding final touches. Ready in 2 days! 🚧</span>
      </div>
    </>
  );
};

export default MainLayout;
