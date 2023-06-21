import { Entry } from 'contentful';

export interface ContentfulProjectSection {
  title: string;
  description: string;
};

export interface ContentfulProjectSectionEntry extends Entry<ContentfulProjectSection> {};
