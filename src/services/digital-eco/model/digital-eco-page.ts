import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { DigitalEcoData } from './digital-eco';

export interface DigitalEcoPageProps {
  digitalEcoPage: DigitalEcoData;
  navbar: NavbarItemFields[];
  footer: FooterData;
};
