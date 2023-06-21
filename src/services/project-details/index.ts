import { getDeliveryClient } from '../core';
import { ContentfulRelatedProjectsFacade } from './contentful-related-projects-facade';
import { ContentfulProjectDetailsFacade } from './contetnful-project-details-facade';
import { ProjectDetailsFacadeInterface } from './project-details-facade';
import { RelatedProjectsFacadeInterface } from './related-projects-facade';

export * from './contentful-model';
export * from './mapper';
export * from './model';

export const getProjectDetailsFacade = (): ProjectDetailsFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulProjectDetailsFacade(client);
};

export const getRelatedProjectsFacade = (): RelatedProjectsFacadeInterface => {
  const client = getDeliveryClient();
  return new ContentfulRelatedProjectsFacade(client);
};
