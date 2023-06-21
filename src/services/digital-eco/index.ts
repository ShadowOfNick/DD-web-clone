import { getDeliveryClient } from '../core';
import { ContentfulDigitalEcoFacade } from './contentful-digital-eco-facade';
import { DigitalEcoFacadeInterface } from './digital-eco-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getDigitalEcoFacade = (): DigitalEcoFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulDigitalEcoFacade(client);
};
