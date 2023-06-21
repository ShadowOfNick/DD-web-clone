import { DigitalAuditData } from './model';

export interface DigitalAuditFacadeInterface {
  getDigitalAuditPageData: (locale: string, slug: string) => Promise<DigitalAuditData>;
};
