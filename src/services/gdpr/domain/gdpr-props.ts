import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { GDPRPageData } from '../model';

export interface GDPRProps {
  gdprPage: GDPRPageData;
  navbar: NavbarItemFields[];
  footer: FooterData;
};
