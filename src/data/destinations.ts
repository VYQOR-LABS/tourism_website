import type { Destination } from "@/types/tourism";

export const destinations: Destination[] = [
  {
    id: "mombasa",
    name: "Mombasa",
    slug: "mombasa",
    country: "Kenya",
    region: "Coast",
    description:
      "A sunlit coastal city where white-sand beaches, Swahili heritage and relaxed island energy meet.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    activities: ["Beach", "Culture", "Food", "History"],
    bestTime: "June to October",
    averageStay: "4-5 days",
    idealFor: ["Beach lovers", "Families", "Short escapes"],
    priceFrom: 420,
  },
  {
    id: "diani",
    name: "Diani",
    slug: "diani",
    country: "Kenya",
    region: "South Coast",
    description:
      "Long stretches of powdery shore, turquoise water and quiet luxury for restorative coastal escapes.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    activities: ["Beach club", "Snorkeling", "Sunset cruises", "Resorts"],
    bestTime: "June to March",
    averageStay: "3-6 days",
    idealFor: ["Couples", "Luxury travelers", "Relaxation"],
    priceFrom: 520,
  },
  {
    id: "watamu",
    name: "Watamu",
    slug: "watamu",
    country: "Kenya",
    region: "North Coast",
    description:
      "A laid-back, reef-rich coastline with calm waters, marine life and barefoot luxury experiences.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    activities: ["Diving", "Glass-bottom boat", "Beach walks", "Marine parks"],
    bestTime: "October to March",
    averageStay: "3-5 days",
    idealFor: ["Divers", "Families", "Ocean lovers"],
    priceFrom: 480,
  },
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    slug: "maasai-mara",
    country: "Kenya",
    region: "Southwest",
    description:
      "An iconic safari landscape known for sweeping plains, big cats and unforgettable golden-hour game drives.",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80",
    activities: ["Game drives", "Hot air balloon", "Wildlife", "Photography"],
    bestTime: "July to October",
    averageStay: "3-4 days",
    idealFor: ["Wildlife lovers", "Photographers", "Adventure"],
    priceFrom: 610,
  },
  {
    id: "amboseli",
    name: "Amboseli",
    slug: "amboseli",
    country: "Kenya",
    region: "South",
    description:
      "Elephants and mountain views frame this outstanding national park beneath the dramatic backdrop of Kilimanjaro.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    activities: ["Elephant tracking", "Sunrise safari", "Landscape photography"],
    bestTime: "June to October",
    averageStay: "2-3 days",
    idealFor: ["Wildlife", "Couples", "Scenic drives"],
    priceFrom: 540,
  },
  {
    id: "tsavo",
    name: "Tsavo",
    slug: "tsavo",
    country: "Kenya",
    region: "Southeast",
    description:
      "Remote, vast and dramatic, Tsavo offers a sense of true wilderness that feels wonderfully untouched.",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80",
    activities: ["Game drives", "Bush walks", "Birding", "Sunset views"],
    bestTime: "June to October",
    averageStay: "3-4 days",
    idealFor: ["Adventure seekers", "Wilderness travelers"],
    priceFrom: 565,
  },
  {
    id: "nairobi",
    name: "Nairobi",
    slug: "nairobi",
    country: "Kenya",
    region: "Central",
    description:
      "A lively capital that brings together culture, cuisine, local markets and easy access to iconic wildlife experiences.",
    image:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1200&q=80",
    activities: ["City tours", "Markets", "Dining", "Wildlife sanctuary"],
    bestTime: "Year-round",
    averageStay: "1-2 days",
    idealFor: ["Short stopovers", "Culture lovers"],
    priceFrom: 260,
  },
  {
    id: "mount-kenya",
    name: "Mount Kenya",
    slug: "mount-kenya",
    country: "Kenya",
    region: "Central Highlands",
    description:
      "Cool, rugged mountain terrain shaped by forests, alpine paths and unforgettable trekking adventures.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    activities: ["Hiking", "Nature walks", "Camping", "Scenic drives"],
    bestTime: "June to October",
    averageStay: "3-5 days",
    idealFor: ["Hikers", "Nature lovers", "Adventure groups"],
    priceFrom: 390,
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    slug: "zanzibar",
    country: "Tanzania",
    region: "Island",
    description:
      "An island of spice markets, ancient stone streets and beachside luxury just off the East African coast.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    activities: ["Beach stays", "Spice tours", "Boat rides", "Sunset dinners"],
    bestTime: "June to October",
    averageStay: "4-7 days",
    idealFor: ["Luxury escapes", "Couples", "Island lovers"],
    priceFrom: 550,
  },
  {
    id: "arusha",
    name: "Arusha",
    slug: "arusha",
    country: "Tanzania",
    region: "Northern Circuit",
    description:
      "A vibrant gateway to safari adventures, coffee country and exciting access to Tanzanian landscapes.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    activities: ["Wildlife", "Coffee tours", "Market visits", "Safari transfers"],
    bestTime: "June to October",
    averageStay: "2-4 days",
    idealFor: ["Safari starters", "Multi-destination travelers"],
    priceFrom: 430,
  },
];

export const featuredDestinations = destinations.slice(0, 6);
