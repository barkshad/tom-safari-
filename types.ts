export interface Tour {
  id: string;
  name: string;
  durationDays: number;
  priceUsd: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  featured: boolean;
  category: 'Safari' | 'Coastal' | 'Trek' | 'Day Trip';
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