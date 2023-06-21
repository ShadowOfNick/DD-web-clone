import { ConsultationData } from './model';

export interface ConsultationFacadeInterface {
  getConsultationPageData: (locale: string) => Promise<ConsultationData>;
};
