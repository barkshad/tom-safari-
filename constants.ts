import { Tour, PageContent, CurrencyConfig } from './types';

export const DATA_VERSION = "4.0"; // Force production responsive style refresh

export const COMPANY_INFO = {
  name: "Tom 'Cruse' Madeda Safaris",
  ownerName: "Tom 'Cruse' Madeda",
  email: "info@tomsafaris.co.ke",
  phone: "+254 792 150 200",
  location: "Titanic Plaza, Kilifi, Kenya",
  slogan: "Turning your travel dreams into extraordinary experiences – Hosted by Tom 'Cruse'",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/madeda_thomas?igsh=eTA0czUxejI2ZnZp",
    whatsapp: "https://wa.me/254792150200",
    tiktok: "#",
    youtube: "#"
  }
};

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪' },
  // Add other currencies as needed
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
  // --- 1. Excursions From Mombasa ---
  {
    id: "marine-park-full-day-excursion",
    name: "Marine Park Full-Day Excursion",
    durationDays: 1, priceUsd: 150, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=1000",
    category: 'Coastal', group: 'Excursion', featured: false,
    shortDescription: "Discover the underwater treasures of Mombasa's Marine Park.",
    fullDescription: "A full day dedicated to exploring the vibrant coral reefs and marine life. Includes a glass-bottom boat tour, snorkeling, and a fresh seafood lunch on a pristine island.",
    highlights: ["Snorkeling", "Coral Reefs", "Glass-Bottom Boat", "Seafood Lunch"],
    keywords: "Mombasa marine park, snorkeling kenya, day trips mombasa",
    itinerary: [{ day: 1, title: "Full-Day Marine Adventure", description: "Hotel pick-up, boat trip to the marine park, snorkeling sessions, lunch on the island, and return transfer in the evening." }]
  },
  {
    id: "new-adventure-big-game-fishing",
    name: "New Adventure Big-Game Fishing",
    durationDays: 1, priceUsd: 450, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1520645521318-f03a712f0e67?q=80&w=1000",
    category: 'Coastal', group: 'Excursion', featured: false,
    shortDescription: "A thrilling deep-sea fishing adventure in the Indian Ocean.",
    fullDescription: "Charter a professional fishing boat and head into the deep waters to test your skills against marlin, sailfish, tuna, and other big game fish. All equipment and expert guidance provided.",
    highlights: ["Deep-Sea Fishing", "Marlin & Tuna", "Professional Crew", "All Gear Included"],
    keywords: "deep sea fishing mombasa, kenya fishing charter, big game fishing",
    itinerary: [{ day: 1, title: "Deep Sea Fishing Charter", description: "Early morning departure from the jetty, a full day of fishing in the deep sea channels, and return to shore with your catch." }]
  },
  {
    id: "new-adventure-sunset-cruise",
    name: "New Adventure – Sunset Cruise",
    durationDays: 1, priceUsd: 30, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000",
    category: 'Coastal', group: 'Excursion', featured: false,
    shortDescription: "Experience a magical sunset aboard a traditional dhow.",
    fullDescription: "Enjoy a relaxing evening cruise along the coast as the sun sets over the Indian Ocean. A perfect romantic or family experience with snacks and refreshments.",
    highlights: ["Sunset Views", "Dhow Cruise", "Coastal Scenery", "Relaxation"],
    keywords: "sunset cruise mombasa, dhow safari kenya, evening cruise",
    itinerary: [{ day: 1, title: "Evening Dhow Cruise", description: "Depart before sunset, sail along the coastline enjoying the views and refreshments, return after dusk." }]
  },

  // --- 2. Road Safaris ---
  {
    id: "adventure-safari-3-days-tsavo",
    name: "Adventure Safari – 3 Days (Tsavo East & West)",
    durationDays: 3, priceUsd: 450, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000",
    category: 'Safari', group: 'Road Safari', featured: true,
    shortDescription: "Classic adventure through Kenya's iconic Tsavo National Parks.",
    fullDescription: "Experience a classic 3-day adventure through Tsavo East and Tsavo West — two of Kenya’s most iconic wildlife destinations. Expect red elephants, vast savannahs, rhino sanctuary stops, and breathtaking landscapes.",
    highlights: ["Red Elephants", "Rhino Sanctuary", "Vast Savannahs", "Iconic Lodges"],
    keywords: "tsavo east safari, tsavo west, 3 day kenya safari, red elephants",
    itinerary: [
      { day: 1, title: "Kilifi/Mombasa → Tsavo East", description: "Pick-up at 6:00 AM. Breakfast stop at Bachuma. Enter Tsavo East for a game drive until lunchtime. Lunch and relaxation at Voi Wildlife Lodge, followed by an afternoon game drive. Dinner & overnight." },
      { day: 2, title: "Tsavo East → Tsavo West", description: "After breakfast, check-out and enjoy a game drive en-route to Tsavo West. Arrive for lunch at Ngulia Safari Lodge. Evening game drive at the Rhino Sanctuary. Dinner & overnight." },
      { day: 3, title: "Morning Game Drive → Return", description: "Early morning game drive. Return for breakfast, then check-out and enjoy a final game drive en-route back to Mombasa/Kilifi, arriving around 6:00 PM." }
    ]
  },
  {
    id: "3-day-tsavo-east-salt-lick-safari",
    name: "3-Day Tsavo East & Salt Lick Safari",
    durationDays: 3, priceUsd: 650, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1499951666687-d1a296d1152a?q=80&w=1000",
    category: 'Safari', group: 'Road Safari', featured: true,
    shortDescription: "See Tsavo's red elephants and stay at the magical Salt Lick Lodge.",
    fullDescription: "A classic 3-day safari through the vast plains of Tsavo East, home to the world-famous red elephants. Your journey ends with a magical stay at Taita Hills & Salt Lick Safari Lodge, where elephants gather at the watering holes right below your room.",
    highlights: ["Red Elephants", "Aruba Dam", "Salt Lick Lodge Skywalk", "Lion Sightings"],
    keywords: "salt lick safari, taita hills, tsavo east, kenya luxury safari",
    itinerary: [
      { day: 1, title: "Kilifi → Tsavo East", description: "Pick-up at 6:00 AM. Drive to Tsavo East, entering for a game drive until lunch at Voi Safari Lodge. Afternoon game drive and overnight." },
      { day: 2, title: "Tsavo East → Taita Hills → Salt Lick", description: "Morning game drive en-route out of Tsavo East. Arrive at Taita Hills Lodge for lunch, then transfer to Salt Lick Safari Lodge. Evening game drive in the sanctuary." },
      { day: 3, title: "Morning Game Drive → Return", description: "Early morning game drive, followed by breakfast. Check-out and drive back to Mombasa, arriving in the evening." }
    ]
  },
  {
    id: "3-day-amboseli-express-safari",
    name: "3-Day Amboseli Express Safari",
    durationDays: 3, priceUsd: 680, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    category: 'Safari', group: 'Road Safari', featured: true,
    shortDescription: "Unforgettable views of Mt. Kilimanjaro and its elephant herds.",
    fullDescription: "Welcome to Amboseli — the land where Mount Kilimanjaro paints the sky. This hidden gem offers unforgettable views, peaceful landscapes, and some of Kenya’s best elephant sightings.",
    highlights: ["Mount Kilimanjaro Views", "Large Elephant Herds", "Peaceful Landscapes", "Photography"],
    keywords: "amboseli safari, kilimanjaro view, kenya elephant safari, 3 day amboseli",
    itinerary: [
      { day: 1, title: "Kilifi → Amboseli", description: "Pick-up at 5:00 AM. Arrive at Citim Lodge for lunch. Relax until the evening game drive. Dinner and overnight." },
      { day: 2, title: "Full-Day Amboseli Game Drive", description: "After breakfast, embark on a full-day game drive with a packed lunch to maximize wildlife viewing against the backdrop of Kilimanjaro." },
      { day: 3, title: "Amboseli → Kibo Camp → Mombasa", description: "Breakfast, check-out with a game drive en-route. Lunch at Kibo Safari Camp, followed by an evening game drive. The next morning, drive back to Mombasa." }
    ]
  },
  {
    id: "the-sunset-safari-3-days",
    name: "The Sunset Safari (3 Days)",
    durationDays: 3, priceUsd: 500, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Safari', group: 'Road Safari', featured: false,
    shortDescription: "A relaxing safari focused on golden hour game drives.",
    fullDescription: "A relaxing safari combining classic game drives with special sunset excursions, offering perfect opportunities for scenic photography and tranquil wildlife viewing.",
    highlights: ["Sunset Game Drives", "Photography Focus", "Scenic Landscapes", "Relaxed Pace"],
    keywords: "sunset safari kenya, photography safari, tsavo sunset",
    itinerary: [
      { day: 1, title: "Arrival and Sundowner", description: "Depart from the coast, arriving at your lodge for lunch. Embark on a special late afternoon and sunset game drive." },
      { day: 2, title: "Full Day Exploration", description: "Morning and afternoon game drives, with a focus on finding scenic spots for golden hour photography." },
      { day: 3, title: "Final Game Drive and Return", description: "One last early morning game drive before breakfast and the journey back to the coast." }
    ]
  }
];