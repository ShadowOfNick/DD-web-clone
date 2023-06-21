import { Document } from '@contentful/rich-text-types';
import { Entry } from 'contentful';

export interface ContentfulScheduleItem {
  dateAndTime: string;
  label: string;
  description: Document;
};

export interface ContentfulScheduleItemEntry extends Entry<ContentfulScheduleItem> {};
