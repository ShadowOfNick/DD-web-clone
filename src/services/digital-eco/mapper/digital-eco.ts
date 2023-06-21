import { mapImageAssetSrc } from '../../core';
import { ContentfulDigitalEcoDataEntry } from '../contentful-model';
import { DigitalEcoData } from '../model';
import { mapQuoteData } from './quote';

export const mapDigitalEcoData = (item: ContentfulDigitalEcoDataEntry): DigitalEcoData => ({
  mainImage: mapImageAssetSrc(item.fields.mainImage),
  title: item.fields.title,
  description: item.fields.description,
  contentTop: item.fields.contentTop,
  contentBottom: item.fields.contentBottom,
  quote: mapQuoteData(item.fields.quote)
});
