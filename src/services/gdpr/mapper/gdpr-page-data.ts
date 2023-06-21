import { ContentfulGDPRPageDataEntry } from '../contentful-model';
import { GDPRPageData } from '../model';

export const mapGDPRPageData = (item: ContentfulGDPRPageDataEntry): GDPRPageData => ({
  title: item.fields.title,
  content: item.fields.content,
});
