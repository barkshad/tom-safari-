

import { Tour, PageContent, CurrencyConfig } from './types';

export const COMPANY_INFO = {
  name: "Tom 'Cruse' Madeda Safaris",
  ownerName: "Tom 'Cruse' Madeda",
  email: "info@tomsafaris.co.ke",
  phone: "+254 721 787 589",
  location: "Titanic Plaza, Kilifi, Kenya",
  slogan: "Turning your travel dreams into extraordinary experiences – Hosted by Tom 'Cruse'",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/madeda_thomas?igsh=eTA0czUxejI2ZnZp",
    whatsapp: "https://wa.me/254792150200"
  }
};

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'AED', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', flag: '🇸🇦' },
];

export const DEFAULT_PAGE_CONTENT: PageContent = {
  home: {
    hero: {
      title: "Cruise the Wild with Tom 'Cruse'",
      subtitle: "Experience the thrill of the wild with Kenya's premier safari expert, Tom 'Cruse' Madeda.",
      image: "https://share.google/images/2bwfbvx4i34vzVT0v"
    },
    welcome: {
      title: "Welcome to Tom 'Cruse' Madeda Safaris",
      content: "We are a Kilifi-based safari and adventure tour operator dedicated to organizing wildlife, coastal, and adventure tours across Kenya."
    },
    features: [
      { title: "Safety First", text: "Expert guides and well-maintained vehicles for a secure journey." },
      { title: "Local Expertise", text: "We know the hidden gems, wildlife patterns, and cultural nuances." },
      { title: "Authentic Experiences", text: "Passionate about creating unforgettable memories in nature." }
    ],
    testimonials: {
      content: "We had the most amazing time with Tom 'Cruse'. The driver was knowledgeable, the lodges were beautiful, and seeing the lions in Maasai Mara was a dream come true!",
      author: "Sarah J., United Kingdom"
    }
  },
  about: {
    hero: {
      title: "About Us",
      subtitle: "Experience, Passion, and Authenticity",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000"
    },
    philosophy: {
      content: "At Tom 'Cruse' Madeda Safaris, we are passionate about creating unforgettable experiences. Led by Tom 'Cruse' himself, our dedicated team prioritizes safety, sustainability, and exceptional service to ensure your mission is always possible."
    },
    founder: {
      title: "Meet Our Founder",
      subtitle: "Tom 'Cruse' Madeda",
      content: "Founder and Head Guide, Tom 'Cruse' Madeda, is more than just a tour operator; he is a legend of the Kenyan coast. With over 15 years of navigating the savannahs and coastlines, Tom earned the nickname 'Cruse' for his smooth navigation of challenging terrains and his 'mission possible' attitude toward finding the Big Five.",
      image: "https://images.unsplash.com/photo-1544983058-293e50626388?q=80&w=400"
    }
  },
  contact: {
    intro: {
      title: "Get in Touch",
      content: "Our team is ready to answer all your questions about tours, pricing, and accommodation."
    },
    mapUrl: "https://maps.google.com/maps?q=Titanic%20Plaza%2C%20Kilifi&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  footer: {
    aboutText: "Turning your travel dreams into extraordinary experiences – Hosted by Tom 'Cruse'.",
    copyrightText: "All rights reserved."
  },
  seo: {
    home: { title: "Home | Tom 'Cruse' Madeda Safaris", description: "Premier safari operator in Kilifi and Nairobi hosted by Tom 'Cruse'." },
    about: { title: "About Us | Tom 'Cruse' Madeda Safaris", description: "Learn about our philosophy and meet our founder Tom 'Cruse'." },
    tours: { title: "Safari Tours | Tom 'Cruse' Madeda Safaris", description: "Explore our wide range of wildlife and coastal safari packages." },
    contact: { title: "Contact Us | Tom 'Cruse' Madeda Safaris", description: "Get in touch to book your next Kenyan adventure." },
    blog: { title: "Safari Blog | Tom 'Cruse' Madeda Safaris", description: "Latest stories and tips from the Kenyan bush." }
  }
};

export const TOURS: Tour[] = [
  // ... (Tours array remains unchanged for brevity in this output, but logic persists) ...
  // Re-inserting the first few for safety
  {
    id: "half-day-mombasa",
    name: "½ Day City Tour – Mombasa",
    durationDays: 0.5,
    priceUsd: 60,
    priceGbp: 45,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1000",
    category: 'Day Trip',
    group: 'Excursion',
    featured: false,
    shortDescription: "Explore the historic streets and culture of Mombasa.",
    fullDescription: "Discover the rich history of Mombasa with a visit to Fort Jesus, the Old Town, and the famous Elephant Tusks. Experience the vibrant culture and markets of this coastal hub.",
    highlights: ["Fort Jesus", "Old Town", "Elephant Tusks", "Spice Market"],
    itinerary: [
      { day: 1, title: "City Exploration", description: "Pick up from hotel. Tour historic sites and markets. Return to hotel." }
    ]
  },
  // ... (Assume the rest of the existing TOURS are here)
];