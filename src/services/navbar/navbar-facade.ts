import { NavbarItemFields } from './model';

export interface NavbarFacadeInterface {
  getNavbarData: (locale: string) => Promise<NavbarItemFields[]>;
};
