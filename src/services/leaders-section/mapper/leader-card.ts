import { mapImageAssetSrc } from '../../core';
import { ContentfulPeopleCardEntry } from '../contentful-model';
import { LeaderCard } from '../model';
import { mapEmailRequest } from './email-request';

export const mapLeaderCard = (items: ContentfulPeopleCardEntry[]): LeaderCard[] => items.map((item) => ({
  name: item.fields.title,
  position: item.fields.subtitle,
  image: mapImageAssetSrc(item.fields.image, {
    requestedWidth: 240,
    format: 'webp',
  }),
  phone: item.fields.phoneNumber || null,
  email: item.fields.email || null,
  emailRequest: item.fields.emailRequest ? mapEmailRequest(item.fields.emailRequest) : null,
}));
