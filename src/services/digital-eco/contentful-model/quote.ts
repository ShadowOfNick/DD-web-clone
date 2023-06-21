import { Asset, Entry } from 'contentful';

export interface ContentfulQuote {
  author: string;
  text: string;
  image: Asset;
};

export interface ContentfulQuoteEntry extends Entry<ContentfulQuote> {};
