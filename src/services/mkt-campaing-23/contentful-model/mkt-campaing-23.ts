import { Document } from '@contentful/rich-text-types';
import { Asset, Entry } from 'contentful';

export interface ContentfulMktCampaignDataProps {
  mainImage: Asset;
  title: string;
  description: string;
  contentTop: Document;
  contentBottom?: Document;
  link: string;
  buttonText: string;
};

export interface ContentfulMktCampaignDataPropsEntry extends Entry<ContentfulMktCampaignDataProps> {};
