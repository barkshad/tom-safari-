// @ts-nocheck
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { DataProvider } from './context/DataContext';

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-safari-sand font-sans">
          {/* We render Navbar outside Routes so it stays persistent, 
              but we could animate it too if we wanted. 
              Admin page might want to hide it, but per prompt "Keep existing routing" we leave it simple. */}
          <Routes>
             <Route path="/admin" element={null} />
             <Route path="*" element={<Navbar />} />
          </Routes>

          <main className="flex-grow">
             <AnimatedRoutes />
          </main>
          
          <Routes>
             <Route path="/admin" element={null} />
             <Route path="*" element={<Footer />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;