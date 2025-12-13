
import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "6.5"; // Final 7 Core Tours

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
  }
];
