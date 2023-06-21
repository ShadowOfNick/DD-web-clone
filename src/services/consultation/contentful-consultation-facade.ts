import { ContentfulClientApi } from 'contentful';
import { ConsultationFacadeInterface } from './consultation-facade';
import { ContentfulConsultation } from './contentful-model';
import { mapConsultation } from './mapper';
import { ConsultationData } from './model';


export class ContentfulConsultationFacade implements ConsultationFacadeInterface {
  constructor(
    private readonly client: ContentfulClientApi,
  ) { }

  public getConsultationPageData = async (locale: string): Promise<ConsultationData> => {
    const data = (await this.client.getEntries<ContentfulConsultation>({
      content_type: 'consultationPage',
      locale,
      include: 4,
    })).items[0];

    if (!data) {
      // throw new NotFoundError('Missing page data');
    }

    return mapConsultation(data);
  };
};
