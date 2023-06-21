import { Document } from '@contentful/rich-text-types';

export interface ScheduleItemProps {
  dateAndTime: string;
  label: string;
  description: Document;
};
