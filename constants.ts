
import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "6.6"; // Added Image List Tours

export const COMPANY_INFO: CompanyInfo = {
  name: "Tom Safaris",
  ownerName: "Tom 'Cruse' Madeda",
  email: "admin@tomsafaris.co.ke",
  phone: "+254721787589",
  location: "Titanic Plaza, Kilifi, Kenya",
  slogan: "Extraordinary journeys, hosted by 'Cruse'. Mission possible.",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/madeda_thomas?igsh=eTA0czUxejI2ZnZp",
    whatsapp: "https://wa.me/254721787589",
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
];

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "post-tsavo-east-guide",
    slug: "what-to-expect-on-a-tsavo-east-safari-from-the-coast",
    title: "What to Expect on a Tsavo East Safari from the Coast",
    excerpt: "Starting your safari from Mombasa or Diani? Here’s a step-by-step breakdown of what makes a Tsavo East adventure so special.",
    content: `For many visitors enjoying Kenya's beautiful coastline, the call of the wild is never far away. A common question we get is, "How does a safari work if we're staying in Mombasa or Diani?" The answer lies in Tsavo East National Park.

**Your Safari Day, Step-by-Step**

A typical Tsavo East safari from the coast is designed for maximum wildlife viewing and comfort. Here’s what you can expect:

1.  **Early Start:** Your adventure begins with an early morning pick-up from your coastal hotel.
2.  **The Journey In:** The drive to the park entrance is an experience in itself.
3.  **First Game Drive:** Upon entering the park, your first game drive begins immediately.
4.  **Lunch at a Safari Lodge:** You'll arrive at your safari lodge or camp in time for lunch.
5.  **Afternoon Game Drive:** After a period of relaxation, you'll head out for an afternoon game drive.
6.  **Sundowners and Dinner:** You'll return to your lodge as the sun sets.

**Wildlife and Scenery to Expect**

Tsavo East is famous for its "Red Elephants," which get their color from dusting themselves with the park's iron-rich red soil. Beyond these gentle giants, you are likely to see lions, giraffes, zebras, buffaloes, and a vast array of birdlife.`,
    image: "https://images.unsplash.com/photo-1597930232210-907350a6210c?q=80&w=2070&auto=format&fit=crop",
    category: "Safari Guide",
    date: "October 26, 2023",
  },
  {
    id: "post-mombasa-city-tour",
    slug: "why-a-mombasa-city-tour-is-more-than-just-sightseeing",
    title: "Why a Mombasa City Tour Is More Than Just Sightseeing",
    excerpt: "Discover the rich history, vibrant culture, and hidden stories that make a guided tour of Mombasa an unforgettable cultural deep-dive.",
    content: `Many visitors to Kenya's coast are drawn by the promise of white-sand beaches and turquoise waters. While the relaxation is unparalleled, it's easy to overlook the vibrant heart of the region: Mombasa.

**Key Stops That Tell a Story**

-   **Fort Jesus:** This UNESCO World Heritage site is the city's most iconic landmark.
-   **Mombasa Old Town:** Wandering the narrow, winding streets of the Old Town is like stepping back in time.
-   **The Spice Market (Marikiti):** This is a sensory explosion.
-   **The Elephant Tusks:** While a popular photo spot, the iconic tusks on Moi Avenue were originally built to commemorate a visit from Queen Elizabeth.`,
    image: "https://images.unsplash.com/photo-1598233379891-10d223910243?q=80&w=2070&auto=format&fit=crop",
    category: "Cultural Experiences",
    date: "October 22, 2023",
  },
];

export const DEFAULT_PAGE_CONTENT: PageContent = {
  home: {
    hero: {
      title: "Cruise the Wild",
      subtitle: "Experience the thrill of the wild with Kenya's premier safari expert, Tom 'Cruse' Madeda.",
      image: "https://i.ibb.co/Yh4wV0n/tsavo-safari-hero.jpg"
    },
    welcome: {
      title: "Welcome to Tom Safaris",
      content: "We are a premier safari and adventure tour operator based in Kilifi, dedicated to organizing wildlife, coastal, and adventure tours across Kenya."
    },
    features: [
      { id: 'f1', title: "Safety First", text: "Expert guides and well-maintained vehicles for a secure journey." },
      { id: 'f2', title: "Local Expertise", text: "We know the hidden gems, wildlife patterns, and cultural nuances." },
      { id: 'f3', title: "Authentic Experiences", text: "Passionate about creating unforgettable memories in nature." }
    ],
    testimonials: [
      {
        id: 't1',
        content: "We had the most amazing time with Tom 'Cruse'. The driver was knowledgeable, the lodges were beautiful, and seeing the lions in Maasai Mara was a dream come true!",
        author: "Sarah J., United Kingdom"
      }
    ]
  },
  about: {
    hero: {
      title: "About Us",
      subtitle: "Experience, Passion, and Authenticity",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000"
    },
    philosophy: {
      content: "At Tom Safaris, we are passionate about creating unforgettable experiences. Led by Tom 'Cruse' himself, our dedicated team prioritizes safety, sustainability, and exceptional service to ensure your mission is always possible."
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
    home: { title: "Home | Tom Safaris", description: "Premier safari operator in East Africa hosted by Tom 'Cruse'." },
    about: { title: "About Us | Tom Safaris", description: "Learn about our philosophy and meet our founder Tom 'Cruse'." },
    tours: { title: "Safari Tours | Tom Safaris", description: "Explore our wide range of wildlife and coastal safari packages." },
    contact: { title: "Contact Us | Tom Safaris", description: "Get in touch to book your next adventure." },
    blog: { title: "Safari Blog | Tom Safaris", description: "Latest stories and tips from the bush." }
  }
};

const DEFAULT_INCLUSIONS = [
  "Private 4×4 Land Cruiser (pop-up roof)",
  "Professional English-speaking guide",
  "Full board accommodation",
  "All park & conservation fees",
  "Bottled drinking water",
  "Airport transfers"
];

const DEFAULT_EXCLUSIONS = [
  "International flights",
  "Visas & travel insurance",
  "Tips & personal expenses",
  "Alcoholic drinks"
];

// Base list of tours
export const TOURS: Tour[] = [
  {
    id: "maasai-mara-classic",
    name: "Maasai Mara Classic Safari",
    durationDays: 3,
    priceUsd: 800,
    priceGbp: 640,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071",
    category: "Safari",
    group: "Road Safari",
    featured: true,
    shortDescription: "Join our Masai Mara tours starting from Kilifi to witness iconic Big Five wildlife.",
    fullDescription: "Experience the heart of Africa’s wildlife with our Maasai Mara Classic Safari, departing conveniently from Kilifi. We handle all logistics, transferring you from the coast to the legendary Mara plains, home to the Big Five and the dramatic wildebeest migration.",
    highlights: ["Kilifi Departure", "Big Five Game Drives", "Wildebeest Migration (Seasonal)", "Maasai Village Visit"],
    itinerary: [
      { day: 1, title: "Kilifi to Maasai Mara", description: "Early morning pickup from your Kilifi hotel/resort. Transfer to Malindi/Mombasa airport for a flight to the Mara (or SGR to Nairobi connecting to Mara). Arrive in time for lunch and an afternoon game drive." },
      { day: 2, title: "Full Day in Maasai Mara", description: "Spend the entire day exploring the vast plains, tracking lions, cheetahs, and elephants with a picnic lunch in the wild." },
      { day: 3, title: "Mara to Kilifi", description: "A final sunrise game drive before breakfast. Transfer to airstrip for your return flight to the coast, followed by a transfer back to your Kilifi residence." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: [...DEFAULT_EXCLUSIONS, "Optional balloon safaris"]
  },
  {
    id: "amboseli-kilimanjaro",
    name: "Amboseli & Kilimanjaro Views",
    durationDays: 3,
    priceUsd: 750,
    priceGbp: 600,
    image: "https://images.unsplash.com/photo-1549320341-9426d03d45d6?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: true,
    shortDescription: "Depart Kilifi for Amboseli National Park — majestic elephants and Mt. Kilimanjaro.",
    fullDescription: "Discover the majestic Amboseli National Park with Tom Safaris. Departing from Kilifi, this road safari takes you through the scenic coastal hinterland to the foot of Mount Kilimanjaro.",
    highlights: ["Kilifi Departure", "Mt. Kilimanjaro Views", "Large Elephant Herds", "Observation Hill"],
    itinerary: [
      { day: 1, title: "Kilifi to Amboseli", description: "05:00 AM pickup from Kilifi. Drive along the Mombasa-Nairobi highway, entering Amboseli around midday. Lunch at the lodge followed by an afternoon game drive." },
      { day: 2, title: "Full Day Amboseli", description: "Full day game drive. Visit the swamp grounds where elephants bathe and hike Observation Hill for panoramic views of Kilimanjaro." },
      { day: 3, title: "Amboseli to Kilifi", description: "Morning game drive to catch the predators. Depart after breakfast for the return drive to Kilifi, arriving in the evening." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-day-trip",
    name: "Tsavo East Day Safari",
    durationDays: 1,
    priceUsd: 200,
    priceGbp: 160,
    image: "https://images.unsplash.com/photo-1550160248-038c3666f2a8?q=80&w=2070",
    category: 'Safari',
    group: 'Excursion', 
    featured: false,
    shortDescription: "A quick but intense dose of wildlife starting and ending in Kilifi.",
    fullDescription: "Perfect for those in Kilifi short on time. Enter Tsavo East through Bachuma gate and spend the day searching for the famous Red Elephants, lions, and buffaloes before returning to Kilifi for dinner.",
    highlights: ["Kilifi Pickup/Drop-off", "Red Elephants", "Aruba Dam", "Big Five Potential"],
    itinerary: [
      { day: 1, title: "Kilifi to Tsavo East & Back", description: "05:00 Pickup from Kilifi. Scenic drive to Bachuma Gate. Morning game drive. Lunch at Voi Safari Lodge. Afternoon game drive. Return to Kilifi by sunset." }
    ],
    inclusions: ["Transport from Kilifi", "Park Fees", "Lunch", "Guide", "Water"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "wasini-island-dolphin-safari",
    name: "Wasini Island & Kisite",
    durationDays: 1,
    priceUsd: 135,
    priceGbp: 110,
    image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=2070",
    category: 'Coastal',
    group: 'Excursion',
    featured: false,
    shortDescription: "Swim with dolphins and snorkel. Includes transfer from Kilifi.",
    fullDescription: "A full day adventure. We pick you up from Kilifi and drive south to Shimoni. Board a traditional dhow to Kisite Mpunguti Marine Park for snorkeling and dolphin watching, followed by a seafood lunch.",
    highlights: ["Kilifi Transfer", "Dolphin Spotting", "Snorkeling", "Seafood Lunch on Wasini"],
    itinerary: [
      { day: 1, title: "Kilifi to Wasini Marine Park", description: "Early pickup from Kilifi. Drive via Mombasa Ferry to Shimoni. Dhow cruise, snorkeling, and dolphin spotting. Seafood lunch on Wasini Island. Return drive to Kilifi." }
    ],
    inclusions: ["Transport from Kilifi", "Marine Park Fees", "Seafood Lunch", "Snorkeling Gear", "Guide"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "dolphin-watching-watamu",
    name: "Dolphin Watching – Watamu",
    durationDays: 1,
    priceUsd: 120,
    priceGbp: 95,
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=2079",
    category: "Coastal",
    group: "Excursion",
    featured: true,
    shortDescription: "A magical day trip from Kilifi to Watamu Marine Park.",
    fullDescription: "Just a short drive from Kilifi, Watamu Marine Park offers pristine waters for dolphin watching. Set sail on a boat to witness playful pods and explore vibrant coral gardens.",
    highlights: ["Short Drive from Kilifi", "Dolphin Spotting", "Snorkeling at Coral Gardens", "Seafood Lunch"],
    itinerary: [
      { day: 1, title: "Kilifi to Watamu Adventure", description: "Morning pickup from Kilifi (approx 45 mins drive). Boat ride to spot dolphins. Snorkeling session. Seafood lunch at a Watamu beachfront restaurant. Return to Kilifi." }
    ],
    inclusions: ["Transport from Kilifi", "Marine Park Fees", "Boat Ride", "Lunch", "Snorkeling Gear"],
    exclusions: ["Tips", "Drinks", "Personal items"]
  },
  {
    id: "samburu-special",
    name: "Samburu Wilderness Safari",
    durationDays: 3,
    priceUsd: 850,
    priceGbp: 680,
    image: "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Experience rare northern species. Depart Kilifi via Flight.",
    fullDescription: "Samburu National Reserve offers a unique experience with species found nowhere else. We arrange your flight from Malindi/Mombasa (departing Kilifi) to bring you face-to-face with the 'Samburu Special 5'.",
    highlights: ["Depart Kilifi", "Samburu Special 5", "Ewaso Nyiro River", "Unique Culture"],
    itinerary: [
      { day: 1, title: "Kilifi to Samburu", description: "Transfer from Kilifi to local airport. Flight to Samburu. Afternoon game drive seeking the Special Five." },
      { day: 2, title: "Discover the Special Five", description: "Full day in Samburu. Look for the Reticulated Giraffe, Grevy’s Zebra, Beisa Oryx, Somali Ostrich, and Gerenuk." },
      { day: 3, title: "Samburu to Kilifi", description: "Final morning game viewing. Return flight to the coast and transfer back to your Kilifi residence." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "diani-beach-retreat",
    name: "Diani Beach Relaxation",
    durationDays: 4,
    priceUsd: 600,
    priceGbp: 480,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1974",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "A South Coast getaway starting from Kilifi.",
    fullDescription: "Experience paradise in Diani & Ukunda. We organize your transfer from Kilifi to the South Coast for a relaxing beach retreat with water sports and scenic sunsets.",
    highlights: ["Transfer from Kilifi", "White Sand Beaches", "Kisite Snorkeling", "Shimba Hills Day Trip"],
    itinerary: [
      { day: 1, title: "Kilifi to Diani", description: "Pickup from Kilifi. Drive via the Likoni Ferry to Diani Beach. Check into your beachfront resort." },
      { day: 2, title: "Marine Park Adventure", description: "Full day trip to Kisite Mpunguti for snorkeling and dolphin watching." },
      { day: 3, title: "Leisure & Culture", description: "Relax by the pool or visit the sacred Kaya Kinondo forest." },
      { day: 4, title: "Diani to Kilifi", description: "Morning relaxation. Transfer back to Kilifi." }
    ],
    inclusions: ["Accommodation", "Transfers from Kilifi", "Breakfast", "Marine Park Fees"],
    exclusions: ["Lunch & Dinner (unless specified)", "Personal water sports", ...DEFAULT_EXCLUSIONS]
  },
  {
    id: "malindi-marine-park-full-day",
    name: "Full Day Marine Park",
    durationDays: 1,
    priceUsd: 95,
    priceGbp: 75,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
    category: "Coastal",
    group: "Excursion",
    featured: true,
    shortDescription: "Snorkeling and glass-bottom boat adventure in Malindi Marine Park.",
    fullDescription: "Experience the underwater wonders of Malindi Marine National Park. Famous for its coral gardens and diverse fish species, this full-day excursion includes a glass-bottom boat tour, snorkeling sessions, and a delicious beachside seafood lunch.",
    highlights: ["Glass Bottom Boat", "Coral Gardens", "Snorkeling", "Seafood Lunch", "Beach Relaxation"],
    itinerary: [
      { day: 1, title: "Full Day Marine Exploration", description: "Pickup from your hotel after breakfast. Proceed to Malindi Marine Park. Board the glass-bottom boat for viewing and snorkeling. Break for a seafood lunch at a local restaurant. Afternoon relaxation on the beach before returning." }
    ],
    inclusions: ["Transport", "Park Fees", "Boat Ride", "Lunch", "Snorkeling Equipment"],
    exclusions: ["Tips", "Drinks"]
  },

  // --- NEW EXCURSIONS (Mombasa List) ---
  {
    id: "half-day-city-tour-mombasa",
    name: "1/2 Day City Tour Mombasa",
    durationDays: 0.5,
    priceUsd: 60,
    priceGbp: 45,
    image: "https://images.unsplash.com/photo-1580584542263-d021c172d8a4?q=80&w=2070",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "Explore the historic charm of Mombasa in a half-day guided tour.",
    fullDescription: "Visit the famous Fort Jesus, Old Town, and the vibrant spice markets. Perfect for a quick cultural immersion.",
    highlights: ["Fort Jesus", "Old Town Walking Tour", "Spice Market"],
    itinerary: [{ day: 1, title: "City Tour", description: "Pickup, guided tour of Fort Jesus and Old Town, visit markets, drop-off." }],
    inclusions: ["Transport", "Guide", "Entrance Fees"],
    exclusions: ["Lunch", "Tips"]
  },
  {
    id: "half-day-bush-tour",
    name: "1/2 Day Bush Tour",
    durationDays: 0.5,
    priceUsd: 160,
    priceGbp: 105,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Safari",
    group: "Excursion",
    featured: false,
    shortDescription: "A quick wilderness experience close to the coast.",
    fullDescription: "Experience the bush without the long travel. Ideal for a quick getaway to see nature and wildlife.",
    highlights: ["Wildlife Viewing", "Nature Walk", "Scenic Views"],
    itinerary: [{ day: 1, title: "Bush Tour", description: "Morning or afternoon pickup, drive to local sanctuary, game viewing, return." }],
    inclusions: ["Transport", "Park Fees", "Guide"],
    exclusions: ["Lunch", "Tips"]
  },
  {
    id: "full-day-city-tour-mombasa",
    name: "1 Day City Tour Mombasa",
    durationDays: 1,
    priceUsd: 140,
    priceGbp: 75,
    image: "https://images.unsplash.com/photo-1598233379891-10d223910243?q=80&w=2070",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "Comprehensive tour of Mombasa including lunch.",
    fullDescription: "A full day exploring Mombasa's history, culture, and cuisine. Includes Fort Jesus, Haller Park, and a traditional Swahili lunch.",
    highlights: ["Fort Jesus", "Haller Park", "Swahili Lunch", "Elephant Tusks"],
    itinerary: [{ day: 1, title: "Mombasa Full Day", description: "Full day exploration of historical sites and nature parks with lunch included." }],
    inclusions: ["Transport", "Lunch", "All Fees", "Guide"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "wasini-dolphin-dhow",
    name: "1 Day Wasini Island (Dolphin Dhow)",
    durationDays: 1,
    priceUsd: 160,
    priceGbp: 85,
    image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=2070",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "Classic dhow sailing, dolphins, and seafood.",
    fullDescription: "Sail on a traditional dhow to Kisite Marine Park. Snorkel with dolphins and enjoy a fresh seafood lunch on Wasini Island.",
    highlights: ["Dhow Sailing", "Snorkeling", "Seafood Lunch", "Dolphins"],
    itinerary: [{ day: 1, title: "Wasini Island", description: "Drive to Shimoni, board dhow, snorkel/swim, lunch on island, village walk, return." }],
    inclusions: ["Transport", "Boat", "Lunch", "Park Fees", "Snorkeling Gear"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "funzi-dhow-1day",
    name: "1 Day Funzi Dhow",
    durationDays: 1,
    priceUsd: 160,
    priceGbp: 85,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "Explore the mangroves and sandbanks of Funzi.",
    fullDescription: "A relaxing day trip to Funzi Island. Explore the Ramisi River mangroves, relax on a sandbank, and enjoy a seafood feast.",
    highlights: ["Ramisi River", "Mangroves", "Sandbank Picnic", "Seafood"],
    itinerary: [{ day: 1, title: "Funzi Adventure", description: "Transfer to Bodo, boat ride through mangroves, swimming on sandbank, lunch on island." }],
    inclusions: ["Transport", "Boat", "Lunch", "Guide"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "malindi-gede-ruins-1day",
    name: "1 Day Malindi And Gede Ruins",
    durationDays: 1,
    priceUsd: 195,
    priceGbp: 105,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "Historical ruins and coastal charm.",
    fullDescription: "Visit the ancient Gede Ruins, a mysterious Swahili city buried in the forest. Continue to Malindi for sightseeing and the Vasco da Gama pillar.",
    highlights: ["Gede Ruins", "Vasco da Gama Pillar", "Snake Park"],
    itinerary: [{ day: 1, title: "History & Coast", description: "Drive north to Gede Ruins. Guided tour. Proceed to Malindi town tour. Return." }],
    inclusions: ["Transport", "Entrance Fees", "Lunch", "Guide"],
    exclusions: ["Tips", "Drinks"]
  },

  // --- NEW ROAD SAFARIS ---
  {
    id: "tsavo-east-ngutuni-1day",
    name: "1 Day Tsavo East (Ngutuni) Min 4 Pax",
    durationDays: 1,
    priceUsd: 170,
    priceGbp: 110,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "One day safari to Ngutuni sanctuary.",
    fullDescription: "A compact safari experience in the Ngutuni Sanctuary bordering Tsavo East. Excellent for spotting lions and elephants.",
    highlights: ["Ngutuni Sanctuary", "Game Drive", "Lunch with View"],
    itinerary: [{ day: 1, title: "Ngutuni Day Trip", description: "Early departure, game drive in sanctuary, lunch at lodge overlooking waterhole, return." }],
    inclusions: ["Transport", "Park Fees", "Lunch", "Guide"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "shimba-hills-1day",
    name: "1 Day Shimba Hills",
    durationDays: 1,
    priceUsd: 195,
    priceGbp: 125,
    image: "https://images.unsplash.com/photo-1597930232210-907350a6210c?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Rainforest safari, waterfalls, and sable antelope.",
    fullDescription: "Visit the Shimba Hills National Reserve, a coastal rainforest home to the rare Sable Antelope and Sheldrick Falls.",
    highlights: ["Sheldrick Falls", "Sable Antelope", "Rainforest"],
    itinerary: [{ day: 1, title: "Shimba Hills", description: "Game drive in reserve, hike to waterfalls, lunch at Shimba Hills Lodge, return." }],
    inclusions: ["Transport", "Park Fees", "Lunch", "Guide"],
    exclusions: ["Tips", "Drinks"]
  },
  {
    id: "shimba-tree-lodge-1night",
    name: "1 Night Shimba Shimba/Tree Lodge",
    durationDays: 2,
    priceUsd: 270,
    priceGbp: 165,
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Overnight in the coastal rainforest.",
    fullDescription: "Extend your Shimba Hills adventure with an overnight stay in a tree lodge, surrounded by the sounds of the forest.",
    highlights: ["Night in Rainforest", "Waterfall Hike", "Rare Wildlife"],
    itinerary: [
      { day: 1, title: "Into the Forest", description: "Game drive, hike to falls, dinner and overnight at Tree Lodge." },
      { day: 2, title: "Morning Calm", description: "Morning game viewing, breakfast, return to coast." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "mwaluganje-1night",
    name: "1 Night Mwaluganje",
    durationDays: 2,
    priceUsd: 290,
    priceGbp: 200,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Elephant sanctuary overnight safari.",
    fullDescription: "Visit the Mwaluganje Elephant Sanctuary, a community conservancy dedicated to the protection of elephants.",
    highlights: ["Elephant Sanctuary", "Community Conservancy", "Scenic Hills"],
    itinerary: [
      { day: 1, title: "Mwaluganje", description: "Drive to sanctuary, afternoon game drive, overnight at camp." },
      { day: 2, title: "Morning Safari", description: "Morning game drive, breakfast, return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-ndololo-1night",
    name: "1 Night Tsavo East Ndololo/Tarhi Camp",
    durationDays: 2,
    priceUsd: 310,
    priceGbp: 185,
    image: "https://images.unsplash.com/photo-1550160248-038c3666f2a8?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Classic camping safari in Tsavo East.",
    fullDescription: "Immerse yourself in the wild with a stay at a tented camp in Tsavo East. Authentic safari experience.",
    highlights: ["Tented Camp", "Red Elephants", "Aruba Dam"],
    itinerary: [
      { day: 1, title: "Mombasa to Tsavo", description: "Enter Tsavo East, game drive en-route to camp for lunch. Afternoon game drive." },
      { day: 2, title: "Tsavo to Coast", description: "Early morning game drive. Breakfast. Exit park and return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-voi-1night",
    name: "1 Night Tsavo East /Voi Lodge/Voi Wildlife",
    durationDays: 2,
    priceUsd: 445,
    priceGbp: 265,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Comfortable lodge stay in Tsavo East.",
    fullDescription: "Enjoy the amenities of Voi Safari Lodge or Voi Wildlife Lodge with stunning views over the park's plains.",
    highlights: ["Lodge Comfort", "Waterhole Views", "Lion Spotting"],
    itinerary: [
      { day: 1, title: "Arrival Tsavo", description: "Game drive to lodge. Lunch. Afternoon game drive." },
      { day: 2, title: "Morning Drive", description: "Morning game drive. Breakfast. Return to coast." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "amboseli-express-1night",
    name: "1 Night Amboseli(Kilimanjaro) Express",
    durationDays: 2,
    priceUsd: 410,
    priceGbp: 255,
    image: "https://images.unsplash.com/photo-1549320341-9426d03d45d6?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Quick trip to see Mt. Kilimanjaro.",
    fullDescription: "An express road safari to Amboseli to see the mighty mountain and large elephant herds.",
    highlights: ["Mt. Kilimanjaro", "Elephants", "Express Route"],
    itinerary: [
      { day: 1, title: "Express to Amboseli", description: "Early departure. Arrive for lunch. Afternoon game drive." },
      { day: 2, title: "Return to Coast", description: "Morning game drive. Long drive back to Mombasa/Kilifi." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "taita-hills-saltlick-1night",
    name: "1 Night Taita Hills (Saltlick)",
    durationDays: 2,
    priceUsd: 320,
    priceGbp: 205,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Stay at the famous stilted Salt Lick lodge.",
    fullDescription: "A unique experience staying at Sarova Salt Lick Game Lodge, famous for its stilted architecture overlooking a busy waterhole.",
    highlights: ["Stilted Lodge", "Private Sanctuary", "Night Game Drive Option"],
    itinerary: [
      { day: 1, title: "Taita Hills", description: "Drive to Taita Hills Sanctuary. Lunch. Afternoon game drive. Check-in Salt Lick." },
      { day: 2, title: "Sanctuary Drive", description: "Morning game drive. Breakfast. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-special-east-west-1night",
    name: "1 Night Tsavo Special (East & West N. Park)",
    durationDays: 2,
    priceUsd: 460,
    priceGbp: 285,
    image: "https://images.unsplash.com/photo-1550160248-038c3666f2a8?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Highlights of both Tsavo East and West.",
    fullDescription: "A fast-paced safari covering key attractions in both Tsavo East and the scenic Tsavo West.",
    highlights: ["Mzima Springs", "Red Elephants", "Lava Flows"],
    itinerary: [
      { day: 1, title: "Tsavo East & West", description: "Morning game drive in East. Proceed to West for afternoon drive. Overnight." },
      { day: 2, title: "Mzima Springs", description: "Visit Mzima Springs. Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-ngutuni-1night",
    name: "1 Night Tsavo East (Ngutuni ) Min 4 Pax",
    durationDays: 2,
    priceUsd: 285,
    priceGbp: 110,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Overnight at Ngutuni Sanctuary.",
    fullDescription: "Stay overnight at Ngutuni Lodge, offering excellent game viewing from the comfort of the lodge deck.",
    highlights: ["Ngutuni Lodge", "Waterhole Viewing", "Relaxed Pace"],
    itinerary: [
      { day: 1, title: "Ngutuni", description: "Drive to sanctuary. Game drive. Lunch and dinner at lodge." },
      { day: 2, title: "Morning Safari", description: "Morning game drive. Return to coast." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "ngutuni-amboseli-2nights",
    name: "2 Nights (Ngutuni) & Amboseli 4 Pax",
    durationDays: 3,
    priceUsd: 580,
    priceGbp: 355,
    image: "https://images.unsplash.com/photo-1549320341-9426d03d45d6?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Combine coastal sanctuary with Kilimanjaro views.",
    fullDescription: "A 3-day safari visiting Ngutuni Sanctuary and the majestic Amboseli National Park.",
    highlights: ["Ngutuni", "Amboseli", "Kilimanjaro"],
    itinerary: [
      { day: 1, title: "Ngutuni", description: "Drive to Ngutuni. Game drive. Overnight Ngutuni." },
      { day: 2, title: "To Amboseli", description: "Depart for Amboseli. Afternoon game drive. Overnight Amboseli." },
      { day: 3, title: "Return", description: "Morning game drive. Return to coast." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "ngutuni-saltlick-2nights",
    name: "2 Nights (Ngutuni) & Salt Lick Min 4 Pax",
    durationDays: 3,
    priceUsd: 500,
    priceGbp: 295,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Sanctuary hopping safari.",
    fullDescription: "Experience two private sanctuaries: Ngutuni and Taita Hills (Salt Lick).",
    highlights: ["Ngutuni", "Salt Lick Lodge", "Private Sanctuaries"],
    itinerary: [
      { day: 1, title: "Ngutuni", description: "Drive to Ngutuni. Game drive. Overnight." },
      { day: 2, title: "To Salt Lick", description: "Drive to Taita Hills. Afternoon game drive. Overnight Salt Lick." },
      { day: 3, title: "Return", description: "Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-saltlick-2nights",
    name: "2 Nights Tsavo East and Salt Lick",
    durationDays: 3,
    priceUsd: 545,
    priceGbp: 325,
    image: "https://images.unsplash.com/photo-1550160248-038c3666f2a8?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Red elephants and stilted lodges.",
    fullDescription: "Combine the vast plains of Tsavo East with the unique Salt Lick Lodge experience.",
    highlights: ["Tsavo East", "Salt Lick", "Diverse Landscape"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Enter Tsavo East. Game drive. Overnight." },
      { day: 2, title: "To Taita Hills", description: "Drive to Taita Hills Sanctuary. Overnight Salt Lick." },
      { day: 3, title: "Return", description: "Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-west-ngulia-2nights",
    name: "2 Nights Tsavo East /West (Ngulia)",
    durationDays: 3,
    priceUsd: 570,
    priceGbp: 355,
    image: "https://images.unsplash.com/photo-1550160248-038c3666f2a8?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Complete Tsavo experience.",
    fullDescription: "Explore both sides of Tsavo. Stay at Ngulia Safari Lodge in Tsavo West, known for leopard sightings.",
    highlights: ["Tsavo East", "Tsavo West", "Ngulia Rhino Sanctuary"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive in East. Overnight." },
      { day: 2, title: "Tsavo West", description: "Drive to West. Visit Mzima Springs. Overnight Ngulia." },
      { day: 3, title: "Return", description: "Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-amboseli-2nights",
    name: "2 Nights Tsavo East/Amboseli (kilimanjaro)",
    durationDays: 3,
    priceUsd: 630,
    priceGbp: 390,
    image: "https://images.unsplash.com/photo-1549320341-9426d03d45d6?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "The classic bush and mountain safari.",
    fullDescription: "Visit the two most popular parks: Tsavo East for wildlife quantity and Amboseli for the Kilimanjaro backdrop.",
    highlights: ["Tsavo East", "Amboseli", "Mt. Kilimanjaro"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive in East. Overnight." },
      { day: 2, title: "To Amboseli", description: "Drive to Amboseli. Afternoon game drive. Overnight." },
      { day: 3, title: "Return", description: "Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-west-amboseli-2nights",
    name: "2 Nights Tsavo East/west and Amboseli",
    durationDays: 3,
    priceUsd: 585,
    priceGbp: 350,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Action packed 3-park safari.",
    fullDescription: "A fast-paced adventure covering Tsavo East, Tsavo West, and Amboseli in 3 days.",
    highlights: ["3 Parks", "Diverse Scenery", "Big Five"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive. Overnight." },
      { day: 2, title: "West & Amboseli", description: "Transit through West to Amboseli. Overnight." },
      { day: 3, title: "Return", description: "Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tsavo-east-west-amboseli-3nights",
    name: "3 Nights Tsavo East/west and Amboseli",
    durationDays: 4,
    priceUsd: 890,
    priceGbp: 555,
    image: "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?q=80&w=2070",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Relaxed pace 3-park safari.",
    fullDescription: "Enjoy more time in Tsavo East, West, and Amboseli with this 4-day itinerary.",
    highlights: ["Extended Game Drives", "Mzima Springs", "Kilimanjaro"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Game drive. Overnight." },
      { day: 2, title: "Tsavo West", description: "Drive to West. Mzima Springs. Overnight." },
      { day: 3, title: "Amboseli", description: "Drive to Amboseli. Game drive. Overnight." },
      { day: 4, title: "Return", description: "Morning game drive. Return." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "tanzania-special-5nights",
    name: "5 Nights Tanzania Special",
    durationDays: 6,
    priceUsd: 2730,
    priceGbp: 1705,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "International",
    group: "International",
    featured: false,
    shortDescription: "Lake Manyara, Tarangire, Serengeti, Ngorongoro.",
    fullDescription: "The ultimate Northern Tanzania circuit. Explore the Serengeti plains, Ngorongoro Crater, and elephant-rich Tarangire.",
    highlights: ["Serengeti", "Ngorongoro Crater", "Tarangire", "Lake Manyara"],
    itinerary: [
      { day: 1, title: "Arusha to Manyara", description: "Drive to Lake Manyara. Game drive." },
      { day: 2, title: "Serengeti", description: "Drive to Serengeti. Afternoon game drive." },
      { day: 3, title: "Serengeti Full Day", description: "Full day exploring Serengeti." },
      { day: 4, title: "Ngorongoro", description: "Drive to Ngorongoro via Olduvai Gorge." },
      { day: 5, title: "Crater Tour", description: "Descend into crater. Drive to Tarangire." },
      { day: 6, title: "Tarangire to Arusha", description: "Morning game drive. Return to Arusha." }
    ],
    inclusions: ["4x4 Transport", "Guide", "Park Fees", "Accommodation"],
    exclusions: ["Flights", "Visas", "Tips"]
  },
  {
    id: "kenya-explorer-5nights",
    name: "5 Nights Tsavo East/west and Amboseli,Masai Mara, Lake Nakuru",
    durationDays: 6,
    priceUsd: 1610,
    priceGbp: 1005,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "Grand Kenya circuit finishing in Mombasa.",
    fullDescription: "A comprehensive tour covering Kenya's major parks: Tsavo, Amboseli, Mara, and Nakuru. Return to coast by air or train.",
    highlights: ["Masai Mara", "Lake Nakuru", "Amboseli", "Tsavo"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Start safari. Overnight Tsavo." },
      { day: 2, title: "Amboseli", description: "Drive to Amboseli. Overnight." },
      { day: 3, title: "Lake Nakuru", description: "Drive to Rift Valley. Overnight." },
      { day: 4, title: "Masai Mara", description: "Drive to Mara. Overnight." },
      { day: 5, title: "Masai Mara", description: "Full day in Mara." },
      { day: 6, title: "Return", description: "Drive to Nairobi, Train/Fly to Mombasa." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "kenya-grand-safari-6nights",
    name: "6 Nights Tsavo East/West And Amboseli,Masai Mara, Lake Nakuru & Naivasha",
    durationDays: 7,
    priceUsd: 1850,
    priceGbp: 1155,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000",
    category: "Safari",
    group: "Road Safari",
    featured: false,
    shortDescription: "The ultimate 1-week Kenya road safari.",
    fullDescription: "See it all: Red elephants, Kilimanjaro, Rift Valley lakes, and the Masai Mara. Return to coast by air or train.",
    highlights: ["Lake Naivasha", "Masai Mara", "Tsavo", "Amboseli"],
    itinerary: [
      { day: 1, title: "Tsavo East", description: "Start safari. Overnight." },
      { day: 2, title: "Amboseli", description: "Drive to Amboseli. Overnight." },
      { day: 3, title: "Lake Naivasha", description: "Boat ride. Overnight." },
      { day: 4, title: "Masai Mara", description: "Drive to Mara. Overnight." },
      { day: 5, title: "Masai Mara", description: "Full day in Mara." },
      { day: 6, title: "Lake Nakuru", description: "Drive to Nakuru. Overnight." },
      { day: 7, title: "Return", description: "Return to Nairobi, connection to Coast." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "kilimanjaro-climbing-6nights",
    name: "6 Nights Mount Kilimanjaro Climbing",
    durationDays: 7,
    priceUsd: 1810,
    priceGbp: 1130,
    image: "https://images.unsplash.com/photo-1650660688329-373b9055eb4e?q=80&w=2070",
    category: "Trek",
    group: "Trek",
    featured: false,
    shortDescription: "Conquer the roof of Africa.",
    fullDescription: "A 6-night climb up Mount Kilimanjaro (typically Machame or Marangu route). Challenge yourself to reach Uhuru Peak.",
    highlights: ["Uhuru Peak", "Hiking", "Alpine Desert"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Transfer to Moshi. Briefing." },
      { day: 2, title: "Start Climb", description: "Begin ascent to first camp." },
      { day: 3, title: "Climb", description: "Ascent continues." },
      { day: 4, title: "Climb", description: "Acclimatization and ascent." },
      { day: 5, title: "Summit Bid", description: "Midnight start for summit. Descent." },
      { day: 6, title: "Descent", description: "Final descent to gate." },
      { day: 7, title: "Departure", description: "Transfer to airport/shuttle." }
    ],
    inclusions: ["Guide", "Porters", "Meals", "Hut/Tent Fees"],
    exclusions: ["Gear Rental", "Tips", "Visas"]
  },
  
  // --- NEW FLIGHT SAFARIS ---
  {
    id: "lamu-1night-flight",
    name: "1 Night Lamu",
    durationDays: 2,
    priceUsd: 650,
    priceGbp: 405,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1974",
    category: "Coastal",
    group: "Flight Safari",
    featured: false,
    shortDescription: "Fly to the historic Lamu archipelago.",
    fullDescription: "A quick flight to the UNESCO World Heritage site of Lamu. Experience Swahili culture and pristine beaches.",
    highlights: ["Lamu Old Town", "Shela Beach", "Dhow Sail"],
    itinerary: [
      { day: 1, title: "Fly to Lamu", description: "Flight from Malindi/Mombasa. Boat transfer. Explore Lamu." },
      { day: 2, title: "Return", description: "Morning leisure. Return flight." }
    ],
    inclusions: ["Flights", "Accommodation", "Transfers"],
    exclusions: ["Lunch/Dinner", "Tips"]
  },
  {
    id: "zanzibar-1night-flight",
    name: "1 Night Zanzibar",
    durationDays: 2,
    priceUsd: 570,
    priceGbp: 355,
    image: "https://images.unsplash.com/photo-1534768393527-4c126d40733d?q=80&w=2070",
    category: "International",
    group: "Flight Safari",
    featured: false,
    shortDescription: "Spice Island getaway.",
    fullDescription: "Fly to Zanzibar for a quick immersion in Stone Town and white sand beaches.",
    highlights: ["Stone Town", "Spice Tour", "Beaches"],
    itinerary: [
      { day: 1, title: "Fly to Zanzibar", description: "Flight to Zanzibar. Stone Town tour." },
      { day: 2, title: "Return", description: "Morning beach/shopping. Return flight." }
    ],
    inclusions: ["Flights", "Accommodation", "Breakfast"],
    exclusions: ["Visa", "Lunch/Dinner"]
  },
  {
    id: "masai-mara-1night-flight",
    name: "1 Night Masai Mara",
    durationDays: 2,
    priceUsd: 890,
    priceGbp: 555,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071",
    category: "Safari",
    group: "Flight Safari",
    featured: false,
    shortDescription: "Express flight to the Mara.",
    fullDescription: "Maximize your time with a flight directly into the Masai Mara for an overnight safari.",
    highlights: ["Flight over Rift Valley", "Big Five", "Luxury Camp"],
    itinerary: [
      { day: 1, title: "Fly to Mara", description: "Morning flight. Afternoon game drive." },
      { day: 2, title: "Return", description: "Morning game drive. Return flight to coast." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "masai-mara-2nights-flight",
    name: "2 Nights Masai Mara",
    durationDays: 3,
    priceUsd: 1050,
    priceGbp: 655,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071",
    category: "Safari",
    group: "Flight Safari",
    featured: false,
    shortDescription: "3 days in the world's best reserve.",
    fullDescription: "Fly to the Mara for a relaxed 3-day safari, increasing your chances of seeing the migration (in season) and the Big Five.",
    highlights: ["Extended Game Viewing", "Sundowners", "Big Cats"],
    itinerary: [
      { day: 1, title: "Fly to Mara", description: "Morning flight. Afternoon game drive." },
      { day: 2, title: "Full Day Mara", description: "All day game viewing." },
      { day: 3, title: "Return", description: "Morning game drive. Return flight." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  }
];
