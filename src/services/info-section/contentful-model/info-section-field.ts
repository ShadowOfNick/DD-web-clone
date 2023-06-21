import { Entry } from 'contentful';

export interface ContentfulInfoSection {
  title: string; 
  description: string; 
  quote?: string;
};

export interface ContentfulInfoSectionEntry extends Entry<ContentfulInfoSection> {};
