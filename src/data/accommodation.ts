import type { Accommodation } from "@/types/tourism";

export const accommodation: Accommodation[] = [
  {
    id: "coastal-villa",
    name: "Azure Coast Villa",
    slug: "azure-coast-villa",
    location: "Diani",
    type: "Beach Resort",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "A warm, elegant seaside retreat designed for relaxed beach days and sunset dinners.",
    amenities: ["Infinity pool", "Spa", "Private dining", "Ocean view"],
    priceFrom: 320,
  },
  {
    id: "savannah-lodge",
    name: "Savannah Horizon Lodge",
    slug: "savannah-horizon-lodge",
    location: "Maasai Mara",
    type: "Safari Lodge",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    description: "A refined safari base with panoramic views, thoughtful service and classic bush comfort.",
    amenities: ["Game drive access", "Open-air deck", "Bar", "Laundry service"],
    priceFrom: 410,
  },
  {
    id: "harbor-boutique",
    name: "Harbor & Stone",
    slug: "harbor-and-stone",
    location: "Mombasa",
    type: "Boutique Hotel",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description: "A stylish city stay blending Swahili design, comfort and an easy central location.",
    amenities: ["Rooftop terrace", "Breakfast", "Airport shuttle", "Gym"],
    priceFrom: 250,
  },
  {
    id: "peak-terrace",
    name: "Peak Terrace Lodge",
    slug: "peak-terrace-lodge",
    location: "Mount Kenya",
    type: "Luxury Resort",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    description: "A scenic mountain stay featuring cool air, elevated views and restful outdoor spaces.",
    amenities: ["Fireplace lounge", "Guided treks", "Café", "Wellness deck"],
    priceFrom: 360,
  },
];
