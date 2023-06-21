import { mapCareerSection } from '../../career-section';
import { mapCarouselSlides } from '../../carousel';
import { mapFocusSection } from '../../focus-section';
import { mapInfoSection } from '../../info-section';
import { mapLeadersSection } from '../../leaders-section';
import { mapProjectSection } from '../../project-section';
import { ContentfulHomePageFieldsEntry } from '../contentful-model';
import { HomePageFields } from '../model';

export const mapHomePage = (items: ContentfulHomePageFieldsEntry): HomePageFields => ({
  contactSectionTitle: items.fields.contactSectionTitle,
  contactSectionDescription: items.fields.contactSectionDescription,
  careerSection: mapCareerSection(items.fields.careerSection),
  carouselSlides: mapCarouselSlides(items.fields.carouselSlides), 
  focusSection: mapFocusSection(items.fields.focusSection),
  infoSection: mapInfoSection(items.fields.infoSection),
  peopleSection: mapLeadersSection(items.fields.peopleSection),
  projectSection: mapProjectSection(items.fields.projectSection),
});
