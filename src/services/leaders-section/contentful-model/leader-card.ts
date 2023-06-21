import { Asset, Entry } from 'contentful';
import { ContentfulEmailRequest } from './email-request';

export interface ContentfulPeopleCard { 
  title: string; 
  subtitle: string; 
  image: Asset;
  phoneNumber?: string;
  email?: string;
  emailRequest?: ContentfulEmailRequest;
};

export interface ContentfulPeopleCardEntry extends Entry<ContentfulPeopleCard> {};
