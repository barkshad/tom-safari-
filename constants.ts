import { Tour } from './types';

export const COMPANY_INFO = {
  name: "Tom Safaris and Adventure Kenya",
  email: "info@tomsafaris.co.ke",
  phone: "+254 721 787 589",
  location: "Nairobi, Kenya",
  slogan: "Turning your travel dreams into extraordinary experiences",
  social: {
    facebook: "#",
    instagram: "#"
  }
};

export const TOURS: Tour[] = [
  {
    id: "tsavo-east-salt-lick",
    name: "Tsavo East & Salt Lick",
    durationDays: 3,
    priceUsd: 545,
    // Elephants / Red Dust
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop",
    category: 'Safari',
    featured: true,
    shortDescription: "Experience the famous Red Elephants of Tsavo and the unique stilt lodge at Salt Lick.",
    fullDescription: "A classic 3-day safari taking you through the vast plains of Tsavo East National Park, home to the famous red elephants and the man-eaters of Tsavo. The trip concludes with a memorable stay at the Taita Hills Sanctuary.",
    highlights: ["Red Elephants", "Aruba Dam", "Salt Lick Lodge Stilt Stay", "Lion Sightings"],
    itinerary: [
      { day: 1, title: "Nairobi to Tsavo East", description: "Depart Nairobi early morning. Game drive en-route to lodge for lunch. Afternoon game drive." },
      { day: 2, title: "Tsavo East to Taita Hills", description: "Early morning game drive. Depart for Taita Hills Sanctuary. Check-in at Salt Lick Safari Lodge." },
      { day: 3, title: "Morning Game Drive & Return", description: "Early morning game drive in the sanctuary. Breakfast and drive back to Nairobi/Mombasa." }
    ]
  },
  {
    id: "shimba-hills",
    name: "Shimba Hills Day Trip",
    durationDays: 1,
    priceUsd: 195,
    // Forest / Antelope vibe
    image: "https://images.unsplash.com/photo-1484406566174-9da000ce6478?q=80&w=1000&auto=format&fit=crop",
    category: 'Day Trip',
    featured: true,
    shortDescription: "A perfect day escape to the coastal rainforests featuring the sable antelope.",
    fullDescription: "Discover the Shimba Hills National Reserve, a coastal rainforest known for its population of Sable Antelope and Sheldrick Falls.",
    highlights: ["Sable Antelope", "Sheldrick Falls Hike", "Tropical Rainforest", "Elephant Habitat"],
    itinerary: [
      { day: 1, title: "Full Day Tour", description: "Pick up from hotel. Game drive in Shimba Hills. Hike to Sheldrick Falls. Lunch at Shimba Hills Lodge. Return in evening." }
    ]
  },
  {
    id: "lamu-1-night",
    name: "Lamu Cultural Escape",
    durationDays: 2,
    priceUsd: 650,
    // Lamu Architecture / Dhow
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop",
    category: 'Coastal',
    featured: true,
    shortDescription: "Step back in time in the UNESCO World Heritage site of Lamu Old Town.",
    fullDescription: "Fly to the archipelago of Lamu. Experience the Swahili culture, narrow streets, donkey transport, and pristine beaches.",
    highlights: ["UNESCO World Heritage Site", "Dhow Cruise", "Swahili Architecture", "Fresh Seafood"],
    itinerary: [
      { day: 1, title: "Arrival & Exploration", description: "Fly to Lamu. Boat transfer to Shela/Lamu Town. Walking tour of the Old Town. Sunset Dhow cruise." },
      { day: 2, title: "Relaxation & Departure", description: "Morning at leisure on the beach or museum visit. Boat transfer to airstrip for return flight." }
    ]
  },
  {
    id: "zanzibar-1-night",
    name: "Zanzibar Spice Tour",
    durationDays: 2,
    priceUsd: 570,
    // Zanzibar beach / water
    image: "https://images.unsplash.com/photo-1589973320357-160368a7d515?q=80&w=1000&auto=format&fit=crop",
    category: 'Coastal',
    featured: true,
    shortDescription: "A quick getaway to the Spice Island with historic Stone Town tours.",
    fullDescription: "Explore the magical streets of Stone Town and the white sands of Zanzibar's northern beaches.",
    highlights: ["Stone Town", "Spice Farm Tour", "White Sand Beaches", "Forodhani Gardens"],
    itinerary: [
      { day: 1, title: "Arrival & Stone Town", description: "Fly to Zanzibar. Transfer to hotel. Evening tour of Stone Town markets." },
      { day: 2, title: "Spice Tour & Return", description: "Morning spice farm tour. Transfer to airport for departure." }
    ]
  },
  {
    id: "maasai-mara-1-night",
    name: "Maasai Mara Express",
    durationDays: 2,
    priceUsd: 890,
    // Lion
    image: "https://images.unsplash.com/photo-1615966650071-855cd69f6a02?q=80&w=1000&auto=format&fit=crop", 
    category: 'Safari',
    featured: true,
    shortDescription: "The ultimate quick safari to witness the Big Five in the world-famous Mara.",
    fullDescription: "A compact but intense safari experience in the Maasai Mara, offering high chances of spotting lions, leopards, and cheetahs.",
    highlights: ["The Big Five", "Maasai Culture", "Savannah Sunsets", "Great Rift Valley View"],
    itinerary: [
      { day: 1, title: "Nairobi to Mara", description: "Drive via Great Rift Valley. Arrive for lunch. Afternoon game drive till sunset." },
      { day: 2, title: "Morning Drive & Return", description: "Pre-breakfast game drive to spot predators. Breakfast and return to Nairobi." }
    ]
  },
  {
    id: "maasai-mara-2-night",
    name: "Maasai Mara Explorer",
    durationDays: 3,
    priceUsd: 1050,
    // Safari Vehicle / Landscape
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
    category: 'Safari',
    featured: true,
    shortDescription: "An immersive 3-day safari allowing deep exploration of the Mara ecosystem.",
    fullDescription: "With 3 days, you can explore the Mara Triangle and the river crossings (in season).",
    highlights: ["Mara River", "Hippo Pools", "Full Day Game Drive", "Bush Picnic"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Scenic drive to Mara. Afternoon game drive." },
      { day: 2, title: "Full Day Experience", description: "Full day game drive with picnic lunch near the Mara River." },
      { day: 3, title: "Departure", description: "Morning game drive. Visit a Maasai Village (Optional). Return to Nairobi." }
    ]
  },
  {
    id: "kilimanjaro-trek",
    name: "Mt. Kilimanjaro Trek",
    durationDays: 4,
    priceUsd: 1800,
    // Mountain
    image: "https://images.unsplash.com/photo-1650635477319-798a77f7962e?q=80&w=1000&auto=format&fit=crop",
    category: 'Trek',
    featured: false,
    shortDescription: "Challenge yourself on the roof of Africa.",
    fullDescription: "A challenging trek up the highest peak in Africa. Requires fitness and preparation.",
    highlights: ["Uhuru Peak", "Alpine Desert", "Rainforest Zone", "Glaciers"],
    itinerary: [
      { day: 1, title: "Marangu Gate to Mandara", description: "Hiking through rainforest." },
      { day: 2, title: "Mandara to Horombo", description: "Entering the heath and moorland zone." },
      { day: 3, title: "Horombo to Kibo", description: "Crossing the saddle to Kibo hut." },
      { day: 4, title: "Summit Attempt", description: "Midnight ascent to Uhuru Peak and descent." }
    ]
  }
];