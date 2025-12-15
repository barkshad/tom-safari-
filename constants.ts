
import { Tour, PageContent, CurrencyConfig, CompanyInfo, BlogPost } from './types';

export const DATA_VERSION = "6.10"; // Added International Testimonials

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
  {
    id: "post-great-migration",
    slug: "witnessing-the-great-migration-maasai-mara",
    title: "The Great Wildebeest Migration: A Spectacle Like No Other",
    excerpt: "Plan your trip to the Maasai Mara to witness the 'Eighth Wonder of the World' as millions of wildebeest cross the Mara River.",
    content: `Every year, the Maasai Mara plays host to the greatest wildlife show on earth. Millions of wildebeest, zebras, and gazelles traverse the Serengeti-Mara ecosystem in search of fresh grazing.

**When to Go**
While the migration is a year-round cycle, the dramatic river crossings usually occur between **July and October**. This is when the herds face the crocodile-infested Mara River, creating heart-stopping moments for onlookers.

**What You'll See**
- **Predator Action:** Lions, leopards, and cheetahs follow the herds closely.
- **River Crossings:** The chaos and survival instinct at the river banks.
- **Vast Herds:** The sheer noise and vibration of the ground is unforgettable.

Book your Maasai Mara flight safari early, as lodges fill up quickly during migration season!`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Wildlife",
    date: "January 15, 2024"
  },
  {
    id: "post-amboseli-giants",
    slug: "amboseli-land-of-giants",
    title: "Amboseli: Land of Giants and Mountain Views",
    excerpt: "Why Amboseli National Park offers the best elephant photography in the world, with Mt. Kilimanjaro as your backdrop.",
    content: `Amboseli National Park is synonymous with two things: massive herds of elephants and the towering peak of Mount Kilimanjaro.

**The Photographers Dream**
The park is famous for being the best place in Africa to get close to free-ranging elephants. The famous shot of an elephant with the snow-capped mountain in the background is taken here.

**Observation Hill**
A climb up Observation Hill offers a panoramic view of the entire park, including the swamps where elephants bathe and hippos hide.

**Birding Paradise**
With over 400 species of birds, including water birds like pelicans and kingfishers, it's a haven for ornithologists.`,
    image: "https://images.unsplash.com/photo-1549320341-9426d03d45d6?q=80&w=2070",
    category: "Destinations",
    date: "February 2, 2024"
  },
  {
    id: "post-packing-safari",
    slug: "ultimate-safari-packing-list",
    title: "The Ultimate Safari Packing List for Kenya",
    excerpt: "Don't overpack! Here is exactly what you need for a comfortable and stylish safari experience.",
    content: `Packing for a safari can be tricky. You want to be prepared, but luggage space in 4x4s and light aircraft is limited.

**The Essentials:**
1.  **Neutral Colors:** Wear khaki, beige, or green to blend in. Avoid bright colors (scares animals) and dark blue/black (attracts tsetse flies).
2.  **Layers:** Mornings are cold, afternoons are hot. Bring a fleece jacket and light t-shirts.
3.  **Camera & Binoculars:** A must for spotting wildlife.
4.  **Sun Protection:** Hat, sunglasses, and high SPF sunscreen.
5.  **Insect Repellent:** Essential for evenings.
6.  **Comfortable Shoes:** Hiking boots aren't necessary unless you're walking; comfortable trainers work fine.`,
    image: "https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=2070",
    category: "Travel Tips",
    date: "March 10, 2024"
  },
  {
    id: "post-wasini-island",
    slug: "magic-of-wasini-island",
    title: "Beyond the Beach: The Magic of Wasini Island",
    excerpt: "Escape the resorts and discover the coral gardens, dolphins, and Swahili culture of Wasini Island.",
    content: `Located south of Diani, Wasini Island is a tranquil escape where time seems to stand still. There are no cars, only footpaths of coral rag.

**Kisite-Mpunguti Marine Park**
Our Wasini tour includes a dhow trip to this marine park, famous for its resident pod of dolphins. Snorkeling here is world-class, with vibrant coral gardens and sea turtles.

**The Coral Garden**
On the island itself, the "Coral Garden" is a surreal landscape of fossilized coral structures exposed by the receding sea, now covered in mangroves. A boardwalk allows you to explore this alien-like terrain.

**Seafood Feast**
No trip is complete without a traditional Swahili seafood lunch, featuring fresh crab and fish caught by local fishermen.`,
    image: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=2070",
    category: "Coastal Excursions",
    date: "March 25, 2024"
  },
  {
    id: "post-tsavo-west-mzima",
    slug: "tsavo-west-mzima-springs",
    title: "Tsavo West: Lava Flows and Mzima Springs",
    excerpt: "Explore the rugged beauty of Tsavo West, from the Shetani Lava Flow to the underwater viewing chamber at Mzima Springs.",
    content: `While Tsavo East is flat and open, Tsavo West is rugged, volcanic, and hilly. It offers a completely different aesthetic for safari-goers.

**Mzima Springs**
A geological marvel, Mzima Springs produces 50 million gallons of crystal-clear water daily. An underwater viewing chamber allows you to watch hippos and fish swimming in the filtration-clear water.

**Shetani Lava Flow**
"Shetani" means "Devil" in Swahili. This massive black lava flow was formed only a few hundred years ago and local legends say the earth opened up and fire consumed the area.

**Rhino Sanctuary**
Tsavo West is home to a protected area for black rhinos, offering a high chance of spotting this elusive member of the Big Five.`,
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=2070",
    category: "Destinations",
    date: "April 5, 2024"
  },
  {
    id: "post-shimba-hills",
    slug: "shimba-hills-sable-antelope",
    title: "Shimba Hills: The Coastal Rainforest Safari",
    excerpt: "Just 30km from Diani, Shimba Hills offers a unique rainforest ecosystem and the rare Sable Antelope.",
    content: `If you want a break from the heat of the coast, head to the Shimba Hills. This National Reserve is a coastal rainforest, often covered in a cooling mist.

**The Sable Antelope**
Shimba Hills is the only place in Kenya where you can see the majestic Sable Antelope, known for their scimitar-horned silhouette.

**Sheldrick Falls**
For the adventurous, a guided hike down to the Sheldrick Falls is a must. You can take a refreshing dip in the cool waters of the plunge pool.

**Forest Elephants**
The elephants here are distinct from their Tsavo cousins; they live in the dense forest and are often smaller but very active.`,
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2000",
    category: "Destinations",
    date: "April 18, 2024"
  },
  {
    id: "post-salt-lick-lodge",
    slug: "staying-at-salt-lick-lodge",
    title: "A Night at Salt Lick Safari Lodge: Iconic Stilted Architecture",
    excerpt: "Why the Salt Lick Game Lodge in Taita Hills is one of the most photographed lodges in the world.",
    content: `Located in the heart of the Taita Hills Wildlife Sanctuary, Sarova Salt Lick Game Lodge is famous for its unique architecture. The entire lodge is built on high stilts, connected by suspended walkways.

**24/7 Game Viewing**
The stilts lift you above the elephants that congregate at the waterholes below. You can watch wildlife from your bedroom window or the underground bunker, which puts you at eye level with drinking elephants.

**Private Sanctuary**
Because it's a private sanctuary, you can enjoy night game drives—an activity not permitted in most National Parks—revealing nocturnal creatures like aardvarks and bush babies.`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Accommodation",
    date: "May 1, 2024"
  },
  {
    id: "post-gede-ruins",
    slug: "mystery-of-gede-ruins",
    title: "The Mystery of Gede Ruins: A Swahili Ghost City",
    excerpt: "Wander through the ancient coral-stone walls of Gede, a wealthy city mysteriously abandoned in the 17th century.",
    content: `Buried deep in the Arabuko-Sokoke forest near Malindi lies the Gede Ruins. This was once a thriving Swahili city with palaces, mosques, and stone houses, complete with advanced sanitation systems.

**The Mystery**
In the early 17th century, the entire population abandoned the city. There are no written records explaining why. Was it disease? War? A receding water table?

**What Remains**
Today, you can walk through the Great Mosque, the Palace, and the pillars of tombs. The site is now inhabited by playful Sykes monkeys and butterflies, adding life to the ruins.`,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
    category: "History",
    date: "May 15, 2024"
  },
  {
    id: "post-honeymoon-safari",
    slug: "planning-perfect-honeymoon-safari",
    title: "How to Plan the Perfect Honeymoon Safari",
    excerpt: "Combine the thrill of the bush with the relaxation of the beach for an unforgettable romantic getaway.",
    content: `Kenya is arguably the world's best honeymoon destination because it offers the "Bush and Beach" combination effortlessly.

**Romance in the Wild**
Imagine a private candlelit dinner under the stars in the middle of the savannah, or a sunrise hot air balloon ride over the Mara.

**Luxury Accommodation**
We recommend lodges that offer honeymoon suites with private plunge pools and secluded views.

**The Perfect Itinerary**
Start with 3 days of adventure in Tsavo or Amboseli, then retreat to Diani Beach or Zanzibar for 4 days of relaxation. We handle all the transfers so you can focus on each other.`,
    image: "https://images.unsplash.com/photo-1515682977530-584762260717?q=80&w=2070",
    category: "Travel Tips",
    date: "June 2, 2024"
  },
  {
    id: "post-big-five",
    slug: "spotting-the-big-five",
    title: "The Big Five Checklist: Where to Find Them",
    excerpt: "Lion, Leopard, Elephant, Rhino, and Buffalo. Here is your guide to spotting Africa's most sought-after animals.",
    content: `The term "Big Five" was originally coined by hunters for the five most difficult animals to hunt on foot. Today, it's about the prestige of spotting them on camera.

1.  **Elephant:** Best seen in Amboseli and Tsavo East (Red Elephants).
2.  **Lion:** Abundant in Maasai Mara and Tsavo. Look for them resting in the shade during the day.
3.  **Buffalo:** Common in most parks, often found in large herds or as solitary "Dagga Boys."
4.  **Leopard:** The most elusive. Tsavo West and the riverine forests of the Mara are your best bet. Look up in the trees!
5.  **Rhino:** The rarest. Lake Nakuru and the Ngulia Sanctuary in Tsavo West are the strongholds for Black Rhinos.`,
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=2071",
    category: "Wildlife",
    date: "June 20, 2024"
  },
  {
    id: "post-glass-bottom-boat",
    slug: "malindi-marine-park-glass-bottom",
    title: "Exploring the Underwater World: Malindi Marine Park",
    excerpt: "You don't need to be a diver to see the coral reefs. Step aboard a glass-bottom boat in Malindi.",
    content: `Malindi Marine National Park is the oldest marine park in Africa. It is a haven for sea life, and the best way to see it without getting wet (initially) is a glass-bottom boat tour.

**The Experience**
As the boat glides over the coral gardens, the glass floor reveals a kaleidoscope of color. You'll see Zebra fish, Surgeonfish, and perhaps a sea turtle.

**Snorkeling**
The boat will anchor in the calm lagoon, allowing you to jump in and swim amongst the fish. The fish here are protected and very accustomed to humans, often swimming right up to your mask.

**Magic Island**
At low tide, sandbanks emerge from the ocean, known as "Magic Islands." It's the perfect spot for sunbathing in the middle of the sea.`,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
    category: "Coastal Excursions",
    date: "July 5, 2024"
  },
  {
    id: "post-family-safari",
    slug: "family-safari-tips-kids",
    title: "Taking Kids on Safari: A Survival Guide",
    excerpt: "Is a safari safe for children? Absolutely. Here are our top tips for a family-friendly adventure.",
    content: `A safari is a magical education for children, but it requires planning.

**Age Matters**
We generally recommend safaris for children aged 5 and up. Younger children may struggle with the long drives and the need for silence near animals.

**Keep it Short**
For families, we recommend 2-day or 3-day safaris rather than week-long expeditions. Tsavo East is perfect because it's close to the coast.

**Lodges with Pools**
After a dusty game drive, a pool is essential for kids to burn off energy. Lodges like Voi Wildlife Lodge or Salt Lick offer great facilities.

**Private Vehicle**
Booking a private safari van gives you flexibility. If the kids are tired, you can return to the lodge early without affecting other guests.`,
    image: "https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=2070",
    category: "Travel Tips",
    date: "July 18, 2024"
  },
  {
    id: "post-sgr-train",
    slug: "sgr-train-vs-road-safari",
    title: "SGR Train vs. Road Safari: Which is Better?",
    excerpt: "Should you drive from Mombasa to Tsavo or take the Madaraka Express train? We weigh the pros and cons.",
    content: `The SGR (Standard Gauge Railway) has revolutionized travel in Kenya. But for a safari, is it better than the road?

**The Road Option**
*   **Pros:** You see the countryside, you have your vehicle from start to finish, and you can stop for photos/souvenirs.
*   **Cons:** The highway can be busy and the journey is longer.

**The Train Option**
*   **Pros:** Fast, comfortable, air-conditioned, and travels *through* the park (you might spot elephants from your seat!).
*   **Cons:** You need a transfer at the station to your safari vehicle.

**Our Verdict**
For Tsavo East, driving is often easier as the park gate is on the highway. For Tsavo West or Amboseli, the train to Voi or Emali/Mtito Andei can save hours of fatigue. We offer packages for both!`,
    image: "https://images.unsplash.com/photo-1517379768224-2c7847c234a9?q=80&w=2070",
    category: "Travel Tips",
    date: "August 1, 2024"
  },
  {
    id: "post-bird-watching",
    slug: "bird-watching-kenya-coast",
    title: "A Birder’s Paradise: Arabuko-Sokoke and Mida Creek",
    excerpt: "Discover the rare species of the Kenyan coast, from the Clarke's Weaver to the Sokoke Scops Owl.",
    content: `Kenya isn't just about the Big Five. The coastal forests are a global biodiversity hotspot for birds.

**Arabuko-Sokoke Forest**
This is the largest remaining fragment of coastal forest in East Africa. It is the only place to find the Clarke's Weaver. It's also home to the tiny, endangered Sokoke Scops Owl.

**Mida Creek**
A short distance away, Mida Creek is a tidal inlet lined with mangroves. It is a vital stopover for migrating waders. A boardwalk allows you to walk over the mangroves, offering prime viewing of Flamingos, Crab-plovers, and Ospreys.`,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069",
    category: "Wildlife",
    date: "August 15, 2024"
  },
  {
    id: "post-night-game-drive",
    slug: "thrill-of-night-game-drives",
    title: "The Thrill of a Night Game Drive",
    excerpt: "See the bush come alive after dark. Why you should include a private sanctuary in your itinerary.",
    content: `National Parks in Kenya usually close their gates at 6:30 PM. To see the nocturnal world, you need to visit a private conservancy like Taita Hills or Lumo Sanctuary.

**The Eyes in the Dark**
Using a spotlight, your guide will scan the bush. You'll see hundreds of reflective eyes back at you.

**Predators on the Prowl**
Lions and leopards are most active at night. This is your best chance to see a hunt in action.

**Smaller Creatures**
You'll spot animals you never see during the day: Genets, Civets, White-tailed Mongooses, and Aardvarks. It brings a completely different dimension to the safari experience.`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Safari Experience",
    date: "August 28, 2024"
  },
  {
    id: "post-cultural-maasai",
    slug: "maasai-village-visit",
    title: "More Than Wildlife: Visiting a Maasai Village",
    excerpt: "Understanding the culture of the Maasai people is integral to the East African safari experience.",
    content: `The Maasai people have lived alongside wildlife for centuries. A visit to a traditional "Manyatta" (village) offers a glimpse into their enduring lifestyle.

**The Welcome Dance**
You will typically be welcomed with a rhythmic dance and the famous high-jumping competition (Adumu) by the warriors.

**Traditional Skills**
Learn how they make fire using sticks, beadwork, and how they construct their homes using natural materials.

**Respectful Tourism**
We ensure our cultural visits are respectful and beneficial to the community, with fees going directly to the village to support schools and water projects.`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Culture",
    date: "September 10, 2024"
  },
  {
    id: "post-tanzania-combo",
    slug: "combining-kenya-and-tanzania",
    title: "The Ultimate Circuit: Combining Kenya and Tanzania",
    excerpt: "Why choose? How to plan a cross-border safari covering the Mara, Serengeti, and Ngorongoro Crater.",
    content: `For the ultimate African adventure, combining Kenya and Tanzania is the gold standard.

**The Logistics**
The border crossing at Isebania or Namanga is straightforward with our assistance. You'll switch vehicles at the border, but the experience is seamless.

**The Highlights Reel**
1.  **Maasai Mara (Kenya):** High density of cats and the river crossings.
2.  **Serengeti (Tanzania):** Endless plains and massive herds.
3.  **Ngorongoro Crater (Tanzania):** A wildlife fishbowl inside an extinct volcano.
4.  **Amboseli (Kenya):** Elephants and Kilimanjaro.

This requires at least 8 to 10 days, but it covers the absolute best wildlife viewing on the planet.`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Travel Tips",
    date: "September 25, 2024"
  },
  {
    id: "post-safari-photography",
    slug: "safari-photography-tips",
    title: "5 Photography Tips for Your Safari",
    excerpt: "Capture the perfect shot. Advice on lighting, composition, and equipment for amateur photographers.",
    content: `You don't need a $5,000 lens to get great safari photos, but you do need patience.

1.  **Golden Hour:** The light at 6:30 AM and 5:30 PM is soft and golden. Midday sun is harsh and flattens images.
2.  **Eye Level:** If possible, ask your guide to position the vehicle so you are lower down. Photos taken looking down on animals are less intimate.
3.  **Leave Space:** If an animal is moving, leave space in the frame in front of it for it to "move into."
4.  **Focus on Eyes:** Always focus on the animal's eyes. If the eyes are sharp, the photo works.
5.  **Bean Bags:** Use a bean bag on the roof of the safari van to stabilize your camera instead of a tripod, which is cumbersome in a car.`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Photography",
    date: "October 5, 2024"
  },
  {
    id: "post-diani-beach",
    slug: "diani-beach-relaxation",
    title: "Why Diani Beach is the Best Way to End a Safari",
    excerpt: "After dusty game drives, nothing beats the white sands of Diani. Voted Africa's leading beach destination multiple times.",
    content: `Safari is exhilarating, but it is also tiring. Early mornings and bumpy roads take their toll. That's why we always recommend ending your trip in Diani.

**The Beach**
Diani offers 17km of flawless white sand and turquoise water. It's protected by a reef, making the water calm and safe for swimming.

**Activities**
If you still have energy, try kite surfing, skydiving (landing on the beach!), or a glass-bottom boat trip to the sandbar.

**Dining**
Diani has a vibrant culinary scene, from the famous Ali Barbour's Cave Restaurant (set inside a natural coral cave) to fresh seafood shacks on the beach.`,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1974",
    category: "Destinations",
    date: "October 18, 2024"
  },
  {
    id: "post-safari-etiquette",
    slug: "safari-etiquette-rules",
    title: "Safari Etiquette: How to Be a Responsible Tourist",
    excerpt: "Respecting the wild is key. Rules on noise, feeding animals, and off-road driving.",
    content: `We love showing you our country, but we must protect it. Here are the golden rules of safari:

1.  **Never Feed Animals:** It makes them aggressive and dependent on humans.
2.  **Keep Noise Down:** Loud voices scare animals away and disturb other guests.
3.  **Stay in the Vehicle:** Unless in a designated area, getting out is extremely dangerous.
4.  **No Littering:** Take all your trash back to the lodge.
5.  **Patience:** Don't pressure your driver to chase animals or go off-road. The best sightings often come to those who wait quietly.`,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    category: "Travel Tips",
    date: "November 1, 2024"
  }
];

export const TOURS: Tour[] = [
  {
    id: "tour-big-game-fishing-half",
    name: "Big Game Fishing (Half Day)",
    durationDays: 0.5,
    priceUsd: 350,
    priceGbp: 280,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
    shortDescription: "4-hour deep sea fishing adventure targeting Wahoo, Dorado, and Tuna.",
    fullDescription: "Join us for an adrenaline-filled morning or afternoon of deep sea fishing. Our fully equipped boats and experienced crew will take you to the best spots to target pelagic game fish like Wahoo, Dorado (Mahi Mahi), Kingfish, and Yellowfin Tuna. Perfect for beginners and seasoned anglers alike.",
    highlights: ["Deep Sea Trolling", "Professional Crew", "Refreshments Included", "All Tackle Provided"],
    itinerary: [
      { day: 1, title: "Half Day Fishing", description: "Depart from the jetty, 4 hours of fishing in the Indian Ocean, return to shore." }
    ],
    featured: true,
    category: 'Coastal',
    group: 'Excursion',
    inclusions: ["Boat Charter", "Fishing Gear & Bait", "Soft Drinks & Water", "Captain & Crew"],
    exclusions: ["Tips", "Alcohol"],
    gallery: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070"]
  },
  {
    id: "tour-big-game-fishing-full",
    name: "Big Game Fishing (Full Day)",
    durationDays: 1,
    priceUsd: 700,
    priceGbp: 560,
    image: "https://images.unsplash.com/photo-1621683407982-b77823e59026?q=80&w=2070",
    shortDescription: "8-hour expedition hunting for Marlin, Sailfish, and trophy Tuna.",
    fullDescription: "A full day dedicated to the pursuit of the ocean's giants. We venture deeper to target Billfish (Sailfish, Black/Blue/Striped Marlin) and large Yellowfin Tuna. This charter gives you the time to try different techniques and maximize your chances of a trophy catch. Lunch and drinks are provided on board.",
    highlights: ["Target Marlin & Sailfish", "Full Day Charter", "Deep Water Fishing", "Lunch On Board"],
    itinerary: [
      { day: 1, title: "Full Day Expedition", description: "Full day (8 hours) fishing charter targeting big game species." }
    ],
    featured: true,
    category: 'Coastal',
    group: 'Excursion',
    inclusions: ["Boat Charter", "Heavy Tackle", "Lunch & Drinks", "Captain & Crew"],
    exclusions: ["Tips", "Alcohol"],
    gallery: ["https://images.unsplash.com/photo-1621683407982-b77823e59026?q=80&w=2070"]
  },
  {
    id: "tour-scuba-diving-kilifi",
    name: "Scuba Diving & Training Kilifi",
    durationDays: 1,
    priceUsd: 150, 
    priceGbp: 120,
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=2071",
    shortDescription: "Certified scuba training (Open Water to Master) and Fun Dives in Kilifi with Shark Family & Diving School.",
    fullDescription: "In collaboration with Shark Family and Diving School, Tom Safaris is proud to introduce international standard scuba diving training right here in Kilifi town.\n\nWe offer professional lessons at affordable rates, ensuring safety and quality. Our certified trainers guide you through every step, and trainees receive internationally recognized certificates upon completion.\n\nCourses Offered:\n1. Open Water Diving\n2. Advanced Dive\n3. Rescue Dive\n4. Master Dive\n\nSpecialty Courses:\n- Night Dive\n- Deep Dive\n- Recovery Dive\n\nWe also offer Fun Dives for certified divers or those looking for a casual underwater experience exploring the vibrant Kilifi creek and reefs.",
    highlights: ["Certified PADI/SSI Training", "Open Water to Master Levels", "Night & Deep Dives", "Fun Dives", "Professional Instructors"],
    itinerary: [
      { day: 1, title: "Training or Dive Session", description: "Meet at Kilifi boat yard. Briefing by certified instructors. Proceed to dive site for training or fun dive session." }
    ],
    featured: true,
    category: 'Coastal',
    group: 'Excursion',
    inclusions: ["Diving Equipment", "Instructor Fees", "Boat Transport", "Certificate (for courses)"],
    exclusions: ["Swimwear", "Personal Insurance", "Lunch (unless specified)"],
    gallery: [
        "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=2071",
        "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070" 
    ]
  }
];

export const DEFAULT_PAGE_CONTENT: PageContent = {
  home: {
    hero: {
      title: "Cruise the Wild",
      subtitle: "Experience Kenya's majesty with Tom 'Cruse' Madeda. Tailored safaris, unforgettable memories.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000",
    },
    welcome: {
      title: "Karibu Kenya",
      content: "Welcome to Tom Safaris. We specialize in creating personalized safari experiences that go beyond the ordinary. From the vast plains of Tsavo to the white sands of Diani, let us show you the real Kenya.",
    },
    features: [
      { id: "feat1", title: "Expert Guides", text: "Our guides are KPSGA silver/gold certified with years of bush experience." },
      { id: "feat2", title: "Custom Fleets", text: "Our 4x4 Land Cruisers are modified for photography and comfort." },
      { id: "feat3", title: "24/7 Support", text: "We are with you every step of the way, from booking to drop-off." },
    ],
    testimonials: [
      { id: "test1", content: "The best safari experience we've ever had! Tom is a legend in the bush. He knew exactly where the leopards were hiding.", author: "Sarah & Mark, UK" },
      { id: "test2", content: "Saw the Big 5 in two days. Incredible guiding and the lodges were top tier. Highly recommend Cruse and his team.", author: "Hans, Germany" },
      { id: "test3", content: "We took our three kids on their first safari and Tom was amazing with them. Safe, educational, and fun!", author: "The Miller Family, USA" },
      { id: "test4", content: "Kilifi diving was spectacular. Professional instructors and beautiful reefs.", author: "Elena, Italy" },
      { id: "test5", content: "A seamless experience from airport pickup to drop off. The deep sea fishing trip was the highlight!", author: "James, Australia" },
      
      // International Testimonials
      { 
        id: "test-de", 
        author: "Hans, Munich (Germany)", 
        content: "An unforgettable experience. The guide knew exactly where the animals were.",
        nativeContent: "Eine unvergessliche Erfahrung. Der Reiseführer wusste genau, wo die Tiere waren. Absolut empfehlenswert für jeden, der das echte Afrika sehen möchte.",
        language: "German"
      },
      { 
        id: "test-jp", 
        author: "Yuki, Tokyo (Japan)", 
        content: "It was a wonderful safari. I saw lions and elephants up close! Tom is very kind.",
        nativeContent: "素晴らしいサファリでした。ライオンと象を間近で見ることができました！トムさんはとても親切で、最高のガイドです。",
        language: "Japanese"
      },
      { 
        id: "test-it", 
        author: "Giulia, Rome (Italy)", 
        content: "Incredible organization. We felt safe and pampered the whole time. The food was excellent.",
        nativeContent: "Organizzazione incredibile. Ci siamo sentiti al sicuro e coccolati tutto il tempo. Il cibo era ottimo e i paesaggi mozzafiato.",
        language: "Italian"
      },
      { 
        id: "test-pl", 
        author: "Marek, Warsaw (Poland)", 
        content: "Great adventure! Professional service and beautiful views. I recommend it to everyone.",
        nativeContent: "Wspaniała przygoda! Profesjonalna obsługa i piękne widoki. Polecam każdemu, kto chce przeżyć coś wyjątkowego.",
        language: "Polish"
      },
      { 
        id: "test-se", 
        author: "Lars, Stockholm (Sweden)", 
        content: "Very professional and knowledgeable guide. We learned so much about nature.",
        nativeContent: "Mycket professionell och kunnig guide. Vi lärde oss så mycket om naturen. En resa vi aldrig kommer att glömma.",
        language: "Swedish"
      },
      { 
        id: "test-ru", 
        author: "Olga, Moscow (Russia)", 
        content: "We recommend Tom for safari. Everything was perfect, from the car to the hotel.",
        nativeContent: "Мы рекомендуем Тома для сафари. Все было идеально, от машины до отеля. Мы видели большую пятерку!",
        language: "Russian"
      }
    ],
  },
  about: {
    hero: {
      title: "Our Story",
      subtitle: "Passion for the Wild",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
    },
    philosophy: {
      content: "We believe in sustainable tourism that benefits both the traveler and the local community. Every safari with us supports conservation efforts.",
    },
    founder: {
      title: "Tom Madeda",
      subtitle: "Head Guide & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974", // Placeholder
      content: "With over 15 years in the industry, Tom, affectionately known as 'Cruse', started this company to offer more than just game drives. He wanted to offer connections with nature.",
    },
  },
  contact: {
    intro: {
      title: "Get in Touch",
      content: "Ready to start planning? We'd love to hear from you.",
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.206275728472!2d39.8436!3d-3.633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzcnNTguOCJTIDM5wrA1MCczNy4wIkU!5e0!3m2!1sen!2ske!4v1638888888888!5m2!1sen!2ske",
  },
  footer: {
    aboutText: "Tom Safaris is a premier tour operator based in Kilifi, Kenya, dedicated to showcasing the beauty of East Africa.",
    copyrightText: "All rights reserved.",
  },
  seo: {
    home: { title: "Tom Safaris | Best Kenya Safari Tours", description: "Book your dream Kenya safari with Tom Safaris. Tsavo, Amboseli, Maasai Mara and coastal excursions." },
    about: { title: "About Us | Tom Safaris", description: "Learn about Tom Madeda and our passion for African wildlife." },
    tours: { title: "Our Safari Packages | Tom Safaris", description: "Explore our wide range of safari itineraries and day trips." },
    contact: { title: "Contact Us | Tom Safaris", description: "Get a free quote for your next adventure." },
    blog: { title: "Safari Blog | Tom Safaris", description: "Tips and stories from the bush." },
  },
};
