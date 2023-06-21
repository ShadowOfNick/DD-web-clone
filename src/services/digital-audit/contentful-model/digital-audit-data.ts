import { Document } from '@contentful/rich-text-types';
import { Asset, Entry } from 'contentful';
import { ContentfulInfoCardsEntry } from './digital-audit-info-cards';

export interface ContentfulDigitalAudit {
  title: string;
  mainImage: Asset;
  description: string;
  contentTop: Document;
  infoCards?: ContentfulInfoCardsEntry[];
  sixStepsTitle?: string;
  sixSteps: string[];
  contentBottom: Document;
};

export interface ContentfulDigitalAuditEntry extends Entry<ContentfulDigitalAudit> {};
