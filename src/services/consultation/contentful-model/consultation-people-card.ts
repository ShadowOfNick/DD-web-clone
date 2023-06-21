import { Asset, Entry } from 'contentful';
import { ContentfulConsultationPeopleCardEmailRequestEntery } from './email-request';

interface ContentfulConsultationPeopleCard {
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  image: Asset;
  description: string;
  emailRequest: ContentfulConsultationPeopleCardEmailRequestEntery;
};

export interface ContentfulConsultationPeopleCardEntry extends Entry<ContentfulConsultationPeopleCard> {};
