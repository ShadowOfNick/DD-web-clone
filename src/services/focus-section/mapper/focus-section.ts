import { ContentfulFocusSectionEntry } from '../contentful-model';
import { FocusSectionFields } from '../model';
import { mapFocusCard } from './focus-card';

export const mapFocusSection = (item: ContentfulFocusSectionEntry): FocusSectionFields => ({
  title: item.fields.title,
  description: item.fields.description || null,
  focusCards: mapFocusCard(item.fields.focusCard),
});
