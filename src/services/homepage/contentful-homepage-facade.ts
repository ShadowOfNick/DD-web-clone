import { ContentfulClientApi } from 'contentful';
import { ContentfulHomePageFields } from './contentful-model';
import { HomepageFacadeInterface } from './homepage-facade';
import { mapHomePage } from './mapper';
import { HomePageFields } from './model';

export class ContentfulHomepageFacade implements HomepageFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getHomepagePageData = async (locale: string): Promise<HomePageFields> => {
    const data = (await this.client.getEntries<ContentfulHomePageFields>({
      content_type: 'homePage',
      locale,
      include: 2,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapHomePage(data);
  };
};

