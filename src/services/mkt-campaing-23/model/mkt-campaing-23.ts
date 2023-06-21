import { Document } from '@contentful/rich-text-types';

export interface MktCampaignDataProps {
  mainImage: string;
  title: string;
  description: string;
  contentTop: Document;
  contentBottom: Document | null;
  link: string;
  buttonText: string;
};
