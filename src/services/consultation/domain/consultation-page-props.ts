import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { ConsultationData } from '../model/consultation-data';

export interface ConsultationPageProps {
  consultationPage: ConsultationData;
  navbar: NavbarItemFields[];
  footer: FooterData;
};
