import { CarouselSlideFields } from '../../carousel';
import { InfoSectionFields } from '../../info-section';
import { FocusSectionFields } from '../../focus-section';
import { CareerSectionFields } from '../../career-section';
import { LeadersSectionFields } from '../../leaders-section';
import { ProjectSectionFields } from '../../project-section';

export interface HomePageFields {
  contactSectionTitle: string;
  contactSectionDescription: string;
  carouselSlides: CarouselSlideFields[];
  infoSection: InfoSectionFields;
  focusSection: FocusSectionFields;
  careerSection: CareerSectionFields;
  peopleSection: LeadersSectionFields;
  projectSection: ProjectSectionFields;
};
