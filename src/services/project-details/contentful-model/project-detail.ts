import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface ContentfulProjectDetail {
  title: string;
  subtitle: string;
  slug: string;
  projectLead: string;
  projectDescription: Document;
  relatedArticlesTitle: string;
  image: Asset;
};

export interface ContentfulProjectDetailEntry extends Entry<ContentfulProjectDetail> {};
