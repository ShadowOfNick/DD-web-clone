import { ContentfulInfoCardsEntry } from '../contentful-model';
import { DigitalAuditInfoCards } from '../model';

export const mapDigitalAuditInfoCards = (items: ContentfulInfoCardsEntry[]): DigitalAuditInfoCards[] => items
.map((item) => ({
  title: item.fields.title,
  description: item.fields.description,
}));
