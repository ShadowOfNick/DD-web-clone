import { getDeliveryClient } from '../core';
import { ContentfulMktCampaign23Facade } from './contentful-mkt-campaign-23-facade';
import { MktCampaign23FacadeInterface } from './mkt-campaign-23-facade';

export * from './contentful-model';
export * from './domain'
export * from './mapper';
export * from './model';

export const getMktCampaign23Facade = (): MktCampaign23FacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulMktCampaign23Facade(client);
};
