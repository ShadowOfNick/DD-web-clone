import { ContentfulEmailRequest } from '../contentful-model';
import { EmailRequestProps } from '../model';

export const mapEmailRequest = (item: ContentfulEmailRequest): EmailRequestProps => ({
  emailCc: item.emailCc || null,
  emailTo: item.emailTo || null,
  subject: item.subject || null,
});
