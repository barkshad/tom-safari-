
import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "6.2"; // Reverted to Core 7

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
    shortDescription: "Join our Masai Mara tours to witness iconic Big Five wildlife and breathtaking plains.",
    fullDescription: "Experience the heart of Africa’s wildlife with our Maasai Mara Classic Safari. Home to the legendary Big Five and dramatic wildebeest migrations, the Mara offers some of the world’s most breathtaking game viewing.",
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
    fullDescription: "Discover the majestic Amboseli National Park with Tom Safaris, where vast plains and towering views of Mount Kilimanjaro create a stunning backdrop for wildlife photography.",
    highlights: ["Mt. Kilimanjaro Views", "Large Elephant Herds", "Observation Hill", "Bird Watching"],
    itinerary: [
      { day: 1, title: "Nairobi to Amboseli", description: "Drive south to Amboseli. Check-in and enjoy an evening game drive with Kilimanjaro in the background." },
      { day: 2, title: "Full Day Amboseli", description: "Full day game drive. Visit the swamp grounds where elephants bathe and hike Observation Hill." },
      { day: 3, title: "Amboseli to Nairobi", description: "Morning game drive to catch the predators before returning to Nairobi." }
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
    shortDescription: "A magical day trip to Watamu Marine Park for dolphin watching and snorkeling.",
    fullDescription: "Set sail on a traditional dhow or glass-bottom boat into the pristine waters of Watamu Marine National Park. Witness playful pods of dolphins in their natural habitat and explore vibrant coral gardens.",
    highlights: ["Dolphin Spotting", "Snorkeling at Coral Gardens", "Watamu Marine Park", "Seafood Lunch"],
    itinerary: [
      { day: 1, title: "Watamu Marine Adventure", description: "Early morning pickup. Boat ride to spot dolphins. Snorkeling session. Seafood lunch. Return to hotel." }
    ],
    inclusions: ["Transport", "Marine Park Fees", "Boat Ride", "Lunch", "Snorkeling Gear"],
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
    shortDescription: "Experience rare northern species and rich culture with our Samburu Safari Tours.",
    fullDescription: "Samburu National Reserve offers a unique safari experience with species found nowhere else in Kenya. From the striking Grevy’s zebra to the elegant gerenuk, our Samburu Safari Tours bring you face-to-face with rare and remarkable wildlife.",
    highlights: ["Samburu Special 5", "Ewaso Nyiro River", "Unique Culture", "Leopard Sightings"],
    itinerary: [
      { day: 1, title: "Nairobi to Samburu", description: "Journey north across the equator. Afternoon game drive." },
      { day: 2, title: "Discover the Special Five", description: "Full day seeking the Reticulated Giraffe, Grevy’s Zebra, Beisa Oryx, Somali Ostrich, and Gerenuk." },
      { day: 3, title: "Return to Nairobi", description: "Final morning game viewing before the return journey." }
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
    shortDescription: "Explore the pristine coral beaches of Diani & Ukunda with Tom Safaris.",
    fullDescription: "Experience paradise in Diani & Ukunda with Tom Safaris’ beach packages. Perfect for couples and families alike, these coastal retreats offer water sports, scenic sunsets, and world-class relaxation.",
    highlights: ["White Sand Beaches", "Snorkeling at Kisite", "Seafood Dining", "Shimba Hills Day Trip"],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", description: "Arrive in Diani, check into your beachfront resort." },
      { day: 2, title: "Marine Park Adventure", description: "Full day trip to Kisite Mpunguti for snorkeling and dolphin watching." },
      { day: 3, title: "Leisure & Culture", description: "Relax by the pool or visit the sacred Kaya Kinondo forest." },
      { day: 4, title: "Departure", description: "Transfer to Ukunda airstrip or Mombasa airport." }
    ],
    inclusions: ["Accommodation", "Airport Transfers", "Breakfast", "Marine Park Fees"],
    exclusions: ["Lunch & Dinner (unless specified)", "Personal water sports", ...DEFAULT_EXCLUSIONS]
  }
];
