
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
}

export interface Tour {
  id: string;
  name: string;
  durationDays: number;
  priceUsd: number;
  priceGbp: number;
  image: string;
  gallery?: string[];
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary: ItineraryDay[];
  featured: boolean;
  hidden?: boolean; // New property for Draft Mode
  category: 'Safari' | 'Coastal' | 'Trek' | 'Day Trip' | 'Honeymoon' | 'International' | 'Weekend';
  group: 'Excursion' | 'Road Safari' | 'Flight Safari' | 'Trek' | 'Custom' | 'International' | 'Getaway';
  keywords?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  tourId?: string;
  date: string;
  travelers: number;
  message: string;
}

export interface Inquiry extends InquiryForm {
  id: string;
  tourName?: string;
  status: 'New' | 'In Progress' | 'Closed';
  submittedAt: string;
}

export interface SEOData {
  title: string;
  description: string;
}

export interface PageSection {
  title?: string;
  subtitle?: string;
  image?: string;
  content?: string;
}

export interface TestimonialItem {
  id: string;
  content: string;
  author: string;
}

export interface PageContent {
  home: {
    hero: PageSection;
    welcome: PageSection;
    features: { id: string, title: string; text: string }[];
    testimonials: TestimonialItem[];
  };
  about: {
    hero: PageSection;
    philosophy: PageSection;
    founder: PageSection;
  };
  contact: {
    intro: PageSection;
    mapUrl: string;
  };
  footer: {
    aboutText: string;
    copyrightText: string;
  };
  seo: {
    home: SEOData;
    about: SEOData;
    tours: SEOData;
    contact: SEOData;
    blog: SEOData;
  };
}

export interface CompanyInfo {
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  location: string;
  slogan: string;
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  animationsEnabled: boolean;
}

export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}
