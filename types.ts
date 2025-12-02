
export interface Tour {
  id: string;
  name: string;
  durationDays: number;
  priceUsd: number;
  priceGbp: number; // Kept for legacy compatibility
  image: string;
  gallery?: string[];
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  featured: boolean;
  category: 'Safari' | 'Coastal' | 'Trek' | 'Day Trip';
  group: 'Excursion' | 'Road Safari' | 'Flight Safari' | 'Trek' | 'Custom';
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

export interface PageContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
  };
  about: {
    philosophy: string;
  };
}

export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  slogan: string;
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}
