import { mapImageAssetSrc } from '../../core';
import { ContentfulEventPageDataPropsEntry } from '../contentful-model';
import { EventPageDataProps } from '../model';
import { mapGalleryItems } from './gallery-items';
import { mapSchedule } from './schedule';

export const mapEventPageDataProps = (item: ContentfulEventPageDataPropsEntry): EventPageDataProps => ({
  bodyImage: item.fields.bodyImage,
  contentBottom: item.fields.contentBottom,
  contentTop: item.fields.contentTop,
  galleryItems: mapGalleryItems(item.fields.galleryItems),
  galleryTitle: item.fields.galleryTitle,
  mainImage: mapImageAssetSrc(item.fields.mainImage, {
    requestedWidth: 980,
    format: 'webp',
  }),
  title: item.fields.title,
  subtitle: item.fields.subtitle || null,
  schedule: item.fields.schedule ? mapSchedule(item.fields.schedule) : null,
  gallery: item.fields.gallery || null,
  linkForRegistration: item.fields.linkForRegistration || null,
});
