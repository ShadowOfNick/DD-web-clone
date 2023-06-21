import { mapImageAssetSrc } from '../../core';
import { ContentfulQuoteEntry } from '../contentful-model';
import { QuoteProps } from '../model';

export const mapQuoteData = (item: ContentfulQuoteEntry): QuoteProps => ({
  author: item.fields.author,
  text: item.fields.text,
  image: mapImageAssetSrc(item.fields.image,{
    requestedWidth: 350,
    format: 'webp',
  }),
});
