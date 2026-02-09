import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: number;
  role: string;
  institution: string;
  period: string;
  description: string[];
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
  category: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  link: string; // The preview link
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}