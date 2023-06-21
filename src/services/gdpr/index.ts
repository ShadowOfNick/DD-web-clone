// import { getDeliveryClient } from '../core';
// import { ContentfulGDPRFacade } from './contentful-gdpr-facade';
// import { GDPRFacadeInterface } from './gdpr-facade';

export * from './contentful-model';
export * from './domain';
export * from './mapper';
export * from './model';
export * from './contentful-gdpr-facade';

// export const getGDPRFacade = (): GDPRFacadeInterface => {
//   const client = getDeliveryClient();
//   return new ContentfulGDPRFacade(client);
// };
