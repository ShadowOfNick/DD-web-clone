import { FocusCard } from './focus-card';

export interface FocusSectionFields {
  title: string;
  description: string | null;
  focusCards: FocusCard[];
};
