

import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "5.0"; // Force production futuristic style refresh

export const COMPANY_INFO: CompanyInfo = {
  name: "Tom Safaris & Adventures – Cruse Experiences",
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
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
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
  {
    id: "post-coast-day-trips",
    slug: "choosing-the-right-day-trip-while-staying-at-the-coast",
    title: "Choosing the Right Day Trip While Staying at the Coast",
    excerpt: "With limited time, picking the perfect excursion can be tough. We break down the most popular coastal day trips to help you choose between adventure, relaxation, and culture.",
    content: `A stay on the Kenyan coast offers a perfect base for exploration, but with so many options, choosing the right day trip can be a challenge. How do you decide when your time is limited? As local guides, we help our guests find the perfect fit based on their interests.

Here’s a comparison of popular coast-based day trips to help you decide:

**For the Marine Life Enthusiast: Wasini Island Dhow Trip**

-   **Experience:** This is a day of pure coastal bliss. You'll sail on a traditional dhow, snorkel or dive in the crystal-clear waters of the Kisite-Mpunguti Marine Park, and look for dolphins. The day ends with a delicious Swahili seafood lunch on Wasini Island.
-   **Best for:** Relaxation, snorkeling, and marine life lovers.

**For the Wildlife Seeker (on a small scale): Shimba Hills National Reserve**

-   **Experience:** Just a short drive from the coast, Shimba Hills offers a taste of the safari experience. It's home to the rare Sable Antelope, as well as elephants, giraffes, and buffalo. The tour often includes a visit to the beautiful Sheldrick Falls.
-   **Best for:** A quick and easy wildlife fix without committing to a multi-day safari.

**For the Nature & Conservation Lover: Haller Park**

-   **Experience:** This is a remarkable conservation story. What was once a barren limestone quarry has been transformed into a thriving nature sanctuary. You can feed giraffes by hand, see giant tortoises, and learn about the park's successful ecosystem restoration.
-   **Best for:** Families and anyone interested in wildlife conservation.

**Our Advice from the Ground**

The best choice depends on your priorities. If you want the classic "under the sea" experience, Wasini is unmatched. If you're craving a glimpse of terrestrial wildlife and lush landscapes, Shimba Hills is perfect. And for an interactive and educational day, Haller Park is a fantastic choice.

*Still not sure which trip is right for you?*
**Contact us to plan the perfect day trip based on your interests and schedule.**`,
    image: "https://images.unsplash.com/photo-1616423830495-83e9a7e6c0c2?q=80&w=2070&auto=format&fit=crop",
    category: "Travel Planning",
    date: "October 18, 2023",
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