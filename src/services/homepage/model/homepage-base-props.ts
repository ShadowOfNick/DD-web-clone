import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { ProjectDetail } from '../../project-details';
import { HomePageFields } from './homepage';

export interface HomePageBaseProps {
  homePage: HomePageFields;
  projectDetailPage: ProjectDetail[];
  navbar: NavbarItemFields[];
  footer: FooterData;
};
