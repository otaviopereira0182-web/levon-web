export type ProjectCategory = 'todos' | 'institucional' | 'comercial' | 'landing-page' | 'servicos';

export interface PortfolioProject {
  id: string;
  title: string;
  segment: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  image: string;
  aspectRatio?: string;
  tags: string[];
  features: string[];
  colorPalette: { name: string; hex: string }[];
  primaryGoal: string;
  liveUrlMock?: string;
  isConceptual: true;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  targetAudience: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
  durationEstimate: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'hospedagem' | 'manutencao' | 'prazos';
}

export interface AgencyContactInfo {
  brandName: string;
  phoneDisplay: string;
  whatsappNumber: string; // digits only e.g. 5511999999999
  email: string;
  cnpj: string;
  address: string;
  hours: string;
  instagram: string;
  linkedin: string;
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  responded: boolean;
  updatedAt?: string;
}

export type LegalDocType = 'privacidade' | 'termos' | 'cookies' | 'reembolso';
