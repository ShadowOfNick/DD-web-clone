import { Document } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

export interface ContentfulGDPRPageData {
  title: string;
  content: Document;
};

export interface ContentfulGDPRPageDataEntry extends Entry<ContentfulGDPRPageData> {};
