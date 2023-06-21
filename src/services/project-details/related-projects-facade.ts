import { ProjectDetail } from './model';

export interface RelatedProjectsFacadeInterface {
  getRelatedProjectsPageData: (locale: string) => Promise<ProjectDetail[]>;
};
