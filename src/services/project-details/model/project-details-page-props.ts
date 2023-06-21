import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { ProjectDetail } from './project-detail';

export interface ProjectDetailsPageProps {
  projectDetailPage: ProjectDetail;
  relatedProjectsData: ProjectDetail[];
  navbar: NavbarItemFields[];
  footer: FooterData;
};
