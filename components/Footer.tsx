

// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Lock, Edit2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

const Footer: React.FC = () => {
  const { companyInfo, pageContent, isAuthenticated } = useData();
  
  const socialLinks = [
    { name: 'Instagram', href: companyInfo.social.instagram, icon: InstagramIcon },
    { name: 'Facebook', href: companyInfo.social.facebook, icon: FacebookIcon },
    { name: 'WhatsApp', href: companyInfo.social.whatsapp, icon: WhatsAppIcon },
  ].filter(link => link.href && link.href !== '#');

  return (
    <footer className="bg-stone-900 text-stone-300 relative group">
      {isAuthenticated && (
         <div className="absolute top-4 right-4">
             <Link to="/admin" className="p-2 bg-safari-sunset text-white rounded-full flex items-center gap-2 text-xs font-bold uppercase"><Edit2 className="w-3 h-3" /> Edit Footer</Link>
         </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif text-safari-gold mb-4">{companyInfo.name}</h3>
            <p className="text-sm leading-relaxed mb-6">
              {pageContent.footer.aboutText}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                 <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-stone-400 hover:text-white transition-colors"
                    aria-label={social.name}
                    title={social.name}
                 >
                    <social.icon size={24} />
                 </a>
              ))}
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
                <MapPin className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0 mt-1" />
                <span>{companyInfo.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white">{companyInfo.phone}</a>
              </li>
              <li className="flex items-center">
                <WhatsAppIcon className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
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
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. {pageContent.footer.copyrightText}</p>
          <Link to="/admin" className="mt-2 md:mt-0 flex items-center hover:text-stone-300 transition-colors opacity-50 hover:opacity-100">
            <Lock className="w-3 h-3 mr-1" /> Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;