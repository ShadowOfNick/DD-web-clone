import { FooterData } from './model';

export interface FooterFacadeInterface {
  getFooterData: (locale: string) => Promise<FooterData>;
};
