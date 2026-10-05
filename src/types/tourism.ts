export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  description: string;
  image: string;
  activities: string[];
  bestTime: string;
  averageStay: string;
  idealFor: string[];
  priceFrom: number;
}

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  destination: string;
  region: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  category: string;
  rating: number;
  featured?: boolean;
  summary: string;
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
}

export interface Accommodation {
  id: string;
  name: string;
  slug: string;
  location: string;
  type: string;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
  priceFrom: number;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: "Safari" | "Beach" | "Culture" | "Adventure" | "Accommodation" | "Food" | "Nature";
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
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
