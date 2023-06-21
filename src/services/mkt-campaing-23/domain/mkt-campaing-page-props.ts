import { FooterData } from '../../footer';
import { NavbarItemFields } from '../../navbar';
import { MktCampaignDataProps } from '../model/mkt-campaing-23';

export interface MktCampaignPageProps {
  mktcampaignPage: MktCampaignDataProps;
  navbar: NavbarItemFields[];
  footer: FooterData;
};
