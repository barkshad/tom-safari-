
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass, MessageCircle, Settings, Globe } from 'lucide-react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { companyInfo, isAuthenticated, selectedCurrency, setCurrency, availableCurrencies } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-safari-sky/20' 
          : 'bg-safari-sand shadow-md border-b-4 border-safari-leaf'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-safari-sky/10 p-1.5 rounded-full"
              >
                <Compass className="h-8 w-8 text-safari-sunset" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl md:text-2xl text-safari-leaf group-hover:text-safari-earth transition-colors leading-none">
                    Tom Madeda
                </span>
                <span className="text-[10px] tracking-widest uppercase text-safari-blue font-bold">Safaris & Adventure</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group py-2"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-safari-blue' : 'text-stone-600 group-hover:text-safari-earth'
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-safari-sky"
                  />
                )}
              </Link>
            ))}

            {/* Currency Switcher */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center space-x-1 px-3 py-1 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-colors text-sm font-bold text-stone-700"
              >
                <span className="text-lg">{selectedCurrency.flag}</span>
                <span>{selectedCurrency.code}</span>
              </button>
              
              <AnimatePresence>
                {currencyOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setCurrencyOpen(false)}></div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-stone-100 z-20 max-h-96 overflow-y-auto"
                    >
                      {availableCurrencies.map(currency => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setCurrency(currency.code);
                            setCurrencyOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-stone-50 transition-colors ${selectedCurrency.code === currency.code ? 'bg-safari-sand text-safari-earth font-bold' : 'text-stone-600'}`}
                        >
                          <span className="text-xl">{currency.flag}</span>
                          <span className="flex-grow">{currency.name}</span>
                          <span className="text-xs font-mono">{currency.code}</span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {isAuthenticated && (
              <Link to="/admin" className="text-sm font-bold text-safari-sunset flex items-center bg-orange-50 px-3 py-1 rounded-full border border-orange-100 hover:bg-orange-100">
                <Settings className="w-3 h-3 mr-1" /> Admin
              </Link>
            )}
            
            <div className="flex items-center space-x-3 ml-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded shadow-lg hover:shadow-xl hover:bg-green-700 transition-all border-b-2 border-green-800"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${companyInfo.phone}`}
                className="flex items-center px-4 py-2 bg-safari-leaf text-white rounded shadow-lg hover:shadow-xl hover:bg-stone-700 transition-all border-b-2 border-stone-800"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Us</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
             {/* Mobile Currency Toggle */}
             <button 
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center space-x-1 px-2 py-1 bg-white border border-stone-200 rounded-full text-xs font-bold text-stone-700"
              >
                <span>{selectedCurrency.flag}</span>
                <span>{selectedCurrency.code}</span>
              </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-safari-blue focus:outline-none p-2 bg-safari-sand rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Currency Dropdown (Full Width) */}
      <AnimatePresence>
        {currencyOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
          >
             <div className="grid grid-cols-2 gap-2 p-4">
                 {availableCurrencies.map(currency => (
                    <button
                        key={currency.code}
                        onClick={() => {
                            setCurrency(currency.code);
                            setCurrencyOpen(false);
                        }}
                        className={`flex items-center space-x-2 p-2 rounded ${selectedCurrency.code === currency.code ? 'bg-white shadow-sm border border-stone-200' : ''}`}
                    >
                        <span className="text-xl">{currency.flag}</span>
                        <span className="text-sm font-bold">{currency.code}</span>
                    </button>
                 ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-safari-sand border-t border-stone-200 overflow-hidden shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-white text-safari-blue border-l-4 border-safari-sky'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-safari-leaf'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-bold text-red-600 bg-red-50"
                >
                  Admin Dashboard
                </Link>
              )}

              <div className="pt-4 space-y-2 pb-4">
                <a
                  href={companyInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700 font-bold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
                </a>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center w-full px-4 py-3 bg-safari-leaf text-white rounded hover:bg-stone-700 font-bold"
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
