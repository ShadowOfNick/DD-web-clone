import { mapImageAssetSrc } from '../../core';
import { ContentfulDigitalAuditEntry } from '../contentful-model';
import { DigitalAuditData } from '../model';
import { mapDigitalAuditInfoCards } from './digital-audit-info-cards';

export const mapDigitalAudit = (item: ContentfulDigitalAuditEntry): DigitalAuditData => ({
  title: item.fields.title,
  mainImage: mapImageAssetSrc(item.fields.mainImage, {
    requestedWidth: 980,
    format: 'webp',
  }),
  description: item.fields.description,
  contentTop: item.fields.contentTop,
  infoCards: item.fields.infoCards ? mapDigitalAuditInfoCards(item.fields.infoCards) : null,
  sixStepsTitle: item.fields.sixStepsTitle || null,
  sixSteps: item.fields.sixSteps,
  contentBottom: item.fields.contentBottom,
});
