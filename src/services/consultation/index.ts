import { getDeliveryClient } from '../core';
import { ConsultationFacadeInterface } from './consultation-facade';
import { ContentfulConsultationFacade } from './contentful-consultation-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';
export * from './domain';

export const getConsultationFacade = (): ConsultationFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulConsultationFacade(client);
};
