import { ContentfulClientApi } from 'contentful';
import { ContentfulFooter } from './contentful-model';
import { FooterFacadeInterface } from './footer-facade';
import { mapFooter } from './mapper';
import { FooterData } from './model';


export class ContentfulFooterFacade implements FooterFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getFooterData = async (locale: string): Promise<FooterData> => {
    const data = (await this.client.getEntries<ContentfulFooter>({
      content_type: 'footer',
      locale
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapFooter(data);
  };
};
