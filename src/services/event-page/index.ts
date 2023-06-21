import { getDeliveryClient } from '../core';
import { ContentfulEventFacade } from './contentful-event-facade';
import { EventFacadeInterface } from './event-facade';

export * from './contentful-model';
export * from './domain'
export * from './mapper';
export * from './model';

export const getEventFacade = (): EventFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulEventFacade(client);
};
