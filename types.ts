import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: number;
  role: string;
  institution: string;
  period: string;
  description: string[];
  tag?: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  link: string;
  category: 'AI Tool' | 'Manajemen Sekolah' | 'Asesmen & CBT' | 'Web Edukasi';
  badge?: string;
  features?: string[];
  techStack?: string[];
  isHighlighted?: boolean;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  link: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
  description?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

export interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  isSpecial?: boolean;
  highlightText?: string;
}
