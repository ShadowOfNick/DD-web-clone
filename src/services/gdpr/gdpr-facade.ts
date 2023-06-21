import { GDPRPageData } from './model';

export interface GDPRFacadeInterface {
  getGDPRPageData: (locale: string) => Promise<GDPRPageData>;
};
