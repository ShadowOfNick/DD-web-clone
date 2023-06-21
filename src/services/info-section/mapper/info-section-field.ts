import { ContentfulInfoSectionEntry } from '../contentful-model';
import { InfoSectionFields } from '../model';

export const mapInfoSection = (item: ContentfulInfoSectionEntry): InfoSectionFields => ({
  description: item.fields.description,
  quote: item.fields.quote || null,
  title: item.fields.title,
});
