import { ContentfulScheduleEntry } from '../contentful-model';
import { ScheduleProps } from '../model';
import { mapScheduleItem } from './schedule-item';

export const mapSchedule = (item: ContentfulScheduleEntry): ScheduleProps => ({
  title: item.fields.title,
  subtitle: item.fields.subtitle,
  scheduleItems: mapScheduleItem(item.fields.scheduleItems),
});
