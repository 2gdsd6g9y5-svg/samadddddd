export type SupportedLanguage = 'it' | 'en' | 'fr' | 'ar' | 'ur';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears?: number;
  experienceLabel: string;
  languages: string[];
  bio: string;
  specialties: string[];
  isLegalCounsel?: boolean;
  legalNote?: string;
  initials: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  requiredDocs: string[];
  targetAudience: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredLanguage: string;
  message: string;
  urgency: 'normale' | 'urgente';
  privacyAccepted: boolean;
}
