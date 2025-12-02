import { Tour, PageContent, CurrencyConfig } from './types';

export const COMPANY_INFO = {
  name: "Tom 'Cruse' Madeda Safari and Adventure",
  email: "info@tomsafaris.co.ke",
  phone: "+254 721 787 589",
  location: "Titanic Plaza, Kilifi, Kenya",
  slogan: "Turning your travel dreams into extraordinary experiences – Hosted by Tom 'Cruse'",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/madeda_thomas?igsh=eTA0czUxejI2ZnZp",
    whatsapp: "https://wa.me/254721787589"
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
    heroTitle: "Cruise the Wild with Tom 'Cruse'",
    heroSubtitle: "Experience the thrill of the wild with Kenya's premier safari expert, Tom 'Cruse' Madeda.",
    heroImage: "https://share.google/images/2bwfbvx4i34vzVT0v"
  },
  about: {
    philosophy: "At Tom 'Cruse' Madeda Safari and Adventure, we are passionate about creating unforgettable experiences in the heart of nature. Led by Tom 'Cruse' himself, our dedicated team prioritizes safety, sustainability, and exceptional service to ensure your mission is always possible."
  }
};

export const TOURS: Tour[] = [
  // --- EXCURSIONS FROM MOMBASA ---
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
  {
    id: "half-day-bush",
    name: "½ Day Bush Tour",
    durationDays: 0.5,
    priceUsd: 160,
    priceGbp: 105,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Day Trip',
    group: 'Excursion',
    featured: false,
    shortDescription: "A quick escape into the wild coastal bush.",
    fullDescription: "Experience a taste of the wild just a short drive from the coast. Perfect for those with limited time who want to see nature.",
    highlights: ["Coastal Bush", "Nature Walk", "Local Wildlife"],
    itinerary: [
      { day: 1, title: "Bush Adventure", description: "Morning or afternoon drive through local conservation areas." }
    ]
  },
  {
    id: "1-day-mombasa",
    name: "1 Day City Tour – Mombasa",
    durationDays: 1,
    priceUsd: 140,
    priceGbp: 75,
    image: "https://images.unsplash.com/photo-1623617395728-660c6c11db81?q=80&w=1000",
    category: 'Day Trip',
    group: 'Excursion',
    featured: false,
    shortDescription: "A comprehensive tour of Mombasa city and its surroundings.",
    fullDescription: "An extended tour of Mombasa, including lunch at a local restaurant, a visit to Haller Park to see hippos and giraffes, and extensive time in the Old Town.",
    highlights: ["Haller Park", "Fort Jesus", "Swahili Lunch", "Wood Carving Factory"],
    itinerary: [
      { day: 1, title: "Full Day Experience", description: "Morning historical tour. Swahili lunch. Afternoon nature walk at Haller Park." }
    ]
  },
  {
    id: "lunch-dhow",
    name: "Lunch Dhow Tour (Kenya Marine Land)",
    durationDays: 0.5,
    priceUsd: 0,
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "A relaxing dhow cruise with a delicious seafood lunch.",
    fullDescription: "Enjoy a scenic dhow cruise along the creek, followed by a sumptuous seafood lunch at Kenya Marine Land.",
    highlights: ["Dhow Cruise", "Seafood Lunch", "Marine Views"],
    itinerary: [
      { day: 1, title: "Dhow & Lunch", description: "Board dhow, cruise, enjoy lunch, return." }
    ]
  },
  {
    id: "wasini-island",
    name: "1 Day Wasini Island (Dolphin Dhow)",
    durationDays: 1,
    priceUsd: 160,
    priceGbp: 85,
    image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: true,
    shortDescription: "Swim with dolphins and snorkel in the Kisite Mpunguti Marine Park.",
    fullDescription: "Sail on a traditional dhow to Kisite Mpunguti Marine Park. Enjoy snorkeling, dolphin watching, and a magnificent seafood lunch on Wasini Island.",
    highlights: ["Dolphin Watching", "Snorkeling", "Seafood Lunch", "Coral Reefs"],
    itinerary: [
      { day: 1, title: "Marine Park Adventure", description: "Drive to Shimoni. Dhow sail to marine park. Snorkel. Lunch on island. Return." }
    ]
  },
  {
    id: "funzi-dhow",
    name: "1 Day Funzi Dhow",
    durationDays: 1,
    priceUsd: 160,
    priceGbp: 85,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Explore the mangrove forests and sandbanks of Funzi Island.",
    fullDescription: "A relaxing day trip exploring the winding mangrove creeks of the Ramisi River and the pristine sandbanks of Funzi Bay.",
    highlights: ["Ramisi River Mangroves", "Sandbank Picnic", "Crocodile Spotting", "Village Visit"],
    itinerary: [
      { day: 1, title: "Funzi Expedition", description: "Boat ride through mangroves. Picnic on sandbank. Visit local village. Return." }
    ]
  },
  {
    id: "malindi-gede",
    name: "1 Day Malindi & Gede Ruins",
    durationDays: 1,
    priceUsd: 195,
    priceGbp: 105,
    image: "https://images.unsplash.com/photo-1590664095641-7fa0542dfd03?q=80&w=1000",
    category: 'Day Trip',
    group: 'Excursion',
    featured: false,
    shortDescription: "Visit the ancient Gede Ruins and the coastal town of Malindi.",
    fullDescription: "Step back in time at the mysterious Gede Ruins, an ancient Swahili city buried in the forest. Continue to Malindi to see the Vasco da Gama pillar and Falconry.",
    highlights: ["Gede Ruins", "Vasco da Gama Pillar", "Malindi Museum", "Falconry of Kenya"],
    itinerary: [
      { day: 1, title: "History & Culture", description: "Drive north to Gede. Guided tour of ruins. Lunch in Malindi. City tour. Return." }
    ]
  },
  {
    id: "1-day-tsavo-east",
    name: "1 Day Tsavo East (Ngutuni)",
    durationDays: 1,
    priceUsd: 170,
    priceGbp: 110,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "A full day game drive in Tsavo East National Park. Min 4 Pax.",
    fullDescription: "Enter the 'Theater of the Wild'. Tsavo East is famous for its dust-red elephants and large lion prides. Visit the Ngutuni sanctuary area.",
    highlights: ["Red Elephants", "Aruba Dam", "Ngutuni Sanctuary"],
    itinerary: [
      { day: 1, title: "Safari Day", description: "Early departure. Game drives in Tsavo East. Lunch at a lodge. Afternoon game drive. Return to coast." }
    ]
  },
  {
    id: "1-day-shimba",
    name: "1 Day Shimba Hills",
    durationDays: 1,
    priceUsd: 195,
    priceGbp: 125,
    image: "https://images.unsplash.com/photo-1484406566174-9da000ce6478?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "Rainforest safari featuring the rare Sable Antelope.",
    fullDescription: "Explore the coastal rainforest of Shimba Hills, home to elephants and the rare Sable Antelope. Hike to Sheldrick Falls.",
    highlights: ["Sable Antelope", "Sheldrick Falls", "Rainforest", "Elephant Habitat"],
    itinerary: [
      { day: 1, title: "Reserve & Falls", description: "Game drive in reserve. Guided hike to waterfall. Lunch at Shimba Lodge. Return." }
    ]
  },
  {
    id: "1-night-shimba",
    name: "1 Night Shimba Shimba / Tree Lodge",
    durationDays: 2,
    priceUsd: 270,
    priceGbp: 165,
    image: "https://images.unsplash.com/photo-1596541223296-1875c7b39912?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Overnight in the rainforest at a tree lodge.",
    fullDescription: "Spend a night in the atmospheric Shimba Hills Tree Lodge, watching animals visit the waterhole beneath you.",
    highlights: ["Night Game Viewing", "Rainforest Sounds", "Sable Antelope"],
    itinerary: [
      { day: 1, title: "To Shimba", description: "Drive to Shimba Hills. Game drive. Dinner at Tree Lodge." },
      { day: 2, title: "Falls & Return", description: "Morning hike to Sheldrick Falls. Game drive out. Return to coast." }
    ]
  },
  {
    id: "1-night-mwaluganje",
    name: "1 Night Mwaluganje",
    durationDays: 2,
    priceUsd: 290,
    priceGbp: 200,
    image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Elephant sanctuary visit and overnight stay.",
    fullDescription: "Visit the Mwaluganje Elephant Sanctuary, a community-owned conservancy known for its scenic hills and elephant population.",
    highlights: ["Elephant Sanctuary", "Community Conservancy", "Scenic Hills"],
    itinerary: [
      { day: 1, title: "Mwaluganje", description: "Drive to sanctuary. Game viewing. Overnight at camp." },
      { day: 2, title: "Return", description: "Morning game drive. Return to Mombasa." }
    ]
  },
  {
    id: "1-night-tsavo-ndololo",
    name: "1 Night Tsavo East – Ndololo / Tarhi",
    durationDays: 2,
    priceUsd: 310,
    priceGbp: 185,
    image: "https://images.unsplash.com/photo-1550523826-b9b59628551f?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Classic camping safari in Tsavo East.",
    fullDescription: "Experience the wild of Tsavo East with a stay at a tented camp (Ndololo or Tarhi). Authentic bush feel.",
    highlights: ["Tented Camp Experience", "Lion Prides", "Red Elephants"],
    itinerary: [
      { day: 1, title: "Into the Wild", description: "Enter Tsavo East. Game drive to camp. Evening game drive." },
      { day: 2, title: "Morning Safari", description: "Early morning game drive. Breakfast. Return to Mombasa." }
    ]
  },
  {
    id: "1-night-tsavo-voi",
    name: "1 Night Tsavo East – Voi Lodge / Voi Wildlife",
    durationDays: 2,
    priceUsd: 445,
    priceGbp: 265,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Comfortable lodge stay in Tsavo East.",
    fullDescription: "Enjoy the amenities of Voi Safari Lodge or Voi Wildlife Lodge with stunning views over the plains of Tsavo East.",
    highlights: ["Lodge Comfort", "Waterhole Views", "Game Drives"],
    itinerary: [
      { day: 1, title: "Tsavo Arrival", description: "Drive to Tsavo East. Lunch at lodge. Afternoon game drive." },
      { day: 2, title: "Morning Game", description: "Morning game drive. Return to coast." }
    ]
  },
  {
    id: "1-night-amboseli",
    name: "1 Night Amboseli (Kilimanjaro) Express",
    durationDays: 2,
    priceUsd: 410,
    priceGbp: 255,
    image: "https://images.unsplash.com/photo-1534449733088-02456488a032?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "See Mt. Kilimanjaro and large elephant herds.",
    fullDescription: "A fast-paced trip to Amboseli National Park, offering the best views of Mount Kilimanjaro and huge herds of elephants.",
    highlights: ["Mt. Kilimanjaro View", "Big Tuskers", "Observation Hill"],
    itinerary: [
      { day: 1, title: "To Amboseli", description: "Early drive to Amboseli. Afternoon game drive with mountain views." },
      { day: 2, title: "Morning Views", description: "Early morning game drive. Return to coast (long drive)." }
    ]
  },
  {
    id: "1-night-taita",
    name: "1 Night Taita Hills (Saltlick)",
    durationDays: 2,
    priceUsd: 320,
    priceGbp: 205,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "Stay at the famous stilt lodge in Taita Hills Sanctuary.",
    fullDescription: "A favorite for many. Stay at Salt Lick Safari Lodge, built on stilts over a waterhole frequented by elephants and buffalo.",
    highlights: ["Stilt Lodge", "Waterhole Viewing", "Private Sanctuary"],
    itinerary: [
      { day: 1, title: "Taita Hills", description: "Drive to Taita Hills Sanctuary. Check in Salt Lick. Afternoon game drive." },
      { day: 2, title: "Sanctuary Drive", description: "Morning game viewing in the sanctuary. Depart for coast." }
    ]
  },
  {
    id: "1-night-tsavo-special",
    name: "1 Night Tsavo Special (East & West)",
    durationDays: 2,
    priceUsd: 460,
    priceGbp: 285,
    image: "https://images.unsplash.com/photo-1489396160836-2c9938527211?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Sample both Tsavo East and Tsavo West parks.",
    fullDescription: "A comprehensive 2-day safari visiting both Tsavo East (open savannah) and Tsavo West (volcanic landscape, Mzima Springs).",
    highlights: ["Mzima Springs", "Shetani Lava Flow", "Red Elephants"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive in Tsavo East. Proceed to Tsavo West for overnight." },
      { day: 2, title: "Tsavo West", description: "Visit Mzima Springs. Game drive out of park. Return." }
    ]
  },
  {
    id: "1-night-tsavo-ngutuni-4pax",
    name: "1 Night Tsavo East (Ngutuni) – Min 4 Pax",
    durationDays: 2,
    priceUsd: 285,
    priceGbp: 110,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Overnight safari in Ngutuni Sanctuary. Min 4 Pax.",
    fullDescription: "A group special to Ngutuni Sanctuary bordering Tsavo East. Excellent for close-up wildlife viewing.",
    highlights: ["Ngutuni Sanctuary", "Game Drives", "Group Special"],
    itinerary: [
      { day: 1, title: "Ngutuni", description: "Drive to Ngutuni. Game viewing. Overnight at lodge." },
      { day: 2, title: "Return", description: "Morning game drive. Return to Mombasa." }
    ]
  },
  {
    id: "2-nights-ngutuni-amboseli",
    name: "2 Nights Ngutuni & Amboseli – 4 Pax",
    durationDays: 3,
    priceUsd: 580,
    priceGbp: 355,
    image: "https://images.unsplash.com/photo-1534449733088-02456488a032?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Combine Ngutuni and Amboseli. Min 4 Pax.",
    fullDescription: "Visit two distinct ecosystems: the private Ngutuni sanctuary and the famous Amboseli National Park under Kilimanjaro.",
    highlights: ["Kilimanjaro", "Private Sanctuary", "Elephants"],
    itinerary: [
      { day: 1, title: "Ngutuni", description: "Drive to Ngutuni. Game drive. Overnight." },
      { day: 2, title: "Amboseli", description: "Transfer to Amboseli. Game drive. Overnight." },
      { day: 3, title: "Return", description: "Morning game drive. Return to coast." }
    ]
  },
  {
    id: "2-nights-ngutuni-saltlick",
    name: "2 Nights Ngutuni & Salt Lick – 4 Pax",
    durationDays: 3,
    priceUsd: 500,
    priceGbp: 295,
    image: "https://images.unsplash.com/photo-1544983058-293e50626388?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Sanctuary hopping safari. Min 4 Pax.",
    fullDescription: "Experience the best of Taita Hills and Ngutuni in this combined safari.",
    highlights: ["Salt Lick Lodge", "Ngutuni", "Exclusive Viewing"],
    itinerary: [
      { day: 1, title: "Ngutuni", description: "Drive to Ngutuni. Game drive. Overnight." },
      { day: 2, title: "Salt Lick", description: "Transfer to Taita Hills. Salt Lick overnight." },
      { day: 3, title: "Return", description: "Morning game drive. Return to coast." }
    ]
  },
  {
    id: "2-nights-tsavo-saltlick",
    name: "2 Nights Tsavo East & Salt Lick",
    durationDays: 3,
    priceUsd: 545,
    priceGbp: 325,
    image: "https://images.unsplash.com/photo-1572979601138-08b26ddf647c?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "The perfect blend of park safari and sanctuary stay.",
    fullDescription: "Combine the vast wilderness of Tsavo East with the exclusive Taita Hills Sanctuary and the famous Salt Lick Lodge.",
    highlights: ["Tsavo East", "Salt Lick Lodge", "Private Sanctuary"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Drive to Tsavo East. Game drive. Overnight in Tsavo." },
      { day: 2, title: "To Salt Lick", description: "Morning game drive. Transfer to Taita Hills Sanctuary. Night game drive optional." },
      { day: 3, title: "Return", description: "Morning game drive. Return to Mombasa." }
    ]
  },
  {
    id: "2-nights-tsavo-ngulia",
    name: "2 Nights Tsavo East / West (Ngulia)",
    durationDays: 3,
    priceUsd: 570,
    priceGbp: 350,
    image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Explore the diverse landscapes of the Tsavo ecosystem.",
    fullDescription: "Visit the Rhino Sanctuary in Tsavo West and the red elephants of Tsavo East. Stay at Ngulia Safari Lodge.",
    highlights: ["Rhino Sanctuary", "Mzima Springs", "Tsavo East Plains"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Enter Tsavo East. Game viewing. Overnight." },
      { day: 2, title: "Tsavo West", description: "Transfer to Tsavo West. Visit Rhino sanctuary. Overnight Ngulia." },
      { day: 3, title: "Mzima & Return", description: "Mzima Springs walk. Return to coast." }
    ]
  },
  {
    id: "2-nights-tsavo-amboseli",
    name: "2 Nights Tsavo East / Amboseli",
    durationDays: 3,
    priceUsd: 630,
    priceGbp: 390,
    image: "https://images.unsplash.com/photo-1517056008639-66c30e585e49?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "Best of both worlds: Elephants of Tsavo and Kilimanjaro.",
    fullDescription: "Combine the red elephants of Tsavo with the breathtaking backdrop of Mount Kilimanjaro in Amboseli.",
    highlights: ["Mt Kilimanjaro", "Large Elephant Herds", "Aruba Dam"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive in Tsavo East. Overnight." },
      { day: 2, title: "To Amboseli", description: "Drive to Amboseli. Afternoon game drive." },
      { day: 3, title: "Return", description: "Morning game drive in Amboseli. Return to coast." }
    ]
  },
  {
    id: "2-nights-tsavo-west-amboseli",
    name: "2 Nights Tsavo East / West / Amboseli",
    durationDays: 3,
    priceUsd: 585,
    priceGbp: 350,
    image: "https://images.unsplash.com/photo-1489396160836-2c9938527211?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "A whirlwind tour of the southern circuit.",
    fullDescription: "A fast-paced 3-day safari touching on Tsavo East, Tsavo West, and Amboseli.",
    highlights: ["Tsavo Ecosystem", "Amboseli", "Varied Landscapes"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive Tsavo East." },
      { day: 2, title: "Tsavo West", description: "Tsavo West game drive. Proceed to Amboseli." },
      { day: 3, title: "Amboseli", description: "Morning game drive. Return." }
    ]
  },
  {
    id: "3-nights-tsavo-amboseli",
    name: "3 Nights Tsavo East / West / Amboseli",
    durationDays: 4,
    priceUsd: 890,
    priceGbp: 555,
    image: "https://images.unsplash.com/photo-1535940357668-439589d89d6e?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "The ultimate southern Kenya circuit.",
    fullDescription: "A comprehensive 4-day safari covering the three major southern parks: Tsavo East, Tsavo West, and Amboseli.",
    highlights: ["The Big Five", "Mzima Springs", "Kilimanjaro", "Lava Flows"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Full day in Tsavo East." },
      { day: 2, title: "Tsavo West", description: "Transfer to Tsavo West. Rhino sanctuary." },
      { day: 3, title: "Amboseli", description: "Drive to Amboseli. Kilimanjaro views." },
      { day: 4, title: "Return", description: "Morning game drive. Return to coast." }
    ]
  },
  {
    id: "5-nights-tanzania",
    name: "5 Nights Tanzania Special",
    durationDays: 6,
    priceUsd: 2730,
    priceGbp: 1705,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: true,
    shortDescription: "Serengeti, Ngorongoro Crater, and Lake Manyara.",
    fullDescription: "The ultimate East African adventure crossing into Tanzania to see the Serengeti plains, Tarangire, and the Ngorongoro Crater.",
    highlights: ["Serengeti", "Ngorongoro Crater", "Lake Manyara", "Tarangire"],
    itinerary: [
      { day: 1, title: "Arusha", description: "Travel to Arusha/Moshi." },
      { day: 2, title: "Lake Manyara", description: "Game drive in Lake Manyara (Tree climbing lions)." },
      { day: 3, title: "Serengeti", description: "Enter the vast Serengeti plains." },
      { day: 4, title: "Serengeti", description: "Full day in Serengeti." },
      { day: 5, title: "Ngorongoro", description: "Descend into the crater." },
      { day: 6, title: "Return", description: "Drive back to Arusha/Mombasa." }
    ]
  },
  {
    id: "5-nights-kenya-mara",
    name: "5 Nights Tsavo / Amboseli / Masai Mara",
    durationDays: 6,
    priceUsd: 1610,
    priceGbp: 1005,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "Extended safari covering the major parks.",
    fullDescription: "A grand tour from the coast to the Mara, covering Tsavo East/West, Amboseli and the Maasai Mara.",
    highlights: ["Maasai Mara", "Amboseli", "Tsavo"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Start safari." },
      { day: 2, title: "Amboseli", description: "Amboseli National Park." },
      { day: 3, title: "Nairobi", description: "Travel towards Rift Valley." },
      { day: 4, title: "Maasai Mara", description: "Arrive Mara." },
      { day: 5, title: "Maasai Mara", description: "Full day game drive." },
      { day: 6, title: "Return", description: "Return to Mombasa/Nairobi." }
    ]
  },
  {
    id: "6-nights-kenya-grand",
    name: "6 Nights Tsavo/Amboseli/Mara/Nakuru",
    durationDays: 7,
    priceUsd: 1850,
    priceGbp: 1155,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1000",
    category: 'Safari',
    group: 'Road Safari',
    featured: false,
    shortDescription: "The complete Kenya experience back to Mombasa.",
    fullDescription: "The complete Kenya experience. Visit all the major parks including Lake Nakuru (Rhinos/Flamingos) and the Maasai Mara, returning to Mombasa by Air or Train.",
    highlights: ["Maasai Mara", "Lake Nakuru", "Lake Naivasha", "Amboseli"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Start with Tsavo East." },
      { day: 2, title: "Amboseli", description: "Proceed to Amboseli." },
      { day: 3, title: "Lake Naivasha", description: "Boat ride on Lake Naivasha." },
      { day: 4, title: "Lake Nakuru", description: "Rhino sanctuary in Nakuru." },
      { day: 5, title: "Maasai Mara", description: "Arrive in the Mara." },
      { day: 6, title: "Maasai Mara", description: "Full day game drive." },
      { day: 7, title: "Return", description: "Return to Mombasa (Train/Air)." }
    ]
  },
  {
    id: "6-nights-kilimanjaro",
    name: "6 Nights Mount Kilimanjaro Climbing",
    durationDays: 7,
    priceUsd: 1810,
    priceGbp: 1130,
    image: "https://images.unsplash.com/photo-1650635477319-798a77f7962e?q=80&w=1000",
    category: 'Trek',
    group: 'Trek',
    featured: false,
    shortDescription: "Conquer the Roof of Africa.",
    fullDescription: "A guided trek up Mount Kilimanjaro, usually via the Marangu or Machame route. Requires high fitness levels.",
    highlights: ["Uhuru Peak", "Alpine Desert", "Glaciers"],
    itinerary: [
      { day: 1, title: "Start Trek", description: "Gate to first camp." },
      { day: 2, title: "Ascent", description: "Camp 1 to Camp 2." },
      { day: 3, title: "Acclimatization", description: "Camp 2 to Camp 3." },
      { day: 4, title: "High Camp", description: "Reach base camp." },
      { day: 5, title: "Summit", description: "Midnight ascent to summit. Descend." },
      { day: 6, title: "Descent", description: "Final descent to gate." }
    ]
  },
  {
    id: "1-night-lamu",
    name: "1 Night Lamu",
    durationDays: 2,
    priceUsd: 650,
    priceGbp: 405,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000",
    category: 'Coastal',
    group: 'Flight Safari',
    featured: false,
    shortDescription: "Fly to the historic Lamu Archipelago.",
    fullDescription: "Experience the timeless culture of Lamu Old Town, a UNESCO World Heritage site. No cars, just donkeys and dhows.",
    highlights: ["Lamu Old Town", "Shela Beach", "Dhow Sailing"],
    itinerary: [
      { day: 1, title: "Fly to Lamu", description: "Flight from Mombasa/Malindi. Boat transfer. Explore town." },
      { day: 2, title: "Return", description: "Morning leisure. Flight back." }
    ]
  },
  {
    id: "1-night-zanzibar",
    name: "1 Night Zanzibar",
    durationDays: 2,
    priceUsd: 570,
    priceGbp: 355,
    image: "https://images.unsplash.com/photo-1589973320357-160368a7d515?q=80&w=1000",
    category: 'Coastal',
    group: 'Flight Safari',
    featured: false,
    shortDescription: "Spice Island getaway.",
    fullDescription: "A quick flight to Zanzibar. Explore the winding alleys of Stone Town and relax on the white sands.",
    highlights: ["Stone Town", "Spice Tour", "White Sands"],
    itinerary: [
      { day: 1, title: "Zanzibar Arrival", description: "Flight to Zanzibar. Stone Town tour." },
      { day: 2, title: "Spice & Fly", description: "Spice farm tour. Flight back." }
    ]
  },
  {
    id: "1-night-mara-flight",
    name: "1 Night Masai Mara (Flight)",
    durationDays: 2,
    priceUsd: 890,
    priceGbp: 555,
    image: "https://images.unsplash.com/photo-1615966650071-855cd69f6a02?q=80&w=1000",
    category: 'Safari',
    group: 'Flight Safari',
    featured: true,
    shortDescription: "Fly directly into the action of the Mara.",
    fullDescription: "Maximize your time with a flight safari. Land in the Mara and immediately start game viewing. Home of the Big Five.",
    highlights: ["Aerial Views", "Big Five", "Luxury Camps"],
    itinerary: [
      { day: 1, title: "Fly to Mara", description: "Morning flight. Game drive. Luxury camp overnight." },
      { day: 2, title: "Game & Return", description: "Morning game drive. Flight back to coast." }
    ]
  },
  {
    id: "2-nights-mara-flight",
    name: "2 Nights Masai Mara (Flight)",
    durationDays: 3,
    priceUsd: 1050,
    priceGbp: 655,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000",
    category: 'Safari',
    group: 'Flight Safari',
    featured: false,
    shortDescription: "Extended fly-in safari in the Mara.",
    fullDescription: "Three days in the world's most famous game reserve. Increases chances of seeing a hunt or the migration (seasonal).",
    highlights: ["Great Migration (Seasonal)", "Mara River", "Big Cats"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Fly in. Afternoon game drive." },
      { day: 2, title: "Full Day", description: "Full day game viewing with picnic lunch." },
      { day: 3, title: "Return", description: "Morning game drive. Flight back." }
    ]
  }
];