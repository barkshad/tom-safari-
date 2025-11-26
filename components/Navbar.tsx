import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-safari-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-safari-sunset" />
              <span className="font-serif font-bold text-xl md:text-2xl text-safari-leaf">
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
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-safari-sunset border-b-2 border-safari-sunset pb-1'
                    : 'text-stone-600 hover:text-safari-earth'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center px-4 py-2 bg-safari-leaf text-white rounded hover:bg-green-900 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Us</span>
            </a>
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
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
