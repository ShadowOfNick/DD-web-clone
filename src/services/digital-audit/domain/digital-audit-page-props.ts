import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { DigitalAuditData } from '../model/digital-audit-data';

export interface DigitalAuditPageProps {
  digitalAuditPage: DigitalAuditData;
  navbar: NavbarItemFields[];
  footer: FooterData;
};
