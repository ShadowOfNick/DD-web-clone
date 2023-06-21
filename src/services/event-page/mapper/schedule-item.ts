import { ContentfulScheduleItemEntry } from '../contentful-model';
import { ScheduleItemProps } from '../model';

export const mapScheduleItem = (items: ContentfulScheduleItemEntry[]): ScheduleItemProps[] => items
.map((item: ContentfulScheduleItemEntry) => ({
  dateAndTime: item.fields.dateAndTime,
  label: item.fields.label,
  description: item.fields.description,
}));
