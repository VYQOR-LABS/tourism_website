export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  description: string;
  story: string[];
  image: string;
  imageAlt: string;
  imageCredit?: string;
  imageCreditUrl?: string;
  activities: string[];
  bestTime: string;
  averageStay: string;
  idealFor: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  destination: string;
  region: string;
  duration: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  category: string;
  featured?: boolean;
  summary: string;
  story: string[];
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  whatToBring: string[];
}

export interface Experience {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  blurb: string;
  countries: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  slug: string;
  country: string;
  location: string;
  type: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  imageCreditUrl?: string;
  description: string;
  startingRate?: string;
  rateSource?: string;
  amenities: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: "Safari" | "Beach" | "Culture" | "Adventure" | "Accommodation" | "Food" | "Nature";
  country: "Kenya" | "Tanzania" | "Rwanda" | "Uganda";
  image: string;
}

export interface Testimonial {
  id: string;
  title: string;
  name: string;
  date: string;
  quote: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  imageCreditUrl?: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
