import { ConsultationPeopleCardEmailRequest } from './email-request';

export interface ConsultationPeopleCard {
  title: string;
  subtitle: string;
  image: string;
  email: string;
  phone: string | null;
  description: string;
  emailRequest: ConsultationPeopleCardEmailRequest;
};
