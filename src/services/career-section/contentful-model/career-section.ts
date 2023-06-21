import { Asset, Entry } from 'contentful';

export interface ContentfulCareerSection {
  title: string;
  subtitle?: string;
  description: string;
  positions: string[];
  buttonLink: string;
  buttonTitle: string;
  careerImage: Asset; 
};

export interface ContentfulCareerSectionEntry extends Entry<ContentfulCareerSection> {};
