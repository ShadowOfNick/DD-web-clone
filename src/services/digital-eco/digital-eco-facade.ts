import { DigitalEcoData } from './model';

export interface DigitalEcoFacadeInterface {
  getDigitalEcoPageData: (locale: string) => Promise<DigitalEcoData>;
};
