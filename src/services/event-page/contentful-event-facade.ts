import { ContentfulClientApi } from 'contentful';
import { ContentfulEventPageDataProps } from './contentful-model';
import { EventFacadeInterface } from './event-facade';
import { mapEventPageDataProps } from './mapper';
import { EventPageDataProps } from './model';

export class ContentfulEventFacade implements EventFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getEventPageData = async (locale: string): Promise<EventPageDataProps> => {
    const data = (await this.client.getEntries<ContentfulEventPageDataProps>({
      content_type: 'eventPage',
      locale,
      include: 3,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapEventPageDataProps(data);
  };
};
