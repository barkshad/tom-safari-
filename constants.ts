
import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "5.0"; // Force production futuristic style refresh

export const COMPANY_INFO: CompanyInfo = {
  name: "Tom Safaris & Adventures – Cruse Experiences",
  ownerName: "Tom 'Cruse' Madeda",
  email: "info@tomsafaris.co.ke",
  phone: "+254 792 150 200",
  location: "Titanic Plaza, Kilifi, Kenya",
  slogan: "Extraordinary journeys, hosted by 'Cruse'. Mission possible.",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/madeda_thomas?igsh=eTA0czUxejI2ZnZp",
    whatsapp: "https://wa.me/254792150200",
  },
  animationsEnabled: true,
};

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'AED', flag: '🇦🇪' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
];

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "5-essentials-for-your-first-kenyan-safari",
    title: "5 Essentials for Your First Kenyan Safari",
    excerpt: "Packing for a safari can be tricky. Here is our guide to the must-have items for a comfortable and exciting adventure in the bush.",
    content: "A safari is a trip of a lifetime, but packing for it requires some thought. Unlike a typical vacation, you'll be spending a lot of time in a vehicle, in varied temperatures, and surrounded by nature. Here are the five absolute essentials to bring:\n\n1. **Layered Clothing:** Temperatures can swing wildly from chilly pre-dawn game drives to hot afternoons. Pack lightweight layers: t-shirts, long-sleeved shirts, a fleece or warm jacket, and a waterproof windbreaker. Neutral colors like khaki, olive, and brown are best as they don't distract wildlife.\n\n2. **A Good Camera and Binoculars:** Don't rely on your phone! A dedicated camera with a good zoom lens will capture those incredible wildlife moments. Equally important are binoculars. Often, the most interesting sightings are at a distance, and a good pair of binoculars brings the action right to you.\n\n3. **Sun Protection:** The African sun is intense. A wide-brimmed hat, high-SPF sunscreen, and sunglasses are non-negotiable to protect you from sunburn and glare, allowing you to enjoy the views comfortably.\n\n4. **Comfortable, Closed-Toe Shoes:** You'll be getting in and out of the safari vehicle and may do some light walking. Sturdy, comfortable shoes like trail runners or light hiking boots are perfect. Avoid sandals or open shoes to protect your feet from dust and insects.\n\n5. **A Sense of Adventure:** The most important item! A safari is unpredictable. Some days you'll see the entire Big Five; other days might be quieter. Embrace the journey, trust your guide, and be open to the magic of the wild. Every day in the bush is a unique experience.",
    image: "https://images.unsplash.com/photo-1523393665780-69d6797f1cc5?q=80&w=800&auto=format&fit=crop",
    category: "Travel Tips",
    date: "October 12, 2023",
  },
  {
    id: "post-2",
    slug: "the-great-migration-when-and-where-to-go",
    title: "The Great Migration: When and Where to Go",
    excerpt: "Witnessing the Great Migration is a bucket-list experience. Learn the best times to visit the Maasai Mara to catch the action.",
    content: "The Great Wildebeest Migration is one of the most spectacular wildlife events on the planet. Over a million wildebeest, accompanied by zebras and gazelles, journey in a clockwise circle through the Serengeti in Tanzania and the Maasai Mara in Kenya. The key to witnessing it is timing.\n\nThe most dramatic part of this journey for visitors to Kenya is the Mara River crossing. This typically happens between **July and October**. During these months, the herds pour into the Maasai Mara National Reserve from the Serengeti, facing the perilous, crocodile-infested waters of the Mara River.\n\n**Best time to visit:** Booking your safari between late July and September gives you the highest chance of seeing multiple river crossings. The drama is intense, as the animals must evade predators both in the water and on the banks.\n\nWhile this is the peak season, the Maasai Mara offers incredible game viewing year-round. But if the Great Migration is your primary goal, aim for that late summer to early autumn window. It's an experience that will stay with you forever.",
    image: "https://images.unsplash.com/photo-1535940357668-439589d89d6e?q=80&w=800&auto=format&fit=crop",
    category: "Wildlife",
    date: "September 05, 2023",
  },
  {
    id: "post-3",
    slug: "exploring-lamu-a-journey-back-in-time",
    title: "Exploring Lamu: A Journey Back in Time",
    excerpt: "Beyond the wildlife, Kenya's coast offers rich history. Discover the magic of Lamu Old Town and its Swahili heritage.",
    content: "While Kenya is famous for its safaris, its coastline holds treasures of a different kind. The island of Lamu, a UNESCO World Heritage site, is a place where time seems to stand still. There are no cars on the island; the primary modes of transport are donkeys and dhows (traditional sailing boats).\n\nThe heart of the island is Lamu Old Town, the oldest and best-preserved Swahili settlement in East Africa. Wandering its narrow, winding streets is like stepping into another century. The architecture is a unique blend of Swahili, Arabic, Persian, Indian, and European influences, with intricately carved wooden doors and beautiful coral stone buildings.\n\n**Things to do in Lamu:**\n- **Explore the Old Town:** Get lost in the alleyways and discover hidden courtyards, bustling markets, and ancient mosques.\n- **Sail on a Dhow:** A sunset dhow cruise is a magical experience, offering stunning views of the coast as the sky changes color.\n- **Relax on Shela Beach:** Just a short walk from the town, this pristine, 12km-long beach is perfect for relaxing and swimming.\n- **Visit the Lamu Museum:** Learn about the rich history and culture of the Swahili people.\n\nA trip to Lamu is the perfect way to unwind after an exciting safari, offering a peaceful and culturally rich contrast to the adventure of the bush.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop",
    category: "Destinations",
    date: "August 20, 2023",
  }
];


export const DEFAULT_PAGE_CONTENT: PageContent = {
  home: {
    hero: {
      title: "Cruise the Wild",
      subtitle: "Experience the thrill of the wild with Kenya's premier safari expert, Tom 'Cruse' Madeda.",
      image: "https://i.ibb.co/Yh4wV0n/tsavo-safari-hero.jpg"
    },
    welcome: {
      title: "Welcome to Cruse Experiences",
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
      content: "At Tom Safaris & Adventures, we are passionate about creating unforgettable experiences. Led by Tom 'Cruse' himself, our dedicated team prioritizes safety, sustainability, and exceptional service to ensure your mission is always possible."
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
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1974&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1581424956326-6178a168a6ed?q=80&w=1932&auto=format&fit=crop",
    category: 'Coastal', group: 'Excursion', featured: false,
    shortDescription: "A thrilling deep-sea fishing adventure in the Indian Ocean.",
    fullDescription: "Charter a professional fishing boat and head into the deep waters to test your skills against marlin, sailfish, tuna, and other big game fish. All equipment and expert guidance provided.",
    highlights: ["Deep-Sea Fishing", "Marlin & Tuna", "Professional Crew", "All Gear Included"],
    keywords: "deep sea fishing mombasa, kenya fishing charter, big game fishing",
    itinerary: [{ day: 1, title: "Deep Sea Fishing Charter", description: "Early morning departure from the jetty, a full day of fishing in the deep sea channels, and return to shore with your catch." }]
  },
  {
    id: "new-adventure-sunset-cruise",
    name: "New Adventure – Sunset Dhow Cruise",
    durationDays: 1, priceUsd: 30, priceGbp: 0,
    image: "https://images.unsplash.com/photo-1582882894396-3e1572a1843a?q=80&w=1964&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1605303493132-845d3e236592?q=80&w=1974&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1620675239334-a347338a0c20?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070&auto=format&fit=crop",
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
