import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif text-safari-gold mb-4">Tom Safaris</h3>
            <p className="text-sm leading-relaxed mb-6">
              {COMPANY_INFO.slogan}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-safari-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-safari-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tours" className="hover:text-safari-gold transition-colors">All Tours</Link></li>
              <li><Link to="/about" className="hover:text-safari-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-safari-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-safari-gold transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
