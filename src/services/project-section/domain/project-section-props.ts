import { ProjectDetail } from '../../project-details';
import { ProjectSectionFields } from '../model';

export interface ProjectSectionProps extends ProjectSectionFields {
  projectDetailData: ProjectDetail[];
};
