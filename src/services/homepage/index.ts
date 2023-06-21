import { getDeliveryClient } from '../core';
import { ContentfulHomepageFacade } from './contentful-homepage-facade';
import { HomepageFacadeInterface } from './homepage-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getHomepageFacade = (): HomepageFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulHomepageFacade(client);
};
