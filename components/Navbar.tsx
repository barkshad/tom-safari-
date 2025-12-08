// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass, Settings } from 'lucide-react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

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
  
  const socialLinks = [
    { name: 'Instagram', href: companyInfo.social.instagram, icon: InstagramIcon, color: 'text-pink-500' },
    { name: 'Facebook', href: companyInfo.social.facebook, icon: FacebookIcon, color: 'text-blue-600' },
    { name: 'WhatsApp', href: companyInfo.social.whatsapp, icon: WhatsAppIcon, color: 'text-green-500' },
  ].filter(link => link.href && link.href !== '#');

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
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2' 
          : 'py-4'
      }`}
    >
      {/* Floating Glass Pill Container */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled 
            ? 'glass-premium rounded-full shadow-lg mx-4 mt-2' 
            : 'bg-transparent'
      }`}>
        <div className="flex justify-between h-16 items-center px-2">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-safari-sky/20 p-2 rounded-full border border-safari-sky/30 backdrop-blur-sm"
              >
                <Compass className="h-6 w-6 text-safari-sunset" />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg md:text-xl transition-colors leading-none ${scrolled ? 'text-stone-800' : 'text-stone-800 lg:text-white lg:drop-shadow-md'}`}>
                    Tom "Cruse" Madeda
                </span>
                <span className={`text-[10px] tracking-widest uppercase font-bold ${scrolled ? 'text-safari-blue' : 'text-safari-blue lg:text-safari-sand'}`}>Safaris & Adventure</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 rounded-full group"
              >
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-safari-sky/20 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-safari-blue font-bold' 
                    : scrolled ? 'text-stone-600 group-hover:text-safari-earth' : 'text-stone-100 hover:text-white drop-shadow-sm'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}

            {/* Currency Switcher */}
            <div className="relative ml-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-colors text-sm font-bold ${
                    scrolled 
                        ? 'bg-white/50 border-stone-200 text-stone-700 hover:bg-white' 
                        : 'bg-black/20 border-white/20 text-white hover:bg-black/30 backdrop-blur-sm'
                }`}
              >
                <span className="text-lg">{selectedCurrency.flag}</span>
                <span>{selectedCurrency.code}</span>
              </motion.button>
              
              <AnimatePresence>
                {currencyOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setCurrencyOpen(false)}></div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute right-0 mt-2 w-48 glass-premium rounded-xl shadow-2xl border border-white/40 z-20 max-h-96 overflow-y-auto p-1"
                    >
                      {availableCurrencies.map(currency => (
                        <motion.button
                          key={currency.code}
                          whileHover={{ x: 5, backgroundColor: 'rgba(125, 211, 252, 0.2)' }}
                          onClick={() => {
                            setCurrency(currency.code);
                            setCurrencyOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 flex items-center space-x-3 rounded-lg transition-colors mb-1 ${selectedCurrency.code === currency.code ? 'bg-safari-sand text-safari-earth font-bold border border-safari-gold/20' : 'text-stone-600'}`}
                        >
                          <span className="text-xl">{currency.flag}</span>
                          <span className="flex-grow text-sm">{currency.name}</span>
                          <span className="text-xs font-mono opacity-50">{currency.code}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {isAuthenticated && (
              <Link to="/admin" className="ml-2 text-xs font-bold text-safari-sunset flex items-center bg-safari-sunset/10 px-3 py-1.5 rounded-full border border-safari-sunset/20 hover:bg-safari-sunset/20 transition-all">
                <Settings className="w-3 h-3 mr-1" /> Admin
              </Link>
            )}
            
            <div className="flex items-center space-x-2 ml-4">
              {socialLinks.map(social => (
                 <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9"
                    title={social.name}
                    aria-label={`Visit our ${social.name} page`}
                 >
                    <social.icon className={scrolled ? social.color : 'text-white'} size={28} />
                 </motion.a>
              ))}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${companyInfo.phone}`}
                className="hidden lg:flex items-center px-4 py-2 bg-safari-leaf text-white rounded-full shadow-lg hover:shadow-safari-leaf/40 hover:bg-stone-700 transition-all text-sm font-bold"
              >
                <Phone className="w-3 h-3 mr-2" />
                Book Now
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-3">
             <button 
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-bold ${scrolled ? 'bg-white/50 border-stone-200 text-stone-800' : 'bg-black/20 border-white/20 text-white backdrop-blur-md'}`}
              >
                <span>{selectedCurrency.flag}</span>
                <span>{selectedCurrency.code}</span>
              </button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${scrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/20'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Currency Dropdown */}
      <AnimatePresence>
        {currencyOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-premium border-b border-stone-200 overflow-hidden mx-4 mt-2 rounded-xl"
          >
             <div className="grid grid-cols-2 gap-2 p-3">
                 {availableCurrencies.map(currency => (
                    <button
                        key={currency.code}
                        onClick={() => {
                            setCurrency(currency.code);
                            setCurrencyOpen(false);
                        }}
                        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${selectedCurrency.code === currency.code ? 'bg-safari-sky/20 border border-safari-sky/30' : 'hover:bg-white/50'}`}
                    >
                        <span className="text-xl">{currency.flag}</span>
                        <span className="text-sm font-bold text-stone-700">{currency.code}</span>
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
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="md:hidden glass-premium mt-2 mx-4 rounded-2xl overflow-hidden shadow-2xl border border-white/40"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive(link.path)
                      ? 'bg-safari-sky/20 text-safari-blue translate-x-2'
                      : 'text-stone-600 hover:bg-white/50 hover:text-safari-earth'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-red-600 bg-red-50 hover:bg-red-100 mt-2"
                >
                  Admin Dashboard
                </Link>
              )}
              
              <div className="border-t border-stone-200/50 my-4"></div>

              <div className="flex justify-center items-center space-x-6 pb-4">
                  {socialLinks.map((social) => (
                     <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5"
                        aria-label={`Visit our ${social.name} page`}
                      >
                       <social.icon className={social.color} size={32} />
                     </a>
                  ))}
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center w-full px-4 py-3 bg-safari-leaf text-white rounded-xl hover:shadow-lg font-bold"
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