import { ContentfulClientApi } from 'contentful';
import { ContentfulDigitalEcoData } from './contentful-model';
import { DigitalEcoFacadeInterface } from './digital-eco-facade';
import { mapDigitalEcoData } from './mapper';
import { DigitalEcoData } from './model';

export class ContentfulDigitalEcoFacade implements DigitalEcoFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getDigitalEcoPageData = async (locale: string): Promise<DigitalEcoData> => {
    const data = (await this.client.getEntries<ContentfulDigitalEcoData>({
      content_type: 'ecoPage',
      locale,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapDigitalEcoData(data);
  };
};
