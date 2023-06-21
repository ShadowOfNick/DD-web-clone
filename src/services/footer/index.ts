import { getDeliveryClient } from '../core';
import { ContentfulFooterFacade } from './contentful-footer-facade';
import { FooterFacadeInterface } from './footer-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getFooterFacade = (): FooterFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulFooterFacade(client);
};
