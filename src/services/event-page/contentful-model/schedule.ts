import { Entry } from 'contentful';
import { ContentfulScheduleItemEntry } from './schedule-item';

export interface ContentfulSchedule {
  title: string;
  subtitle: string;
  scheduleItems: ContentfulScheduleItemEntry[];
};

export interface ContentfulScheduleEntry extends Entry<ContentfulSchedule> {};
