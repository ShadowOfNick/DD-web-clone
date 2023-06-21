import { Document } from '@contentful/rich-text-types';
import { DigitalAuditInfoCards } from './digital-audit-info-cards';

export interface DigitalAuditData {
  title: string;
  description: string;
  contentTop: Document;
  contentBottom: Document;
  infoCards: DigitalAuditInfoCards[] | null;
  sixStepsTitle: string | null;
  sixSteps: string[];
  mainImage: string;
};
