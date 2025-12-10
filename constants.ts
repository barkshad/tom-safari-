import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "5.1"; // Force refresh for new tour data

export const COMPANY_INFO: CompanyInfo = {
  name: "Tom Safaris",
  ownerName: "Tom 'Cruse' Madeda",
  email: "admin@tomsafaris.co.ke",
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

export const TOURS: Tour[] = [
  // --- 1. 3-Day Wildlife & Cultural Safari ---
  {
    id: "3-day-wildlife-cultural-safari",
    name: "3-Day Wildlife & Cultural Safari",
    durationDays: 3, 
    priceUsd: 0, // Inquire
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop", // Lion/Serengeti
    category: 'Safari', 
    group: 'Road Safari', 
    featured: true,
    shortDescription: "A powerful short safari covering Serengeti, Ngorongoro, and Maasai culture.",
    fullDescription: "A short but powerful safari covering Tanzania’s most iconic wildlife regions, combined with authentic Maasai cultural interaction. Ideal for short visits with maximum wildlife exposure.",
    highlights: ["Serengeti Plains", "Ngorongoro Crater", "Maasai Boma Visit", "Big Five"],
    keywords: "serengeti safari, ngorongoro crater, maasai culture, tanzania short safari",
    itinerary: [
      { day: 1, title: "Arusha → Serengeti National Park", description: "Morning departure from Arusha. Scenic drive into the Serengeti with an afternoon game drive. Overnight in a luxury tented camp." },
      { day: 2, title: "Serengeti → Ngorongoro Highlands", description: "Sunrise game drive in the Serengeti. Transfer toward Ngorongoro with crater views. Overnight in the highlands." },
      { day: 3, title: "Ngorongoro Crater → Arusha", description: "Early descent into the crater for a Big Five game drive. Return to Arusha or airport drop-off in the afternoon." }
    ]
  },

  // --- 2. Ndutu Calving Season Safari ---
  {
    id: "ndutu-calving-season-safari",
    name: "Ndutu Calving Season Safari",
    durationDays: 5, 
    priceUsd: 0, 
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2070&auto=format&fit=crop", // Cheetah/Calves
    category: 'Safari', 
    group: 'Road Safari', 
    featured: true,
    shortDescription: "Witness 8,000 wildebeest calves born daily in the Ndutu Plains (Jan-Mar).",
    fullDescription: "Witness one of nature’s rarest events — up to 8,000 wildebeest calves born daily, attracting intense predator action. Best Season: January – March.",
    highlights: ["Wildebeest Calving", "Predator Action", "Ndutu Plains", "Tarangire Elephants"],
    keywords: "ndutu safari, calving season, great migration, cheetah tanzania",
    itinerary: [
      { day: 1, title: "Arusha → Tarangire National Park", description: "Drive to Tarangire to see elephant herds and ancient baobab scenery." },
      { day: 2, title: "Karatu → Ndutu Plains", description: "Scenic drive to the Ndutu calving grounds." },
      { day: 3, title: "Full Day Ndutu", description: "Full day dedicated to the calving action, predator sightings, and photography." },
      { day: 4, title: "Southern → Central Serengeti", description: "Drive into the vast plains of the Central Serengeti for big cats." },
      { day: 5, title: "Serengeti → Ngorongoro Crater → Arusha", description: "Final game drive, descent into Ngorongoro Crater, then return to Arusha." }
    ]
  },

  // --- 3. Family Safari - Tiny Trackers ---
  {
    id: "family-safari-tiny-trackers",
    name: "Family Safari – 'Tanzania Tiny Trackers'",
    durationDays: 7, 
    priceUsd: 0, 
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1549234868-b76547144449?q=80&w=1956&auto=format&fit=crop", // Giraffe/Family friendly vibe
    category: 'Safari', 
    group: 'Road Safari', 
    featured: false,
    shortDescription: "An educational adventure for families with Junior Ranger activities.",
    fullDescription: "An educational and fun safari designed for families (Ages 5-15), blending wildlife, learning, and adventure. Includes Junior Ranger lessons and wildlife workbooks.",
    highlights: ["Junior Ranger Badges", "Wildlife Tracking", "Family Friendly Lodges", "Big Five"],
    keywords: "family safari tanzania, kids safari, junior ranger program",
    itinerary: [
      { day: 1, title: "Arrival & Relaxation", description: "Arrival in Arusha, briefing, and relaxation." },
      { day: 2, title: "Tarangire (Junior Ranger Lesson)", description: "Safari in Tarangire with a focus on elephant behavior and baobab trees." },
      { day: 3, title: "Serengeti (Tracks & Signs)", description: "Learn to identify animal tracks and signs in the Serengeti." },
      { day: 4, title: "Full Serengeti (Wildlife Detective)", description: "A full day of wildlife detective games and spotting big cats." },
      { day: 5, title: "Ngorongoro Crater", description: "Descent into the crater for a classic Big Five safari." },
      { day: 6, title: "Lake Manyara + Graduation", description: "Tree-climbing lions in Manyara followed by a Junior Ranger graduation ceremony." },
      { day: 7, title: "Departure", description: "Transfer to the airport for departure." }
    ]
  },

  // --- 4. Great Migration River Crossing ---
  {
    id: "great-migration-river-crossing",
    name: "Great Migration River Crossing Safari",
    durationDays: 8, 
    priceUsd: 0, 
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1517823382935-51bf405625e5?q=80&w=2070&auto=format&fit=crop", // Wildebeest Crossing
    category: 'Safari', 
    group: 'Road Safari', 
    featured: true,
    shortDescription: "Witness the dramatic Mara River crossings in Northern Serengeti (July-Oct).",
    fullDescription: "Witness Africa’s most dramatic wildlife spectacle. From Tarangire’s elephant herds to heart-pounding Mara River crossings, this safari delivers raw action and luxury. Best Season: July – October.",
    highlights: ["Mara River Crossings", "Kogatende", "Big Cat Strongholds", "Luxury Camps"],
    keywords: "river crossing safari, mara river, kogatende, migration safari",
    itinerary: [
      { day: 1, title: "Kilimanjaro Airport → Arusha", description: "Arrival, briefing, and overnight in Arusha." },
      { day: 2, title: "Arusha → Tarangire", description: "Full game drive in Tarangire National Park." },
      { day: 3, title: "Tarangire → Central Serengeti", description: "Transfer to Central Serengeti with game viewing en-route." },
      { day: 4, title: "Central Serengeti → Northern Serengeti", description: "Drive to Kogatende (North) to position for the crossing." },
      { day: 5, title: "Full Day Mara River", description: "Full day waiting for and witnessing the dramatic river crossings." },
      { day: 6, title: "Northern → Central Serengeti", description: "Game drive back towards the central plains." },
      { day: 7, title: "Ngorongoro Crater Safari", description: "Sunrise descent into the crater for a full game drive." },
      { day: 8, title: "Lake Manyara → Departure", description: "Short drive to Lake Manyara (optional view) and transfer to airport." }
    ]
  },

  // --- 5. Zanzibar -> Mikumi Fly-in ---
  {
    id: "zanzibar-mikumi-fly-in",
    name: "Zanzibar → Mikumi Fly-In Safari",
    durationDays: 1, 
    priceUsd: 0, 
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1552664972-7f55b9583152?q=80&w=2070&auto=format&fit=crop", // Aerial/Mikumi
    category: 'Day Trip', 
    group: 'Flight Safari', 
    featured: false,
    shortDescription: "A perfect one-day safari experience from Zanzibar.",
    fullDescription: "Perfect for beach guests who want a real African safari experience in one day. Includes return flights from Zanzibar.",
    highlights: ["Scenic Flight", "Mikumi National Park", "Picnic Lunch", "Full Game Drive"],
    keywords: "mikumi day trip, zanzibar safari, fly in safari",
    itinerary: [
      { day: 1, title: "Full Day Fly-In Safari", description: "05:00 Pickup. 07:45 Arrive Mikumi for game drive. 12:30 Picnic lunch. 15:30 Flight back to Zanzibar." }
    ]
  },

  // --- 6. Zanzibar Leisure Package ---
  {
    id: "4-day-zanzibar-leisure",
    name: "4-Day Zanzibar Leisure Package",
    durationDays: 4, 
    priceUsd: 0, 
    priceGbp: 0,
    image: "https://images.unsplash.com/photo-1540206395-688085723adb?q=80&w=1974&auto=format&fit=crop", // Zanzibar Beach
    category: 'Coastal', 
    group: 'Excursion', 
    featured: false,
    shortDescription: "The ultimate relaxation mix: Snorkeling, Spices, and Stone Town.",
    fullDescription: "A curated 4-day experience exploring the best of Zanzibar. From Mnemba Atoll snorkeling to the historic Stone Town and the famous Rock Restaurant.",
    highlights: ["Mnemba Snorkeling", "Spice Farm", "Stone Town", "The Rock Restaurant"],
    keywords: "zanzibar package, stone town tour, safari blue, zanzibar holiday",
    itinerary: [
      { day: 1, title: "Ocean & Sunset", description: "Mnemba Island snorkeling, dolphin swimming, and a sunset dhow cruise." },
      { day: 2, title: "Culture & Spice", description: "Spice farm tour, Swahili cooking lesson, Stone Town exploration, and Forodhani market." },
      { day: 3, title: "Adventure (Safari Blue)", description: "Traditional dhow sailing, sandbank relaxation, and BBQ seafood lunch." },
      { day: 4, title: "Nature & Icons", description: "Jozani Forest (Red Colobus monkeys), Mtende Beach, and The Rock Restaurant photo stop." }
    ]
  }
];