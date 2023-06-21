import { ContentfulPeopleSectionEntry } from '../contentful-model';
import { LeadersSectionFields } from '../model';
import { mapLeaderCard } from './leader-card';

export const mapLeadersSection = (item: ContentfulPeopleSectionEntry): LeadersSectionFields => ({
  title: item.fields.title,
  description: item.fields.description,
  leadersData: mapLeaderCard(item.fields.peopleCard),
});
