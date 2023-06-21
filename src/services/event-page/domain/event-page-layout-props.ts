import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { EventPageDataProps } from '../model';

export interface EventPageLayoutProps {
  eventPage: EventPageDataProps;
  navbar: NavbarItemFields[];
  footer: FooterData;
};
