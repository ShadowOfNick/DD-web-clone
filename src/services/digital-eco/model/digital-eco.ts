import { Document } from '@contentful/rich-text-types';
import { QuoteProps } from './quote';

export interface DigitalEcoData {
  mainImage: string;
  title: string;
  description: string;
  contentTop: Document;
  contentBottom: Document;
  quote: QuoteProps;
};
