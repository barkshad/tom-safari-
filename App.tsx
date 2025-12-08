// @ts-nocheck
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DataProvider } from './context/DataContext';
import MainLayout from './components/MainLayout';
import SEOUpdater from './components/SEOUpdater';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('./public/pages/Home'));
const About = lazy(() => import('./public/pages/About'));
const Tours = lazy(() => import('./public/pages/Tours'));
const TourDetails = lazy(() => import('./public/pages/TourDetails'));
const Blog = lazy(() => import('./public/pages/Blog'));
const Contact = lazy(() => import('./public/pages/Contact'));
const Admin = lazy(() => import('./public/pages/Admin'));

// Scroll to top wrapper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/admin" element={<Admin />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <SEOUpdater />
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col min-h-screen bg-safari-sand font-sans">
            <AnimatedRoutes />
          </div>
        </Suspense>
      </Router>
    </DataProvider>
  );
}

export default App;