import { Entry } from 'contentful';
import { ContentfulFocusCardEntry } from './focus-card';

export interface ContentfulFocusSection {
  title: string;
  description?: string;
  focusCard: ContentfulFocusCardEntry[];
};

export interface ContentfulFocusSectionEntry extends Entry<ContentfulFocusSection> {};
