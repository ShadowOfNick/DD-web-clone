import { Asset, Entry } from 'contentful';

export interface ContentfulFocusCard {
  title: string;
  shortDescriptionItem: string[]; 
  icon: Asset;
};

export interface ContentfulFocusCardEntry extends Entry<ContentfulFocusCard> {};
