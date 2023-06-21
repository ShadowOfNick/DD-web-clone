import { Document } from '@contentful/rich-text-types';
import { Asset, Entry } from 'contentful';
import { ContentfulScheduleEntry } from './schedule';

export interface ContentfulEventPageDataProps {
  bodyImage: Document;
  contentBottom: Document;
  contentTop: Document;
  galleryItems: Asset[];
  galleryTitle: string;
  mainImage: Asset;
  title: string;
  subtitle?: string;
  schedule?: ContentfulScheduleEntry;
  gallery?: Document;
  linkForRegistration?: string;
};

export interface ContentfulEventPageDataPropsEntry extends Entry<ContentfulEventPageDataProps> {};
