import { ContentfulClientApi } from 'contentful';
import { ContentfulProjectDetail } from './contentful-model';
import { getProjects } from './contentful-related-projects-facade';
import { mapProjectDetailPage } from './mapper';
import { ProjectDetail } from './model';
import { ProjectDetailsFacadeInterface } from './project-details-facade';

export class ContentfulProjectDetailsFacade implements ProjectDetailsFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getProjectDetailsPageData = async (locale: string, slug: string ): Promise<ProjectDetail> => {
    const data = (await this.client.getEntries<ContentfulProjectDetail>({
      content_type: 'projectDetailPage',
      'fields.slug': slug,
      locale,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapProjectDetailPage(data);
  };
};

// export const getProjectDetailsPageData2 = async (locale: string, slug: string): Promise<ProjectDetail> => {
//   return getProjects(locale, slug)[0];
// }