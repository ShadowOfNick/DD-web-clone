import { Document } from '@contentful/rich-text-types';
import { ConsultationPeopleCard } from './consultation-people-card';

export interface ConsultationData {
  mainImage: string;
  title: string;
  description: string;
  contentTop: Document;
  contentBottom: Document | null;
  peopleCard: ConsultationPeopleCard[];
};
