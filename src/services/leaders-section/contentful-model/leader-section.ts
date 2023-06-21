import { Entry } from 'contentful';
import { ContentfulPeopleCardEntry } from './leader-card';

export interface ContentfulPeopleSection {
  title: string;
  description: string; 
  peopleCard: ContentfulPeopleCardEntry[];
};

export interface ContentfulPeopleSectionEntry extends Entry<ContentfulPeopleSection> {};
