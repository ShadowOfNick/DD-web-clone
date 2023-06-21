import { getDeliveryClient } from '../core';
import { ContentfulDigitalAuditFacade } from './contentful-digital-audit-facade';
import { DigitalAuditFacadeInterface } from './digital-audit-facade';

export * from './contentful-model';
export * from './domain';
export * from './mapper';
export * from './model';

export const getDigitalAuditFacade = (): DigitalAuditFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulDigitalAuditFacade(client);
};
