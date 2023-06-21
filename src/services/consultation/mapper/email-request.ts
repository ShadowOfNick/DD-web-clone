import { ContentfulConsultationPeopleCardEmailRequestEntery } from '../contentful-model';
import { ConsultationPeopleCardEmailRequest } from '../model';

export const mapConsultationPeopleCardEmailRequest = (item: ContentfulConsultationPeopleCardEmailRequestEntery): ConsultationPeopleCardEmailRequest => ({
  emailTo: item.fields.emailTo,
  emailCc: item.fields.emailCc,
  subject: item.fields.subject,
});
