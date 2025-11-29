// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle, Lock } from 'lucide-react';
import { useData } from '../context/DataContext';

const Footer: React.FC = () => {
  const { companyInfo } = useData();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif text-safari-gold mb-4">Tom Madeda Safaris</h3>
            <p className="text-sm leading-relaxed mb-6">
              {companyInfo.slogan}
            </p>
            <div className="flex space-x-4">
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-safari-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-safari-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={companyInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-safari-gold transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tours" className="hover:text-safari-gold transition-colors">All Tours</Link></li>
              <li><Link to="/about" className="hover:text-safari-gold transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-safari-gold transition-colors">Safari Blog</Link></li>
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
                <span>{companyInfo.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white">{companyInfo.phone}</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={companyInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp Us</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white">{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <Link to="/admin" className="mt-2 md:mt-0 flex items-center hover:text-stone-300 transition-colors opacity-50 hover:opacity-100">
            <Lock className="w-3 h-3 mr-1" /> Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;