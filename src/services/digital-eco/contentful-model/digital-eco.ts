import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { ContentfulQuoteEntry } from './quote';

export interface ContentfulDigitalEcoData {
  mainImage: Asset;
  title: string;
  description: string;
  contentTop: Document;
  contentBottom: Document;
  quote: ContentfulQuoteEntry;
};

export interface ContentfulDigitalEcoDataEntry extends Entry<ContentfulDigitalEcoData> {};
