
import { Tour, PageContent, CurrencyConfig } from './types';

export const DATA_VERSION = "1.3"; // Incremented to force data refresh

export const COMPANY_INFO = {
  name: "Tom 'Cruse' Madeda Safaris",
  ownerName: "Tom 'Cruse' Madeda",
  email: "info@tomsafaris.co.ke",
  phone: "+254 792 150 200", // Updated to match WhatsApp
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
  // Excursions From Mombasa
  {
    id: "marine-park-full-day",
    name: "Marine Park Full-Day Excursion",
    durationDays: 1,
    priceUsd: 150,
    priceGbp: 115,
    image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Explore the vibrant marine life of Mombasa's coast.",
    fullDescription: "A full day of snorkeling, swimming, and exploring the stunning coral reefs of the Marine Park. Includes a seafood lunch.",
    highlights: ["Snorkeling", "Glass Bottom Boat", "Seafood Lunch", "Coral Reefs"],
    itinerary: [{ day: 1, title: "Marine Park Adventure", description: "Pick up from hotel, boat ride to park, snorkeling, lunch, and return." }]
  },
  {
    id: "big-game-fishing",
    name: "New Adventure Big-Game Fishing",
    durationDays: 1,
    priceUsd: 450,
    priceGbp: 345,
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: true,
    shortDescription: "Thrilling deep-sea fishing experience.",
    fullDescription: "Head out into the deep waters of the Indian Ocean for a chance to catch marlin, sailfish, and tuna. Professional equipment provided.",
    highlights: ["Deep Sea Fishing", "Professional Gear", "Ocean Views"],
    itinerary: [{ day: 1, title: "Fishing Expedition", description: "Early morning departure, full day fishing, return to shore." }]
  },
  {
    id: "sunset-cruise",
    name: "New Adventure – Sunset Cruise",
    durationDays: 1,
    priceUsd: 30,
    priceGbp: 25,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Relaxing sunset dhow cruise.",
    fullDescription: "Sail the creek as the sun sets, enjoying snacks and music in a traditional dhow.",
    highlights: ["Sunset Views", "Traditional Dhow", "Snacks & Music"],
    itinerary: [{ day: 1, title: "Sunset Sail", description: "Evening pick up, dhow cruise, return to hotel." }]
  },
  {
    id: "sunset-experience",
    name: "New Adventure – Sunset Experience",
    durationDays: 1,
    priceUsd: 30,
    priceGbp: 25,
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Magical evening by the ocean.",
    fullDescription: "Enjoy a curated sunset experience with beachside refreshments and stunning views.",
    highlights: ["Beachside Setup", "Refreshments", "Photography"],
    itinerary: [{ day: 1, title: "Sunset Experience", description: "Arrival at location, sunset viewing, return." }]
  },
  {
    id: "adventure-big-fishing",
    name: "Adventure Big Fishing",
    durationDays: 1,
    priceUsd: 500,
    priceGbp: 385,
    image: "https://images.unsplash.com/photo-1616782234208-c840f316d352?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Premium big game fishing charter.",
    fullDescription: "An exclusive fishing charter for serious anglers targeting the biggest catch.",
    highlights: ["Premium Boat", "Expert Crew", "Trophy Fishing"],
    itinerary: [{ day: 1, title: "Big Game Hunter", description: "Full day private charter." }]
  },
  {
    id: "diving-adventure",
    name: "New Adventure – Diving",
    durationDays: 1,
    priceUsd: 220,
    priceGbp: 170,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Scuba diving in coral reefs.",
    fullDescription: "Discover the underwater world with our certified dive masters.",
    highlights: ["Scuba Diving", "Marine Life", "Certified Guides"],
    itinerary: [{ day: 1, title: "Dive Day", description: "Briefing, two dives, lunch." }]
  },
  
  // Road Safaris
  {
    id: "tsavo-east-west-3days",
    name: "Adventure Safari – Tsavo East & West",
    durationDays: 3,
    priceUsd: 450,
    priceGbp: 345,
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "3 Days exploring the best of Tsavo East and West.",
    fullDescription: "Experience a classic 3-day adventure through Tsavo East and Tsavo West — two of Kenya’s most iconic wildlife destinations. Expect red elephants, vast savannahs, rhino sanctuary stops, and breathtaking landscapes.",
    highlights: ["Red Elephants", "Rhino Sanctuary", "Mzima Springs", "Shetani Lava Flow"],
    itinerary: [
      { day: 1, title: "Kilifi/Mombasa → Tsavo East", description: "Pick-up at 6:00 AM. Enter Tsavo East around 11:15 AM. Lunch at Voi Wildlife Lodge. Afternoon game drive. Dinner & overnight." },
      { day: 2, title: "Tsavo East → Tsavo West", description: "Breakfast, game en-route to Tsavo West. Enter at 10:00 AM. Lunch at Ngulia Safari Lodge. Evening game drive at Rhino Sanctuary. Dinner & overnight." },
      { day: 3, title: "Morning Game Drive → Return", description: "Early morning drive at 6:00 AM. Breakfast. Drive back to Mombasa/Kilifi arriving around 6:00 PM." }
    ]
  },
  {
    id: "tsavo-salt-lick-3days",
    name: "Tsavo East & Salt Lick Safari",
    durationDays: 3,
    priceUsd: 650,
    priceGbp: 500,
    image: "https://images.unsplash.com/photo-1499951666687-d1a296d1152a?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "Stay at the famous stilted Salt Lick Lodge.",
    fullDescription: "A classic 3-day safari through the vast plains of Tsavo East, home to the world-famous red elephants. Your journey ends with a magical stay at Taita Hills & Salt Lick Safari Lodge, where elephants gather at the watering holes right below your room.",
    highlights: ["Salt Lick Lodge Skywalk", "Red Elephants", "Aruba Dam", "Lion Sightings"],
    itinerary: [
      { day: 1, title: "Kilifi → Tsavo East", description: "Pick-up at 6:00 AM. Enter park at ~10:30 AM. Lunch at Voi Safari Lodge. Afternoon game drive. Dinner & overnight." },
      { day: 2, title: "Tsavo East → Taita Hills → Salt Lick", description: "Breakfast. Game drive en-route exiting Tsavo East. Arrive at Taita Hills Lodge for lunch. Relax at Salt Lick Safari Lodge. Evening game drive. Dinner & overnight." },
      { day: 3, title: "Morning Game Drive → Return", description: "Early morning game drive. Return for full breakfast. Check-out. Drive to Mombasa arriving around 6:00 PM." }
    ]
  },
  {
    id: "amboseli-express-3days",
    name: "Amboseli Express Safari",
    durationDays: 3,
    priceUsd: 680,
    priceGbp: 525,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "Kilimanjaro views and large elephant herds.",
    fullDescription: "Welcome to Amboseli — the land where Mount Kilimanjaro paints the sky. This hidden gem offers unforgettable views, peaceful landscapes, and some of Kenya’s best elephant sightings.",
    highlights: ["Mt. Kilimanjaro Views", "Large Elephant Herds", "Observation Hill"],
    itinerary: [
      { day: 1, title: "Kilifi → Amboseli", description: "Pick-up at 5:00 AM. Arrive around 1:30 PM. Lunch at Citim Lodge. Evening game drive. Dinner & overnight." },
      { day: 2, title: "Full-Day Amboseli", description: "Full-day game drive with lunchbox. Explore the park and observation hill. Return to lodge." },
      { day: 3, title: "Amboseli → Kibo Camp → Mombasa", description: "Breakfast. Game en-route. Lunch at Kibo Safari Camp. Evening game drive. Next morning return to Mombasa." }
    ]
  },
  {
    id: "sunset-safari-3days",
    name: "The Sunset Safari",
    durationDays: 3,
    priceUsd: 500,
    priceGbp: 385,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "A relaxing scenic safari experience.",
    fullDescription: "A relaxing safari combining game drives with sunset excursions and scenic photography opportunities.",
    highlights: ["Sunset Game Drives", "Photography", "Scenic Landscapes"],
    itinerary: [
      { day: 1, title: "Journey Begins", description: "Departure and afternoon game drive." },
      { day: 2, title: "Wildlife & Sunsets", description: "Full day exploration with sunset focus." },
      { day: 3, title: "Morning Glory", description: "Morning drive and return journey." }
    ]
  },
  
  // Previous Inventory (Preserved for variety)
  {
    id: "shimba-hills-1day",
    name: "1 Day Shimba Hills",
    durationDays: 1,
    priceUsd: 195,
    priceGbp: 150,
    image: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Forests, waterfalls, and sable antelope.",
    fullDescription: "A day trip to the enchanting Shimba Hills National Reserve, featuring lush coastal rainforests, Sheldrick Falls, and the rare Sable Antelope.",
    highlights: ["Sheldrick Falls", "Sable Antelope", "Coastal Rainforest", "Elephant Hill"],
    itinerary: [{ day: 1, title: "Shimba Adventure", description: "Morning pickup, game drive, hike to falls, lunch at Shimba Lodge, evening drive back." }]
  },
  {
    id: "lamu-flight-1night",
    name: "1 Night Lamu Flight",
    durationDays: 2,
    priceUsd: 650,
    priceGbp: 500,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000",
    category: 'Coastal',
    group: 'Flight Safari',
    featured: false,
    shortDescription: "Fly to the historic Swahili island of Lamu.",
    fullDescription: "Step back in time in Lamu Old Town, a UNESCO World Heritage site. Enjoy narrow streets, donkey transport, and dhow sailing.",
    highlights: ["Lamu Old Town", "Dhow Sailing", "Swahili Architecture", "Shela Beach"],
    itinerary: [
        { day: 1, title: "Arrival in Lamu", description: "Flight to Manda, boat transfer, explore Old Town." },
        { day: 2, title: "Lamu Leisure", description: "Morning beach time or museum visit, flight back." }
    ]
  },
  {
    id: "zanzibar-flight-1night",
    name: "1 Night Zanzibar Flight",
    durationDays: 2,
    priceUsd: 570,
    priceGbp: 440,
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1000",
    category: 'Coastal',
    group: 'Flight Safari',
    featured: false,
    shortDescription: "Spice Island getaway.",
    fullDescription: "A quick escape to the magical island of Zanzibar. Visit Stone Town and relax on pristine white sands.",
    highlights: ["Stone Town", "Spice Tour", "White Sand Beaches"],
    itinerary: [
        { day: 1, title: "Zanzibar Landing", description: "Flight arrival, Stone Town tour, evening at Forodhani Gardens." },
        { day: 2, title: "Beach & Departure", description: "Morning swim, spice market shopping, return flight." }
    ]
  },
  {
    id: "mara-flight-1night",
    name: "1 Night Maasai Mara Flight",
    durationDays: 2,
    priceUsd: 890,
    priceGbp: 685,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Safari',
    group: 'Flight Safari',
    featured: true,
    shortDescription: "Fly straight to the action in the Mara.",
    fullDescription: "Maximize your time with a flight directly into the Maasai Mara. Witness the Big Five and the vast savannah from the air and land.",
    highlights: ["Big Five", "Aerial Views", "Maasai Culture"],
    itinerary: [
        { day: 1, title: "Into the Mara", description: "Morning flight, lunch at camp, afternoon game drive." },
        { day: 2, title: "Morning Safari", description: "Dawn game drive, bush breakfast, return flight." }
    ]
  },
  {
    id: "mara-flight-2night",
    name: "2 Nights Maasai Mara Flight",
    durationDays: 3,
    priceUsd: 1050,
    priceGbp: 810,
    image: "https://images.unsplash.com/photo-1535940357668-439589d89d6e?q=80&w=1000",
    category: 'Safari',
    group: 'Flight Safari',
    featured: false,
    shortDescription: "Extended stay in the world's best reserve.",
    fullDescription: "An immersive 3-day experience in the Maasai Mara. Ample time for tracking lions, leopards, and cheetahs.",
    highlights: ["Big Cat Tracking", "Mara River", "Sundowners"],
    itinerary: [
        { day: 1, title: "Arrival", description: "Flight to Mara, check-in, evening game drive." },
        { day: 2, title: "Full Day Mara", description: "Full day exploration with picnic lunch in the wild." },
        { day: 3, title: "Farewell Mara", description: "Morning game drive, flight back to coast." }
    ]
  }
];
