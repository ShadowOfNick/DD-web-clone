import { ProjectDetail } from './model';

export interface ProjectDetailsFacadeInterface {
  getProjectDetailsPageData: (locale: string, slug: string) => Promise<ProjectDetail>;
};
