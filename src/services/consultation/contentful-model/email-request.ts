import { Entry } from 'contentful';

export interface ContentfulConsultationPeopleCardEmailRequest {
  emailTo: string;
  emailCc: string;
  subject: string;
};

export interface ContentfulConsultationPeopleCardEmailRequestEntery extends Entry<ContentfulConsultationPeopleCardEmailRequest> {};
