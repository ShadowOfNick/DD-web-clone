import { MktCampaignDataProps } from './model';

export interface MktCampaign23FacadeInterface {
  getMktCampaign23PageData: (locale: string) => Promise<MktCampaignDataProps>;
};
