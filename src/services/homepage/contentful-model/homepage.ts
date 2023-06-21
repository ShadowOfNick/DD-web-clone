import { Entry } from 'contentful';
import { ContentfulCareerSectionEntry } from '../../career-section';
import { ContentfulCarouselSlidesEntry } from '../../carousel';
import { ContentfulFocusSectionEntry } from '../../focus-section';
import { ContentfulInfoSectionEntry } from '../../info-section';
import { ContentfulPeopleSectionEntry } from '../../leaders-section';
import { ContentfulProjectSectionEntry } from '../../project-section';

export interface ContentfulHomePageFields {
  contactSectionTitle: string;
  contactSectionDescription: string;
  carouselSlides: ContentfulCarouselSlidesEntry[];
  infoSection: ContentfulInfoSectionEntry;
  focusSection: ContentfulFocusSectionEntry;
  careerSection: ContentfulCareerSectionEntry;
  peopleSection: ContentfulPeopleSectionEntry;
  projectSection: ContentfulProjectSectionEntry;
};

export interface ContentfulHomePageFieldsEntry extends Entry<ContentfulHomePageFields> {};
