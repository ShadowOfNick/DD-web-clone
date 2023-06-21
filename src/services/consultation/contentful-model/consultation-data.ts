import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { ContentfulConsultationPeopleCardEntry } from './consultation-people-card';

export interface ContentfulConsultation {
  mainImage: Asset;
  title: string;
  description: string;
  contentTop: Document;
  contentBottom?: Document;
  peopleCard: ContentfulConsultationPeopleCardEntry[];
};

export interface ContentfulConsultationEntry extends Entry<ContentfulConsultation> {};
