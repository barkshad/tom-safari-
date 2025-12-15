
// @ts-nocheck
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Lock, Edit2, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

const Footer: React.FC = () => {
  const { companyInfo, pageContent, isAuthenticated } = useData();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const socialLinks = [
    { name: 'Instagram', href: companyInfo.social.instagram, icon: InstagramIcon },
    { name: 'Facebook', href: companyInfo.social.facebook, icon: FacebookIcon },
    { name: 'WhatsApp', href: companyInfo.social.whatsapp, icon: WhatsAppIcon },
  ].filter(link => link.href && link.href !== '#');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
        setEmail('');
        setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 relative group overflow-hidden border-t-4 border-safari-gold">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-safari-emerald/5 rounded-full blur-[150px]"></div>
      {isAuthenticated && (
         <div className="absolute top-4 right-4 z-10">
             <Link to="/admin" className="p-2 bg-safari-sunset text-white rounded-full flex items-center gap-2 text-xs font-bold uppercase"><Edit2 className="w-3 h-3" /> Edit Footer</Link>
         </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-3xl font-serif font-black text-white mb-6 tracking-tight">{companyInfo.name}</h3>
            <p className="text-sm leading-relaxed mb-6 text-stone-400">
              {pageContent.footer.aboutText}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                 <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-stone-400 hover:text-white hover:scale-110 transition-all"
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
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-xs">Explore</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/tours" className="hover:text-safari-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safari-emerald rounded-full"></span>All Tours</Link></li>
              <li><Link to="/about" className="hover:text-safari-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safari-emerald rounded-full"></span>About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-safari-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safari-emerald rounded-full"></span>Guest Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-safari-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safari-emerald rounded-full"></span>Safari Blog</Link></li>
              <li><Link to="/contact" className="hover:text-safari-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-safari-emerald rounded-full"></span>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0 mt-0.5" />
                <span>{companyInfo.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">{companyInfo.phone}</a>
              </li>
              <li className="flex items-center">
                <WhatsAppIcon className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={companyInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-safari-gold flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
             <p className="text-xs text-stone-400 mb-4">Subscribe for latest safari offers and travel tips.</p>
             <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-safari-emerald transition-colors"
                    />
                    <button type="submit" className="absolute right-2 top-2 p-1 bg-safari-emerald text-stone-900 rounded-md hover:bg-white transition-colors">
                        <ArrowRight size={16} />
                    </button>
                </div>
                {subscribed && <p className="text-green-500 text-xs font-bold animate-pulse">Thanks for subscribing!</p>}
             </form>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-medium">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. {pageContent.footer.copyrightText}</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
             <Link to="/admin" className="flex items-center hover:text-stone-300 transition-colors opacity-50 hover:opacity-100">
               <Lock className="w-3 h-3 mr-1" /> Admin
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
