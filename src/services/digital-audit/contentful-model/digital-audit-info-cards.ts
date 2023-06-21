import { Document } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

export interface ContentfulInfoCards {
  title: string;
  description: Document;
};

export interface ContentfulInfoCardsEntry extends Entry<ContentfulInfoCards> {};
