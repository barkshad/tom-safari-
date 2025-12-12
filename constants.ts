
import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "6.0"; // Universal CMS Upgrade

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
    excerpt: "Starting your safari from Mombasa or Diani? Here’s a step-by-step breakdown of what makes a Tsavo East adventure so special and why it's the perfect introduction to the Kenyan bush.",
    content: `For many visitors enjoying Kenya's beautiful coastline, the call of the wild is never far away. A common question we get is, "How does a safari work if we're staying in Mombasa or Diani?" The answer lies in Tsavo East National Park, a vast and accessible wilderness that offers an incredible safari experience without complex travel logistics.

**Your Safari Day, Step-by-Step**

A typical Tsavo East safari from the coast is designed for maximum wildlife viewing and comfort. Here’s what you can expect:

1.  **Early Start:** Your adventure begins with an early morning pick-up from your coastal hotel. This allows us to reach the park as the animals are most active.
2.  **The Journey In:** The drive to the park entrance is an experience in itself, as you watch the landscape transform from coastal greenery to the iconic red-earth savannah of Tsavo.
3.  **First Game Drive:** Upon entering the park, your first game drive begins immediately. Your guide, an expert in the local terrain and animal behavior, will navigate the park's network of roads in search of its famous inhabitants.
4.  **Lunch at a Safari Lodge:** You'll arrive at your safari lodge or camp in time for lunch. This is a chance to relax, enjoy a delicious meal, and often watch animals from the comfort of the lodge's viewing decks, which typically overlook a watering hole.
5.  **Afternoon Game Drive:** After a period of relaxation during the heat of the day, you'll head out for an afternoon game drive. The golden light of the late afternoon provides stunning photographic opportunities.
6.  **Sundowners and Dinner:** You'll return to your lodge as the sun sets for a relaxing evening, enjoying dinner and the sounds of the African bush.

**Wildlife and Scenery to Expect**

Tsavo East is famous for its "Red Elephants," which get their color from dusting themselves with the park's iron-rich red soil. Beyond these gentle giants, you are likely to see lions, giraffes, zebras, buffaloes, and a vast array of birdlife. The landscape is characterized by its vast, open plains, the Galana River, and the impressive Mudanda Rock.

**Why Tsavo East is Ideal for First-Timers**

Its proximity to the coast makes Tsavo East the perfect safari destination for those on a beach holiday. It offers a genuine and exciting taste of the wild without requiring extra flights or long travel days, making it an efficient and unforgettable adventure.

*Ready to experience the magic of Tsavo for yourself?*
**View our Tsavo East safari packages and let's start planning.**`,
    image: "https://images.unsplash.com/photo-1597930232210-907350a6210c?q=80&w=2070&auto=format&fit=crop",
    category: "Safari Guide",
    date: "October 26, 2023",
  },
  {
    id: "post-mombasa-city-tour",
    slug: "why-a-mombasa-city-tour-is-more-than-just-sightseeing",
    title: "Why a Mombasa City Tour Is More Than Just Sightseeing",
    excerpt: "Discover the rich history, vibrant culture, and hidden stories that make a guided tour of Mombasa an unforgettable cultural deep-dive, far beyond a simple checklist of sights.",
    content: `Many visitors to Kenya's coast are drawn by the promise of white-sand beaches and turquoise waters. While the relaxation is unparalleled, it's easy to overlook the vibrant heart of the region: Mombasa. A city tour here is often underestimated, but it's a journey through centuries of history, culture, and trade that shaped the entire East African coast.

**Key Stops That Tell a Story**

A well-guided tour of Mombasa is about connecting with its living history. Here are the key stops that offer more than just a photo opportunity:

-   **Fort Jesus:** This UNESCO World Heritage site is the city's most iconic landmark. But it's more than just a fort; it's a testament to the battles fought between the Portuguese and Omani Arabs for control of this strategic port. Standing on its ramparts, you can almost hear the echoes of history.
-   **Mombasa Old Town:** Wandering the narrow, winding streets of the Old Town is like stepping back in time. The architecture is a beautiful fusion of Arabic, Swahili, and European influences, with intricately carved doors and balconies that tell stories of the families who lived there.
-   **The Spice Market (Marikiti):** This is a sensory explosion. The air is thick with the aroma of cardamom, cloves, and turmeric. A visit here isn't just about seeing spices; it's about understanding the trade routes that have connected Mombasa to the world for centuries.
-   **The Elephant Tusks:** While a popular photo spot, the iconic tusks on Moi Avenue were originally built to commemorate a visit from Queen Elizabeth. They symbolize the gateway to a city of adventure and history.

**Who is this tour best for?**

A Mombasa city tour is perfect for families, history enthusiasts, and any first-time visitor who wants to understand the cultural context of the beautiful coast they are visiting. It provides a rich, educational experience that perfectly complements a relaxing beach holiday.

*Ready to uncover the soul of Mombasa?*
**Book a Mombasa city tour with us and experience its history firsthand.**`,
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
      content: "We are a premier safari and adventure tour operator dedicated to organizing wildlife, coastal, and adventure tours across Kenya and Tanzania."
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
  // --- BUSH SAFARIS (Updated Categories) ---
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
    shortDescription: "Join our Masai Mara tours to witness iconic Big Five wildlife, wildebeest migrations, and breathtaking plains.",
    fullDescription: "Experience the heart of Africa’s wildlife with our Maasai Mara Classic Safari. Home to the legendary Big Five and dramatic wildebeest migrations, the Mara offers some of the world’s most breathtaking game viewing. Our tours combine seasoned guides, flexible itineraries, and authentic cultural encounters for an unforgettable journey.",
    highlights: ["Big Five Game Drives", "Wildebeest Migration (Seasonal)", "Maasai Village Visit", "Scenic Savannah Plains"],
    itinerary: [
      { day: 1, title: "Nairobi to Maasai Mara", description: "Depart Nairobi and drive through the Great Rift Valley. Arrive in time for lunch and an afternoon game drive." },
      { day: 2, title: "Full Day in Maasai Mara", description: "Spend the entire day exploring the vast plains, tracking lions, cheetahs, and elephants with a picnic lunch in the wild." },
      { day: 3, title: "Morning Game Drive & Return", description: "A final sunrise game drive before breakfast, followed by a scenic drive back to Nairobi." }
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
    shortDescription: "Explore Amboseli National Park — view majestic elephant herds and stunning Mount Kilimanjaro backdrops.",
    fullDescription: "Discover the majestic Amboseli National Park with Tom Safaris, where vast plains and towering views of Mount Kilimanjaro create a stunning backdrop for wildlife photography. Famous for its large elephant herds and rich birdlife, Amboseli is a must-visit destination for any safari enthusiast.",
    highlights: ["Mt. Kilimanjaro Views", "Large Elephant Herds", "Observation Hill", "Bird Watching"],
    itinerary: [
      { day: 1, title: "Nairobi to Amboseli", description: "Drive south to Amboseli. Check-in and enjoy an evening game drive with Kilimanjaro in the background." },
      { day: 2, title: "Full Day Amboseli", description: "Full day game drive. Visit the swamp grounds where elephants bathe and hike Observation Hill for panoramic views." },
      { day: 3, title: "Amboseli to Nairobi", description: "Morning game drive to catch the predators before returning to Nairobi." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
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
    shortDescription: "Experience rare northern species and rich culture with our Samburu Safari Tours.",
    fullDescription: "Samburu National Reserve offers a unique safari experience with species found nowhere else in Kenya. From the striking Grevy’s zebra to the elegant gerenuk, our Samburu Safari Tours bring you face-to-face with rare and remarkable wildlife in a dramatic semi-arid setting.",
    highlights: ["Samburu Special 5", "Ewaso Nyiro River", "Unique Culture", "Leopard Sightings"],
    itinerary: [
      { day: 1, title: "Nairobi to Samburu", description: "Journey north across the equator to the arid landscapes of Samburu. Afternoon game drive." },
      { day: 2, title: "Discover the Special Five", description: "Full day seeking the Reticulated Giraffe, Grevy’s Zebra, Beisa Oryx, Somali Ostrich, and Gerenuk." },
      { day: 3, title: "Return to Nairobi", description: "Final morning game viewing before the return journey to the capital." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },
  
  // --- HONEYMOON & ROMANTIC ---
  {
    id: "luxury-honeymoon-safari",
    name: "Luxury Honeymoon & Safari",
    durationDays: 7,
    priceUsd: 3500,
    priceGbp: 2800,
    image: "https://images.unsplash.com/photo-1534759863358-796a7a0f7248?q=80&w=2070",
    category: "Honeymoon",
    group: "Custom",
    featured: true,
    shortDescription: "Perfect for couples — luxury safari honeymoon tours and curated romantic escapes.",
    fullDescription: "Celebrate love in the heart of Africa with Tom Safaris’ Romantic Safari and Honeymoon Packages. Tailored for couples, these tours feature intimate game drives, private dinners under the stars, luxury tented camps, and unforgettable scenery for your most special moments.",
    highlights: ["Private Bush Dinners", "Luxury Tented Camps", "Hot Air Balloon Flight", "Sunset Sundowners"],
    itinerary: [
      { day: 1, title: "Arrival & Nairobi Luxury", description: "VIP pickup and stay at a boutique hotel in Nairobi." },
      { day: 2, title: "Maasai Mara Flight", description: "Fly directly into the Mara. Check into a luxury camp and enjoy a private sundowner." },
      { day: 3, title: "Hot Air Balloon", description: "Sunrise balloon safari followed by a champagne bush breakfast." },
      { day: 4, title: "Mara Relaxation", description: "Leisurely game drives and spa treatments at the lodge." },
      { day: 5, title: "Fly to Diani Beach", description: "Swap the bush for the beach. Fly to Diani for a stay at an exclusive resort." },
      { day: 6, title: "Diani Bliss", description: "Relax on the white sands, private seafood dinner on the beach." },
      { day: 7, title: "Departure", description: "Transfer to Mombasa airport for your flight home." }
    ],
    inclusions: [...DEFAULT_INCLUSIONS, "Internal Flights", "Honeymoon Specials"],
    exclusions: DEFAULT_EXCLUSIONS
  },

  // --- WEEKEND GETAWAYS ---
  {
    id: "naivasha-nakuru-getaway",
    name: "Naivasha & Nakuru Weekend",
    durationDays: 2,
    priceUsd: 350,
    priceGbp: 280,
    image: "https://images.unsplash.com/photo-1626084795368-a83c7b653773?q=80&w=2070",
    category: "Weekend",
    group: "Getaway",
    featured: false,
    shortDescription: "Perfect short safari breaks for weekend travelers to Naivasha and Nakuru.",
    fullDescription: "Short on time but craving adventure? Tom Safaris’ Weekend Getaways are designed for travelers who want a quick yet immersive escape into nature. Enjoy boat rides among hippos in Naivasha and rhino tracking in Nakuru — all perfect for a 1–3 day break.",
    highlights: ["Lake Naivasha Boat Ride", "Hell's Gate Walking Safari", "Rhino Sanctuary", "Flamingos"],
    itinerary: [
      { day: 1, title: "Nairobi to Naivasha", description: "Drive to Naivasha. Boat ride on the lake and walking safari in Hell's Gate National Park." },
      { day: 2, title: "Lake Nakuru to Nairobi", description: "Early drive to Lake Nakuru for a game drive to see rhinos and flamingos. Return to Nairobi by evening." }
    ],
    inclusions: DEFAULT_INCLUSIONS,
    exclusions: DEFAULT_EXCLUSIONS
  },

  // --- COASTAL & BEACH ---
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
    shortDescription: "Explore the pristine coral beaches of Diani & Ukunda with Tom Safaris.",
    fullDescription: "Experience paradise in Diani & Ukunda with Tom Safaris’ beach packages. Perfect for couples and families alike, these coastal retreats offer water sports, scenic sunsets, and world-class relaxation alongside optional safari add-ons to nearby Shimba Hills.",
    highlights: ["White Sand Beaches", "Snorkeling at Kisite", "Seafood Dining", "Shimba Hills Day Trip"],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", description: "Arrive in Diani, check into your beachfront resort." },
      { day: 2, title: "Marine Park Adventure", description: "Full day trip to Kisite Mpunguti for snorkeling and dolphin watching." },
      { day: 3, title: "Leisure & Culture", description: "Relax by the pool or visit the sacred Kaya Kinondo forest." },
      { day: 4, title: "Departure", description: "Transfer to Ukunda airstrip or Mombasa airport." }
    ],
    inclusions: ["Accommodation", "Airport Transfers", "Breakfast", "Marine Park Fees"],
    exclusions: ["Lunch & Dinner (unless specified)", "Personal water sports", ...DEFAULT_EXCLUSIONS]
  },
  {
    id: "lamu-island-explorer",
    name: "Lamu Island Cultural Tour",
    durationDays: 3,
    priceUsd: 550,
    priceGbp: 440,
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1974",
    category: "Coastal",
    group: "Excursion",
    featured: false,
    shortDescription: "Discover historic Lamu Island — combining rich Swahili culture and serene beaches.",
    fullDescription: "Step back in time with Tom Safaris’ Lamu Island Holidays. This UNESCO-listed cultural gem combines narrow winding streets, historic Swahili architecture, and peaceful beaches — perfect for travelers seeking culture, heritage, and coastal charm in one immersive itinerary.",
    highlights: ["Lamu Old Town", "Sunset Dhow Cruise", "Shela Beach", "Swahili Architecture"],
    itinerary: [
      { day: 1, title: "Arrival in Lamu", description: "Boat transfer to Lamu town. Walking tour of the historic UNESCO site." },
      { day: 2, title: "Shela & Dhow Cruise", description: "Visit the dunes of Shela Beach and enjoy a traditional sunset dhow cruise." },
      { day: 3, title: "Departure", description: "Morning swim before boat transfer to the airstrip." }
    ],
    inclusions: ["Bed & Breakfast Accommodation", "Return Boat Transfers", "Guided Town Tour", "Sunset Cruise"],
    exclusions: DEFAULT_EXCLUSIONS
  },

  // --- INTERNATIONAL ---
  {
    id: "dubai-city-break",
    name: "Dubai City Break",
    durationDays: 5,
    priceUsd: 1200,
    priceGbp: 960,
    image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe5b?q=80&w=2070",
    category: "International",
    group: "International",
    featured: false,
    shortDescription: "A dazzling 5-day escape to the futuristic city of Dubai.",
    fullDescription: "Experience the glitz and glamour of Dubai with our International City Break package. From the towering Burj Khalifa to the vast desert dunes, enjoy shopping, adventure, and luxury in the UAE.",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Marina Cruise"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Dubai, transfer to hotel." },
      { day: 2, title: "City Tour", description: "Half-day city tour visiting iconic landmarks." },
      { day: 3, title: "Desert Safari", description: "Afternoon 4x4 desert safari with BBQ dinner." },
      { day: 4, title: "Leisure/Shopping", description: "Free day for shopping at Dubai Mall or visiting Palm Jumeirah." },
      { day: 5, title: "Departure", description: "Transfer to airport." }
    ],
    inclusions: ["4-Star Hotel Accommodation", "Daily Breakfast", "Airport Transfers", "Desert Safari & BBQ", "Visa Processing"],
    exclusions: ["Flights", "Tourism Dirham Fee", "Personal Expenses", "Lunch & Dinner"]
  },

  // --- EXISTING TOURS (Kept for continuity) ---
  {
    id: "3-day-wildlife-cultural-safari",
    name: "3-Day Tanzania Cultural Safari",
    durationDays: 3, 
    priceUsd: 900, 
    priceGbp: 720,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop",
    category: 'Safari', 
    group: 'Road Safari', 
    featured: false,
    shortDescription: "A powerful short safari covering Serengeti, Ngorongoro, and Maasai culture.",
    fullDescription: "A short but powerful safari covering Tanzania’s most iconic wildlife regions, combined with authentic Maasai cultural interaction. Ideal for short visits with maximum wildlife exposure.",
    highlights: ["Serengeti Plains", "Ngorongoro Crater", "Maasai Boma Visit", "Big Five"],
    itinerary: [
      { day: 1, title: "Arusha → Serengeti National Park", description: "Morning departure from Arusha for a scenic drive into the Serengeti." },
      { day: 2, title: "Serengeti → Ngorongoro Highlands", description: "Sunrise game drive in the Serengeti. Transfer toward Ngorongoro." },
      { day: 3, title: "Ngorongoro Crater → Arusha", description: "Early descent into the crater for a Big Five game drive. Return to Arusha." }
    ],
    inclusions: [...DEFAULT_INCLUSIONS, "Ngorongoro Crater Fees"],
    exclusions: DEFAULT_EXCLUSIONS
  },
  {
    id: "great-migration-river-crossing",
    name: "Great Migration Safari",
    durationDays: 8, 
    priceUsd: 4000, 
    priceGbp: 3200,
    image: "https://images.unsplash.com/photo-1517823382935-51bf405625e5?q=80&w=2070",
    category: 'Safari', 
    group: 'Road Safari', 
    featured: true,
    shortDescription: "Witness the dramatic Mara River crossings in Northern Serengeti (July-Oct).",
    fullDescription: "Witness Africa’s most dramatic wildlife spectacle. From Tarangire’s elephant herds to heart-pounding Mara River crossings, this safari delivers raw action and world-class wildlife.",
    highlights: ["Mara River crossings", "Giant elephants", "Big cat strongholds", "Ngorongoro Crater"],
    itinerary: [
      { day: 1, title: "Kilimanjaro Airport → Arusha", description: "Arrival and briefing." },
      { day: 2, title: "Arusha → Tarangire", description: "Full game drive in Tarangire National Park." },
      { day: 3, title: "Tarangire → Serengeti", description: "Transfer to the heart of the Serengeti." },
      { day: 4, title: "Northern Serengeti", description: "Drive to Kogatende for river crossings." },
      { day: 5, title: "River Crossings", description: "Full day witnessing the dramatic river crossings." },
      { day: 6, title: "Central Serengeti", description: "Game drive back towards the central plains." },
      { day: 7, title: "Ngorongoro Crater", description: "Descent into the Ngorongoro Crater." },
      { day: 8, title: "Departure", description: "Drive back to Arusha for departure." }
    ],
    inclusions: [...DEFAULT_INCLUSIONS, "Ngorongoro Crater Fees"],
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
    shortDescription: "A quick but intense dose of wildlife from the coast.",
    fullDescription: "Perfect for those short on time. Enter Tsavo East through Bachuma gate and spend the day searching for the famous Red Elephants, lions, and buffaloes before returning to the coast for dinner.",
    highlights: ["Red Elephants", "Aruba Dam", "Big Five", "Savannah Landscapes"],
    itinerary: [
      { day: 1, title: "Bush to Beach", description: "05:00 Pickup. Drive to Tsavo East. Morning game drive. Lunch at Voi Safari Lodge. Afternoon game drive. Return to coast." }
    ],
    inclusions: ["Transport", "Park Fees", "Lunch", "Guide", "Water"],
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
    shortDescription: "Swim with dolphins and snorkel in Kenya's premier marine park.",
    fullDescription: "A full day dhow cruise to Kisite Mpunguti Marine Park. Spot dolphins, snorkel in crystal clear waters teeming with marine life, and enjoy a fresh Swahili seafood lunch on Wasini Island.",
    highlights: ["Dolphin Spotting", "Snorkeling", "Seafood Lunch", "Traditional Dhow"],
    itinerary: [
      { day: 1, title: "Full Day Marine Adventure", description: "Pick up from hotel. Drive to Shimoni. Dhow cruise to marine park. Lunch on Wasini Island. Return." }
    ],
    inclusions: ["Transport", "Marine Park Fees", "Seafood Lunch", "Snorkeling Gear", "Guide"],
    exclusions: ["Tips", "Drinks"]
  }
];