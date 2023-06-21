import { ContentfulClientApi } from 'contentful';
import { getDeliveryClient } from '../core';
import { ContentfulProjectDetail } from './contentful-model';
import { mapProjectDetail } from './mapper';
import { ProjectDetail } from './model';
import { RelatedProjectsFacadeInterface } from './related-projects-facade';

export class ContentfulRelatedProjectsFacade implements RelatedProjectsFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getRelatedProjectsPageData = async (locale: string): Promise<ProjectDetail[]> => {
    const data = (await this.client.getEntries<ContentfulProjectDetail>({
      content_type: 'projectDetailPage',
      locale,
    })).items;

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapProjectDetail(data);
  };
};

export const getRelatedProjectsPageData2 = async (locale: string): Promise<ProjectDetail[]> => {
  return getProjects(locale);
}

export const getProjects = async (locale: string, slug?: string): Promise<ProjectDetail[]> => {
  const data = (await getDeliveryClient().getEntries<ContentfulProjectDetail>({
    content_type: 'projectDetailPage',
    locale,
    ...(slug && { slug }),
  })).items;

  if (!data) {
    // throw new NotFoundError('Missing page data');
  }

  return mapProjectDetail(data);
};