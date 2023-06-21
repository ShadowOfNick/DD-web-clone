import { mapImageAssetSrc } from '../../core';
import { ContentfulCarouselSlidesEntry } from '../contentful-model';
import { CarouselSlideFields } from '../model';

export const mapCarouselSlides = (items: ContentfulCarouselSlidesEntry[]): CarouselSlideFields[] => items
  .map((item) => ({
      title: item.fields.title,
      imageUrl: mapImageAssetSrc(item.fields.image, {
        requestedWidth: 640,
        format: 'webp',
        quality: 95,
      }),
      link: item.fields.link,
      description: item.fields.description || null,
    })
  );
