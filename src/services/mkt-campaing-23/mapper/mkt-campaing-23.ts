import { mapImageAssetSrc } from '../../core';
import { ContentfulMktCampaignDataPropsEntry } from '../contentful-model';
import { MktCampaignDataProps } from '../model';

export const mapMktCampaing23 = (item: ContentfulMktCampaignDataPropsEntry): MktCampaignDataProps => ({
  mainImage: mapImageAssetSrc(item.fields.mainImage),
  title: item.fields.title,
  description: item.fields.description,
  contentTop: item.fields.contentTop,
  contentBottom: item.fields.contentBottom || null,
  link: item.fields.link,
  buttonText: item.fields.buttonText,
});
