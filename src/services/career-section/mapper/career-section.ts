import { mapImageAssetSrc } from '../../core';
import { ContentfulCareerSectionEntry } from '../contentful-model';
import { CareerSectionFields } from '../model';

export const mapCareerSection = (item: ContentfulCareerSectionEntry): CareerSectionFields => ({
  title: item.fields.title,
  subtitle: item.fields.subtitle || null,
  description: item.fields.description,
  positions: item.fields.positions,
  buttonTitle: item.fields.buttonTitle,
  buttonLink: item.fields.buttonLink,
  careerImage: mapImageAssetSrc(item.fields.careerImage, {
    requestedWidth: 550,
    format: 'webp',
  }),
});
