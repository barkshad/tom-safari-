// @ts-nocheck
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useData } from '../context/DataContext';
import LoadingSpinner from './LoadingSpinner';

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
    </>
  );
};

export default MainLayout;
