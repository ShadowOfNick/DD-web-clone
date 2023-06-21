import { ContentfulProjectDetailEntry } from '../contentful-model';
import { ProjectDetail } from '../model';
import { mapProjectDetailPage } from './project-details';

export const mapProjectDetail = (items: ContentfulProjectDetailEntry[]): ProjectDetail[]  => items
  .map((item) => mapProjectDetailPage(item));
