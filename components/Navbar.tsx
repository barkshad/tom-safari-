import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' 
          : 'bg-white shadow-md border-b-4 border-safari-earth'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Compass className="h-8 w-8 text-safari-sunset" />
              </motion.div>
              <span className="font-serif font-bold text-xl md:text-2xl text-safari-leaf group-hover:text-safari-earth transition-colors">
                Tom Safaris
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group py-2"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-safari-sunset' : 'text-stone-600 group-hover:text-safari-earth'
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-safari-sunset"
                  />
                )}
              </Link>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center px-4 py-2 bg-safari-leaf text-white rounded shadow-lg hover:shadow-xl hover:bg-green-900 transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Us</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-t border-stone-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-safari-sand text-safari-sunset'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="block w-full text-center mt-4 px-4 py-3 bg-safari-leaf text-white rounded hover:bg-green-900"
              >
                Book via Phone
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;