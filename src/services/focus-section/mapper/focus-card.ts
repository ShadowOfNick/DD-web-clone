import { mapImageAssetSrc } from '../../core';
import { ContentfulFocusCardEntry } from '../contentful-model';
import { FocusCard } from '../model';

export const mapFocusCard = (items: ContentfulFocusCardEntry[]): FocusCard[] => items.map((item) => ({
  title: item.fields.title,
  shortDescriptionItem: item.fields.shortDescriptionItem,
  iconUrl: mapImageAssetSrc(item.fields.icon),
}));
