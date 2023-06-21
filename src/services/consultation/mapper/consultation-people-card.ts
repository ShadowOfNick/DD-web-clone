import { mapImageAssetSrc } from '../../core';
import { ContentfulConsultationPeopleCardEntry } from '../contentful-model';
import { ConsultationPeopleCard } from '../model';
import { mapConsultationPeopleCardEmailRequest } from './email-request';

export const mapConsultationPeopleCard = (items: ContentfulConsultationPeopleCardEntry[]): ConsultationPeopleCard[] => items.map((item) => ({
  title: item.fields.title,
  subtitle: item.fields.subtitle,
  email: item.fields.email,
  image: mapImageAssetSrc(item.fields.image, {
    requestedWidth: 240, 
    format: 'webp',
  }),
  phone: item.fields.phone || null,
  description: item.fields.description,
  emailRequest: mapConsultationPeopleCardEmailRequest(item.fields.emailRequest),
}));
