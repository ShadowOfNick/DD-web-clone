import { ContentfulProjectSectionEntry } from '../contentful-model';
import { ProjectSectionFields } from '../model';

export const mapProjectSection = (item: ContentfulProjectSectionEntry): ProjectSectionFields => ({
  title: item.fields.title,
  description: item.fields.description,
});
