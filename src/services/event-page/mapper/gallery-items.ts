import { Asset } from 'contentful';
import { mapImageAsset, mapImageAssetSrc } from '../../core';
import { GalleryItem } from '../domain/gallery-item';

export const mapGalleryItems = (items: Asset[]): GalleryItem[] => {
  return items.map((item: Asset) => {
    return {
      ...mapImageAsset(item, 500, 500, 'webp'),
      title: item.fields.title,
      modalSrc: mapImageAssetSrc(item, {
        requestedWidth: 1600,
        format: 'webp',
      }),
    };
  });
};
