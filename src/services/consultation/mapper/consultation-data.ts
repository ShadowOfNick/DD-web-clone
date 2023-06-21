import { mapImageAssetSrc } from '../../core';
import { ContentfulConsultationEntry } from '../contentful-model';
import { ConsultationData } from '../model';
import { mapConsultationPeopleCard } from './consultation-people-card';

export const mapConsultation = (item: ContentfulConsultationEntry): ConsultationData => ({
  mainImage: mapImageAssetSrc(item.fields.mainImage, {
    requestedWidth: 980,
    format: 'webp',
  }),
  title: item.fields.title,
  description: item.fields.description,
  contentTop: item.fields.contentTop,
  contentBottom: item.fields.contentBottom || null,
  peopleCard: mapConsultationPeopleCard(item.fields.peopleCard),
});
