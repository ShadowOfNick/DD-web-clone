import { getDeliveryClient } from '../core';
import { ContentfulNavbarFacade } from './contentful-navbar-facade';
import { NavbarFacadeInterface } from './navbar-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getNavbarFacade = (): NavbarFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulNavbarFacade(client);
};
